import { setParams1D } from '../function-helpers.js'

// Square
export default function square(amplitude, period, offset, bumps, nbPoints, values0, mode = []){
    let values = [];
    [offset, values0] = setParams1D("Square", offset, values0, nbPoints, mode);

    for (let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0){
            if (bumps && bumps <= (i + offset[i])%period){
                values.push((amplitude * 0) + values0[i]);
            } else {
                values.push((amplitude * 1) + values0[i]);
            }
        } else if (mode == "multiplicative"){
            if (bumps && bumps <= (i + offset[i])%period){
                values.push((amplitude * 0) * values0[i]);
            } else {
                values.push((amplitude * 1) * values0[i]);
            }
        } else {
            throw new Error("Mode must be \"additive\", \"multiplicative\" or left blank.");
        }
    }
    return values;
}

global.square = square;

