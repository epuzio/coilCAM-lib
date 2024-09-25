export default function centerPrint(path, position, bedDimensions, layerHeight){
    if(Array.isArray(path) && path.length > 0){ // Path is a valid array
        let bedXOffset = bedDimensions[0]/2 - position[0];
        let bedYOffset = bedDimensions[1]/2 - position[1];
        let bedZOffset = layerHeight - path[0].z;
        
        for (var i = 0; i < path.length; i++){
            path[i].x -= bedXOffset;
            path[i].y -= bedYOffset;
            path[i].z -= bedZOffset;
        }
        return path;
    }
    var error_str = "Cannot call centerPrint on an empty path.";
    throw new Error(error_str);
}

window.centerPrint = centerPrint;
