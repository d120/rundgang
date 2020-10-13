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

    function outer() {
        if (todo.length == 0) {
            return;
        }

        console.log("todo:", todo);
        let next = new Set();

        function inner() {
            if (todo.length == 0) {
                console.log("done:", panoramas);
                todo = Array.from(next.values());
                window.setTimeout(outer, 0);
                return;
            }

            let curr = todo.pop();
            console.log("curr:", curr);
            let cdata = data.nodes[curr];

            // Load panorama
            let pano = new PANOLENS.ImagePanorama(`../media/pano/${cdata.src}`);

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
            viewer.add(pano);
            window.setTimeout(inner, 20);
        }
        window.setTimeout(inner, 20);
    }
    window.setTimeout(outer, 0);
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