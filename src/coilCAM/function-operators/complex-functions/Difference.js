import Flatten from '../../../../node_modules/@flatten-js/core/dist/main.mjs'; 
// import Flatten from 'https://unpkg.com/@flatten-js/core/dist/main.mjs';

const {point, Polygon} = Flatten;
const {unify} = Flatten.BooleanOperations;

export default function difference(path0, path1, by_layer = true){
  let layers = new Set();
  path0.sort((a, b) => a.z - b.z);
  path1.sort((a, b) =>  a.z - b.z);
  path0.forEach(point => layers.add(point.z));
  path1.forEach(point => layers.add(point.z));
  let shapes = new Array();
  let total_num_points = 0;
  let newPath = []

  for(let layer of layers){
    let layer_points0 = path0.filter(p => p.z == layer).map(p => point([p.x, p.y]));
    let layer_points1 = path1.filter(p => p.z == layer).map(p => point([p.x, p.y]));
    let polygon0 = new Polygon(layer_points0);
    let polygon1 = new Polygon(layer_points1);

    let thicknesses = new Map(); //store thickness in external data structure
    for(let i = 0; i < path0.length; i++){
      if (path0[i].z == layer){
        thicknesses.set([path0[i].x, path0[i].y], path0[i].t);
      }
    }
    for(let i = 0; i < path1.length; i ++){
      if (path1[i].z == layer){
        thicknesses.set([path1[i].x, path1[i].y], path1[i].t);
      }
    }

    //to add: tolerance
    let combinedPolygon = subtract(polygon0, polygon1);
    let polygonSVG = combinedPolygon.svg(); //convert to svg to rely on flatten-js's even-odd algorithm
    const shapesString = polygonSVG.match(/(M[^M]+z)/g); //separate svg into just the section containing points
    let shapeidx = 0;

    for (let shape of shapesString){
      let pairs = shape.match(/L-?\d+(\.\d+)?,-?\d+(\.\d+)?/g); //get pairs of points (not starting with M)
      for (let pair of pairs){
        var thickness = thicknesses.has(pair.match(/-?\d+(\.\d+)?/g)); //todo: fix thickness (right now it's defaulting to "false" = 0)
        let [xNew, yNew] = pair.match(/-?\d+(\.\d+)?/g).map(parseFloat);
            const newPoint = { // Store points in toolpath as objects for greater readability: (x coordinate, y coordinate, z coordinate, thickness)
                x: xNew,
                y: yNew,
                z: layer,
                t: thickness
            }
            newPath.push(newPoint);
      }
    }
  }
  return newPath;
}

window.difference = difference;