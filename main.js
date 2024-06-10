// Import Three.js

import * as THREE from "../node_modules/three/build/three.module.js";

import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';



// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the GLTF model
const loader = new GLTFLoader();
loader.load(
    'scene.gltf',
    (gltf) => {
        scene.add(gltf.scene);
    },
    undefined,
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
