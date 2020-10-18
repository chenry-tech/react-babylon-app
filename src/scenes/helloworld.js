import * as BABYLON from '@babylonjs/core';

let box;

export function createScene(scene) {
    const canvas = scene.getEngine().getRenderingCanvas();
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // Add lights to the scene
    new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Our built-in 'box' shape.
    box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position.y = 1;
}

export function render(scene) {
    if (box !== undefined) {
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();

        const rpm = 10;
        box.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
}
