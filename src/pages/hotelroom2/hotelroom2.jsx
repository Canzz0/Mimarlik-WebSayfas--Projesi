import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import posx from './images/posx.jpg';
import posy from './images/posy.jpg';
import posz from './images/posz.jpg';
import negx from './images/negx.jpg';
import negy from './images/negy.jpg';
import negz from './images/negz.jpg';
document.getElementById('root').style.backgroundColor='white';
function HotelRoom2() {
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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
            Yükleniyor...
        </div>
    )}
    </div>;
    
}

export default HotelRoom2;
