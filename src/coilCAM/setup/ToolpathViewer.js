// referencing https://threejs.org/docs/index.html?q=camera#manual/en/introduction/Creating-a-scene
// import * as THREE from 'three';
// import Flatten from '../../../node_modules/@flatten-js/core/dist/main.mjs'; 

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// import * as THREE from '../../../node_modules/three/build/three.module.js';
// import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls.js';


// import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
// import { OrbitControls } from 'https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js';

export default class ToolpathViewer {
    constructor(container, path = [], referencePath = [], bedDimensions = [28, 26.5, 30.5]) {
        console.log("test1");
        this.container = container; // container to hold viewer (iframe)
        
        console.log("tvc", container);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        // Update initScene call to use the instance properties
        this.initScene();

        this.container.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    //initialize 3js elements
    initScene(){
        this.scene.background = new THREE.Color(0xfaead6); 
        this.camera.up.set(0, 0, 1); // to ensure z is up and down instead of default (y)
        this.camera.position.set(2, 20, 40);
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.setAnimationLoop(this.animate.bind(this)); // Ensure `this` is bound correctly
    }

    // Add printer bed, path, light to scene
    init(){ 
        this.createPrinterBed(this.globalState.bedDimensions);
        this.createPath(this.globalState.path);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.z = 3;
        this.scene.add(directionalLight);
    }

    createPrinterBedLines(dimensions, material){ //make line building a little less repetitive
        const lines = []; 
        const offsets = [[1, 1], [1, -1], [-1, -1], [-1, 1]]; 
        const baseHeight = 1;
        for(let i = 0; i < 8; i++){
            const points = [];
            if(i < 4){
                points.push(new THREE.Vector3(dimensions[0]/2 * offsets[i][0], dimensions[1]/2 * offsets[i][1], baseHeight/2 + dimensions[2]));
                points.push(new THREE.Vector3(dimensions[0]/2 * offsets[i][0], dimensions[1]/2 * offsets[i][1], baseHeight/2));
            } else{
                points.push(new THREE.Vector3(dimensions[0]/2 * offsets[i%4][0], dimensions[1]/2 * offsets[i%4][1], baseHeight/2 + dimensions[2]));
                points.push(new THREE.Vector3(dimensions[0]/2 * offsets[(i+1)%4][0], dimensions[1]/2 * offsets[(i+1)%4][1], baseHeight/2 + dimensions[2]));
            }
            const geometry = new THREE.BufferGeometry().setFromPoints( points );
            const line = new THREE.Line( geometry, material );
            lines.push(line);
        }
        return lines;
    }

    // Create printer bed based on user dimensions - default to baby potterbot dimensions
    createPrinterBed(scene, dimensions){
        const printerBed = new THREE.Group(); //group for printer bed
        const printerBedBorders = new THREE.Group(); //group for borders, require different update function
        printerBedBorders.name = "printerBedBorders";
        printerBed.name = "printerBed";

        const baseGeometry = new THREE.BoxGeometry(dimensions[0], dimensions[1], baseHeight);
        const baseMaterial = new THREE.MeshToonMaterial( { color: 0xb7afa6 } ); 
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.name = "printerBedBase";
        printerBed.add(base);
        
        const bordersMaterial = new THREE.MeshToonMaterial( { color: 0xfaead6 } ); //borders of printer bed
        const bordersGeometry = createPrinterBedLines(dimensions, bordersMaterial);
        for(const line of bordersGeometry){
            printerBedBorders.add(line);
        }
        printerBed.add(printerBedBorders);
        printerBed.position.set(-dimensions[0]/2, -dimensions[1]/2, -baseHeight/2);
        scene.add(printerBed);
    }

    //helper function to convert line segment to cylinder (for thickness)
    cylinderFromPoints(pointStart, pointEnd, group, material){
        //convert to Vec3
        let pointStartVec = new THREE.Vector3(pointStart.x, pointStart.y, pointStart.z);
        let pointEndVec = new THREE.Vector3(pointEnd.x, pointEnd.y, pointEnd.z);

        var dir = new THREE.Vector3().subVectors(pointEndVec, pointStartVec);
        var quat = new THREE.Quaternion();
        quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize()); 

        var offset = new THREE.Vector3(); //midpoint of cylinder
        offset.addVectors(pointEndVec, pointStartVec).divideScalar(2);
        
        const segmentGeometry = new THREE.CylinderGeometry(pointEnd.t+1, pointStart.t+1, dir.length(), 8);
        const segment = new THREE.Mesh(segmentGeometry, material); 
        segment.quaternion.copy(quat);
        segment.position.set(offset.x, offset.y, offset.z);
        group.add(segment);
    }

    // turn collection of points into toolpath
    createPath(scene, path, pathType){
        if(path.length === 0){
            return;
        }

        const toolpath = new THREE.Group(); //group for printer bed
        var material;
        if(pathType == "path"){
            toolpath.name = "path";
            material = new THREE.MeshToonMaterial( {color: 0x212121} ); 
        }
        if(pathType == "referencePath"){
            toolpath.name = "referencePath";
            material = new THREE.MeshToonMaterial( {color: 0x0091c2} ); 
        }
        
        for(let i = 0; i < path.length - 1; i++){
            cylinderFromPoints(path[i], path[i+1], toolpath, material);
        }
        toolpath.scale.set(.1, .1, .1); //scale relative to printer bed, 10 3js = 1m
        scene.add(toolpath);
    }

    // Change toolpath on update
    refreshPath(pathType){
        const toolpath = scene.getObjectByName(pathType); 
        scene.remove(toolpath);
        if(pathType === "path" && global_state.path.length != 0){
            createPath(scene, global_state.path, pathType);
            defaultPath = global_state.path;
        }
        if(pathType === "referencePath" && global_state.referencePath.length != 0){
            createPath(scene, global_state.referencePath, pathType);
            defaultReferencePath = global_state.referencePath;
        }
    }

    // Update viewer on camera shift, changes in dimensions/toolpath
    animate() {
        controls.update();
        renderer.render( scene, camera );
        if(global_state.bedDimensions != defaultDimensions && global_state.bedDimensions.length !== 0){ //execute only on update to bedDimensions inport
            var borders = scene.getObjectByName("printerBedBorders");  //update borders
            borders.scale.set(global_state.bedDimensions[0]/(defaultDimensions[0]*10), 
                global_state.bedDimensions[1]/(defaultDimensions[1]*10), 
                global_state.bedDimensions[2]/(defaultDimensions[2]*10));

            var base = scene.getObjectByName("printerBedBase"); //update base (don't scale z)
            base.scale.set(global_state.bedDimensions[0]/(defaultDimensions[0]*10), 
                global_state.bedDimensions[1]/(defaultDimensions[1]*10), 
                1);

            var printerBed = scene.getObjectByName("printerBed"); //reposition group
            printerBed.position.set(-global_state.bedDimensions[0]/20, -global_state.bedDimensions[1]/20, -baseHeight/2);
        }
        // console.log("global_state.path", global_state.path);
        // console.log("defaultPath", defaultPath);
        if(global_state.path !== defaultPath){ //execute only on path update, delete and rebuild toolpath
            refreshPath("path");
        }
        if(global_state.referencePath !== defaultReferencePath){ //execute only on path update, delete and rebuild toolpath
            refreshPath("referencePath");
        }
    }

    
}

window.ToolpathViewer = ToolpathViewer;