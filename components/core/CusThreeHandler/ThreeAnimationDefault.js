

export let rotateBounceX = (geo, limA, step, limB) => {
    let rotateBounceFlag = true;
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



export const backwardsAndForwardOnce = (cube2, axis, step_b, step_f, limit) => {
    let baf_flag = true;
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