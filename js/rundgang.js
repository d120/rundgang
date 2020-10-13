function load(viewer, data) {
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

            console.log(curr);
            // Load panorama
            let pano = new PANOLENS.ImagePanorama(`../media/pano/${cdata.src}`);
            pano.setLinkingImage('img/arrow-up-green.png');
            pano.addEventListener('progress', onProgress);
            pano.addEventListener('error', onError);
            pano.addEventListener('load', onLoad);

            // Load outbound edges
            for (const [key, value] of Object.entries(cdata.edges)) {
                if (panoramas.hasOwnProperty(key)) {
                    console.log("->", key);
                    let to = panoramas[key];
                    pano.link(to, new THREE.Vector3(value.x, value.y, value.z));
                } else if (todo.has(key) == false) {
                    next.add(key);
                }
            }

            // Load inbound edges
            for (const [key, from] of Object.entries(panoramas)) {
                let node = data.nodes[key];
                if (node.edges.hasOwnProperty(curr)) {
                    console.log("<-", key);
                    let value = node.edges[curr];
                    from.link(pano, new THREE.Vector3(value.x, value.y, value.z));
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

function onProgress(evt) {
    let pct = evt.progress.loaded / evt.progress.total * 100;
    console.log('progress:', {
        src: evt.target.src,
        pct: pct.toFixed(2)+"%",
    });
}

function onError(evt) {
    console.log('error:', {src: evt.target.src });
}

function onLoad(evt) {
    console.log('load:', {src: evt.target.src});
}