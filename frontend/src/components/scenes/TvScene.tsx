import React, { useEffect, useRef } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader } from '@babylonjs/core';

const TvScene= () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const engine = new Engine(canvasRef.current, true);
        const scene = new Scene(engine);

        //Create a camera
        const camera = new ArcRotateCamera('camera', 0,0,10, new Vector3(0,0,0), scene);
        camera.attachControl(canvasRef.current, true);

        //Create a light
        new HemisphericLight('light', new Vector3(0,1,0), scene);
        
        //Load the GLTF model
        SceneLoader.ImportMesh('', '/public/assets/', 'bar.glb', scene, (meshes) => {
            //Loaded meshes can be manipulated here
        });

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });

        window.addEventListener('resize', () => {
            engine.resize();
        });

        return () => {
            engine.dispose();
        };

    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh', touchAction: 'none' }} />;


}

export default TvScene;