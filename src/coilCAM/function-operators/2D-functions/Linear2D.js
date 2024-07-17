import { setParams2D } from '../function-helpers.js'

export default function linear2D(amplitudeX1, offsetX1, amplitudeX2, offsetX2, nbPoints, values0x, values0y, mode = []){
    let pointsX = [];
    let pointsY = [];
    [offsetX1, offsetX2, values0x, values0y] = setParams2D("Linear2D", offsetX1, offsetX2, values0x, values0y, nbPoints, mode);
    
    for (let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0){
            pointsX.push((amplitudeX1 * i + offsetX1[i]) + values0x[i]);
            pointsY.push((amplitudeX2 * i + offsetX2[i]) + values0y[i]);
        } else if (mode == "multiplicative"){
            pointsX.push((amplitudeX1 * i + offsetX1[i]) * values0x[i]);
            pointsY.push((amplitudeX2 * i + offsetX2[i]) * values0y[i]);
        } else {
            throw new Error("Mode must be \"additive\", \"multiplicative\" or left blank.");
        }
    }
    return new Array(pointsX, pointsY);
}

window.linear2D = linear2D;