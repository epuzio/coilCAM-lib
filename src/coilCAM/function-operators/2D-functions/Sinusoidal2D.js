import { setParams2D } from '../function-helpers.js'

export default function sinusoidal2D(amplitudeX1, periodX1, amplitudeX2, periodX2, offset0x, offset0y, nbPoints, values0x, values0y, mode) {
    let pointsX = [];
    let pointsY = [];
    [offset0x, offset0y, values0x, values0y] = setParams2D("Sinusoidal2D", offset0x, offset0y, values0x, values0y, nbPoints, mode);
    
    for (let i = 0; i < nbPoints; i++) {
        if (mode == "additive" || mode == null) {
            pointsX.push(amplitudeX1 * Math.cos(2 * Math.PI * i / periodX1 + offset0x[i]) + values0x[i]);
            pointsY.push(amplitudeX2 * Math.sin(2 * Math.PI * i / periodX2 + offset0y[i]) + values0y[i]);
        } else if (mode == "multiplicative") {
            pointsX.push(amplitudeX1 * Math.cos(2 * Math.PI * i / periodX1 + offset0x[i]) * values0x[i]);
            pointsY.push(amplitudeX2 * Math.sin(2 * Math.PI * i / periodX2 + offset0y[i]) * values0y[i]);
        }
    }
    return new Array(pointsX, pointsY);
}

window.sinusoidal2D = sinusoidal2D;