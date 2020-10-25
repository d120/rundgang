(function () {
    // Source: https://materialdesignicons.com/icon/map
    const MAP_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB0klEQVRo3u2ZMWsUQRxH3yjoFVFRCxUEt1GSJo2VH8DaQoJaGAiIbTpFhGCpHyGtFlapVBDEKiksUh1JZ6HYCIErTBFQkmeREY7Dm7vx1uwtzIPtbn7ze3vcwfwHCoVCobWos+qKuqV21SdqVVP2VfWF+l1dr7N0pS6rGw5nW32sXszMPqkuqB/Ug/7ASUtf6St94PjsxzXL6vlE/pz6XN0ZFvQvpS+pj9TNjMIp9tQ19bbaUWfUB+qncRYP6xkSAt+AyxnO88C9+FQjPvsj7n1q3PAQwl+7pgSyvrb+DdTrwCJwB7iQkzMVAn0Zx4EbwH3gLnC6VQIDeR3gZpS5BZxolcBA9lmg11qBOvOP5YRMI0WgaYpA0xSBpikCTVMEmqYINE0RaJoi0DS1CcRjYnsFgJ04ElxUZ45KoLYz8QB7wFvgFfA+hPBr0vz/fqhP0APeAS+BjyEEp1FgF5DRg6svwOv4dDPyv4YQqqzXNubAdkNdioPaThzcrsVBbh1sxgFz1ph+lEBPXVXnE2vPxB/zG/VnZult9Zl6Lbt0QmA//sMsqFkjQfWc+tD03cKf0rMTlR7YeF39rD5Vc8bsqczKw2uorofXUiu1li4UCoUj5zeLlhNoBfOObwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0xOFQxNjoyODo1MCswMDowMKP/wEIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMThUMTY6Mjg6NTArMDA6MDDSonj+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
    const INFO_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJklEQVRo3u2ZvU8UURTF7wC7JoCagJgQPgob7SwQkI8G/BsMRFtE/gOiCS3YIwFjr9FWpMTeSGKCDRI1IgFUKATUpfFnMa9Y7ryVeTNvd6LuSUi4MPfcc97MvI87IlVU8X8j8EEC1IpIj4gMiUiXiFwSkVYRaTSXHIrIloisiciKiCyLyMsgCH5l6h7oAO4Bm7jjEzADtGchvAV4ABwlEK5xBMwD5yol/gaw50G4xi4wWk7hOeDhHwTsA4+AW0C3uUs589MC9Jj/PTbXlsICkPMtvh5YKlFwC5gA6h35xoD1EpzPXfjijLxNfAGYAhpSck8aLo1FL3eixGOzDfR5GaGwRj+wY6kzn5b4poV0FejwJb6oVqfh1hhJStgMfFVkO+UQr0zoO7FHkimWcJ4vxk+Xx0YPo0PegOWdmHMV30F0kZpy5EhkwOTesUwY8Vdswu1BMbZcZ5uUBvLAO0UxEze5lujeZsJFQFoDJn9cUWwANXES+1TiPr4WFTcDDcCB0tKjr7M5GlLxYhAEPyptIAiC7yKypP48HMdAl4pfVFp8EZZP0GY1cFHFrzM0oGtrbVJnSWpV8YcklfWLGwRBktOfrq21We9Ao4r3kxjwhG8qPh3HwF8Fm4FDFZ/JUN9ZFR/EMbCt4gsZGtC1tTargTUVX87QgK6ttVkNvFLxsGSHaydoiwK46mMr4WEv1AgcKpruOIk1hE2nYoxlYEBv5j7G2syZ5BmVvI7jATvldvoU8F5RTLsQtBM90ExW0MBdlV4A2lw4hLDdp0n6y20AGLQM3qyTeEPUhP1Q3+lMFr+m7VC/S9K+KTBKFKvlMGHEv7HUu56WeMFCugMMeBQ/CHy21LnvgzxH2KvUKBB2D/IpuPPmhbW16Z8BdUm5daH6EiYg7B6M49C1IFykxolOlcXi/Z7DzZ2YpzQOgCfAbaAXOG9GOG9+7yXsYj8lusIee2y8jXwJIyNEZycf+ELaF9bBRDMwh70t7ooCMAs0VUS8MtJGuO3YSCB8A5jGdYVV8PWZtUZErki49e6SsHvQJsc/s26KyFsJt8TLIrKS+WfWKqr4B/AbewiI7s7vt/4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMThUMTY6NDU6NDcrMDA6MDC3ub+hAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTE4VDE2OjQ1OjQ3KzAwOjAwxuQHHQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
    const EventEmitter = PIXI.utils.EventEmitter;

    // ------ TODO ------

    function StartData(options = {}) {
        if (typeof options === 'string' || options instanceof String) {
            this.pano = options;
            this.angleLeft = 0;
            this.angleUp = 0;
        } else {
            this.pano = options.pano !== undefined ? options.pano: 1000;
            this.angleUp = options.angleUp !== undefined ? options.angleUp: 1000;
            this.angleLeft = options.angleLeft !== undefined ? options.angleLeft: 1000;
        }
    }

    StartData.prototype = Object.assign(Object.create(Object.prototype), {
        constructor: StartData,
    });

    //! The data for a plan
    function PlanData(options = {}) {
        this.width = options.width !== undefined ? options.width : 1000;
        this.height = options.height !== undefined ? options.height : 400;
        this.mTop = options.mTop !== undefined ? options.mTop : 50;
        this.mRight = options.mRight !== undefined ? options.mRight : 50;
        this.mBottom = options.mBottom !== undefined ? options.mBottom : 50;
        this.mLeft = options.mLeft !== undefined ? options.mLeft : 50;
    }

    PlanData.prototype = Object.assign(Object.create(Object.prototype), {
        constructor: PlanData,
    });

    //! The data that defines a rundgang
    function Data(options = {}) {
        this.start = options.start !== undefined ? options.start : null;
    }

    Data.prototype = Object.assign(Object.create(Object.prototype), {
        constructor: Data,
    })

    // ---- END TODO ----

    function Plugin(options = {}) {
        EventEmitter.call(this);
    }

    Plugin.prototype = Object.assign(Object.create(EventEmitter.prototype), {
        constructor: Plugin,
        attach(viewer) {},
        load(data) {},
    });

    const TEXT_STYLE = new PIXI.TextStyle({
        fontSize: 50,
        fill: '#FFFFFF',
    });

    function Floor(fdata, outlines, labelPos, metrics) {
        // Mesh of links
        this.mesh = new PIXI.Graphics();
        this.mesh.lineStyle(5, 0x00ff00, 0.7);
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

    function MapPlugin(options = {}) {
        Plugin.call(this);
        this.floor = null;
    }

    MapPlugin.prototype = Object.assign(Object.create(Plugin.prototype), {
        name: "map",
        constructor: MapPlugin,
        attach(viewer) {
            // Add a listener
            viewer.addEventListener('pano-enter', this.onEnter.bind(this));
            // Load the map button
            viewer.appendControlItem({
                style: {
                    backgroundImage: 'url("' + MAP_ICON + '")',
                    transition: viewer.DEFAULT_TRANSITION,
                    webkitTransition: viewer.DEFAULT_TRANSITION,
                },
                onTap: () => {
                    MicroModal.show('modal-map');
                    this.show();
                },
            });
            // Hook up map selection
            this.on('setPanorama', e => {
                MicroModal.close('modal-map');
                viewer.setPanorama(viewer.panoramas[e.key]);
            });
        },
        load(data) {
            let footer = document.getElementById('modal-map-footer');
            this.contentDiv = document.getElementById('modal-map-content');

            this.metrics = {
                mLeft: data.plan.mLeft || 0,
                mRight: data.plan.mRight || 0,
                mTop: data.plan.mTop || 0,
                mBottom: data.plan.mBottom || 0,
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
            //outline.filters = [blurFilter1];
            this.outline = outline;

            const blurFilter2 = new PIXI.filters.BlurFilter();
            blurFilter2.blur = 2;

            // Start the floors
            this.floors = [];
            for (let fdata of data.floors) {
                let floor = new Floor(fdata, data.outlines, data.labelPos, this.metrics);
                //floor.mesh.filters = [blurFilter2];
                container.addChild(floor.mesh);
                for (label of Object.values(floor.labels)) {
                    //label.filters = [blurFilter2];
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
                    //dot.filters = [blurFilter1];
                    dot.beginFill(0x00ff00, 0.5);
                    dot.drawCircle(point.x, point.y, 15);
                    dot.endFill();
                    dot.key = key;
                    dot.meta = point;
                    dot.interactive = true;
                    dot.on('pointerover', e => {
                        dot.beginFill(0x000000);
                        dot.drawCircle(point.x, point.y, 10);
                        dot.endFill();
                    });
                    dot.on('pointerout', e => {
                        dot.clear();
                        dot.beginFill(0x00ff00, 0.5);
                        dot.drawCircle(point.x, point.y, 15);
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
            this.outline.lineStyle(5, 0x00ff00, 1);
            let fdata = this.data.floors[floor];
            let odata = fdata.outlines.map(x => this.outlines[x]);
            for (const poly of odata) {
                this.outline.drawPolygon(poly);
            }
        },
        setFloor(f) {
            if (this.floor !== f) {
                console.log("setFloor:", this.floor, "->", f);
                if (this.floor !== null) {
                    this.floors[this.floor].setVisible(false);
                }
                this.floor = f;
                this.floors[this.floor].setVisible(true);
            }
            this.drawOutline(f);
        },
        onEnter(event) {
            let pdata = event.pano.userData;
            if (pdata.plan.hasOwnProperty('f')) {
                this.setFloor(pdata.plan.f);
            }
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

    function ProgressBarPlugin(options = {}) {
        let progressBoxId = options.progressBoxId !== undefined ? options.progressBoxId : 'progress-box';
        let progressBarId = options.progressBarId !== undefined ? options.progressBarId : 'progress-bar';
        this.debug = options.debug !== undefined ? options.debug : false;
        this.progressBox = document.getElementById(progressBoxId);
        this.progressBar = document.getElementById(progressBarId);
    }

    ProgressBarPlugin.prototype = Object.assign(Object.create(Plugin.prototype), {
        constructor: ProgressBarPlugin,
        name: "progress",
        attach(viewer) {
            viewer.addEventListener('pano-enter', this.onEnter.bind(this));
            viewer.addEventListener('pano-load', this.onLoad.bind(this));
            viewer.addEventListener('pano-progress', this.onProgress.bind(this));
        },
        onEnter(evt) {
            if (!evt.pano.userData.loaded) {
                this.progressBar.style.width = '0%';
                this.progressBox.style.display = 'block';
            }
            if (this.debug) {
                console.log('enter:', evt.pano.userData.key);
            }
        },
        onProgress(evt) {
            let pct = evt.progress.loaded / evt.progress.total * 100;
            let newWidth = pct.toFixed(2) + "%";
            this.progressBar.style.width = newWidth;
            if (this.debug) {
                console.log('progress:', evt.pano.userData.key, newWidth);
            }
        },
        onLoad(evt) {
            this.progressBox.style.display = 'none';
            if (this.debug) {
                console.log('load:', evt.pano.userData.key);
            }
        }
    });

    function InfoPlugin(options = {}) {
        this.modalId = options.modalId !== undefined ? options.modalId : 'modal-info';
        this.iconUrl = options.iconUrl !== undefined ? options.iconUrl : INFO_ICON;
        this.shareLinkId = options.shareLinkId !== undefined ? options.shareLinkId : 'share-link';
        this.shareAnchor = document.getElementById(this.shareLinkId);
    }

    InfoPlugin.prototype = Object.assign(Object.create(Plugin.prototype), {
        constructor: InfoPlugin,
        name: "info",
        attach(viewer) {
            // Load the info button
            viewer.appendControlItem({
                style: {
                    backgroundImage: 'url("' + this.iconUrl + '")',
                    transition: viewer.DEFAULT_TRANSITION,
                    webkitTransition: viewer.DEFAULT_TRANSITION,
                },
                onTap: () => {
                    if (this.shareAnchor) {
                        console.log(viewer.control);
                        let angleLeft = (-viewer.control.getAzimuthalAngle() * 180) / Math.PI;
                        let angleUp = (-viewer.control.getPolarAngle() * 180) / Math.PI + 90;
                        let link = `#${viewer.panorama.userData.key}|${angleLeft}|${angleUp}`;
                        this.shareAnchor.href = link;
                        this.shareAnchor.innerHTML = link;
                    }
                    MicroModal.show(this.modalId);
                },
            });
        }
    });

    function Viewer(options = {}) {
        PANOLENS.Viewer.call(this, options);
        this.plugins = {};
    }

    Viewer.prototype = Object.assign(Object.create(PANOLENS.Viewer.prototype), {
        constructor: Viewer,
        // called when entering a panorama
        onEnter(evt) {
            evt.pano = evt.target;
            evt.type = "pano-enter";
            window.location.hash = `#${evt.pano.userData.key}`;
            this.dispatchEvent(evt);
        },
        // called when the transition to enter a panorama is over
        onEnterComplete(evt) {
            console.log('enter-complete:', evt.target.userData.key);
        },
        // called when loading an image makes progress
        onProgress(evt) {
            evt.pano = evt.target;
            evt.type = "pano-progress";
            this.dispatchEvent(evt);
        },
        // called when loading an image is done
        onLoad(evt) {
            evt.pano = evt.target;
            evt.type = "pano-load";
            evt.pano.userData.loaded = true;
            this.dispatchEvent(evt);
        },
        // called when loading an image fails
        onError(evt) {
            console.error('error:', {src: evt.target.src });
        },
        attachPlugin(plugin) {
            if (plugin) {
                if (plugin.name !== undefined) {
                    this.plugins[plugin.name] = plugin;
                    plugin.attach(this);
                } else {
                    console.error("Cannot attach", plugin, "as plugin; missing property `name`");
                }
            } else {
                console.trace("Ignoring falsy plugin", plugin);
            }
        },
        loadUrl(url) {
            fetch(url)
                .then(response => response.json())
                .then(this.load.bind(this));
        },
        load(data) {
            for (const plugin of Object.values(this.plugins)) {
                plugin.load(data);
            }

            let start = new StartData(data.start);

            // If we have a URL hash (e.g. `#road-front`), use that for the start
            if (window.location.hash) {
                let parts = window.location.hash.substr(1).split('|');
                let pano = parts[0];
                if (data.nodes[pano] !== undefined) {
                    start.pano = pano;
                    start.angleLeft = parts.length > 1 ? Number(parts[1]) : 0;
                    start.angleUp = parts.length > 2 ? Number(parts[2]) : 0;
                }
            }

            // Initialize
            let todo = new Set();
            todo.add(start.pano);
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
                    pano.addEventListener('progress', this.onProgress.bind(this));
                    pano.addEventListener('error', this.onError.bind(this));
                    pano.addEventListener('load', this.onLoad.bind(this));
                    pano.addEventListener('enter', this.onEnter.bind(this));
                    pano.addEventListener('enter-complete', this.onEnterComplete.bind(this));

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
                this.add(pano);
            }

            // Initial rotation
            if (start.angleLeft != 0) {
                this.control.rotateLeft(Math.PI * start.angleLeft / 180);
            }
            if (start.angleUp != 0) {
                this.control.rotateUp(Math.PI * start.angleUp / 180);
            }

            this.panoramas = panoramas;
        }
    });

    function setupRundgang(container) {
        const panoViewer = new Viewer({
            container: container,
            horizontalView: false,
            cameraFov: 50,
            autoHideInfospot: false,
        });

        const info = new InfoPlugin();
        const map = new MapPlugin();
        const progress = new ProgressBarPlugin();

        panoViewer.attachPlugin(progress);
        panoViewer.attachPlugin(map);
        panoViewer.attachPlugin(info);

        panoViewer.loadUrl('../media/pano/data.json');
        return panoViewer;
    }

    window.RUNDGANG = {
        MapPlugin: MapPlugin,
        InfoPlugin: InfoPlugin,
        ProgressBarPlugin: ProgressBarPlugin,
        Plugin: Plugin,
        Floor: Floor,
        setup: setupRundgang,
    };
})();