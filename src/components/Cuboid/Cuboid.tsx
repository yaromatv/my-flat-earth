import React, { useEffect, useRef } from "react";
import {
    Engine,
    Scene,
    ArcRotateCamera,
    HemisphericLight,
    MeshBuilder,
    Vector3,
    Color4,
} from "@babylonjs/core";

const Cuboid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = new Engine(canvasRef.current, true);
            const scene = new Scene(engine);

            scene.clearColor = new Color4(0, 0, 0, 1);

            const camera = new ArcRotateCamera(
                "camera",
                -Math.PI / 2,
                Math.PI / 2.5,
                10,
                Vector3.Zero(),
                scene
            );
            camera.attachControl(canvasRef.current, true);

            camera.lowerRadiusLimit = 10;
            camera.upperRadiusLimit = 10;

            new HemisphericLight("light", new Vector3(1, 1, 0), scene);

            const box = MeshBuilder.CreateBox(
                "box",
                { width: 3, height: 3, depth: 3 },
                scene
            );

            engine.runRenderLoop(() => {
                scene.render();
                box.rotation.y += 0.001;
                box.rotation.x += 0.001;
            });

            return () => {
                engine.dispose();
            };
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: "50vw", height: "100vh" }}
        ></canvas>
    );
};

export default Cuboid;
