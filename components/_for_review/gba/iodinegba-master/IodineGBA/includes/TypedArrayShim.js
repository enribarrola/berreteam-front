// "use strict";

import {Component} from "react";

/*
 Copyright (C) 2012-2015 Grant Galitz

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
export default function TypedArrayShim() {

    this.getInt8Array();
    this.getUint8Array();
    this.fgetInt8Array();
    this.fgetUint8Array();
    this.fgetUint8View();
    this.getSharedUint8Array();
    this.getInt16Array();
    this.getUint16Array();
    this.fgetUint16View();
    this.getUint16View();
    this.getInt32Array();
    this.getSharedInt32Array();
    this.fgetInt32View();
    this.fgetInt32ViewCustom();
    this.getInt32Array();
    this.fgetSharedInt32Array();
    this.fgetUint8ViewCustom();
    this.fgetUint32Array();
    this.getFloat32Array();
    this.getSharedFloat32Array();
    this.getSharedUint32Array();
    this.getArray();
    this.__VIEWS_SUPPORTED__ = "";
    this.__LITTLE_ENDIAN__ = "";
}

TypedArrayShim.prototype.getSharedInt32Array = (size_t) => {
    try {
        //Compatibility for older Firefox Nightlies:
        return new SharedInt32Array(size_t);
    } catch (error) {
        return new Int32Array(new ArrayBuffer(size_t << 2));
    }
}
TypedArrayShim.prototype.getInt32View = (typed_array) => {
    try {
        return new Int32Array(typed_array.buffer);
    } catch (error) {
        return null;
    }
}
TypedArrayShim.prototype.getInt8Array = (size_t) => {
    try {
        return new Int8Array(size_t);
    } catch (error) {
        return getArray(size_t);
    }
}
TypedArrayShim.prototype.getUint8Array = (size_t) => {
    try {
        return new Uint8Array(size_t)
    } catch (error) {
        return this.getArray(size_t)
    }
}
TypedArrayShim.prototype.fgetInt8Array = (size_t) => {
    try {
        return new Int8Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}
TypedArrayShim.prototype.fgetUint8Array = (size_t) => {
    try {
        return new Uint8Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}
TypedArrayShim.prototype.fgetUint8View = (typed_array) => {
    try {
        return new Uint8Array(typed_array.buffer);
    } catch (error) {
        return null;
    }

}
TypedArrayShim.prototype.getSharedUint8Array = (size_t) => {
    try {
        //Compatibility for older Firefox Nightlies:
        return new SharedUint8Array(size_t);
    } catch (error) {
        try {
            return new Uint8Array(new SharedArrayBuffer(size_t));
        } catch (error) {
            // console.log("error.TypedArrayShim.SharedArrayBuffer.getSharedUint8Array");
            return new Uint8Array(new ArrayBuffer(size_t))
        }
    }
}
TypedArrayShim.prototype.fgetSharedInt32Array = (size_t) => {
    try {
        //Compatibility for older Firefox Nightlies:
        return new SharedInt32Array(size_t);
    } catch (error) {
        try {
            return new Int32Array(new SharedArrayBuffer(size_t << 2));
        } catch (error) {
            // console.log("error.TypedArrayShim.SharedArrayBuffer.fgetSharedInt32Array");
            return new Uint8Array(new ArrayBuffer(size_t))
        }
    }
}
TypedArrayShim.prototype.fgetUint16View = (typed_array) => {
    try {
        return new Uint16Array(typed_array.buffer);
    } catch (error) {
        return null;
    }
}
TypedArrayShim.prototype.fgetUint32Array = (size_t) => {
    try {
        return new Uint32Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}
TypedArrayShim.prototype.fgetInt32View = (typed_array) => {
    try {
        return new Int32Array(typed_array.buffer);
    } catch (error) {
        return null;
    }
}
TypedArrayShim.prototype.fgetInt32ViewCustom = (typed_array, start, end) => {
    try {
        typed_array = this.getInt32View(typed_array);
        return typed_array.subarray(start, end);
    } catch (error) {
        try {
            //Nightly Firefox 4 used to have the subarray function named as slice:
            return typed_array.slice(start, end);
        } catch (error) {
            return null;
        }
    }
}
TypedArrayShim.prototype.fgetUint8ViewCustom = (typed_array, start, end) => {
    try {
        typed_array = this.getUint8View(typed_array);
        return typed_array.subarray(start, end);
    } catch (error) {
        try {
            //Nightly Firefox 4 used to have the subarray function named as slice:
            return typed_array.slice(start, end);
        } catch (error) {
            return null;
        }
    }
}
TypedArrayShim.prototype.getInt16Array = (size_t) => {
    try {
        return new Int16Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}

TypedArrayShim.prototype.getSharedUint32Array = (size_t) => {
    try {
        //Compatibility for older Firefox Nightlies:
        return new SharedUint32Array(size_t);
    } catch (error) {
        try {
            return new Uint32Array(new SharedArrayBuffer(size_t << 2));
        } catch (error) {
            // console.log("error.TypedArrayShim.SharedArrayBuffer.getSharedUint32Array");
            return new Uint8Array(new ArrayBuffer(size_t))
        }
    }
}

TypedArrayShim.prototype.getUint16View = (typed_array) => {
    try {
        return new Uint16Array(typed_array.buffer);
    } catch (error) {
        return null;
    }
}
TypedArrayShim.prototype.getInt32Array = (size_t) => {
    try {
        return new Int32Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}
TypedArrayShim.prototype.getUint16Array = (size_t) => {
    try {
        return new Uint16Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}
TypedArrayShim.prototype.getFloat32Array = (size_t) => {
    try {
        return new Float32Array(size_t);
    } catch (error) {
        return this.getArray(size_t);
    }
}
TypedArrayShim.prototype.getSharedFloat32Array = (size_t) => {
    try {
        //Compatibility for older Firefox Nightlies:
        return new SharedFloat32Array(size_t);
    } catch (error) {
        try {
            return new Float32Array(new SharedArrayBuffer(size_t << 2));
        } catch (error) {
            // console.log("error.TypedArrayShim.SharedArrayBuffer.getSharedFloat32Array");
            return new Uint8Array(new ArrayBuffer(size_t))
        }
    }
}
TypedArrayShim.prototype.getArray = (size_t) => {
    var genericArray = [];
    for (var size_index = 0; size_index < size_t; ++size_index) {
        genericArray[size_index] = 0;
    }
    return genericArray;
}


TypedArrayShim.prototype.__VIEWS_SUPPORTED__ = TypedArrayShim.prototype.getUint16View(TypedArrayShim.prototype.getInt32Array(1)) !== null;
TypedArrayShim.prototype.__LITTLE_ENDIAN__ = (function () {
    if (TypedArrayShim.prototype.__VIEWS_SUPPORTED__) {
        var test = TypedArrayShim.prototype.getInt32Array(1);
        test[0] = 1;
        var test2 = TypedArrayShim.prototype.getUint16View(test);
        if (test2[0] == 1) {
            return true;
        }
    }
    return false;
})();
if (typeof Atomics == "object") {
    if (typeof Atomics.futexWait == "function" && typeof Atomics.wait == "undefined") {
        //Polyfill in deprecated call names:
        Atomics.wait = Atomics.futexWait;
        Atomics.notify = Atomics.futexWake;
    } else if (typeof Atomics.wake == "function" && typeof Atomics.notify == "undefined") {
        //Polyfill in deprecated call names:
        Atomics.notify = Atomics.wake;
    }
}
