import { setParams1D } from '../function-helpers.js'

// Exponential
export default function exponential(amplitude, base, ampExp, offset, nbPoints, values0, mode = []){
    let values = [];
    [offset, values0] = setParams1D("Exponential", offset, values0, nbPoints, mode);

    for(let i = 0; i < nbPoints; i++){
        if(mode == "additive" || mode.length == 0){
            values.push(amplitude * Math.pow(base, ampExp*i + offset[i]) + values0[i]);
        } else if(mode == "multiplicative"){
            values.push(amplitude * Math.pow(base, ampExp*i + offset[i]) * values0[i]);
        } else {
            throw new Error("Mode must be \"additive\", \"multiplicative\" or left blank.");
        }
    }
    return values;
}

window.exponential = exponential;