(function () {
    // Source: https://materialdesignicons.com/icon/map
    const MAP_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB0klEQVRo3u2ZMWsUQRxH3yjoFVFRCxUEt1GSJo2VH8DaQoJaGAiIbTpFhGCpHyGtFlapVBDEKiksUh1JZ6HYCIErTBFQkmeREY7Dm7vx1uwtzIPtbn7ze3vcwfwHCoVCobWos+qKuqV21SdqVVP2VfWF+l1dr7N0pS6rGw5nW32sXszMPqkuqB/Ug/7ASUtf6St94PjsxzXL6vlE/pz6XN0ZFvQvpS+pj9TNjMIp9tQ19bbaUWfUB+qncRYP6xkSAt+AyxnO88C9+FQjPvsj7n1q3PAQwl+7pgSyvrb+DdTrwCJwB7iQkzMVAn0Zx4EbwH3gLnC6VQIDeR3gZpS5BZxolcBA9lmg11qBOvOP5YRMI0WgaYpA0xSBpikCTVMEmqYINE0RaJoi0DS1CcRjYnsFgJ04ElxUZ45KoLYz8QB7wFvgFfA+hPBr0vz/fqhP0APeAS+BjyEEp1FgF5DRg6svwOv4dDPyv4YQqqzXNubAdkNdioPaThzcrsVBbh1sxgFz1ph+lEBPXVXnE2vPxB/zG/VnZult9Zl6Lbt0QmA//sMsqFkjQfWc+tD03cKf0rMTlR7YeF39rD5Vc8bsqczKw2uorofXUiu1li4UCoUj5zeLlhNoBfOObwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0xOFQxNjoyODo1MCswMDowMKP/wEIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMThUMTY6Mjg6NTArMDA6MDDSonj+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
    const INFO_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJklEQVRo3u2ZvU8UURTF7wC7JoCagJgQPgob7SwQkI8G/BsMRFtE/gOiCS3YIwFjr9FWpMTeSGKCDRI1IgFUKATUpfFnMa9Y7ryVeTNvd6LuSUi4MPfcc97MvI87IlVU8X8j8EEC1IpIj4gMiUiXiFwSkVYRaTSXHIrIloisiciKiCyLyMsgCH5l6h7oAO4Bm7jjEzADtGchvAV4ABwlEK5xBMwD5yol/gaw50G4xi4wWk7hOeDhHwTsA4+AW0C3uUs589MC9Jj/PTbXlsICkPMtvh5YKlFwC5gA6h35xoD1EpzPXfjijLxNfAGYAhpSck8aLo1FL3eixGOzDfR5GaGwRj+wY6kzn5b4poV0FejwJb6oVqfh1hhJStgMfFVkO+UQr0zoO7FHkimWcJ4vxk+Xx0YPo0PegOWdmHMV30F0kZpy5EhkwOTesUwY8Vdswu1BMbZcZ5uUBvLAO0UxEze5lujeZsJFQFoDJn9cUWwANXES+1TiPr4WFTcDDcCB0tKjr7M5GlLxYhAEPyptIAiC7yKypP48HMdAl4pfVFp8EZZP0GY1cFHFrzM0oGtrbVJnSWpV8YcklfWLGwRBktOfrq21We9Ao4r3kxjwhG8qPh3HwF8Fm4FDFZ/JUN9ZFR/EMbCt4gsZGtC1tTargTUVX87QgK6ttVkNvFLxsGSHaydoiwK46mMr4WEv1AgcKpruOIk1hE2nYoxlYEBv5j7G2syZ5BmVvI7jATvldvoU8F5RTLsQtBM90ExW0MBdlV4A2lw4hLDdp0n6y20AGLQM3qyTeEPUhP1Q3+lMFr+m7VC/S9K+KTBKFKvlMGHEv7HUu56WeMFCugMMeBQ/CHy21LnvgzxH2KvUKBB2D/IpuPPmhbW16Z8BdUm5daH6EiYg7B6M49C1IFykxolOlcXi/Z7DzZ2YpzQOgCfAbaAXOG9GOG9+7yXsYj8lusIee2y8jXwJIyNEZycf+ELaF9bBRDMwh70t7ooCMAs0VUS8MtJGuO3YSCB8A5jGdYVV8PWZtUZErki49e6SsHvQJsc/s26KyFsJt8TLIrKS+WfWKqr4B/AbewiI7s7vt/4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMThUMTY6NDU6NDcrMDA6MDC3ub+hAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTE4VDE2OjQ1OjQ3KzAwOjAwxuQHHQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";

    const TEXT_STYLE = new PIXI.TextStyle({
        fontSize: 50,
        fill: '#FFFFFF',
    });

    function Floor(fdata, outlines, labelPos, metrics) {
        // Mesh of links
        this.mesh = new PIXI.Graphics();
        this.mesh.lineStyle(2, 0x00ff00, 1);
        this.mesh.x = metrics.mLeft;
        this.mesh.y = metrics.mTop;
        this.mesh.visible = false;

        this.labels = {};
        for (const [lkey, ltext] of Object.entries(fdata.labels)) {
            const text = new PIXI.Text(ltext, TEXT_STYLE);
            text.x = metrics.mLeft + labelPos[lkey].x;
            text.y = metrics.mTop + labelPos[lkey].y;
            text.visible = false;
            this.labels[lkey] = text;
        }

        // Outlines of the building
        this.outlines = fdata.outlines.map(x => new PIXI.Polygon(outlines[x]));

        // Nodes
        this.nodes = {};
    }

    Floor.prototype = Object.assign(Object.create(Object.prototype), {
        link(point, target) {
            this.mesh.moveTo(point.x, point.y);
            this.mesh.lineTo(target.x, target.y);
        },
        setVisible(flag) {
            for (const dot of Object.values(this.nodes)) {
                dot.visible = flag;
            }
            for (const label of Object.values(this.labels)) {
                label.visible = flag;
            }
            this.mesh.visible = flag;
            if (flag) {
                this.btn.classList.add('active');
            } else {
                this.btn.classList.remove('active');
            }
        }
    });

    function Karte(options = {}) {
        PIXI.utils.EventEmitter.call(this);
        this.floor = null;
    }

    Karte.prototype = Object.assign(Object.create(PIXI.utils.EventEmitter.prototype), {
        constructor: Karte,
        load: function(data) {
            let footer = document.getElementById('modal-map-footer');
            this.contentDiv = document.getElementById('modal-map-content');

            this.metrics = {
                mLeft: data.plan.mleft || 0,
                mRight: data.plan.mright || 0,
                mTop: data.plan.mtop || 0,
                mBottom: data.plan.mbottom || 0,
                width: data.plan.width || 1000,
                height: data.plan.height || 600,
            };
            this.metrics.totalWidth = this.metrics.mLeft + this.metrics.width + this.metrics.mRight;
            this.metrics.totalHeight = this.metrics.mTop + this.metrics.height + this.metrics.mBottom;

            let view = document.createElement('canvas');
            this.contentDiv.appendChild(view);

            // Load the container
            const app = new PIXI.Application({
                antialias: true,
                transparent: true,
                view: view,
                resizeTo: this.contentDiv,
                autoStart: false,
            });

            app.resize();

            let container = new PIXI.Container();
            const outline = new PIXI.Graphics();
            outline.x = this.metrics.mLeft;
            outline.y = this.metrics.mTop;
            container.addChild(outline);
            app.stage.addChild(container);
            const blurFilter1 = new PIXI.filters.BlurFilter();
            blurFilter1.blur = 3;
            outline.filters = [blurFilter1];
            this.outline = outline;

            const blurFilter2 = new PIXI.filters.BlurFilter();
            blurFilter2.blur = 2;

            // Start the floors
            this.floors = [];
            for (let fdata of data.floors) {
                let floor = new Floor(fdata, data.outlines, data.labelPos, this.metrics);
                floor.mesh.filters = [blurFilter2];
                container.addChild(floor.mesh);
                for (label of Object.values(floor.labels)) {
                    label.filters = [blurFilter2];
                    container.addChild(label);
                }

                // Add to the floors stack
                this.floors.push(floor);
            }
            this.elevators = {};

            // Load the nodes
            for (let [key, value] of Object.entries(data.nodes)) {
                if (value.hasOwnProperty('plan')) {
                    let point = value.plan;
                    let dot = new PIXI.Graphics();
                    dot.x = this.metrics.mLeft;
                    dot.y = this.metrics.mTop;
                    dot.filters = [blurFilter1];
                    dot.beginFill(0x00ff00);
                    dot.drawCircle(point.x, point.y, 8);
                    dot.endFill();
                    dot.key = key;
                    dot.meta = point;
                    dot.interactive = true;
                    dot.on('pointerover', e => {
                        dot.clear();
                        dot.beginFill(0x00ff00);
                        dot.drawCircle(point.x, point.y, 14);
                        dot.endFill();
                    });
                    dot.on('pointerout', e => {
                        dot.clear();
                        dot.beginFill(0x00ff00);
                        dot.drawCircle(point.x, point.y, 8);
                        dot.endFill();
                    });
                    dot.on('pointerdown', x => {
                        this.emit('setPanorama', { key: key });
                    });

                    for (let f = 0; f < this.floors.length; f++) {
                        if (point.hasOwnProperty('f') && point.f != f) {
                            // Not an elevator and not on this floor
                            continue;
                        }
                        let floor = this.floors[f];
                        let map = {};
                        Object.assign(map, this.elevators);
                        Object.assign(map, floor.nodes);
                        for (let next of Object.keys(value.edges)) {
                            if (map.hasOwnProperty(next)) {
                                floor.link(point, map[next].meta);
                            }
                        }
                    }

                    if (point.hasOwnProperty('f')) {
                        dot.visible = false;
                        let floor = this.floors[point.f];
                        floor.nodes[key] = dot;
                    } else {
                        this.elevators[key] = dot;
                    }
                    container.addChild(dot);
                }
            }

            // Load the buttons
            let f = 0;
            for (let fdata of data.floors) {
                let btn = document.createElement('button');
                btn.id = `mark-${f}`;
                btn.classList.add('modal__btn');
                btn.classList.add('modal__btn-floor');
                const fc = f;
                btn.addEventListener('click', e => {
                    this.setFloor(fc);
                });
                let btnText = document.createTextNode(f);
                btn.appendChild(btnText);
                if (f > 0) {
                    let space = document.createTextNode(" ");
                    footer.appendChild(space);
                }
                footer.appendChild(btn);
                this.floors[f].btn = btn;
                f += 1;
            }

            window.addEventListener('resize', this.handleResize.bind(this));

            this.outlines = {};
            if (data.hasOwnProperty('outlines')) {
                for (const [name, vertices] of Object.entries(data.outlines)) {
                    this.outlines[name] = new PIXI.Polygon(vertices);
                }
            }

            this.data = data;
            this.pixiApp = app;
            this.container = container;
        },
        drawOutline(floor) {
            this.outline.clear();
            this.outline.lineStyle(4, 0x00ff00, 1);
            let fdata = this.data.floors[floor];
            let odata = fdata.outlines.map(x => this.outlines[x]);
            for (const poly of odata) {
                this.outline.drawPolygon(poly);
            }
        },
        setFloor(f) {
            console.log("setFloor", f, this.floor);
            if (this.floor !== f) {
                if (this.floor !== null) {
                    this.floors[this.floor].setVisible(false);
                }
                this.floor = f;
                this.floors[this.floor].setVisible(true);
            }
            this.drawOutline(f);
        },
        show(event) {
            this.handleResize();
            this.pixiApp.resize();
            this.pixiApp.start();
            if (this.floor === null) {
                this.setFloor(1);
            }
        },
        handleResize(event) {
            let width = this.contentDiv.offsetWidth;
            let height = this.contentDiv.offsetHeight;
            //console.log(width, height);
            
            // Check the scale for horizontal display
            let scaleHX = width / this.metrics.totalWidth;
            let scaleHY = height / this.metrics.totalHeight;
            let scaleH = Math.min(scaleHX, scaleHY);

            // Check the scale for horizontal display
            let scaleVX = width / this.metrics.totalHeight;
            let scaleVY = height / this.metrics.totalWidth;
            let scaleV = Math.min(scaleVX, scaleVY);

            let scale = 1;
            if (scaleV > scaleH) {
                //console.log("vertical:", scaleV);
                let realHeight = this.metrics.totalWidth * scaleV;
                let realWidth = this.metrics.totalHeight * scaleV;
                let top = (height - realHeight) / 2;
                let left = (width - realWidth) / 2;

                this.container.scale.set(scaleV, scaleV);
                this.container.angle = -90;
                this.container.x = left;
                this.container.y = height + top;
            } else {
                //console.log("horizontal:", scaleH);
                let realHeight = this.metrics.totalHeight * scaleH;
                let realWidth = this.metrics.totalWidth * scaleH;
                let top = (height - realHeight) / 2;
                let left = (width - realWidth) / 2;

                this.container.scale.set(scaleH, scaleH);
                this.container.angle = 0;
                this.container.x = left;
                this.container.y = top;
            }
        }
    });

    console.log("Foo");

    function load(viewer, map, data) {
        map.load(data);

        let progressBox = document.getElementById('progress-box');
        let progressBar = document.getElementById('progress-bar');

        let start = data.start;

        // If we have a URL hash (e.g. `#road-front`), use that for the start
        if (window.location.hash) {
            let hash = window.location.hash.substr(1);
            let isValid = data.nodes.hasOwnProperty(hash);
            //console.log(hash, isValid);
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
                map.setFloor(pdata.plan.f);
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

        map.on('setPanorama', e => {
            MicroModal.close('modal-map');
            viewer.setPanorama(panoramas[e.key]);
        });
    }

    function setupRundgang(container) {
        const panoViewer = new PANOLENS.Viewer({
            container: container,
            horizontalView: false,
            cameraFov: 50,
            autoHideInfospot: false,
        });
        const map = new Karte({});

        // Prepare button styles
        const baseStyle = { 
            webkitTransition: viewer.DEFAULT_TRANSITION,
            transition: viewer.DEFAULT_TRANSITION
        };

        // Load the map button
        panoViewer.appendControlItem({
            style: Object.assign({
                backgroundImage: 'url("' + MAP_ICON + '")',
            }, baseStyle),
            onTap: () => {
                MicroModal.show('modal-map');
                map.show();
            },
        });
        // Load the info button
        panoViewer.appendControlItem({
            style: Object.assign({
                backgroundImage: 'url("' + INFO_ICON + '")',
            }, baseStyle),
            onTap: () => {
                MicroModal.show('modal-info');
            },
        });

        window.panoViewer = panoViewer;

        fetch('../media/pano/data.json')
            .then(response => response.json())
            .then(data => load(panoViewer, map, data));
    }

    function onError(evt) {
        console.log('error:', {src: evt.target.src });
    }

    function onEnterComplete(evt) {
        console.log('enter-complete:', evt.target.userData.key);
    }

    console.log("FOO");
    window.RUNDGANG = {
        Karte: Karte,
        Floor: Floor,
        setup: setupRundgang,
    };
})();