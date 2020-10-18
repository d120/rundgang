let floor = null;

function load(viewer, data) {
    let progressBox = document.getElementById('progress-box');
    let progressBar = document.getElementById('progress-bar');
    //let mapLink = document.getElementById('minimap');

    let start = data.start;

    // If we have a URL hash (e.g. `#road-front`), use that for the start
    if (window.location.hash) {
        let hash = window.location.hash.substr(1);
        let isValid = data.nodes.hasOwnProperty(hash);
        console.log(hash, isValid);
        if (isValid) {
            start = hash;
        }
    }

    // Initialize
    let todo = new Set();
    todo.add(start);
    var panoramas = {};

    while (todo.size > 0) {
        let next = new Set();

        for (const curr of todo) {
            let cdata = data.nodes[curr];

            //console.log(curr);
            // Load panorama
            let pano = new PANOLENS.ImagePanorama(`../media/pano/${cdata.src}`);
            Object.assign(pano.userData, {
                key: curr,
                plan: cdata.plan,
                loaded: false,
            });
            pano.setLinkingImage('img/green-up.png');
            pano.addEventListener('progress', onProgress);
            pano.addEventListener('error', onError);
            pano.addEventListener('load', onLoad);
            pano.addEventListener('enter', onEnter);
            pano.addEventListener('enter-complete', onEnterComplete);

            // Load outbound edges
            for (const [key, value] of Object.entries(cdata.edges)) {
                if (panoramas.hasOwnProperty(key)) {
                    //console.log("->", key);
                    let to = panoramas[key];
                    if (value.hasOwnProperty('i')) {
                        let image = `img/${value.i}.png`;
                        pano.link(to, new THREE.Vector3(value.x, value.y, value.z), 300, image);
                    } else {
                        pano.link(to, new THREE.Vector3(value.x, value.y, value.z));
                    }
                } else if (todo.has(key) == false) {
                    next.add(key);
                }
            }

            // Load inbound edges
            for (const [key, from] of Object.entries(panoramas)) {
                let node = data.nodes[key];
                if (node.edges.hasOwnProperty(curr)) {
                    //console.log("<-", key);
                    let value = node.edges[curr];
                    if (value.hasOwnProperty('i')) {
                        let image = `img/${value.i}.png`;
                        from.link(pano, new THREE.Vector3(value.x, value.y, value.z), 300, image);
                    } else {
                        from.link(pano, new THREE.Vector3(value.x, value.y, value.z));
                    }
                }
            }
            
            // Add panorama to dict
            panoramas[curr] = pano;
        }
        
        //console.log("done:", panoramas);
        todo = next;
    }
    
    // We need to do this last, because otherwise we may get "race conditions"
    // with setting visible in the link methods
    for (const pano of Object.values(panoramas)) {
        viewer.add(pano);
    }

    // called when entering a panorama
    function onEnter(evt) {
        console.log('enter:', evt.target.userData.key);
        let pdata = evt.target.userData;
        if (pdata.plan.hasOwnProperty('f')) {
            //mapLink.href = `plan.html#floor-${pdata.plan.f}`;
            floor = pdata.plan.f;
        }
        window.location.hash = `#${pdata.key}`;
        if (!pdata.loaded) {
            progressBar.style.width = '0%';
            progressBox.style.display = 'block';
        }
    }

    // called when loading an image makes progress
    function onProgress(evt) {
        let pct = evt.progress.loaded / evt.progress.total * 100;
        let newWidth = pct.toFixed(2) + "%";
        console.log('progress:', evt.target.userData.key, newWidth);
        progressBar.style.width = newWidth;
    }

    // called when loading an image is done
    function onLoad(evt) {
        let pdata = evt.target.userData;
        console.log('load:', evt.target.userData.key);
        progressBox.style.display = 'none';
        pdata.loaded = true;
    }
}

// Source: https://materialdesignicons.com/icon/map
const MAP_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB0klEQVRo3u2ZMWsUQRxH3yjoFVFRCxUEt1GSJo2VH8DaQoJaGAiIbTpFhGCpHyGtFlapVBDEKiksUh1JZ6HYCIErTBFQkmeREY7Dm7vx1uwtzIPtbn7ze3vcwfwHCoVCobWos+qKuqV21SdqVVP2VfWF+l1dr7N0pS6rGw5nW32sXszMPqkuqB/Ug/7ASUtf6St94PjsxzXL6vlE/pz6XN0ZFvQvpS+pj9TNjMIp9tQ19bbaUWfUB+qncRYP6xkSAt+AyxnO88C9+FQjPvsj7n1q3PAQwl+7pgSyvrb+DdTrwCJwB7iQkzMVAn0Zx4EbwH3gLnC6VQIDeR3gZpS5BZxolcBA9lmg11qBOvOP5YRMI0WgaYpA0xSBpikCTVMEmqYINE0RaJoi0DS1CcRjYnsFgJ04ElxUZ45KoLYz8QB7wFvgFfA+hPBr0vz/fqhP0APeAS+BjyEEp1FgF5DRg6svwOv4dDPyv4YQqqzXNubAdkNdioPaThzcrsVBbh1sxgFz1ph+lEBPXVXnE2vPxB/zG/VnZult9Zl6Lbt0QmA//sMsqFkjQfWc+tD03cKf0rMTlR7YeF39rD5Vc8bsqczKw2uorofXUiu1li4UCoUj5zeLlhNoBfOObwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0xOFQxNjoyODo1MCswMDowMKP/wEIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMThUMTY6Mjg6NTArMDA6MDDSonj+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
const INFO_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJklEQVRo3u2ZvU8UURTF7wC7JoCagJgQPgob7SwQkI8G/BsMRFtE/gOiCS3YIwFjr9FWpMTeSGKCDRI1IgFUKATUpfFnMa9Y7ryVeTNvd6LuSUi4MPfcc97MvI87IlVU8X8j8EEC1IpIj4gMiUiXiFwSkVYRaTSXHIrIloisiciKiCyLyMsgCH5l6h7oAO4Bm7jjEzADtGchvAV4ABwlEK5xBMwD5yol/gaw50G4xi4wWk7hOeDhHwTsA4+AW0C3uUs589MC9Jj/PTbXlsICkPMtvh5YKlFwC5gA6h35xoD1EpzPXfjijLxNfAGYAhpSck8aLo1FL3eixGOzDfR5GaGwRj+wY6kzn5b4poV0FejwJb6oVqfh1hhJStgMfFVkO+UQr0zoO7FHkimWcJ4vxk+Xx0YPo0PegOWdmHMV30F0kZpy5EhkwOTesUwY8Vdswu1BMbZcZ5uUBvLAO0UxEze5lujeZsJFQFoDJn9cUWwANXES+1TiPr4WFTcDDcCB0tKjr7M5GlLxYhAEPyptIAiC7yKypP48HMdAl4pfVFp8EZZP0GY1cFHFrzM0oGtrbVJnSWpV8YcklfWLGwRBktOfrq21We9Ao4r3kxjwhG8qPh3HwF8Fm4FDFZ/JUN9ZFR/EMbCt4gsZGtC1tTargTUVX87QgK6ttVkNvFLxsGSHaydoiwK46mMr4WEv1AgcKpruOIk1hE2nYoxlYEBv5j7G2syZ5BmVvI7jATvldvoU8F5RTLsQtBM90ExW0MBdlV4A2lw4hLDdp0n6y20AGLQM3qyTeEPUhP1Q3+lMFr+m7VC/S9K+KTBKFKvlMGHEv7HUu56WeMFCugMMeBQ/CHy21LnvgzxH2KvUKBB2D/IpuPPmhbW16Z8BdUm5daH6EiYg7B6M49C1IFykxolOlcXi/Z7DzZ2YpzQOgCfAbaAXOG9GOG9+7yXsYj8lusIee2y8jXwJIyNEZycf+ELaF9bBRDMwh70t7ooCMAs0VUS8MtJGuO3YSCB8A5jGdYVV8PWZtUZErki49e6SsHvQJsc/s26KyFsJt8TLIrKS+WfWKqr4B/AbewiI7s7vt/4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMThUMTY6NDU6NDcrMDA6MDC3ub+hAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTE4VDE2OjQ1OjQ3KzAwOjAwxuQHHQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";

function onMapTap() {
    if (floor !== null) {
        window.location.assign(`plan.html#floor-${floor}`);
    } else {
        window.location.assign("plan.html");
    }
}

function onInfoTap() {
    window.alert("Icons by Google, licensed under https://www.apache.org/licenses/LICENSE-2.0");
}

function setupRundgang(container) {
    const viewer = new PANOLENS.Viewer({
        container: container,
        horizontalView: false,
        cameraFov: 50,
        autoHideInfospot: false,
    });

    viewer.appendControlItem({
        style: { 
            backgroundImage: 'url("' + MAP_ICON + '")',
            webkitTransition: viewer.DEFAULT_TRANSITION,
            transition: viewer.DEFAULT_TRANSITION
        },
        onTap: onMapTap
    });
    viewer.appendControlItem({
        style: { 
            backgroundImage: 'url("' + INFO_ICON + '")',
            webkitTransition: viewer.DEFAULT_TRANSITION,
            transition: viewer.DEFAULT_TRANSITION
        },
        onTap: onInfoTap
    });

    window.panoViewer = viewer;

    fetch('../media/pano/data.json')
        .then(response => response.json())
        .then(data => load(viewer, data));
}

function onError(evt) {
    console.log('error:', {src: evt.target.src });
}

function onEnterComplete(evt) {
    console.log('enter-complete:', evt.target.userData.key);
}