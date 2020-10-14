let floor = 0;

function load(viewer, data) {
    let progressBox = document.getElementById('progress-box');
    let progressBar = document.getElementById('progress-bar');

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

function setupRundgang(container) {
    const viewer = new PANOLENS.Viewer({
        container: container,
        horizontalView: false,
        cameraFov: 50,
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