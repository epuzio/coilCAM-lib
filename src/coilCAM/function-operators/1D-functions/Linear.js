import { setParams1D } from '../function-helpers.js'

// Linear
export default function linear(amplitude, offset, nbPoints, values0, mode) {
    let values = [];
    [offset, values0] = setParams1D("Linear", offset, values0, nbPoints, mode);

    for (let i = 0; i < nbPoints; i++){
        if (mode == "additive"){
            values.push(((amplitude * i) + offset[i]) + values0[i]);
        } else if (mode == "multiplicative"){
            values.push(((amplitude * i) + offset[i]) * values0[i]);
        }
    }
    return values;
}

window.linear = linear;