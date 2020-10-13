const _location = new URL(document.location);
const _params = _location.searchParams;
const _pdebug = _params.get('debug');
const _debug = _pdebug == 'true';

const XOFF = 50;
const YOFF = 70;

// Outline for E0 as well as E2
const E0 = new PIXI.Polygon([
    0, 0,
    128, 0,
    128, 13,
    390, 13,
    390, 0,
    517, 0,
    517, 13,
    779, 13,
    779, 0,
    907, 0,
    907, 380,
    779, 380,
    779, 140,
    541, 140,
    541, 295,
    517, 295,
    517, 380,
    390, 380,
    390, 295,
    366, 295,
    366, 140,
    128, 140,
    128, 380,
    0, 380,
]);

// Outline for E1
const E1 = new PIXI.Polygon([
    0, 0,
    128, 0,
    128, 13,
    390, 13,
    390, 0,
    416, 0,
    416, 28,
    491, 28,
    491, 0,
    517, 0,
    517, 13,
    779, 13,
    779, 0,
    907, 0,
    907, 380,
    779, 380,
    779, 140,
    541, 140,
    541, 295,
    517, 295,
    517, 380,
    494, 380,
    494, 348,
    414, 348,
    414, 380,
    390, 380,
    390, 295,
    366, 295,
    366, 140,
    128, 140,
    128, 380,
    0, 380,
]);

const E3A = new PIXI.Polygon([
    0, 0,
    128, 0,
    128, 140,
    128, 380,
    0, 380,
]);

const E3C = new PIXI.Polygon([
    390, 0,
    517, 0,
    517, 140,
    541, 140,
    541, 295,
    517, 295,
    517, 380,
    390, 380,
    390, 295,
    366, 295,
    366, 140,
    390, 140,
]);

const E3E = new PIXI.Polygon([
    779, 13,
    779, 0,
    907, 0,
    907, 380,
    779, 380,
    779, 140,
]);

function floorPlan(floor, view) {
    const app = new PIXI.Application({
        antialias: true,
        transparent: true,
        view: view,
        width: 1000,
        height: 600,
    });

    if (_debug) {
        let plan = `../P_E${floor}.png`;
        let sprite = PIXI.Sprite.from(plan);
        sprite.interactive = true;
        sprite.y = YOFF - 170;
        sprite.x = XOFF - 7;
        sprite.on('pointerdown', onPos);
        app.stage.addChild(sprite);
    }

    let textStyle = new PIXI.TextStyle({
        fontSize: 50,
        fill: '#FFFFFF',
    });

    const blurFilter2 = new PIXI.filters.BlurFilter();
    blurFilter2.blur = 2;

    const textA = new PIXI.Text(`A${floor}`, textStyle);
    textA.x = XOFF + 33;
    textA.y = YOFF + 170;
    textA.filters = [blurFilter2];
    app.stage.addChild(textA);

    if (floor < 3) {
        const textB = new PIXI.Text(`B${floor}`, textStyle);
        textB.x = XOFF + 219;
        textB.y = YOFF + 50;
        textB.filters = [blurFilter2];
        app.stage.addChild(textB);
    }

    const textC = new PIXI.Text(`C${floor}`, textStyle);
    textC.x = XOFF + 419;
    textC.y = YOFF + 170;
    textC.filters = [blurFilter2];
    app.stage.addChild(textC);

    if (floor < 3) {
        const textD = new PIXI.Text(`D${floor}`, textStyle);
        textD.x = XOFF + 613;
        textD.y = YOFF + 50;
        textD.filters = [blurFilter2];
        app.stage.addChild(textD);
    }

    const textE = new PIXI.Text(`E${floor}`, textStyle);
    textE.x = XOFF + 813;
    textE.y = YOFF + 170;
    textE.filters = [blurFilter2];
    app.stage.addChild(textE);

    const outline = new PIXI.Graphics();

    outline.x = XOFF;
    outline.y = YOFF;
    outline.lineStyle(4, 0x00ff00, 1);

    [
        () => outline.drawPolygon(E0),
        () => outline.drawPolygon(E1),
        () => outline.drawPolygon(E0),
        () => outline
            .drawPolygon(E3A)
            .drawPolygon(E3C)
            .drawPolygon(E3E)
    ][floor]();

    const blurFilter1 = new PIXI.filters.BlurFilter();
    blurFilter1.blur = 3;
    outline.filters = [blurFilter1];

    app.stage.addChild(outline);

    const mesh = new PIXI.Graphics();
    mesh.lineStyle(2, 0x00ff00, 1);
    mesh.x = XOFF;
    mesh.y = YOFF;
    mesh.filters = [blurFilter2];

    fetch('../media/pano/data.json')
        .then(response => response.json())
        .then(data => {
            let map = {};
            for (let [key, value] of Object.entries(data.nodes)) {
                if (value.hasOwnProperty('plan')) {
                    let point = value.plan;
                    if (!point.hasOwnProperty('f') || point.f == floor) {
                        let dot = new PIXI.Graphics();
                        dot.x = XOFF;
                        dot.y = YOFF;
                        dot.filters = [blurFilter1];
                        dot.beginFill(0x00ff00);
                        dot.drawCircle(point.x, point.y, 8);
                        dot.endFill();
                        dot.key = key;
                        dot.meta = point;
                        dot.interactive = true;
                        dot.on('pointerover', onButtonOver);
                        dot.on('pointerout', onButtonOut);
                        dot.on('pointerdown', onButtonClick);
                        app.stage.addChild(dot);

                        for (let next of Object.keys(value.edges)) {
                            if (map.hasOwnProperty(next)) {
                            let target = map[next];
                            mesh.moveTo(point.x, point.y);
                            mesh.lineTo(target.x, target.y);
                            }
                        }

                        map[key] = point;
                    }
                }
            }
        });

    app.stage.addChild(mesh);
}

function onButtonOver(e) {
    this.clear();
    this.beginFill(0x00ff00);
    this.drawCircle(this.meta.x, this.meta.y, 14);
    this.endFill();
}

function onButtonOut(e) {
    this.clear();
    this.beginFill(0x00ff00);
    this.drawCircle(this.meta.x, this.meta.y, 8);
    this.endFill();
}

function onButtonClick(e) {
    window.location.assign(`index.html#${this.key}`);
}

function onPos(e) {
    const newPosition = e.data.getLocalPosition(this.parent);
    newPosition.x -= XOFF;
    newPosition.y -= YOFF;
    console.log(newPosition);
}