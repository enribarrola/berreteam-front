import {Scene} from "three"
import {OBJLoader} from "three/addons/loaders/OBJLoader";


class ThreeObjLoader {

    constructor(scene = new Scene()) {
        this._objLoader = new OBJLoader();
        this._scene = scene;
    }


    get scene() {
        return this._scene;
    }

    set scene(value) {
        this._scene = value;
    }

    get objLoader() {
        return this._objLoader;
    }

}