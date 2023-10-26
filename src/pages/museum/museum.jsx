import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import LoaderComponent from '../../components/loader';
import negx from './images/negx.jpg';
import negy from './images/negy.jpg';
import negz from './images/negz.jpg';
import posx from './images/posx.jpg';
import posy from './images/posy.jpg';
import posz from './images/posz.jpg';
document.getElementById('root').style.backgroundColor = 'white';
function Museum() {
    useEffect(() => {

        const rootDiv = document.getElementById('root');
        rootDiv.classList.add('contact-root');

        return () => {
            //Sayfadan çıkınca
            rootDiv.classList.remove('contact-root');
        };
    }, []);

    const canvasRef = useRef(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ physicallyCorrectLights: true, antialias: true, powerPreference: 'high-performance' });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);
        camera.position.set(0, .5, 2);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(directionalLight);

        const loader = new THREE.CubeTextureLoader();
        const cubemap = loader.load([posx, negx, posy, negy, posz, negz]);
        scene.background = cubemap;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.update();

        loader.load(
            [posx, negx, posy, negy, posz, negz],
            () => {
                setLoading(false);
                animate();
            },
            undefined,
            () => {
                console.error('An error occurred while loading images.');
            }
        );
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return <div ref={canvasRef}>
        {loading && (
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'white', height: "100vh" }}>
                <LoaderComponent />
            </div>
        )}
    </div>;

}

export default Museum;
