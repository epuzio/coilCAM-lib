function padSingleParameter(input, inputLength, parameterName){
    if(parameterName == "scalingRadiusShapingParameter"){
        return input.concat(new Array(inputLength - input.length).fill(1));
    } 
    return input.concat(Array(inputLength - input.length).fill(0));
}


function setSingleParameter(input, parameterName, nbLayers, nbPointsInLayer){
    let parameterLength = nbLayers;
    let useNbPointsInLayer = (parameterName == "radiusShapingParameter" || parameterName == "thicknessShapingParameter");
    if(useNbPointsInLayer){
        parameterLength *= nbPointsInLayer;
    }

    if(!input?.length){ // Input not provided or input == []
        return padSingleParameter([], parameterLength, parameterName);
    } else if(!Array.isArray(input)){ // Parameter is not an array
        if(typeof input === 'number'){
            return new Array(parameterLength).fill(input);
        }
        else throw new Error("Parameter ", parameterName, " must be empty, a number, or an array of numbers.");
    } else if(input.length == parameterLength){ // Parameter is a full array
        return input;
    } else if(useNbPointsInLayer && (input.length == nbPointsInLayer)){ // Pad values for 1D values that require 2D input
        return new Array(nbPointsInLayer*nbLayers).fill(input).flat();
    } else if(input.length < parameterLength){
        return padSingleParameter(input, parameterLength, parameterName);
    } else{
        return input.slice(0, parameterLength);   
    }
}

function setParameter(input, parameter_name, nbLayers, nbPointsInLayer){
    if(parameter_name == "radiusShapingParameter"){ 
        let radsp = [[], []];
        
        if(input?.length && Array.isArray(input[0])){ // radsp is a 2D array (radial offset, angular)
            radsp[0] = setSingleParameter(input[0], parameter_name, nbLayers, nbPointsInLayer);
            radsp[1] = input[1];
        } else{ //radsp is a 1d array (radial+angular offset)
            radsp[0] = setSingleParameter(input, parameter_name, nbLayers, nbPointsInLayer);
            radsp[1] = new Array(nbPointsInLayer).fill(0);
        } 
        return radsp;
    }
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

export default function toolpathUnitGenerator(position, initialRadius, layerHeight, nbLayers, nbPointsInLayer,
    radiusShapingParameter=[], scaleShapingParameter=[], scalingRadiusShapingParameter=[],
    translateShapingParameter=[], rotateShapingParameter=[], thicknessShapingParameter=[]){
    let path = [];
    let radsp = setParameter(radiusShapingParameter, "radiusShapingParameter", nbLayers, nbPointsInLayer);
    let ssp = setParameter(scaleShapingParameter, "scaleShapingParameter", nbLayers, nbPointsInLayer);
    let rsp = setParameter(rotateShapingParameter, "rotateShapingParameter", nbLayers, nbPointsInLayer);
    let tsp = setParameter(translateShapingParameter, "translateShapingParameter", nbLayers, nbPointsInLayer);
    let srsp = setParameter(scalingRadiusShapingParameter, "scalingRadiusShapingParameter", nbLayers, nbPointsInLayer);
    let thsp = setParameter(thicknessShapingParameter, "thicknessShapingParameter", nbLayers, nbPointsInLayer);

    var ctr = 0;
    for(let j = 0; j < nbLayers; j++){
        for(let i = 0; i < nbPointsInLayer; i++){
            let angle = 2 * i * Math.PI / nbPointsInLayer;
            const newPoint = { // Store points in toolpath as objects for greater readability: (x coordinate, y coordinate, z coordinate, thickness)
                x: (position[0] + (initialRadius + srsp[j] * radsp[0][ctr] + ssp[j]) * Math.cos(angle + (radsp[1][i]) + (rsp[j] * Math.PI/180)) + tsp[0][j]),
                y: (position[1] + (initialRadius + srsp[j] * radsp[0][ctr] + ssp[j]) * Math.sin(angle + (radsp[1][i]) + (rsp[j] * Math.PI/180)) + tsp[1][j]),
                z: (position[2] + layerHeight * j),
                t: (thsp[ctr])
            }
            path.push(newPoint);
            ctr++;
        }
    }
    return path;
}

window.toolpathUnitGenerator = toolpathUnitGenerator;