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
    let todo = [start];
    var panoramas = {};

    while (todo.length > 0) {

        let next = new Set();

        while (todo.length > 0) {
            let curr = todo.pop();
            let cdata = data.nodes[curr];

            // Load panorama
            let pano = new PANOLENS.ImagePanorama(`../media/pano/${cdata.src}`);
            //pano.addEventListener('progress', onProgress);
            //pano.addEventListener('error', onError);
            //pano.addEventListener('load', onLoad);

            // Load outbound edges
            for (const [key, value] of Object.entries(cdata.edges)) {
                if (panoramas.hasOwnProperty(key)) {
                    let to = panoramas[key];
                    pano.link(to, new THREE.Vector3(value.x, value.y, value.z));
                } else {
                    next.add(key);
                }
            }

            // Load inbound edges
            for (const [key, from] of Object.entries(panoramas)) {
                let node = data.nodes[key];
                if (node.edges.hasOwnProperty(curr)) {
                    let value = node.edges[curr];
                    from.link(pano, new THREE.Vector3(value.x, value.y, value.z));
                }
            }
            
            // Add panorama to dict
            panoramas[curr] = pano;
        }
        
        //console.log("done:", panoramas);
        todo = Array.from(next.values());
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

    fetch('../media/pano/data.json')
        .then(response => response.json())
        .then(data => load(viewer, data));
}

function onProgress(evt) {
    console.log('progress:', {event: evt, this: this});
}

function onError(evt) {
    console.log('error:', {event: evt, this: this});
}

function onLoad(evt) {
    console.log('load:', {event: evt, this: this});
}