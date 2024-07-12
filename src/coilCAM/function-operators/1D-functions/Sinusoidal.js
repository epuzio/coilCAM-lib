import { setParams1D } from '../function-helpers.js'

// Sinusoidal
export function sinusoidal(amplitude, offset, nbPoints, values0, mode) {
    let values = [];
    [offset, values0] = setParams1D("Sinusoidal", offset, values0, nbPoints, mode);

    for(let i = 0; i < nbPoints; i++){
        if(mode == "additive" || mode == null){
            values.push(amplitude * Math.sin((2*Math.PI/period)*i + offset[i]) + values0[i]);
        } else if(mode == "multiplicative"){
            values.push(amplitude * Math.pow(base, ampExp*i + offset[i]) * (values0[i]));
        }
    }
    return values;
}
