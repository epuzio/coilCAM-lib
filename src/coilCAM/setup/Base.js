import Flatten from '../../../node_modules/@flatten-js/core/dist/main.mjs'; 
const {point, Polygon, Segment} = Flatten;

export function baseSpiral(position, nbPointsInLayer, layerHeight, nozzle_diameter, radius, thickness=0){ 
    // Add spiral centered at the middle of the vessel, width of spiral based on nozzle_diameter
    let basePath = [];
    let height = layerHeight;

    let diameter = radius*2;
    let layers = (nbPointsInLayer*diameter/(nozzle_diameter*4));
    let scale = nozzle_diameter/Math.PI;
    let bias = .0001;
    let step = 2 * Math.PI / nbPointsInLayer;
    let offset = nbPointsInLayer % 2 == 0 ? 0 : Math.PI/(nbPointsInLayer); //offset slightly if odd # of points

    for (let angle = -layers * step; angle < layers * step; angle += step) {
        let spiralRadius = scale * angle;
        if (angle < 0) { //inwards spiral
            const newPoint = { // Store points in toolpath as objects for greater readability: (x coordinate, y coordinate, z coordinate, thickness)
                x: (bias + position[0] + spiralRadius * Math.cos(angle-offset)),
                y: (bias + position[1] + spiralRadius * Math.sin(angle-offset)),
                z: height,
                t: thickness
            }
            basePath.push(newPoint);
        }
        else { //outwards spiral
            const newPoint = { // Store points in toolpath as objects for greater readability: (x coordinate, y coordinate, z coordinate, thickness)
                x: (bias + position[0] + spiralRadius * Math.sin(angle+Math.PI/2)),
                y: (bias + position[1] + spiralRadius * Math.cos(angle+Math.PI/2)),
                z: height,
                t: thickness
            }
            basePath.push(newPoint);
        }
    }
    return basePath;
}

 export function baseFill(position, path, nbPointsInLayer, layerHeight, nozzle_diameter, radius, thickness=0){
    // Add lines filling in the base of the vessel
    let basePath = [];
    let height = layerHeight;
    for(let i = 0; i < nbPointsInLayer; i++){
        basePath.push(point(path[i].x, path[i].y));
    }

    let baseCircle = new Polygon(basePath);
    let diameter = radius*2;
    let start = [position[0] - diameter, position[1] - diameter, layerHeight*2];
    let newPoints = [];

    for (let i = 0; i < (diameter*2); i+=nozzle_diameter){
        let line = new Segment(point([start[0]+(i), start[1]]), point([start[0]+(i), start[1]+(diameter*2)]));
        let intersectionPoints = (line.intersect(baseCircle).map(pt => [pt.x, pt.y])).flat();
        if(intersectionPoints.length == 4){
            const newPointBottom = {
                x: intersectionPoints[0],
                y: intersectionPoints[1],
                z: height,
                t: thickness
            }
            const newPointTop = {
                x: intersectionPoints[2],
                y: intersectionPoints[3],
                z: height,
                t: thickness
            }
            if(i % (2*nozzle_diameter) == 0){
                newPoints.push(newPointBottom, newPointTop);
            } else{
                newPoints.push(newPointTop, newPointBottom);
            }
        } 
    }
    return newPoints;
}

export function base(position, path, nbPointsInLayer, layerHeight, nozzleDiameter, radius){
    // Construct a base where the top layer is a spiral pattern and the bottom layer are lines running
    // across the base of the vessel. Pattern variation contributes to greater stability in the final print.
    let bottomBase = baseFill(position, path, nbPointsInLayer, layerHeight, nozzleDiameter, radius);
    let topBase = baseSpiral(position, nbPointsInLayer, layerHeight*2, nozzleDiameter, radius);
    let newPath = bottomBase.concat(topBase);
    return newPath;
}

export function addBase(b, path){
    return b.concat(path);
}

window.baseSpiral = baseSpiral;
window.baseFill = baseFill;
window.base = base;
window.addBase = addBase;