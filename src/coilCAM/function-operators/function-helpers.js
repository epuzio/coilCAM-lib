// Helper Functions
function padValues(value, nbPoints, mode){
    if(mode == "multiplicative"){
        return value.concat(new Array(nbPoints - value.length).fill(1));
    } 
    return value.concat(Array(nbPoints - value.length).fill(0));
}

function setValues(value, nbPoints, mode){
    if (!value){
        return padValues([], nbPoints, mode);
    } else if(!Array.isArray(value)){
        return new Array(nbPoints).fill(value);
    } else if(value.length < nbPoints){
        return padValues(value, nbPoints, mode);   
    } else if(value.length > nbPoints){
        return value.slice(0, nbPoints);   
    }
    return value; 
}

function setOffset(value, nbPoints){
    if (!value || value.length == 0){
        return new Array(nbPoints).fill(0);
    } else if(!Array.isArray(value)){
        return new Array(nbPoints).fill(value);
    } 
    return null;
}

export function setParams1D(functionType, offset, values0, nbPoints, mode){
    offset = setOffset(offset, nbPoints);
    values0 = setValues(values0, nbPoints, mode);

    if(offset == null){ throw new Error("Length of offset in " + functionType + " must be 0 or 1."); }
    if(values0 == null){ throw new Error("Length of values0 in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints); } 
    return [offset, values0];
}

export function setParams2D(functionType, offset0x, offset0y, values0x, values0y, nbPoints, mode){
    offset0x = setOffset(offset0x, nbPoints);
    offset0y = setOffset(offset0y, nbPoints);
    values0x = setValues(values0x, nbPoints, mode);
    values0y = setValues(values0y, nbPoints, mode);

    if(offset0x == null){ throw new Error("Length of offset0x in " + functionType + " must be 0 or equal to nbPoints:" + nbPoints); }
    if(offset0y == null){ throw new Error("Length of offset0y in " + functionType + " must be 0 or equal to nbPoints:" + nbPoints); }
    if(values0x == null){ throw new Error("Length of values0x in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints); } 
    if(values0y == null){ throw new Error("Length of values0y in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints); } 
    
    return [offset0x, offset0y, values0x, values0y];
}