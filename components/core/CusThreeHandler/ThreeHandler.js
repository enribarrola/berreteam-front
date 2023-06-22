import * as THREE from 'three';
import {Component, useEffect} from "react";
import {backwardsAndForwardOnce, rotateBounceX} from "./ThreeAnimationDefault";
let scene, camera, renderer, cube, cube2, geometry, material, material2, geometry2;
let rotateBounceFlag = true;


let initialData = {
    width: 1,
    height: 1,
    depth: 1,
    widthSegments: 10,
    heightSegments: 10,
    depthSegments: 10
}

class ThreeHandler extends Component {
    constructor(props, context) {
        super(props, context);
    }


    init() {
        //creating scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x18191d);

        //add camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

        //renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        //document.body.appendChild(renderer.domElement);

        //add geometry
        geometry = new THREE.BoxGeometry(1, 1, 1, 10, 1, 1);
        material = new THREE.MeshBasicMaterial({
            color: 0x00ff00, wireframe: true,
        });

        cube = new THREE.Mesh(geometry, material);

        geometry2 = new THREE.BoxGeometry(1, 1, 1, 1, 0, 50);
        material2 = new THREE.MeshBasicMaterial({
            color: 0xff00ff, wireframe: true,
        });
        cube2 = new THREE.Mesh(geometry2, material2);
        scene.add(cube);
        scene.add(cube2);

        camera.position.z = 0.1;

        return renderer.domElement;
    }

    //animation

    static animate() {
        requestAnimationFrame(ThreeHandler.animate);
        cube.rotateY(0.002)
        cube2.rotateZ(0.001)
        rotateBounceX(cube, 10, 0.005)

        if (camera.position.z < 2) {
            camera.position.z += 0.01
        }
        if (camera.position.z >= 2) {
            if(camera.position.z > 2 && camera.position.z < 4){
                backwardsAndForwardOnce(cube2, "z", -0.1, 0.1, -10)
            }else if (cube2.position.z >= 4) {
                scene.remove(cube2)
            }
        }
        renderer.render(scene, camera);
    }

    componentDidMount() {
        if (document.getElementById("Render").children.length === 0) {
            document.getElementById("Render").appendChild(this.init());
        }
        ThreeHandler.animate()
    }

    render() {
        return <div id="Render">
            {this.props.children}
        </div>
    }
}


export default ThreeHandler;