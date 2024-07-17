
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
$parcel$export(module.exports, "functions1D", () => $00969899720ecf46$exports);
$parcel$export(module.exports, "functions2D", () => $54b6873b653b0520$exports);
var $00969899720ecf46$exports = {};

$parcel$export($00969899720ecf46$exports, "sinusoidal", () => $4dbbfebae85fed22$export$2e2bcd8739ae039);
$parcel$export($00969899720ecf46$exports, "linear", () => $c2b09c09e9c34f0a$export$2e2bcd8739ae039);
$parcel$export($00969899720ecf46$exports, "staircase", () => $71d25318f3359294$export$2e2bcd8739ae039);
$parcel$export($00969899720ecf46$exports, "square", () => $98eb036bb0d342cf$export$2e2bcd8739ae039);
$parcel$export($00969899720ecf46$exports, "exponential", () => $880ea02f04cf849c$export$2e2bcd8739ae039);
// Helper Functions
function $2040f713c747fdf6$var$setParams(paramType, value, nbPoints, mode) {
    if (value == null) {
        if (mode == "multiplicative" && paramType == "values") return new Array(nbPoints).fill(1);
        else return new Array(nbPoints).fill(0);
    } else if (!Array.isArray(value)) return new Array(nbPoints).fill(value);
    else if (value.length == nbPoints) return value;
    return null;
}
function $2040f713c747fdf6$export$c3c5e174940bbb4f(functionType, offset, values0, nbPoints, mode) {
    offset = $2040f713c747fdf6$var$setParams("offset", offset, nbPoints, mode);
    values0 = $2040f713c747fdf6$var$setParams("values", values0, nbPoints, mode);
    if (offset == null) throw new Error("Length of offset in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (values0 == null) throw new Error("Length of values0 in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    return [
        offset,
        values0
    ];
}
function $2040f713c747fdf6$export$d49ab658f2d8f01e(functionType, offset0x, offset0y, values0x, values0y, nbPoints, mode) {
    offset0x = $2040f713c747fdf6$var$setParams("offset0x", offset0x, nbPoints, mode);
    offset0y = $2040f713c747fdf6$var$setParams("offset0y", offset0y, nbPoints, mode);
    values0x = $2040f713c747fdf6$var$setParams("values0x", values0x, nbPoints, mode);
    values0y = $2040f713c747fdf6$var$setParams("values0y", values0y, nbPoints, mode);
    if (offset0x == null) throw new Error("Length of offset in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (offset0y == null) throw new Error("Length of offset in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (values0x == null) throw new Error("Length of values0 in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (values0y == null) throw new Error("Length of values0 in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    return [
        offset0x,
        offset0y,
        values0x,
        values0y
    ];
}


function $4dbbfebae85fed22$export$2e2bcd8739ae039(amplitude, offset, nbPoints, values0, mode) {
    let values = [];
    [offset, values0] = (0, $2040f713c747fdf6$export$c3c5e174940bbb4f)("Sinusoidal", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == null) values.push(amplitude * Math.sin(2 * Math.PI / period * i + offset[i]) + values0[i]);
        else if (mode == "multiplicative") values.push(amplitude * Math.pow(base, ampExp * i + offset[i]) * values0[i]);
    }
    console.log("SINUSOIDAL VALUES:", values);
    return values;
}
window.sinusoidal = $4dbbfebae85fed22$export$2e2bcd8739ae039;



function $c2b09c09e9c34f0a$export$2e2bcd8739ae039(amplitude, offset, nbPoints, values0, mode) {
    let values = [];
    [offset, values0] = (0, $2040f713c747fdf6$export$c3c5e174940bbb4f)("Linear", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive") values.push(amplitude * i + offset[i] + values0[i]);
        else if (mode == "multiplicative") values.push((amplitude * i + offset[i]) * values0[i]);
    }
    return values;
}
window.linear = $c2b09c09e9c34f0a$export$2e2bcd8739ae039;



function $880ea02f04cf849c$export$2e2bcd8739ae039(amplitude, base, ampExp, offset, nbPoints, values0, mode) {
    let values = [];
    [offset, values0] = (0, $2040f713c747fdf6$export$c3c5e174940bbb4f)("Exponential", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == null) values.push(amplitude * Math.pow(base, ampExp * i + offset[i]) + values0[i]);
        else if (mode == "multiplicative") values.push(amplitude * Math.pow(base, ampExp * i + offset[i]) * values0[i]);
    }
    return values;
}
window.exponential = $880ea02f04cf849c$export$2e2bcd8739ae039;



function $98eb036bb0d342cf$export$2e2bcd8739ae039(amplitude, period, offset, bumps, nbPoints, values0, mode) {
    let values = [];
    [offset, values0] = (0, $2040f713c747fdf6$export$c3c5e174940bbb4f)("Square", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == null) {
            if (bumps && bumps <= (i + offset[i]) % period) values.push(amplitude * 0 + values0[i]);
            else values.push(amplitude * 1 + values0[i]);
        } else if (mode == "multiplicative") {
            if (bumps && bumps <= (i + offset[i]) % period) values.push(amplitude * 0 * values0[i]);
            else values.push(amplitude * 1 * values0[i]);
        }
    }
    return values;
}
$parcel$global.square = $98eb036bb0d342cf$export$2e2bcd8739ae039;



function $71d25318f3359294$export$2e2bcd8739ae039(stepWidth, stepHeight, offset, nbPoints, values0, mode) {
    let values = [];
    let index = 0;
    [offset, values0] = (0, $2040f713c747fdf6$export$c3c5e174940bbb4f)("Staircase", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == null) {
            if (i % stepWidth == 0 && i != 0) index += stepHeight;
            values.push(index + offset[i] + values0[i]);
        }
        if (mode == "multiplicative") {
            if (i % stepWidth == 0 && i != 0) index += stepHeight;
            values.push((index + offset[i]) * values0[i]);
        }
    }
    return values;
}
window.staircase = $71d25318f3359294$export$2e2bcd8739ae039;




var $54b6873b653b0520$exports = {};

$parcel$export($54b6873b653b0520$exports, "sinusoidal2D", () => $dd97bf293f53b473$export$2e2bcd8739ae039);
$parcel$export($54b6873b653b0520$exports, "linear2D", () => $6f6401d59e48f3f2$export$2e2bcd8739ae039);

function $dd97bf293f53b473$export$2e2bcd8739ae039(amplitudeX1, periodX1, amplitudeX2, periodX2, offset0x, offset0y, nbPoints, values0x, values0y, mode) {
    let pointsX = [];
    let pointsY = [];
    [offset0x, offset0y, values0x, values0y] = (0, $2040f713c747fdf6$export$d49ab658f2d8f01e)("Sinusoidal2D", offset0x, offset0y, values0x, values0y, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == null) {
            pointsX.push(amplitudeX1 * Math.cos(2 * Math.PI * i / periodX1 + offset0x[i]) + values0x[i]);
            pointsY.push(amplitudeX2 * Math.sin(2 * Math.PI * i / periodX2 + offset0y[i]) + values0y[i]);
        } else if (mode == "multiplicative") {
            pointsX.push(amplitudeX1 * Math.cos(2 * Math.PI * i / periodX1 + offset0x[i]) * values0x[i]);
            pointsY.push(amplitudeX2 * Math.sin(2 * Math.PI * i / periodX2 + offset0y[i]) * values0y[i]);
        }
    }
    return new Array(pointsX, pointsY);
}
window.sinusoidal2D = $dd97bf293f53b473$export$2e2bcd8739ae039;



function $6f6401d59e48f3f2$export$2e2bcd8739ae039(amplitudeX1, offsetX1, amplitudeX2, offsetX2, nbPoints, values0x, values0y, mode) {
    let pointsX = [];
    let pointsY = [];
    [offsetX1, offsetX2, values0x, values0y] = (0, $2040f713c747fdf6$export$d49ab658f2d8f01e)("Linear2D", offsetX1, offsetX2, values0x, values0y, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == "") {
            pointsX.push(amplitudeX1 * i + offsetX1[i] + values0x[i]);
            pointsY.push(amplitudeX2 * i + offsetX2[i] + values0y[i]);
        } else if (mode == "multiplicative") {
            pointsX.push((amplitudeX1 * i + offsetX1[i]) * values0x[i]);
            pointsY.push((amplitudeX2 * i + offsetX2[i]) * values0y[i]);
        }
    }
    return new Array(pointsX, pointsY);
}
window.linear2D = $6f6401d59e48f3f2$export$2e2bcd8739ae039;




 // note: any .js files that only export a single function need to export 
 // that function as "export default" for "> npm run build" to execute properly
 // Run "> npm run build", then "npm publish", (then update the version) every time a change is made!


//# sourceMappingURL=main.js.map
