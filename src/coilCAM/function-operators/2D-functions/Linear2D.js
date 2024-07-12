import { setParams2D } from '../function-helpers.js'

export function linear2D(amplitudeX1, offsetX1, amplitudeX2, offsetX2, nbPoints, values0x, values0y, mode){
    let pointsX = [];
    let pointsY = [];
    [offsetX1, offsetX2, values0x, values0y] = setParams2D("Linear2D", offsetX1, offsetX2, values0x, values0y, nbPoints, mode);
    
    for (let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == ""){
            pointsX.push((amplitudeX1 * i + offsetX1[i]) + values0x[i]);
            pointsY.push((amplitudeX2 * i + offsetX2[i]) + values0y[i]);
        } else if (mode == "multiplicative"){
            pointsX.push((amplitudeX1 * i + offsetX1[i]) * values0x[i]);
            pointsY.push((amplitudeX2 * i + offsetX2[i]) * values0y[i]);
        }
    }
    return new Array(pointsX, pointsY);
}