// Helper functions for GCodeGenerator

function extrude(nozzleDiameter, layerHeight, segmentLen, thickness){
    let points = [];
    let extrusion_multiplier = (nozzleDiameter/1.91)**2; //extrusion multiplier for correct filament thickness
    let totalExtruded = 0;
    points.push(0);
    console.log("T", thickness);
    for(var i = 0; i < segmentLen.length; i++){
        var newPoint = (segmentLen[i]*layerHeight/nozzleDiameter) * (4/Math.PI + layerHeight/nozzleDiameter);
        points.push(((newPoint + totalExtruded) * extrusion_multiplier).toFixed(3));
        totalExtruded += newPoint;
    }
    return points;
}

let round2pt = (value) => Math.floor(value*100)/100.0;
let euclideanDist = (p1, p2) => Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2 + (p1.z-p2.z)**2);


//Main functions to generate GCode, calculate clay height, calculate number of tubes
export function generateGCode(path, nozzleDiameter, printSpeed){
    if(Array.isArray(path) && path.length > 0){ // Path is a valid array
        let layerHeight = path[0].z;
        let printSpeeds = [10000]; // First move should be 10000
        let segmentLen = [];
        
        for(var i = 0; i < path.length - 1; i++){
            segmentLen.push(euclideanDist(path[i], path[i+1]));
            printSpeeds.push(Math.floor(printSpeed*60));
        };
        let thicknesses = path.filter((_, index) => (index + 1) % 4 === 0);
        console.log(thicknesses.length);
        let extr = extrude(nozzleDiameter, layerHeight, segmentLen, thicknesses);
        
        let startGcodePrefix = ";;; START GCODE ;;;\nM82 ;absolute extrusion mode\nG28 ;Home\nG1 X207.5 Y202.5 Z20 F10000 ;Move X and Y to center, Z to 20mm high\nG1 E2000 F20000 ; !!Prime Extruder\nG92 E0\n;;; ======\n";
        let endGcodePostfix = ";;; === END GCODE ===\nM83 ;Set to Relative Extrusion Mode\nG28 Z ;Home Z\n; === DEPRESSURIZE ===\nG91\nG91\nG1 E-200 F4000\nG90\nG90\n";
        let gcode = startGcodePrefix;
        for(var i = 0; i < (path.length); i++){
            x = round2pt(path[i].x);
            y = round2pt(path[i].y);
            z = round2pt(path[i].z);
            gcode += "G1 F" + printSpeeds[i]+ " X"+ x +" Y" + y + " Z" + z + " E" + extr[i] +"\n";
        }
        gcode += endGcodePostfix;
        return gcode;
    }
    var error_str = "Cannot call generateGCode on an empty path.";
    throw new Error(error_str);
}

export function downloadGCode(gcode_string, fileName="COILCAM_GCODE") {
    const blob = new Blob([gcode_string], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName; 
    link.style.display = 'none';
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

//Not fully implemented in Rhino, may not be correct
export function getNumTubes(path, nozzleDiameter, layerHeight){ 
    let segmentLen = [];
    for(var i = 1; i < len(path); i++){
        segmentLen.push(euclideanDist(path[i], path[i-1]));
    }    
    let extrusions = extrude(nozzleDiameter, layerHeight, segmentLen);
    let totalExtrusion = extrusions[extrusions.length - 1];
    return ((nozzleDiameter/2)^2*totalExtrusion)/((95.5/2)^2)/430; //multiplier from original gcode
}

window.downloadGCode = downloadGCode;
window.generateGCode = generateGCode;
window.getNumTubes = getNumTubes;