export default function spiralize(path){
    if(Array.isArray(path) && path.length > 0){ // Path is a valid array
        var layerHeight = path[0].z;
        var nbPointsInLayer = [];
        var currHeight = layerHeight;
        var ctr = 0;
        // Points per layer can vary because of union/difference operators - calculate nbPointsInLayer per layer
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
            var ratio = layerHeight/(nbPointsInLayer[i]);
            for(let j = 0; j < nbPointsInLayer[i]; j++){
                points[nPointsIterated + j].z += ((j+1)*ratio);
            }
            nPointsIterated += nbPointsInLayer[i];
        }


        const filteredArr = arr.filter(el => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
          });
        return points;
    }
}

window.spiralize = spiralize;