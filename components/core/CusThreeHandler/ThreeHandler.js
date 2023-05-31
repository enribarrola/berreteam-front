import * as THREE from 'three';
import {Component, useEffect} from "react";

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

let rotateBounceX = (geo, limA, step, limB) => {
    if (limB === undefined || limB == null) {
        limB = 0.2;
    }
    if (step === undefined || step == null) {
        step = 0.001;
    }
    if (rotateBounceFlag) {
        if (geo.rotation.x < limA && geo.rotation.x > (limA - 0.01)) {
            rotateBounceFlag = false
        } else {
            geo.rotation.x += step;
        }
    } else {
        if (geo.rotation.x < limB && geo.rotation.x > (0)) {
            rotateBounceFlag = true
        } else {
            geo.rotation.x -= step;
        }
    }
}


let baf_flag = true;
const backwardsAndFordwardOnce = (cube2, axis, step_b, step_f, limit) => {

    if (step_b === undefined || step_b == null) {
        step_b = 0.2;
    }
    if (step_f === undefined || step_f == null) {
        step_f = 0.001;
    }
    if (limit === undefined || limit == null) {
        limit = 0.001;
    }


    if (baf_flag) {
        if (cube2.position.z <= limit)
            baf_flag = false
        if (cube2.position.z > limit)
            cube2.translateZ(step_b)
    } else {
        cube2.translateZ(step_f)
    }
};

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
            backwardsAndFordwardOnce(cube2, "z", -0.1, 0.1, -10)
            if (cube2.position.z >= 4) {
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