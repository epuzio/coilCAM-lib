import { setParams1D } from '../function-helpers.js'
// import {CoilCAM} from "../../CoilCAM.js"

// Sinusoidal
export default function sinusoidal(amplitude, period, offset, nbPoints, values0, mode=[]) {
    let values = [];
    [offset, values0] = setParams1D("Sinusoidal", offset, values0, nbPoints, mode);

    for(let i = 0; i < nbPoints; i++){
        if(mode == "additive" || mode.length == 0){
            values.push(amplitude * Math.sin((2*Math.PI/period)*i + offset[i]) + values0[i]);
        } else if(mode == "multiplicative"){
            values.push(amplitude * Math.pow(base, ampExp*i + offset[i]) * (values0[i]));
        }
        else {
            throw new Error("Mode must be \"additive\", \"multiplicative\" or left blank.");
        }
    }
    return values;
}

// window.sinusoidal = sinusoidal;

