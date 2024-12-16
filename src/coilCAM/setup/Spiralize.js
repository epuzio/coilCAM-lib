export default function spiralize(path, layerHeight){
    var nbPointsInLayer = [];
    var currHeight = path[0].z;
    var ctr = 0;
    for(let i = 0; i < path.length; i++){
        if(path[i].z > currHeight){
            currHeight = path[i].z;
            nbPointsInLayer.push(ctr);
            ctr = 0;
        }
        ctr++;
    }
    nbPointsInLayer.push(ctr);

    currLayer = 0;
    nPointsIterated = 0;
    var points = path;
    for(let i = 0; i < nbPointsInLayer.length; i++){
        let ratio = layerHeight / nbPointsInLayer[i];
        for(let j = 0; j < nbPointsInLayer[i]; j++){
            points[nPointsIterated + j].z += ((j+1)*(ratio));
        }
        nPointsIterated += nbPointsInLayer[i];
    }
    return points;
}

window.spiralize = spiralize;