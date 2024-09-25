import { toolpathUnitGenerator } from ".";

function setSingleParameter(input, parameter_name, nbLayers, nbPointsInLayer){
    let parameterLength = nbLayers;
    let useNbPointsInLayer = (parameter_name == "radiusShapingParameter" || parameter_name == "thicknessShapingParameter");
    if(useNbPointsInLayer){
        parameterLength *= nbPointsInLayer;
    }

    if(!input?.length){ // Input not provided or input == []
        if (parameter_name == "scalingRadiusShapingParameter"){
            return new Array(parameterLength).fill(1);
        }
        return new Array(parameterLength).fill(0);
    } else if(!Array.isArray(input)){ // Parameter is a single number
        return new Array(parameterLength).fill(input);
    } else if(input.length == parameterLength){ // Parameter is a full array
        return input;
    } else if(useNbPointsInLayer){
        if(input.length == nbPointsInLayer){ // Pad values for 1D values that require 2D input
            return new Array(nbPointsInLayer*nbLayers).fill(input).flat();
        }
        var error_str = "Length of values for parameter " + parameter_name + " is currently " + 
                input.length + ", must be 0, 1, equal to nbPointsInLayer: " + nbPointsInLayer + 
                " or nbPointsInLayer*nbLayers: " + (nbPointsInLayer*nbLayers);
        throw new Error(error_str);
    }
    var error_str = "Length of values for parameter " + parameter_name + " is currently " + 
            input.length + ", must be 0, 1 or equal to nbLayers: " + nbLayers;
    throw new Error(error_str);
}

function setParameter(input, parameter_name, nbLayers, nbPointsInLayer){
    if(parameter_name == "translateShapingParameter"){ // Call setSingleParameter twice, once for x position, once for y position
        let tsp = [[], []];
        if(input == null || input == []){
            return new Array(2).fill(new Array(nbLayers).fill(0));
        }
        tsp[0] = setSingleParameter(input[0], parameter_name, nbLayers, nbPointsInLayer);
        tsp[1] = setSingleParameter(input[1], parameter_name, nbLayers, nbPointsInLayer);
        return tsp;
    }
    return setSingleParameter(input, parameter_name, nbLayers, nbPointsInLayer);
}

export default function tug(position, initialRadius, layerHeight, nbLayers, nbPointsInLayer,
    radiusShapingParameter=[], scaleShapingParameter=[], scalingRadiusShapingParameter=[],
    translateShapingParameter=[], rotateShapingParameter=[], thicknessShapingParameter=[], layerThicknessShapingParameter=[]){
    let path = [];
    let radsp = setParameter(radiusShapingParameter, "radiusShapingParameter", nbLayers, nbPointsInLayer);
    let ssp = setParameter(scaleShapingParameter, "scaleShapingParameter", nbLayers, nbPointsInLayer);
    let rsp = setParameter(rotateShapingParameter, "rotateShapingParameter", nbLayers, nbPointsInLayer);
    let tsp = setParameter(translateShapingParameter, "translateShapingParameter", nbLayers, nbPointsInLayer);
    let srsp = setParameter(scalingRadiusShapingParameter, "scalingRadiusShapingParameter", nbLayers, nbPointsInLayer);
    let thsp = setParameter(thicknessShapingParameter, "thicknessShapingParameter", nbLayers, nbPointsInLayer);
    let lthsp = setParameter(layerThicknessShapingParameter, "layerThicknessShapingParameter", nbLayers, nbPointsInLayer);

    console.log("RADSP", radsp.length);

    var ctr = 0;
    for(let j = 0; j < nbLayers; j++){
        for(let i = 0; i < nbPointsInLayer; i++){
            let angle = 2 * i * Math.PI / nbPointsInLayer;
            const newPoint = { // Store points in toolpath as objects for greater readability: (x coordinate, y coordinate, z coordinate, thickness)
                x: (position[0] + (initialRadius + srsp[j] * radsp[ctr] + ssp[j]) * Math.cos(angle + (rsp[j] * Math.PI/180)) + tsp[0][j]),
                y: (position[1] + (initialRadius + srsp[j] * radsp[ctr] + ssp[j]) * Math.sin(angle + (rsp[j] * Math.PI/180)) + tsp[1][j]),
                z: (position[2] + layerHeight * j),
                t: (thsp[ctr]+lthsp[j])
            }
            path.push(newPoint);
            ctr++;
        }
    }
    return path;
}

window.toolpathUnitGenerator = toolpathUnitGenerator;