import { setParams1D } from '../function-helpers.js'

// Staircase
export function staircase(stepWidth, stepHeight, offset, nbPoints, values0, mode){
    let values = [];
    let index = 0;
    [offset, values0] = setParams1D("Staircase", offset, values0, nbPoints, mode);

    for (let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == null ){
            if (i % stepWidth == 0 && i != 0){
                index += stepHeight;
            }
            values.push(index + offset[i] + values0[i]);
        }
        if (mode == "multiplicative"){
            if (i % stepWidth == 0 && i != 0){
                index += stepHeight;
            }
            values.push((index + offset[i]) * values0[i]);
        }
    }
    return values;
}
