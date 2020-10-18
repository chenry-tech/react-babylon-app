import React from 'react';
import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import './BabylonView.css';
import {createScene, render} from '../scenes/helloworld';

const onSceneReady = scene => {
    createScene(scene);
}

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = scene => {
    render(scene);
}

export default () => (
    <React.Fragment>
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='renderCanvas' />
    </React.Fragment>
)
