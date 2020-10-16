import React from 'react';
import * as BABYLON from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import './BabylonView.css';

let box;

const onSceneReady = scene => {
    const canvas = scene.getEngine().getRenderingCanvas();

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Our built-in 'box' shape.
    box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position.y = 1;
}

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = scene => {
    if (box !== undefined) {
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();

        const rpm = 10;
        box.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
}

export default () => (
    <React.Fragment>
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='renderCanvas' />
    </React.Fragment>
)
