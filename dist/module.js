
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var $b10132850f69723d$exports = {};

$parcel$export($b10132850f69723d$exports, "sinusoidal", () => $808713ad73309996$export$2e2bcd8739ae039);
$parcel$export($b10132850f69723d$exports, "linear", () => $0a29d227fcd8726d$export$2e2bcd8739ae039);
$parcel$export($b10132850f69723d$exports, "staircase", () => $ffbd02041277dbcf$export$2e2bcd8739ae039);
$parcel$export($b10132850f69723d$exports, "square", () => $5f27afff23801d10$export$2e2bcd8739ae039);
$parcel$export($b10132850f69723d$exports, "exponential", () => $43a99dec0886ee38$export$2e2bcd8739ae039);
// Helper Functions
function $df7b7fea591ea777$var$setParams(paramType, value, nbPoints, mode) {
    if (value.length == 0) {
        if (mode == "multiplicative" && paramType == "values") return new Array(nbPoints).fill(1);
        else return new Array(nbPoints).fill(0);
    } else if (!Array.isArray(value)) return new Array(nbPoints).fill(value);
    else if (value.length == nbPoints) return value;
    return null;
}
function $df7b7fea591ea777$export$c3c5e174940bbb4f(functionType, offset, values0, nbPoints, mode) {
    offset = $df7b7fea591ea777$var$setParams("offset", offset, nbPoints, mode);
    values0 = $df7b7fea591ea777$var$setParams("values", values0, nbPoints, mode);
    if (offset == null) throw new Error("Length of offset in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (values0 == null) throw new Error("Length of values0 in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    return [
        offset,
        values0
    ];
}
function $df7b7fea591ea777$export$d49ab658f2d8f01e(functionType, offset0x, offset0y, values0x, values0y, nbPoints, mode) {
    offset0x = $df7b7fea591ea777$var$setParams("offset0x", offset0x, nbPoints, mode);
    offset0y = $df7b7fea591ea777$var$setParams("offset0y", offset0y, nbPoints, mode);
    values0x = $df7b7fea591ea777$var$setParams("values0x", values0x, nbPoints, mode);
    values0y = $df7b7fea591ea777$var$setParams("values0y", values0y, nbPoints, mode);
    if (offset0x == null) throw new Error("Length of offset0x in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (offset0y == null) throw new Error("Length of offset0y in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (values0x == null) throw new Error("Length of values0x in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    if (values0y == null) throw new Error("Length of values0y in " + functionType + " must be 0 or 1 or equal to nbPoints:" + nbPoints);
    return [
        offset0x,
        offset0y,
        values0x,
        values0y
    ];
}


function $808713ad73309996$export$2e2bcd8739ae039(amplitude, period, offset, nbPoints, values0, mode = []) {
    let values = [];
    [offset, values0] = (0, $df7b7fea591ea777$export$c3c5e174940bbb4f)("Sinusoidal", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0) values.push(amplitude * Math.sin(2 * Math.PI / period * i + offset[i]) + values0[i]);
        else if (mode == "multiplicative") values.push(amplitude * Math.sin(2 * Math.PI / period * i + offset[i]) * values0[i]);
        else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return values;
}
window.sinusoidal = $808713ad73309996$export$2e2bcd8739ae039;



function $0a29d227fcd8726d$export$2e2bcd8739ae039(amplitude, offset, nbPoints, values0, mode = []) {
    let values = [];
    [offset, values0] = (0, $df7b7fea591ea777$export$c3c5e174940bbb4f)("Linear", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0) values.push(amplitude * i + offset[i] + values0[i]);
        else if (mode == "multiplicative") values.push((amplitude * i + offset[i]) * values0[i]);
        else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return values;
}
window.linear = $0a29d227fcd8726d$export$2e2bcd8739ae039;



function $43a99dec0886ee38$export$2e2bcd8739ae039(amplitude, base, ampExp, offset, nbPoints, values0, mode = []) {
    let values = [];
    [offset, values0] = (0, $df7b7fea591ea777$export$c3c5e174940bbb4f)("Exponential", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0) values.push(amplitude * Math.pow(base, ampExp * i + offset[i]) + values0[i]);
        else if (mode == "multiplicative") values.push(amplitude * Math.pow(base, ampExp * i + offset[i]) * values0[i]);
        else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return values;
}
window.exponential = $43a99dec0886ee38$export$2e2bcd8739ae039;



function $5f27afff23801d10$export$2e2bcd8739ae039(amplitude, period, offset, bumps, nbPoints, values0, mode = []) {
    let values = [];
    [offset, values0] = (0, $df7b7fea591ea777$export$c3c5e174940bbb4f)("Square", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0) {
            if (bumps && bumps <= (i + offset[i]) % period) values.push(amplitude * 0 + values0[i]);
            else values.push(amplitude * 1 + values0[i]);
        } else if (mode == "multiplicative") {
            if (bumps && bumps <= (i + offset[i]) % period) values.push(amplitude * 0 * values0[i]);
            else values.push(amplitude * 1 * values0[i]);
        } else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return values;
}
$parcel$global.square = $5f27afff23801d10$export$2e2bcd8739ae039;



function $ffbd02041277dbcf$export$2e2bcd8739ae039(stepWidth, stepHeight, offset, nbPoints, values0, mode = []) {
    let values = [];
    let index = 0;
    [offset, values0] = (0, $df7b7fea591ea777$export$c3c5e174940bbb4f)("Staircase", offset, values0, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode == 0) {
            if (i % stepWidth == 0 && i != 0) index += stepHeight;
            values.push(index + offset[i] + values0[i]);
        } else if (mode == "multiplicative") {
            if (i % stepWidth == 0 && i != 0) index += stepHeight;
            values.push((index + offset[i]) * values0[i]);
        } else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return values;
}
window.staircase = $ffbd02041277dbcf$export$2e2bcd8739ae039;




var $cff7f9e5cefec9f5$exports = {};

$parcel$export($cff7f9e5cefec9f5$exports, "sinusoidal2D", () => $5f665ced0fbd930d$export$2e2bcd8739ae039);
$parcel$export($cff7f9e5cefec9f5$exports, "linear2D", () => $530fae6e2f151dd6$export$2e2bcd8739ae039);

function $5f665ced0fbd930d$export$2e2bcd8739ae039(amplitudeX1, periodX1, amplitudeX2, periodX2, offset0x, offset0y, nbPoints, values0x, values0y, mode) {
    let pointsX = [];
    let pointsY = [];
    [offset0x, offset0y, values0x, values0y] = (0, $df7b7fea591ea777$export$d49ab658f2d8f01e)("Sinusoidal2D", offset0x, offset0y, values0x, values0y, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0) {
            pointsX.push(amplitudeX1 * Math.cos(2 * Math.PI * i / periodX1 + offset0x[i]) + values0x[i]);
            pointsY.push(amplitudeX2 * Math.sin(2 * Math.PI * i / periodX2 + offset0y[i]) + values0y[i]);
        } else if (mode == "multiplicative") {
            pointsX.push(amplitudeX1 * Math.cos(2 * Math.PI * i / periodX1 + offset0x[i]) * values0x[i]);
            pointsY.push(amplitudeX2 * Math.sin(2 * Math.PI * i / periodX2 + offset0y[i]) * values0y[i]);
        } else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return new Array(pointsX, pointsY);
}
window.sinusoidal2D = $5f665ced0fbd930d$export$2e2bcd8739ae039;



function $530fae6e2f151dd6$export$2e2bcd8739ae039(amplitudeX1, offsetX1, amplitudeX2, offsetX2, nbPoints, values0x, values0y, mode = []) {
    let pointsX = [];
    let pointsY = [];
    [offsetX1, offsetX2, values0x, values0y] = (0, $df7b7fea591ea777$export$d49ab658f2d8f01e)("Linear2D", offsetX1, offsetX2, values0x, values0y, nbPoints, mode);
    for(let i = 0; i < nbPoints; i++){
        if (mode == "additive" || mode.length == 0) {
            pointsX.push(amplitudeX1 * i + offsetX1[i] + values0x[i]);
            pointsY.push(amplitudeX2 * i + offsetX2[i] + values0y[i]);
        } else if (mode == "multiplicative") {
            pointsX.push((amplitudeX1 * i + offsetX1[i]) * values0x[i]);
            pointsY.push((amplitudeX2 * i + offsetX2[i]) * values0y[i]);
        } else throw new Error('Mode must be "additive", "multiplicative" or left blank.');
    }
    return new Array(pointsX, pointsY);
}
window.linear2D = $530fae6e2f151dd6$export$2e2bcd8739ae039;




var $8a2c02f53d079fce$exports = {};

$parcel$export($8a2c02f53d079fce$exports, "difference", () => $685d2651675ad770$export$2e2bcd8739ae039);
$parcel$export($8a2c02f53d079fce$exports, "union", () => $d882048206233452$export$2e2bcd8739ae039);
$parcel$export($8a2c02f53d079fce$exports, "waveform", () => $2935d9173ffd2f41$export$2e2bcd8739ae039);
/**
 * Global constant CCW defines counterclockwise direction of arc
 * @type {boolean}
 */ const $271a1c686af88dba$export$ce920184faf97f5 = true;
/**
 * Global constant CW defines clockwise direction of arc
 * @type {boolean}
 */ const $271a1c686af88dba$export$640171019d58eb6d = false;
/**
 * Defines orientation for face of the polygon: clockwise, counterclockwise
 * or not orientable in the case of self-intersection
 * @type {{CW: number, CCW: number, NOT_ORIENTABLE: number}}
 */ const $271a1c686af88dba$export$7423c88bc54edb74 = {
    CCW: -1,
    CW: 1,
    NOT_ORIENTABLE: 0
};
const $271a1c686af88dba$var$PIx2 = 2 * Math.PI;
const $271a1c686af88dba$export$48ea0cac79c83ca8 = 1;
const $271a1c686af88dba$export$be7fee058d85725d = 0;
const $271a1c686af88dba$export$a523954c60dca5e4 = 2;
const $271a1c686af88dba$var$CONTAINS = 3;
const $271a1c686af88dba$var$INTERLACE = 4;
const $271a1c686af88dba$export$d8b1260efb4f7671 = 1;
const $271a1c686af88dba$export$f04bb74d32d98a2c = 2;
const $271a1c686af88dba$var$NOT_VERTEX$1 = 0;
const $271a1c686af88dba$var$START_VERTEX$1 = 1;
const $271a1c686af88dba$var$END_VERTEX$1 = 2;
var $271a1c686af88dba$var$Constants = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BOUNDARY: $271a1c686af88dba$export$a523954c60dca5e4,
    CCW: $271a1c686af88dba$export$ce920184faf97f5,
    CONTAINS: $271a1c686af88dba$var$CONTAINS,
    CW: $271a1c686af88dba$export$640171019d58eb6d,
    END_VERTEX: $271a1c686af88dba$var$END_VERTEX$1,
    INSIDE: $271a1c686af88dba$export$48ea0cac79c83ca8,
    INTERLACE: $271a1c686af88dba$var$INTERLACE,
    NOT_VERTEX: $271a1c686af88dba$var$NOT_VERTEX$1,
    ORIENTATION: $271a1c686af88dba$export$7423c88bc54edb74,
    OUTSIDE: $271a1c686af88dba$export$be7fee058d85725d,
    OVERLAP_OPPOSITE: $271a1c686af88dba$export$f04bb74d32d98a2c,
    OVERLAP_SAME: $271a1c686af88dba$export$d8b1260efb4f7671,
    PIx2: $271a1c686af88dba$var$PIx2,
    START_VERTEX: $271a1c686af88dba$var$START_VERTEX$1
});
/**
 * Created by Alex Bol on 2/18/2017.
 */ /**
 * Floating point comparison tolerance.
 * Default value is 0.000001 (10e-6)
 * @type {number}
 */ let $271a1c686af88dba$var$DP_TOL = 0.000001;
/**
 * Set new floating point comparison tolerance
 * @param {number} tolerance
 */ function $271a1c686af88dba$var$setTolerance(tolerance) {
    $271a1c686af88dba$var$DP_TOL = tolerance;
}
/**
 * Get floating point comparison tolerance
 * @returns {number}
 */ function $271a1c686af88dba$var$getTolerance() {
    return $271a1c686af88dba$var$DP_TOL;
}
const $271a1c686af88dba$var$DECIMALS = 3;
/**
 * Returns *true* if value comparable to zero
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */ function $271a1c686af88dba$var$EQ_0(x) {
    return x < $271a1c686af88dba$var$DP_TOL && x > -$271a1c686af88dba$var$DP_TOL;
}
/**
 * Returns *true* if two values are equal up to DP_TOL
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */ function $271a1c686af88dba$var$EQ(x, y) {
    return x - y < $271a1c686af88dba$var$DP_TOL && x - y > -$271a1c686af88dba$var$DP_TOL;
}
/**
 * Returns *true* if first argument greater than second argument up to DP_TOL
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */ function $271a1c686af88dba$var$GT(x, y) {
    return x - y > $271a1c686af88dba$var$DP_TOL;
}
/**
 * Returns *true* if first argument greater than or equal to second argument up to DP_TOL
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */ function $271a1c686af88dba$var$GE(x, y) {
    return x - y > -$271a1c686af88dba$var$DP_TOL;
}
/**
 * Returns *true* if first argument less than second argument up to DP_TOL
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */ function $271a1c686af88dba$var$LT(x, y) {
    return x - y < -$271a1c686af88dba$var$DP_TOL;
}
/**
 * Returns *true* if first argument less than or equal to second argument up to DP_TOL
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */ function $271a1c686af88dba$var$LE(x, y) {
    return x - y < $271a1c686af88dba$var$DP_TOL;
}
var $271a1c686af88dba$export$d2ca453b913dcdea = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    DECIMALS: $271a1c686af88dba$var$DECIMALS,
    EQ: $271a1c686af88dba$var$EQ,
    EQ_0: $271a1c686af88dba$var$EQ_0,
    GE: $271a1c686af88dba$var$GE,
    GT: $271a1c686af88dba$var$GT,
    LE: $271a1c686af88dba$var$LE,
    LT: $271a1c686af88dba$var$LT,
    getTolerance: $271a1c686af88dba$var$getTolerance,
    setTolerance: $271a1c686af88dba$var$setTolerance
});
let $271a1c686af88dba$export$2e2bcd8739ae039 = {
    Utils: $271a1c686af88dba$export$d2ca453b913dcdea,
    Errors: undefined,
    Matrix: undefined,
    Planar_set: undefined,
    Point: undefined,
    Vector: undefined,
    Line: undefined,
    Circle: undefined,
    Segment: undefined,
    Arc: undefined,
    Box: undefined,
    Edge: undefined,
    Face: undefined,
    Ray: undefined,
    Ray_shooting: undefined,
    Multiline: undefined,
    Polygon: undefined,
    Distance: undefined,
    Inversion: undefined
};
for(let c in $271a1c686af88dba$var$Constants)$271a1c686af88dba$export$2e2bcd8739ae039[c] = $271a1c686af88dba$var$Constants[c];
Object.defineProperty($271a1c686af88dba$export$2e2bcd8739ae039, "DP_TOL", {
    get: function() {
        return $271a1c686af88dba$var$getTolerance();
    },
    set: function(value) {
        $271a1c686af88dba$var$setTolerance(value);
    }
});
/**
 * Created by Alex Bol on 2/19/2017.
 */ /**
 * Class of system errors
 */ class $271a1c686af88dba$export$b8e9cd941e8016ac {
    /**
     * Throw error ILLEGAL_PARAMETERS when cannot instantiate from given parameter
     * @returns {ReferenceError}
     */ static get ILLEGAL_PARAMETERS() {
        return new ReferenceError("Illegal Parameters");
    }
    /**
     * Throw error ZERO_DIVISION to catch situation of zero division
     * @returns {Error}
     */ static get ZERO_DIVISION() {
        return new Error("Zero division");
    }
    /**
     * Error to throw from BooleanOperations module in case when fixBoundaryConflicts not capable to fix it
     * @returns {Error}
     */ static get UNRESOLVED_BOUNDARY_CONFLICT() {
        return new Error("Unresolved boundary conflict in boolean operation");
    }
    /**
     * Error to throw from LinkedList:testInfiniteLoop static method
     * in case when circular loop detected in linked list
     * @returns {Error}
     */ static get INFINITE_LOOP() {
        return new Error("Infinite loop");
    }
    static get CANNOT_COMPLETE_BOOLEAN_OPERATION() {
        return new Error("Cannot complete boolean operation");
    }
    static get CANNOT_INVOKE_ABSTRACT_METHOD() {
        return new Error("Abstract method cannot be invoked");
    }
    static get OPERATION_IS_NOT_SUPPORTED() {
        return new Error("Operation is not supported");
    }
    static get UNSUPPORTED_SHAPE_TYPE() {
        return new Error("Unsupported shape type");
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Errors = $271a1c686af88dba$export$b8e9cd941e8016ac;
/**
 * Class implements bidirectional non-circular linked list. <br/>
 * LinkedListElement - object of any type that has properties next and prev.
 */ class $271a1c686af88dba$var$LinkedList {
    constructor(first, last){
        this.first = first;
        this.last = last || this.first;
    }
    [Symbol.iterator]() {
        let value = undefined;
        return {
            next: ()=>{
                value = value ? value.next : this.first;
                return {
                    value: value,
                    done: value === undefined
                };
            }
        };
    }
    /**
     * Return number of elements in the list
     * @returns {number}
     */ get size() {
        let counter = 0;
        for (let edge of this)counter++;
        return counter;
    }
    /**
     * Return array of elements from start to end,
     * If start or end not defined, take first as start, last as end
     * @returns {Array}
     */ toArray(start, end) {
        let elements = [];
        let from = start || this.first;
        let to = end || this.last;
        let element = from;
        if (element === undefined) return elements;
        do {
            elements.push(element);
            element = element.next;
        }while (element !== to.next);
        return elements;
    }
    /**
     * Append new element to the end of the list
     * @param {LinkedListElement} element
     * @returns {LinkedList}
     */ append(element) {
        if (this.isEmpty()) this.first = element;
        else {
            element.prev = this.last;
            this.last.next = element;
        }
        // update edge to be last
        this.last = element;
        // nullify non-circular links
        this.last.next = undefined;
        this.first.prev = undefined;
        return this;
    }
    /**
     * Insert new element to the list after elementBefore
     * @param {LinkedListElement} newElement
     * @param {LinkedListElement} elementBefore
     * @returns {LinkedList}
     */ insert(newElement, elementBefore) {
        if (this.isEmpty()) {
            this.first = newElement;
            this.last = newElement;
        } else if (elementBefore === null || elementBefore === undefined) {
            newElement.next = this.first;
            this.first.prev = newElement;
            this.first = newElement;
        } else {
            /* set links to new element */ let elementAfter = elementBefore.next;
            elementBefore.next = newElement;
            if (elementAfter) elementAfter.prev = newElement;
            /* set links from new element */ newElement.prev = elementBefore;
            newElement.next = elementAfter;
            /* extend list if new element added after the last element */ if (this.last === elementBefore) this.last = newElement;
        }
        // nullify non-circular links
        this.last.next = undefined;
        this.first.prev = undefined;
        return this;
    }
    /**
     * Remove element from the list
     * @param {LinkedListElement} element
     * @returns {LinkedList}
     */ remove(element) {
        // special case if last edge removed
        if (element === this.first && element === this.last) {
            this.first = undefined;
            this.last = undefined;
        } else {
            // update linked list
            if (element.prev) element.prev.next = element.next;
            if (element.next) element.next.prev = element.prev;
            // update first if need
            if (element === this.first) this.first = element.next;
            // update last if need
            if (element === this.last) this.last = element.prev;
        }
        return this;
    }
    /**
     * Return true if list is empty
     * @returns {boolean}
     */ isEmpty() {
        return this.first === undefined;
    }
    /**
     * Throw an error if circular loop detected in the linked list
     * @param {LinkedListElement} first element to start iteration
     * @throws {Errors.INFINITE_LOOP}
     */ static testInfiniteLoop(first) {
        let edge = first;
        let controlEdge = first;
        do {
            if (edge != first && edge === controlEdge) throw $271a1c686af88dba$export$b8e9cd941e8016ac.INFINITE_LOOP; // new Error("Infinite loop")
            edge = edge.next;
            controlEdge = controlEdge.next.next;
        }while (edge != first);
    }
}
const $271a1c686af88dba$var$defaultAttributes = {
    stroke: "black"
};
class $271a1c686af88dba$var$SVGAttributes {
    constructor(args = $271a1c686af88dba$var$defaultAttributes){
        for(const property in args)this[property] = args[property];
        this.stroke = args.stroke ?? $271a1c686af88dba$var$defaultAttributes.stroke;
    }
    toAttributesString() {
        return Object.keys(this).reduce((acc, key)=>acc + (this[key] !== undefined ? this.toAttrString(key, this[key]) : ""), ``);
    }
    toAttrString(key, value) {
        const SVGKey = key === "className" ? "class" : this.convertCamelToKebabCase(key);
        return value === null ? `${SVGKey} ` : `${SVGKey}="${value.toString()}" `;
    }
    convertCamelToKebabCase(str) {
        return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).join("-").toLowerCase();
    }
}
function $271a1c686af88dba$var$convertToString(attrs) {
    return new $271a1c686af88dba$var$SVGAttributes(attrs).toAttributesString();
}
/**
 * Intersection
 *
 * */ function $271a1c686af88dba$var$intersectLine2Line(line1, line2) {
    let ip = [];
    let [A1, B1, C1] = line1.standard;
    let [A2, B2, C2] = line2.standard;
    /* Cramer's rule */ let det = A1 * B2 - B1 * A2;
    let detX = C1 * B2 - B1 * C2;
    let detY = A1 * C2 - C1 * A2;
    if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(det)) {
        let x, y;
        if (B1 === 0) {
            x = C1 / A1;
            y = detY / det;
        } else if (B2 === 0) {
            x = C2 / A2;
            y = detY / det;
        } else if (A1 === 0) {
            x = detX / det;
            y = C1 / B1;
        } else if (A2 === 0) {
            x = detX / det;
            y = C2 / B2;
        } else {
            x = detX / det;
            y = detY / det;
        }
        ip.push(new $271a1c686af88dba$export$2e2bcd8739ae039.Point(x, y));
    }
    return ip;
}
function $271a1c686af88dba$var$intersectLine2Circle(line, circle) {
    let ip = [];
    let prj = circle.pc.projectionOn(line); // projection of circle center on a line
    let dist = circle.pc.distanceTo(prj)[0]; // distance from circle center to projection
    if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(dist, circle.r)) ip.push(prj);
    else if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, circle.r)) {
        let delta = Math.sqrt(circle.r * circle.r - dist * dist);
        let v_trans, pt;
        v_trans = line.norm.rotate90CCW().multiply(delta);
        pt = prj.translate(v_trans);
        ip.push(pt);
        v_trans = line.norm.rotate90CW().multiply(delta);
        pt = prj.translate(v_trans);
        ip.push(pt);
    }
    return ip;
}
function $271a1c686af88dba$var$intersectLine2Box(line, box) {
    let ips = [];
    for (let seg of box.toSegments()){
        let ips_tmp = $271a1c686af88dba$var$intersectSegment2Line(seg, line);
        for (let pt of ips_tmp)if (!$271a1c686af88dba$var$ptInIntPoints(pt, ips)) ips.push(pt);
    }
    return ips;
}
function $271a1c686af88dba$var$intersectLine2Arc(line, arc) {
    let ip = [];
    if ($271a1c686af88dba$var$intersectLine2Box(line, arc.box).length === 0) return ip;
    let circle = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.pc, arc.r);
    let ip_tmp = $271a1c686af88dba$var$intersectLine2Circle(line, circle);
    for (let pt of ip_tmp)if (pt.on(arc)) ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectSegment2Line(seg, line) {
    let ip = [];
    // Boundary cases
    if (seg.ps.on(line)) ip.push(seg.ps);
    // If both ends lay on line, return two intersection points
    if (seg.pe.on(line) && !seg.isZeroLength()) ip.push(seg.pe);
    if (ip.length > 0) return ip; // done, intersection found
    // If zero-length segment and nothing found, return no intersections
    if (seg.isZeroLength()) return ip;
    // Not a boundary case, check if both points are on the same side and
    // hence there is no intersection
    if (seg.ps.leftTo(line) && seg.pe.leftTo(line) || !seg.ps.leftTo(line) && !seg.pe.leftTo(line)) return ip;
    // Calculate intersection between lines
    let line1 = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(seg.ps, seg.pe);
    return $271a1c686af88dba$var$intersectLine2Line(line1, line);
}
function $271a1c686af88dba$var$intersectSegment2Segment(seg1, seg2) {
    let ip = [];
    // quick reject
    if (seg1.box.not_intersect(seg2.box)) return ip;
    // Special case of seg1 zero length
    if (seg1.isZeroLength()) {
        if (seg1.ps.on(seg2)) ip.push(seg1.ps);
        return ip;
    }
    // Special case of seg2 zero length
    if (seg2.isZeroLength()) {
        if (seg2.ps.on(seg1)) ip.push(seg2.ps);
        return ip;
    }
    // Neither seg1 nor seg2 is zero length
    let line1 = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(seg1.ps, seg1.pe);
    let line2 = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(seg2.ps, seg2.pe);
    // Check overlapping between segments in case of incidence
    // If segments touching, add one point. If overlapping, add two points
    if (line1.incidentTo(line2)) {
        if (seg1.ps.on(seg2)) ip.push(seg1.ps);
        if (seg1.pe.on(seg2)) ip.push(seg1.pe);
        if (seg2.ps.on(seg1) && !seg2.ps.equalTo(seg1.ps) && !seg2.ps.equalTo(seg1.pe)) ip.push(seg2.ps);
        if (seg2.pe.on(seg1) && !seg2.pe.equalTo(seg1.ps) && !seg2.pe.equalTo(seg1.pe)) ip.push(seg2.pe);
    } else {
        // Calculate intersection between lines
        let new_ip = $271a1c686af88dba$var$intersectLine2Line(line1, line2);
        if (new_ip.length > 0) {
            if ($271a1c686af88dba$var$isPointInSegmentBox(new_ip[0], seg1) && $271a1c686af88dba$var$isPointInSegmentBox(new_ip[0], seg2)) ip.push(new_ip[0]);
        }
    }
    return ip;
}
function $271a1c686af88dba$var$isPointInSegmentBox(point, segment) {
    const box = segment.box;
    return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(point.x, box.xmax) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(point.x, box.xmin) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(point.y, box.ymax) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(point.y, box.ymin);
}
function $271a1c686af88dba$var$intersectSegment2Circle(segment, circle) {
    let ips = [];
    if (segment.box.not_intersect(circle.box)) return ips;
    // Special case of zero length segment
    if (segment.isZeroLength()) {
        let [dist, _] = segment.ps.distanceTo(circle.pc);
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(dist, circle.r)) ips.push(segment.ps);
        return ips;
    }
    // Non zero-length segment
    let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(segment.ps, segment.pe);
    let ips_tmp = $271a1c686af88dba$var$intersectLine2Circle(line, circle);
    for (let ip of ips_tmp)if (ip.on(segment)) ips.push(ip);
    return ips;
}
function $271a1c686af88dba$var$intersectSegment2Arc(segment, arc) {
    let ip = [];
    if (segment.box.not_intersect(arc.box)) return ip;
    // Special case of zero-length segment
    if (segment.isZeroLength()) {
        if (segment.ps.on(arc)) ip.push(segment.ps);
        return ip;
    }
    // Non-zero length segment
    let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(segment.ps, segment.pe);
    let circle = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.pc, arc.r);
    let ip_tmp = $271a1c686af88dba$var$intersectLine2Circle(line, circle);
    for (let pt of ip_tmp)if (pt.on(segment) && pt.on(arc)) ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectSegment2Box(segment, box) {
    let ips = [];
    for (let seg of box.toSegments()){
        let ips_tmp = $271a1c686af88dba$var$intersectSegment2Segment(seg, segment);
        for (let ip of ips_tmp)ips.push(ip);
    }
    return ips;
}
function $271a1c686af88dba$var$intersectCircle2Circle(circle1, circle2) {
    let ip = [];
    if (circle1.box.not_intersect(circle2.box)) return ip;
    let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(circle1.pc, circle2.pc);
    let r1 = circle1.r;
    let r2 = circle2.r;
    // Degenerated circle
    if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(r1) || $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(r2)) return ip;
    // In case of equal circles return one leftmost point
    if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(vec.x) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(vec.y) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(r1, r2)) {
        ip.push(circle1.pc.translate(-r1, 0));
        return ip;
    }
    let dist = circle1.pc.distanceTo(circle2.pc)[0];
    if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GT(dist, r1 + r2)) return ip;
    if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, Math.abs(r1 - r2))) return ip;
    // Normalize vector.
    vec.x /= dist;
    vec.y /= dist;
    let pt;
    // Case of touching from outside or from inside - single intersection point
    // TODO: check this specifically not sure if correct
    if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(dist, r1 + r2) || $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(dist, Math.abs(r1 - r2))) {
        pt = circle1.pc.translate(r1 * vec.x, r1 * vec.y);
        ip.push(pt);
        return ip;
    }
    // Case of two intersection points
    // Distance from first center to center of common chord:
    //   a = (r1^2 - r2^2 + d^2) / 2d
    // Separate for better accuracy
    let a = r1 * r1 / (2 * dist) - r2 * r2 / (2 * dist) + dist / 2;
    let mid_pt = circle1.pc.translate(a * vec.x, a * vec.y);
    let h = Math.sqrt(r1 * r1 - a * a);
    // let norm;
    // norm = vec.rotate90CCW().multiply(h);
    pt = mid_pt.translate(vec.rotate90CCW().multiply(h));
    ip.push(pt);
    // norm = vec.rotate90CW();
    pt = mid_pt.translate(vec.rotate90CW().multiply(h));
    ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectCircle2Box(circle, box) {
    let ips = [];
    for (let seg of box.toSegments()){
        let ips_tmp = $271a1c686af88dba$var$intersectSegment2Circle(seg, circle);
        for (let ip of ips_tmp)ips.push(ip);
    }
    return ips;
}
function $271a1c686af88dba$var$intersectArc2Arc(arc1, arc2) {
    let ip = [];
    if (arc1.box.not_intersect(arc2.box)) return ip;
    // Special case: overlapping arcs
    // May return up to 4 intersection points
    if (arc1.pc.equalTo(arc2.pc) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(arc1.r, arc2.r)) {
        let pt;
        pt = arc1.start;
        if (pt.on(arc2)) ip.push(pt);
        pt = arc1.end;
        if (pt.on(arc2)) ip.push(pt);
        pt = arc2.start;
        if (pt.on(arc1)) ip.push(pt);
        pt = arc2.end;
        if (pt.on(arc1)) ip.push(pt);
        return ip;
    }
    // Common case
    let circle1 = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc1.pc, arc1.r);
    let circle2 = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc2.pc, arc2.r);
    let ip_tmp = circle1.intersect(circle2);
    for (let pt of ip_tmp)if (pt.on(arc1) && pt.on(arc2)) ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectArc2Circle(arc, circle) {
    let ip = [];
    if (arc.box.not_intersect(circle.box)) return ip;
    // Case when arc center incident to circle center
    // Return arc's end points as 2 intersection points
    if (circle.pc.equalTo(arc.pc) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(circle.r, arc.r)) {
        ip.push(arc.start);
        ip.push(arc.end);
        return ip;
    }
    // Common case
    let circle1 = circle;
    let circle2 = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.pc, arc.r);
    let ip_tmp = $271a1c686af88dba$var$intersectCircle2Circle(circle1, circle2);
    for (let pt of ip_tmp)if (pt.on(arc)) ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectArc2Box(arc, box) {
    let ips = [];
    for (let seg of box.toSegments()){
        let ips_tmp = $271a1c686af88dba$var$intersectSegment2Arc(seg, arc);
        for (let ip of ips_tmp)ips.push(ip);
    }
    return ips;
}
function $271a1c686af88dba$var$intersectEdge2Segment(edge, segment) {
    return edge.isSegment ? $271a1c686af88dba$var$intersectSegment2Segment(edge.shape, segment) : $271a1c686af88dba$var$intersectSegment2Arc(segment, edge.shape);
}
function $271a1c686af88dba$var$intersectEdge2Arc(edge, arc) {
    return edge.isSegment ? $271a1c686af88dba$var$intersectSegment2Arc(edge.shape, arc) : $271a1c686af88dba$var$intersectArc2Arc(edge.shape, arc);
}
function $271a1c686af88dba$var$intersectEdge2Line(edge, line) {
    return edge.isSegment ? $271a1c686af88dba$var$intersectSegment2Line(edge.shape, line) : $271a1c686af88dba$var$intersectLine2Arc(line, edge.shape);
}
function $271a1c686af88dba$var$intersectEdge2Ray(edge, ray) {
    return edge.isSegment ? $271a1c686af88dba$var$intersectRay2Segment(ray, edge.shape) : $271a1c686af88dba$var$intersectRay2Arc(ray, edge.shape);
}
function $271a1c686af88dba$var$intersectEdge2Circle(edge, circle) {
    return edge.isSegment ? $271a1c686af88dba$var$intersectSegment2Circle(edge.shape, circle) : $271a1c686af88dba$var$intersectArc2Circle(edge.shape, circle);
}
function $271a1c686af88dba$var$intersectSegment2Polygon(segment, polygon) {
    let ip = [];
    for (let edge of polygon.edges)for (let pt of $271a1c686af88dba$var$intersectEdge2Segment(edge, segment))ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectArc2Polygon(arc, polygon) {
    let ip = [];
    for (let edge of polygon.edges)for (let pt of $271a1c686af88dba$var$intersectEdge2Arc(edge, arc))ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectLine2Polygon(line, polygon) {
    let ip = [];
    if (polygon.isEmpty()) return ip;
    for (let edge of polygon.edges){
        for (let pt of $271a1c686af88dba$var$intersectEdge2Line(edge, line))if (!$271a1c686af88dba$var$ptInIntPoints(pt, ip)) ip.push(pt);
    }
    return line.sortPoints(ip);
}
function $271a1c686af88dba$var$intersectCircle2Polygon(circle, polygon) {
    let ip = [];
    if (polygon.isEmpty()) return ip;
    for (let edge of polygon.edges)for (let pt of $271a1c686af88dba$var$intersectEdge2Circle(edge, circle))ip.push(pt);
    return ip;
}
function $271a1c686af88dba$var$intersectEdge2Edge(edge1, edge2) {
    if (edge1.isSegment) return $271a1c686af88dba$var$intersectEdge2Segment(edge2, edge1.shape);
    else if (edge1.isArc) return $271a1c686af88dba$var$intersectEdge2Arc(edge2, edge1.shape);
    else if (edge1.isLine) return $271a1c686af88dba$var$intersectEdge2Line(edge2, edge1.shape);
    else if (edge1.isRay) return $271a1c686af88dba$var$intersectEdge2Ray(edge2, edge1.shape);
    return [];
}
function $271a1c686af88dba$var$intersectEdge2Polygon(edge, polygon) {
    let ip = [];
    if (polygon.isEmpty() || edge.shape.box.not_intersect(polygon.box)) return ip;
    let resp_edges = polygon.edges.search(edge.shape.box);
    for (let resp_edge of resp_edges)ip = [
        ...ip,
        ...$271a1c686af88dba$var$intersectEdge2Edge(edge, resp_edge)
    ];
    return ip;
}
function $271a1c686af88dba$var$intersectMultiline2Polygon(multiline, polygon) {
    let ip = [];
    if (polygon.isEmpty() || multiline.size === 0) return ip;
    for (let edge of multiline)ip = [
        ...ip,
        ...$271a1c686af88dba$var$intersectEdge2Polygon(edge, polygon)
    ];
    return ip;
}
function $271a1c686af88dba$var$intersectPolygon2Polygon(polygon1, polygon2) {
    let ip = [];
    if (polygon1.isEmpty() || polygon2.isEmpty()) return ip;
    if (polygon1.box.not_intersect(polygon2.box)) return ip;
    for (let edge1 of polygon1.edges)ip = [
        ...ip,
        ...$271a1c686af88dba$var$intersectEdge2Polygon(edge1, polygon2)
    ];
    return ip;
}
function $271a1c686af88dba$var$intersectShape2Polygon(shape, polygon) {
    if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectLine2Polygon(shape, polygon);
    else if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectSegment2Polygon(shape, polygon);
    else if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectArc2Polygon(shape, polygon);
    else return [];
}
function $271a1c686af88dba$var$ptInIntPoints(new_pt, ip) {
    return ip.some((pt)=>pt.equalTo(new_pt));
}
function $271a1c686af88dba$var$createLineFromRay(ray) {
    return new $271a1c686af88dba$export$2e2bcd8739ae039.Line(ray.start, ray.norm);
}
function $271a1c686af88dba$var$intersectRay2Segment(ray, segment) {
    return $271a1c686af88dba$var$intersectSegment2Line(segment, $271a1c686af88dba$var$createLineFromRay(ray)).filter((pt)=>ray.contains(pt));
}
function $271a1c686af88dba$var$intersectRay2Arc(ray, arc) {
    return $271a1c686af88dba$var$intersectLine2Arc($271a1c686af88dba$var$createLineFromRay(ray), arc).filter((pt)=>ray.contains(pt));
}
function $271a1c686af88dba$var$intersectRay2Circle(ray, circle) {
    return $271a1c686af88dba$var$intersectLine2Circle($271a1c686af88dba$var$createLineFromRay(ray), circle).filter((pt)=>ray.contains(pt));
}
function $271a1c686af88dba$var$intersectRay2Box(ray, box) {
    return $271a1c686af88dba$var$intersectLine2Box($271a1c686af88dba$var$createLineFromRay(ray), box).filter((pt)=>ray.contains(pt));
}
function $271a1c686af88dba$var$intersectRay2Line(ray, line) {
    return $271a1c686af88dba$var$intersectLine2Line($271a1c686af88dba$var$createLineFromRay(ray), line).filter((pt)=>ray.contains(pt));
}
function $271a1c686af88dba$var$intersectRay2Ray(ray1, ray2) {
    return $271a1c686af88dba$var$intersectLine2Line($271a1c686af88dba$var$createLineFromRay(ray1), $271a1c686af88dba$var$createLineFromRay(ray2)).filter((pt)=>ray1.contains(pt)).filter((pt)=>ray2.contains(pt));
}
function $271a1c686af88dba$var$intersectRay2Polygon(ray, polygon) {
    return $271a1c686af88dba$var$intersectLine2Polygon($271a1c686af88dba$var$createLineFromRay(ray), polygon).filter((pt)=>ray.contains(pt));
}
function $271a1c686af88dba$var$intersectShape2Shape(shape1, shape2) {
    if (shape1.intersect && shape1.intersect instanceof Function) return shape1.intersect(shape2);
    throw $271a1c686af88dba$export$b8e9cd941e8016ac.UNSUPPORTED_SHAPE_TYPE;
}
function $271a1c686af88dba$var$intersectShape2Multiline(shape, multiline) {
    let ip = [];
    for (let edge of multiline)ip = [
        ...ip,
        ...$271a1c686af88dba$var$intersectShape2Shape(edge, edge.shape)
    ];
    return ip;
}
function $271a1c686af88dba$var$intersectMultiline2Multiline(multiline1, multiline2) {
    let ip = [];
    for (let edge1 of multiline1)for (let edge2 of multiline2)ip = [
        ...ip,
        ...$271a1c686af88dba$var$intersectShape2Shape(edge1, edge2)
    ];
    return ip;
}
/**
 * Class Multiline represent connected path of [edges]{@link Flatten.Edge}, where each edge may be
 * [segment]{@link Flatten.Segment}, [arc]{@link Flatten.Arc}, [line]{@link Flatten.Line} or [ray]{@link Flatten.Ray}
 */ let $271a1c686af88dba$export$a5433e0f3b1dce29 = class Multiline extends $271a1c686af88dba$var$LinkedList {
    constructor(...args){
        super();
        this.isInfinite = false;
        if (args.length === 1 && args[0] instanceof Array && args[0].length > 0) {
            // there may be only one line and
            // only first and last may be rays
            let validShapes = false;
            const shapes = args[0];
            const L = shapes.length;
            const anyShape = (s)=>s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc || s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray || s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line;
            const anyShapeExceptLine = (s)=>s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc || s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray;
            const shapeSegmentOrArc = (s)=>s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || s instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc;
            validShapes = L === 1 && anyShape(shapes[0]) || L > 1 && anyShapeExceptLine(shapes[0]) && anyShapeExceptLine(shapes[L - 1]) && shapes.slice(1, L - 1).every(shapeSegmentOrArc);
            if (validShapes) {
                this.isInfinite = shapes.some((shape)=>shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray || shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line);
                for (let shape of shapes){
                    let edge = new $271a1c686af88dba$export$2e2bcd8739ae039.Edge(shape);
                    this.append(edge);
                }
                this.setArcLength();
            } else throw $271a1c686af88dba$export$2e2bcd8739ae039.Errors.ILLEGAL_PARAMETERS;
        }
    }
    /**
     * (Getter) Return array of edges
     * @returns {Edge[]}
     */ get edges() {
        return [
            ...this
        ];
    }
    /**
     * (Getter) Return bounding box of the multiline
     * @returns {Box}
     */ get box() {
        return this.edges.reduce((acc, edge)=>acc.merge(edge.box), new $271a1c686af88dba$export$2e2bcd8739ae039.Box());
    }
    /**
     * (Getter) Returns array of vertices
     * @returns {Point[]}
     */ get vertices() {
        let v = this.edges.map((edge)=>edge.start);
        v.push(this.last.end);
        return v;
    }
    /**
     * (Getter) Returns length of the multiline, return POSITIVE_INFINITY if multiline is infinite
     * @returns {number}
     */ get length() {
        if (this.isEmpty()) return 0;
        if (this.isInfinite) return Number.POSITIVE_INFINITY;
        let len = 0;
        for (let edge of this)len += edge.length;
        return len;
    }
    /**
     * Return new cloned instance of Multiline
     * @returns {Multiline}
     */ clone() {
        return new Multiline(this.toShapes());
    }
    /**
     * Set arc_length property for each of the edges in the multiline.
     * Arc_length of the edge is the arc length from the multiline start vertex to the edge start vertex
     */ setArcLength() {
        for (let edge of this)this.setOneEdgeArcLength(edge);
    }
    setOneEdgeArcLength(edge) {
        if (edge === this.first) edge.arc_length = 0.0;
        else edge.arc_length = edge.prev.arc_length + edge.prev.length;
    }
    /**
     * Return point on multiline at given length from the start of the multiline
     * @param length
     * @returns {Point | null}
     */ pointAtLength(length) {
        if (length > this.length || length < 0) return null;
        if (this.isInfinite) return null;
        let point = null;
        for (let edge of this)if (length >= edge.arc_length && (edge === this.last || length < edge.next.arc_length)) {
            point = edge.pointAtLength(length - edge.arc_length);
            break;
        }
        return point;
    }
    /**
     * Split edge and add new vertex, return new edge inserted
     * @param {Point} pt - point on edge that will be added as new vertex
     * @param {Edge} edge - edge to split
     * @returns {Edge}
     */ addVertex(pt, edge) {
        let shapes = edge.shape.split(pt);
        // if (shapes.length < 2) return;
        if (shapes[0] === null) return edge.prev;
        if (shapes[1] === null) return edge;
        let newEdge = new $271a1c686af88dba$export$2e2bcd8739ae039.Edge(shapes[0]);
        let edgeBefore = edge.prev;
        /* Insert first split edge into linked list after edgeBefore */ this.insert(newEdge, edgeBefore); // edge.face ?
        // Update edge shape with second split edge keeping links
        edge.shape = shapes[1];
        return newEdge;
    }
    getChain(edgeFrom, edgeTo) {
        let edges = [];
        for(let edge = edgeFrom; edge !== edgeTo.next; edge = edge.next)edges.push(edge);
        return edges;
    }
    /**
     * Split edges of multiline with intersection points and return mutated multiline
     * @param {Point[]} ip - array of points to be added as new vertices
     * @returns {Multiline}
     */ split(ip) {
        for (let pt of ip){
            let edge = this.findEdgeByPoint(pt);
            this.addVertex(pt, edge);
        }
        return this;
    }
    /**
     * Returns edge which contains given point
     * @param {Point} pt
     * @returns {Edge}
     */ findEdgeByPoint(pt) {
        let edgeFound;
        for (let edge of this)if (edge.shape.contains(pt)) {
            edgeFound = edge;
            break;
        }
        return edgeFound;
    }
    /**
     * Calculate distance and shortest segment from any shape to multiline
     * @param shape
     * @returns {[number,Flatten.Segment]}
     */ distanceTo(shape) {
        if (shape instanceof Point) {
            const [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(shape, this);
            return [
                dist,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) {
            const [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(shape, this);
            return [
                dist,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) {
            const [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(shape, this);
            return [
                dist,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            const [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(shape, this);
            return [
                dist,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            const [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(shape, this);
            return [
                dist,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.multiline2multiline(this, shape);
        throw $271a1c686af88dba$export$2e2bcd8739ae039.Errors.UNSUPPORTED_SHAPE_TYPE;
    }
    /**
     * Calculate intersection of multiline with other shape
     * @param {Shape} shape
     * @returns {Point[]}
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$var$intersectMultiline2Multiline(this, shape);
        else return $271a1c686af88dba$var$intersectShape2Multiline(shape, this);
    }
    /**
     * Return true if multiline contains the shape: no point of shape lies outside
     * @param shape
     * @returns {boolean}
     */ contains(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.edges.some((edge)=>edge.shape.contains(shape));
        throw $271a1c686af88dba$export$2e2bcd8739ae039.Errors.UNSUPPORTED_SHAPE_TYPE;
    }
    /**
     * Returns new multiline translated by vector vec
     * @param {Vector} vec
     * @returns {Multiline}
     */ translate(vec) {
        return new Multiline(this.edges.map((edge)=>edge.shape.translate(vec)));
    }
    /**
     * Return new multiline rotated by given angle around given point
     * If point omitted, rotate around origin (0,0)
     * Positive value of angle defines rotation counterclockwise, negative - clockwise
     * @param {number} angle - rotation angle in radians
     * @param {Point} center - rotation center, default is (0,0)
     * @returns {Multiline} - new rotated polygon
     */ rotate(angle = 0, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        return new Multiline(this.edges.map((edge)=>edge.shape.rotate(angle, center)));
    }
    /**
     * Return new multiline transformed using affine transformation matrix
     * Method does not support unbounded shapes
     * @param {Matrix} matrix - affine transformation matrix
     * @returns {Multiline} - new multiline
     */ transform(matrix = new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix()) {
        return new Multiline(this.edges.map((edge)=>edge.shape.transform(matrix)));
    }
    /**
     * Transform multiline into array of shapes
     * @returns {Shape[]}
     */ toShapes() {
        return this.edges.map((edge)=>edge.shape.clone());
    }
    /**
     * This method returns an object that defines how data will be
     * serialized when called JSON.stringify() method
     * @returns {Object}
     */ toJSON() {
        return this.edges.map((edge)=>edge.toJSON());
    }
    /**
     * Return string to be inserted into 'points' attribute of <polyline> element
     * @returns {string}
     */ svgPoints() {
        return this.vertices.map((p)=>`${p.x},${p.y}`).join(" ");
    }
    /**
     * Return string to be assigned to 'd' attribute of <path> element
     * @returns {*}
     */ dpath() {
        let dPathStr = `M${this.first.start.x},${this.first.start.y}`;
        for (let edge of this)dPathStr += edge.svg();
        return dPathStr;
    }
    /**
     * Return string to draw multiline in svg
     * @param attrs  - an object with attributes for svg path element
     * TODO: support semi-infinite Ray and infinite Line
     * @returns {string}
     */ svg(attrs = {}) {
        let svgStr = `\n<path ${$271a1c686af88dba$var$convertToString({
            fill: "none",
            ...attrs
        })} d="`;
        svgStr += `\nM${this.first.start.x},${this.first.start.y}`;
        for (let edge of this)svgStr += edge.svg();
        svgStr += `" >\n</path>`;
        return svgStr;
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Multiline = $271a1c686af88dba$export$a5433e0f3b1dce29;
/**
 * Shortcut function to create multiline
 * @param args
 */ const $271a1c686af88dba$export$e086dccf8e77e85 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Multiline(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.multiline = $271a1c686af88dba$export$e086dccf8e77e85;
/*
    Smart intersections describe intersection points that refers to the edges they intersect
    This function are supposed for internal usage by morphing and relation methods between
 */ function $271a1c686af88dba$var$addToIntPoints(edge, pt, int_points) {
    let id = int_points.length;
    let shapes = edge.shape.split(pt);
    // if (shapes.length < 2) return;
    if (shapes.length === 0) return; // Point does not belong to edge ?
    let len = 0;
    if (shapes[0] === null) len = 0;
    else if (shapes[1] === null) len = edge.shape.length;
    else len = shapes[0].length;
    let is_vertex = $271a1c686af88dba$var$NOT_VERTEX$1;
    if ($271a1c686af88dba$var$EQ(len, 0)) is_vertex |= $271a1c686af88dba$var$START_VERTEX$1;
    if ($271a1c686af88dba$var$EQ(len, edge.shape.length)) is_vertex |= $271a1c686af88dba$var$END_VERTEX$1;
    // Fix intersection point which is end point of the last edge
    let arc_length;
    if (len === Infinity) arc_length = shapes[0].coord(pt);
    else arc_length = is_vertex & $271a1c686af88dba$var$END_VERTEX$1 && edge.next && edge.next.arc_length === 0 ? 0 : edge.arc_length + len;
    int_points.push({
        id: id,
        pt: pt,
        arc_length: arc_length,
        edge_before: edge,
        edge_after: undefined,
        face: edge.face,
        is_vertex: is_vertex
    });
}
function $271a1c686af88dba$var$sortIntersections(intersections) {
    // augment intersections with new sorted arrays
    intersections.int_points1_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points1);
    intersections.int_points2_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points2);
}
function $271a1c686af88dba$var$getSortedArray(int_points) {
    let faceMap = new Map;
    let id = 0;
    // Create integer id's for faces
    for (let ip of int_points)if (!faceMap.has(ip.face)) {
        faceMap.set(ip.face, id);
        id++;
    }
    // Augment intersection points with face id's
    for (let ip of int_points)ip.faceId = faceMap.get(ip.face);
    // Clone and sort
    let int_points_sorted = int_points.slice().sort($271a1c686af88dba$var$compareFn);
    return int_points_sorted;
}
function $271a1c686af88dba$var$compareFn(ip1, ip2) {
    // compare face id's
    if (ip1.faceId < ip2.faceId) return -1;
    if (ip1.faceId > ip2.faceId) return 1;
    // same face - compare arc_length
    if (ip1.arc_length < ip2.arc_length) return -1;
    if (ip1.arc_length > ip2.arc_length) return 1;
    return 0;
}
function $271a1c686af88dba$var$filterDuplicatedIntersections(intersections) {
    if (intersections.int_points1.length < 2) return;
    let do_squeeze = false;
    let int_point_ref1;
    let int_point_ref2;
    let int_point_cur1;
    let int_point_cur2;
    for(let i = 0; i < intersections.int_points1_sorted.length; i++){
        if (intersections.int_points1_sorted[i].id === -1) continue;
        int_point_ref1 = intersections.int_points1_sorted[i];
        int_point_ref2 = intersections.int_points2[int_point_ref1.id];
        for(let j = i + 1; j < intersections.int_points1_sorted.length; j++){
            int_point_cur1 = intersections.int_points1_sorted[j];
            if (!$271a1c686af88dba$var$EQ(int_point_cur1.arc_length, int_point_ref1.arc_length)) break;
            if (int_point_cur1.id === -1) continue;
            int_point_cur2 = intersections.int_points2[int_point_cur1.id];
            if (int_point_cur2.id === -1) continue;
            if (int_point_cur1.edge_before === int_point_ref1.edge_before && int_point_cur1.edge_after === int_point_ref1.edge_after && int_point_cur2.edge_before === int_point_ref2.edge_before && int_point_cur2.edge_after === int_point_ref2.edge_after) {
                int_point_cur1.id = -1;
                /* to be deleted */ int_point_cur2.id = -1;
                /* to be deleted */ do_squeeze = true;
            }
        }
    }
    int_point_ref2 = intersections.int_points2_sorted[0];
    int_point_ref1 = intersections.int_points1[int_point_ref2.id];
    for(let i = 1; i < intersections.int_points2_sorted.length; i++){
        let int_point_cur2 = intersections.int_points2_sorted[i];
        if (int_point_cur2.id === -1) continue;
        /* already deleted */ if (int_point_ref2.id === -1 || /* can't be reference if already deleted */ !$271a1c686af88dba$var$EQ(int_point_cur2.arc_length, int_point_ref2.arc_length)) {
            int_point_ref2 = int_point_cur2;
            int_point_ref1 = intersections.int_points1[int_point_ref2.id];
            continue;
        }
        let int_point_cur1 = intersections.int_points1[int_point_cur2.id];
        if (int_point_cur1.edge_before === int_point_ref1.edge_before && int_point_cur1.edge_after === int_point_ref1.edge_after && int_point_cur2.edge_before === int_point_ref2.edge_before && int_point_cur2.edge_after === int_point_ref2.edge_after) {
            int_point_cur1.id = -1;
            /* to be deleted */ int_point_cur2.id = -1;
            /* to be deleted */ do_squeeze = true;
        }
    }
    if (do_squeeze) {
        intersections.int_points1 = intersections.int_points1.filter((int_point)=>int_point.id >= 0);
        intersections.int_points2 = intersections.int_points2.filter((int_point)=>int_point.id >= 0);
        // update id's
        intersections.int_points1.forEach((int_point, index)=>int_point.id = index);
        intersections.int_points2.forEach((int_point, index)=>int_point.id = index);
    }
}
function $271a1c686af88dba$var$initializeInclusionFlags(int_points) {
    for (let int_point of int_points){
        if (int_point.edge_before) {
            int_point.edge_before.bvStart = undefined;
            int_point.edge_before.bvEnd = undefined;
            int_point.edge_before.bv = undefined;
            int_point.edge_before.overlap = undefined;
        }
        if (int_point.edge_after) {
            int_point.edge_after.bvStart = undefined;
            int_point.edge_after.bvEnd = undefined;
            int_point.edge_after.bv = undefined;
            int_point.edge_after.overlap = undefined;
        }
    }
    for (let int_point of int_points){
        if (int_point.edge_before) int_point.edge_before.bvEnd = $271a1c686af88dba$export$a523954c60dca5e4;
        if (int_point.edge_after) int_point.edge_after.bvStart = $271a1c686af88dba$export$a523954c60dca5e4;
    }
}
function $271a1c686af88dba$var$calculateInclusionFlags(int_points, polygon) {
    for (let int_point of int_points){
        if (int_point.edge_before) int_point.edge_before.setInclusion(polygon);
        if (int_point.edge_after) int_point.edge_after.setInclusion(polygon);
    }
}
function $271a1c686af88dba$var$setOverlappingFlags(intersections) {
    let cur_face = undefined;
    let first_int_point_in_face_id = undefined;
    let next_int_point1 = undefined;
    let num_int_points = intersections.int_points1.length;
    for(let i = 0; i < num_int_points; i++){
        let cur_int_point1 = intersections.int_points1_sorted[i];
        // Find boundary chain in the polygon1
        if (cur_int_point1.face !== cur_face) {
            first_int_point_in_face_id = i; // cur_int_point1;
            cur_face = cur_int_point1.face;
        }
        // Skip duplicated points with same <x,y> in "cur_int_point1" pool
        let int_points_cur_pool_start = i;
        let int_points_cur_pool_num = $271a1c686af88dba$var$intPointsPoolCount(intersections.int_points1_sorted, i, cur_face);
        let next_int_point_id;
        if (int_points_cur_pool_start + int_points_cur_pool_num < num_int_points && intersections.int_points1_sorted[int_points_cur_pool_start + int_points_cur_pool_num].face === cur_face) next_int_point_id = int_points_cur_pool_start + int_points_cur_pool_num;
        else next_int_point_id = first_int_point_in_face_id;
        // From all points with same ,x,y. in 'next_int_point1' pool choose one that
        // has same face both in res_poly and in wrk_poly
        let int_points_next_pool_num = $271a1c686af88dba$var$intPointsPoolCount(intersections.int_points1_sorted, next_int_point_id, cur_face);
        next_int_point1 = null;
        for(let j = next_int_point_id; j < next_int_point_id + int_points_next_pool_num; j++){
            let next_int_point1_tmp = intersections.int_points1_sorted[j];
            if (next_int_point1_tmp.face === cur_face && intersections.int_points2[next_int_point1_tmp.id].face === intersections.int_points2[cur_int_point1.id].face) {
                next_int_point1 = next_int_point1_tmp;
                break;
            }
        }
        if (next_int_point1 === null) continue;
        let edge_from1 = cur_int_point1.edge_after;
        let edge_to1 = next_int_point1.edge_before;
        if (!(edge_from1.bv === $271a1c686af88dba$export$a523954c60dca5e4 && edge_to1.bv === $271a1c686af88dba$export$a523954c60dca5e4)) continue;
        if (edge_from1 !== edge_to1) continue;
        /* Find boundary chain in polygon2 between same intersection points */ let cur_int_point2 = intersections.int_points2[cur_int_point1.id];
        let next_int_point2 = intersections.int_points2[next_int_point1.id];
        let edge_from2 = cur_int_point2.edge_after;
        let edge_to2 = next_int_point2.edge_before;
        /* if [edge_from2..edge_to2] is not a boundary chain, invert it */ /* check also that chain consist of one or two edges */ if (!(edge_from2.bv === $271a1c686af88dba$export$a523954c60dca5e4 && edge_to2.bv === $271a1c686af88dba$export$a523954c60dca5e4 && edge_from2 === edge_to2)) {
            cur_int_point2 = intersections.int_points2[next_int_point1.id];
            next_int_point2 = intersections.int_points2[cur_int_point1.id];
            edge_from2 = cur_int_point2.edge_after;
            edge_to2 = next_int_point2.edge_before;
        }
        if (!(edge_from2.bv === $271a1c686af88dba$export$a523954c60dca5e4 && edge_to2.bv === $271a1c686af88dba$export$a523954c60dca5e4 && edge_from2 === edge_to2)) continue; // not an overlapping chain - skip   TODO: fix boundary conflict
        // Set overlapping flag - one-to-one case
        edge_from1.setOverlap(edge_from2);
    }
}
function $271a1c686af88dba$var$intPointsPoolCount(int_points, cur_int_point_num, cur_face) {
    let int_point_current;
    let int_point_next;
    let int_points_pool_num = 1;
    if (int_points.length === 1) return 1;
    int_point_current = int_points[cur_int_point_num];
    for(let i = cur_int_point_num + 1; i < int_points.length; i++){
        if (int_point_current.face !== cur_face) break;
        int_point_next = int_points[i];
        if (!(int_point_next.pt.equalTo(int_point_current.pt) && int_point_next.edge_before === int_point_current.edge_before && int_point_next.edge_after === int_point_current.edge_after)) break; /* next point is different - break and exit */ 
        int_points_pool_num++; /* duplicated intersection point - increase counter */ 
    }
    return int_points_pool_num;
}
function $271a1c686af88dba$var$splitByIntersections(polygon, int_points) {
    if (!int_points) return;
    for (let int_point of int_points){
        let edge = int_point.edge_before;
        // recalculate vertex flag: it may be changed after previous split
        int_point.is_vertex = $271a1c686af88dba$var$NOT_VERTEX$1;
        if (edge.shape.start && edge.shape.start.equalTo(int_point.pt)) int_point.is_vertex |= $271a1c686af88dba$var$START_VERTEX$1;
        if (edge.shape.end && edge.shape.end.equalTo(int_point.pt)) int_point.is_vertex |= $271a1c686af88dba$var$END_VERTEX$1;
        if (int_point.is_vertex & $271a1c686af88dba$var$START_VERTEX$1) {
            int_point.edge_before = edge.prev;
            if (edge.prev) int_point.is_vertex = $271a1c686af88dba$var$END_VERTEX$1; // polygon
            continue;
        }
        if (int_point.is_vertex & $271a1c686af88dba$var$END_VERTEX$1) continue;
        let newEdge = polygon.addVertex(int_point.pt, edge);
        int_point.edge_before = newEdge;
    }
    for (let int_point of int_points){
        if (int_point.edge_before) int_point.edge_after = int_point.edge_before.next;
        else if (polygon instanceof $271a1c686af88dba$export$a5433e0f3b1dce29 && int_point.is_vertex & $271a1c686af88dba$var$START_VERTEX$1) int_point.edge_after = polygon.first;
    }
}
function $271a1c686af88dba$var$insertBetweenIntPoints(int_point1, int_point2, new_edges) {
    const edge_before = int_point1.edge_before;
    const edge_after = int_point2.edge_after;
    const len = new_edges.length;
    edge_before.next = new_edges[0];
    new_edges[0].prev = edge_before;
    new_edges[len - 1].next = edge_after;
    edge_after.prev = new_edges[len - 1];
}
var $271a1c686af88dba$export$53fcb32448848863 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    addToIntPoints: $271a1c686af88dba$var$addToIntPoints,
    calculateInclusionFlags: $271a1c686af88dba$var$calculateInclusionFlags,
    filterDuplicatedIntersections: $271a1c686af88dba$var$filterDuplicatedIntersections,
    getSortedArray: $271a1c686af88dba$var$getSortedArray,
    initializeInclusionFlags: $271a1c686af88dba$var$initializeInclusionFlags,
    insertBetweenIntPoints: $271a1c686af88dba$var$insertBetweenIntPoints,
    intPointsPoolCount: $271a1c686af88dba$var$intPointsPoolCount,
    setOverlappingFlags: $271a1c686af88dba$var$setOverlappingFlags,
    sortIntersections: $271a1c686af88dba$var$sortIntersections,
    splitByIntersections: $271a1c686af88dba$var$splitByIntersections
});
/**
 * Created by Alex Bol on 12/02/2018.
 */ /**
 * @module BooleanOperations
 */ const { INSIDE: $271a1c686af88dba$var$INSIDE$1, OUTSIDE: $271a1c686af88dba$var$OUTSIDE, BOUNDARY: $271a1c686af88dba$var$BOUNDARY, OVERLAP_SAME: $271a1c686af88dba$var$OVERLAP_SAME, OVERLAP_OPPOSITE: $271a1c686af88dba$var$OVERLAP_OPPOSITE } = $271a1c686af88dba$var$Constants;
const { NOT_VERTEX: $271a1c686af88dba$var$NOT_VERTEX, START_VERTEX: $271a1c686af88dba$var$START_VERTEX, END_VERTEX: $271a1c686af88dba$var$END_VERTEX } = $271a1c686af88dba$var$Constants;
const $271a1c686af88dba$var$BOOLEAN_UNION = 1;
const $271a1c686af88dba$var$BOOLEAN_INTERSECT = 2;
const $271a1c686af88dba$var$BOOLEAN_SUBTRACT = 3;
/**
 * Unify two polygons polygons and returns new polygon. <br/>
 * Point belongs to the resulted polygon if it belongs to the first OR to the second polygon
 * @param {Polygon} polygon1 - first operand
 * @param {Polygon} polygon2 - second operand
 * @returns {Polygon}
 */ function $271a1c686af88dba$var$unify(polygon1, polygon2) {
    let [res_poly, wrk_poly] = $271a1c686af88dba$var$booleanOpBinary(polygon1, polygon2, $271a1c686af88dba$var$BOOLEAN_UNION, true);
    return res_poly;
}
/**
 * Subtract second polygon from the first and returns new polygon
 * Point belongs to the resulted polygon if it belongs to the first polygon AND NOT to the second polygon
 * @param {Polygon} polygon1 - first operand
 * @param {Polygon} polygon2 - second operand
 * @returns {Polygon}
 */ function $271a1c686af88dba$var$subtract(polygon1, polygon2) {
    let polygon2_tmp = polygon2.clone();
    let polygon2_reversed = polygon2_tmp.reverse();
    let [res_poly, wrk_poly] = $271a1c686af88dba$var$booleanOpBinary(polygon1, polygon2_reversed, $271a1c686af88dba$var$BOOLEAN_SUBTRACT, true);
    return res_poly;
}
/**
 * Intersect two polygons and returns new polygon
 * Point belongs to the resulted polygon is it belongs to the first AND to the second polygon
 * @param {Polygon} polygon1 - first operand
 * @param {Polygon} polygon2 - second operand
 * @returns {Polygon}
 */ function $271a1c686af88dba$var$intersect$1(polygon1, polygon2) {
    let [res_poly, wrk_poly] = $271a1c686af88dba$var$booleanOpBinary(polygon1, polygon2, $271a1c686af88dba$var$BOOLEAN_INTERSECT, true);
    return res_poly;
}
/**
 * Returns boundary of intersection between two polygons as two arrays of shapes (Segments/Arcs) <br/>
 * The first array are shapes from the first polygon, the second array are shapes from the second
 * @param {Polygon} polygon1 - first operand
 * @param {Polygon} polygon2 - second operand
 * @returns {Shape[][]}
 */ function $271a1c686af88dba$var$innerClip(polygon1, polygon2) {
    let [res_poly, wrk_poly] = $271a1c686af88dba$var$booleanOpBinary(polygon1, polygon2, $271a1c686af88dba$var$BOOLEAN_INTERSECT, false);
    let clip_shapes1 = [];
    for (let face of res_poly.faces)clip_shapes1 = [
        ...clip_shapes1,
        ...[
            ...face.edges
        ].map((edge)=>edge.shape)
    ];
    let clip_shapes2 = [];
    for (let face of wrk_poly.faces)clip_shapes2 = [
        ...clip_shapes2,
        ...[
            ...face.edges
        ].map((edge)=>edge.shape)
    ];
    return [
        clip_shapes1,
        clip_shapes2
    ];
}
/**
 * Returns boundary of subtraction of the second polygon from first polygon as array of shapes
 * @param {Polygon} polygon1 - first operand
 * @param {Polygon} polygon2 - second operand
 * @returns {Shape[]}
 */ function $271a1c686af88dba$var$outerClip(polygon1, polygon2) {
    let [res_poly, wrk_poly] = $271a1c686af88dba$var$booleanOpBinary(polygon1, polygon2, $271a1c686af88dba$var$BOOLEAN_SUBTRACT, false);
    let clip_shapes1 = [];
    for (let face of res_poly.faces)clip_shapes1 = [
        ...clip_shapes1,
        ...[
            ...face.edges
        ].map((edge)=>edge.shape)
    ];
    return clip_shapes1;
}
/**
 * Returns intersection points between boundaries of two polygons as two array of points <br/>
 * Points in the first array belong to first polygon, points from the second - to the second.
 * Points in each array are ordered according to the direction of the correspondent polygon
 * @param {Polygon} polygon1 - first operand
 * @param {Polygon} polygon2 - second operand
 * @returns {Point[][]}
 */ function $271a1c686af88dba$var$calculateIntersections(polygon1, polygon2) {
    let res_poly = polygon1.clone();
    let wrk_poly = polygon2.clone();
    // get intersection points
    let intersections = $271a1c686af88dba$var$getIntersections(res_poly, wrk_poly);
    // sort intersection points
    $271a1c686af88dba$var$sortIntersections(intersections);
    // split by intersection points
    $271a1c686af88dba$var$splitByIntersections(res_poly, intersections.int_points1_sorted);
    $271a1c686af88dba$var$splitByIntersections(wrk_poly, intersections.int_points2_sorted);
    // filter duplicated intersection points
    $271a1c686af88dba$var$filterDuplicatedIntersections(intersections);
    // sort intersection points again after filtering
    $271a1c686af88dba$var$sortIntersections(intersections);
    let ip_sorted1 = intersections.int_points1_sorted.map((int_point)=>int_point.pt);
    let ip_sorted2 = intersections.int_points2_sorted.map((int_point)=>int_point.pt);
    return [
        ip_sorted1,
        ip_sorted2
    ];
}
function $271a1c686af88dba$var$filterNotRelevantEdges(res_poly, wrk_poly, intersections, op) {
    // keep not intersected faces for further remove and merge
    let notIntersectedFacesRes = $271a1c686af88dba$var$getNotIntersectedFaces(res_poly, intersections.int_points1);
    let notIntersectedFacesWrk = $271a1c686af88dba$var$getNotIntersectedFaces(wrk_poly, intersections.int_points2);
    // calculate inclusion flag for not intersected faces
    $271a1c686af88dba$var$calcInclusionForNotIntersectedFaces(notIntersectedFacesRes, wrk_poly);
    $271a1c686af88dba$var$calcInclusionForNotIntersectedFaces(notIntersectedFacesWrk, res_poly);
    // initialize inclusion flags for edges incident to intersections
    $271a1c686af88dba$var$initializeInclusionFlags(intersections.int_points1);
    $271a1c686af88dba$var$initializeInclusionFlags(intersections.int_points2);
    // calculate inclusion flags only for edges incident to intersections
    $271a1c686af88dba$var$calculateInclusionFlags(intersections.int_points1, wrk_poly);
    $271a1c686af88dba$var$calculateInclusionFlags(intersections.int_points2, res_poly);
    // fix boundary conflicts
    while($271a1c686af88dba$var$fixBoundaryConflicts(res_poly, wrk_poly, intersections.int_points1, intersections.int_points1_sorted, intersections.int_points2, intersections));
    // while (fixBoundaryConflicts(wrk_poly, res_poly, intersections.int_points2, intersections.int_points2_sorted, intersections.int_points1, intersections));
    // Set overlapping flags for boundary chains: SAME or OPPOSITE
    $271a1c686af88dba$var$setOverlappingFlags(intersections);
    // remove not relevant chains between intersection points
    $271a1c686af88dba$var$removeNotRelevantChains(res_poly, op, intersections.int_points1_sorted, true);
    $271a1c686af88dba$var$removeNotRelevantChains(wrk_poly, op, intersections.int_points2_sorted, false);
    // remove not relevant not intersected faces from res_polygon and wrk_polygon
    // if op == UNION, remove faces that are included in wrk_polygon without intersection
    // if op == INTERSECT, remove faces that are not included into wrk_polygon
    $271a1c686af88dba$var$removeNotRelevantNotIntersectedFaces(res_poly, notIntersectedFacesRes, op, true);
    $271a1c686af88dba$var$removeNotRelevantNotIntersectedFaces(wrk_poly, notIntersectedFacesWrk, op, false);
}
function $271a1c686af88dba$var$swapLinksAndRestore(res_poly, wrk_poly, intersections, op) {
    // add edges of wrk_poly into the edge container of res_poly
    $271a1c686af88dba$var$copyWrkToRes(res_poly, wrk_poly, op, intersections.int_points2);
    // swap links from res_poly to wrk_poly and vice versa
    $271a1c686af88dba$var$swapLinks(res_poly, wrk_poly, intersections);
    // remove old faces
    $271a1c686af88dba$var$removeOldFaces(res_poly, intersections.int_points1);
    $271a1c686af88dba$var$removeOldFaces(wrk_poly, intersections.int_points2);
    // restore faces
    $271a1c686af88dba$var$restoreFaces(res_poly, intersections.int_points1, intersections.int_points2);
    $271a1c686af88dba$var$restoreFaces(res_poly, intersections.int_points2, intersections.int_points1);
// merge relevant not intersected faces from wrk_polygon to res_polygon
// mergeRelevantNotIntersectedFaces(res_poly, wrk_poly);
}
function $271a1c686af88dba$var$booleanOpBinary(polygon1, polygon2, op, restore) {
    let res_poly = polygon1.clone();
    let wrk_poly = polygon2.clone();
    // get intersection points
    let intersections = $271a1c686af88dba$var$getIntersections(res_poly, wrk_poly);
    // sort intersection points
    $271a1c686af88dba$var$sortIntersections(intersections);
    // split by intersection points
    $271a1c686af88dba$var$splitByIntersections(res_poly, intersections.int_points1_sorted);
    $271a1c686af88dba$var$splitByIntersections(wrk_poly, intersections.int_points2_sorted);
    // filter duplicated intersection points
    $271a1c686af88dba$var$filterDuplicatedIntersections(intersections);
    // sort intersection points again after filtering
    $271a1c686af88dba$var$sortIntersections(intersections);
    // calculate inclusion and remove not relevant edges
    $271a1c686af88dba$var$filterNotRelevantEdges(res_poly, wrk_poly, intersections, op);
    if (restore) $271a1c686af88dba$var$swapLinksAndRestore(res_poly, wrk_poly, intersections, op);
    return [
        res_poly,
        wrk_poly
    ];
}
function $271a1c686af88dba$var$getIntersections(polygon1, polygon2) {
    let intersections = {
        int_points1: [],
        int_points2: []
    };
    // calculate intersections
    for (let edge1 of polygon1.edges){
        // request edges of polygon2 in the box of edge1
        let resp = polygon2.edges.search(edge1.box);
        // for each edge2 in response
        for (let edge2 of resp){
            // calculate intersections between edge1 and edge2
            let ip = edge1.shape.intersect(edge2.shape);
            // for each intersection point
            for (let pt of ip){
                $271a1c686af88dba$var$addToIntPoints(edge1, pt, intersections.int_points1);
                $271a1c686af88dba$var$addToIntPoints(edge2, pt, intersections.int_points2);
            }
        }
    }
    return intersections;
}
function $271a1c686af88dba$var$getNotIntersectedFaces(poly, int_points) {
    let notIntersected = [];
    for (let face of poly.faces)if (!int_points.find((ip)=>ip.face === face)) notIntersected.push(face);
    return notIntersected;
}
function $271a1c686af88dba$var$calcInclusionForNotIntersectedFaces(notIntersectedFaces, poly2) {
    for (let face of notIntersectedFaces){
        face.first.bv = face.first.bvStart = face.first.bvEnd = undefined;
        face.first.setInclusion(poly2);
    }
}
function $271a1c686af88dba$var$fixBoundaryConflicts(poly1, poly2, int_points1, int_points1_sorted, int_points2, intersections) {
    let cur_face;
    let first_int_point_in_face_id;
    let next_int_point1;
    let num_int_points = int_points1_sorted.length;
    let iterate_more = false;
    for(let i = 0; i < num_int_points; i++){
        let cur_int_point1 = int_points1_sorted[i];
        // Find boundary chain in the polygon1
        if (cur_int_point1.face !== cur_face) {
            first_int_point_in_face_id = i; // cur_int_point1;
            cur_face = cur_int_point1.face;
        }
        // Skip duplicated points with same <x,y> in "cur_int_point1" pool
        let int_points_cur_pool_start = i;
        let int_points_cur_pool_num = $271a1c686af88dba$var$intPointsPoolCount(int_points1_sorted, i, cur_face);
        let next_int_point_id;
        if (int_points_cur_pool_start + int_points_cur_pool_num < num_int_points && int_points1_sorted[int_points_cur_pool_start + int_points_cur_pool_num].face === cur_face) next_int_point_id = int_points_cur_pool_start + int_points_cur_pool_num;
        else next_int_point_id = first_int_point_in_face_id;
        // From all points with same ,x,y. in 'next_int_point1' pool choose one that
        // has same face both in res_poly and in wrk_poly
        let int_points_next_pool_num = $271a1c686af88dba$var$intPointsPoolCount(int_points1_sorted, next_int_point_id, cur_face);
        next_int_point1 = null;
        for(let j = next_int_point_id; j < next_int_point_id + int_points_next_pool_num; j++){
            let next_int_point1_tmp = int_points1_sorted[j];
            if (next_int_point1_tmp.face === cur_face && int_points2[next_int_point1_tmp.id].face === int_points2[cur_int_point1.id].face) {
                next_int_point1 = next_int_point1_tmp;
                break;
            }
        }
        if (next_int_point1 === null) continue;
        let edge_from1 = cur_int_point1.edge_after;
        let edge_to1 = next_int_point1.edge_before;
        // Case #1. One of the ends is not boundary - probably tiny edge wrongly marked as boundary
        if (edge_from1.bv === $271a1c686af88dba$var$BOUNDARY && edge_to1.bv != $271a1c686af88dba$var$BOUNDARY) {
            edge_from1.bv = edge_to1.bv;
            continue;
        }
        if (edge_from1.bv != $271a1c686af88dba$var$BOUNDARY && edge_to1.bv === $271a1c686af88dba$var$BOUNDARY) {
            edge_to1.bv = edge_from1.bv;
            continue;
        }
        // Set up all boundary values for middle edges. Need for cases 2 and 3
        if (edge_from1.bv === $271a1c686af88dba$var$BOUNDARY && edge_to1.bv === $271a1c686af88dba$var$BOUNDARY && edge_from1 != edge_to1 || edge_from1.bv === $271a1c686af88dba$var$INSIDE$1 && edge_to1.bv === $271a1c686af88dba$var$OUTSIDE || edge_from1.bv === $271a1c686af88dba$var$OUTSIDE && edge_to1.bv === $271a1c686af88dba$var$INSIDE$1) {
            let edge_tmp = edge_from1.next;
            while(edge_tmp != edge_to1){
                edge_tmp.bvStart = undefined;
                edge_tmp.bvEnd = undefined;
                edge_tmp.bv = undefined;
                edge_tmp.setInclusion(poly2);
                edge_tmp = edge_tmp.next;
            }
        }
        // Case #2. Both of the ends boundary. Check all the edges in the middle
        // If some edges in the middle are not boundary then update bv of 'from' and 'to' edges
        if (edge_from1.bv === $271a1c686af88dba$var$BOUNDARY && edge_to1.bv === $271a1c686af88dba$var$BOUNDARY && edge_from1 != edge_to1) {
            let edge_tmp = edge_from1.next;
            let new_bv;
            while(edge_tmp != edge_to1){
                if (edge_tmp.bv != $271a1c686af88dba$var$BOUNDARY) {
                    if (new_bv === undefined) new_bv = edge_tmp.bv;
                    else {
                        if (edge_tmp.bv != new_bv) throw $271a1c686af88dba$export$b8e9cd941e8016ac.UNRESOLVED_BOUNDARY_CONFLICT;
                    }
                }
                edge_tmp = edge_tmp.next;
            }
            if (new_bv != undefined) {
                edge_from1.bv = new_bv;
                edge_to1.bv = new_bv;
            }
            continue; // all middle edges are boundary, proceed with this
        }
        // Case 3. One of the ends is inner, another is outer
        if (edge_from1.bv === $271a1c686af88dba$var$INSIDE$1 && edge_to1.bv === $271a1c686af88dba$var$OUTSIDE || edge_from1.bv === $271a1c686af88dba$var$OUTSIDE && edge_to1.bv === $271a1c686af88dba$var$INSIDE$1) {
            let edge_tmp = edge_from1;
            // Find missing intersection point
            while(edge_tmp != edge_to1){
                if (edge_tmp.bvStart === edge_from1.bv && edge_tmp.bvEnd === edge_to1.bv) {
                    let [dist, segment] = edge_tmp.shape.distanceTo(poly2);
                    if (dist < 10 * $271a1c686af88dba$export$2e2bcd8739ae039.DP_TOL) {
                        // let pt = edge_tmp.end;
                        // add to the list of intersections of poly1
                        $271a1c686af88dba$var$addToIntPoints(edge_tmp, segment.ps, int_points1);
                        // split edge_tmp in poly1 if need
                        let int_point1 = int_points1[int_points1.length - 1];
                        if (int_point1.is_vertex & $271a1c686af88dba$var$START_VERTEX) {
                            int_point1.edge_after = edge_tmp;
                            int_point1.edge_before = edge_tmp.prev;
                            edge_tmp.bvStart = $271a1c686af88dba$var$BOUNDARY;
                            edge_tmp.bv = undefined;
                            edge_tmp.setInclusion(poly2);
                        } else if (int_point1.is_vertex & $271a1c686af88dba$var$END_VERTEX) {
                            int_point1.edge_after = edge_tmp.next;
                            edge_tmp.bvEnd = $271a1c686af88dba$var$BOUNDARY;
                            edge_tmp.bv = undefined;
                            edge_tmp.setInclusion(poly2);
                        } else {
                            let newEdge1 = poly2.addVertex(int_point1.pt, edge_tmp);
                            int_point1.edge_before = newEdge1;
                            int_point1.edge_after = newEdge1.next;
                            newEdge1.setInclusion(poly2);
                            newEdge1.next.bvStart = $271a1c686af88dba$var$BOUNDARY;
                            newEdge1.next.bvEnd = undefined;
                            newEdge1.next.bv = undefined;
                            newEdge1.next.setInclusion(poly2);
                        }
                        // add to the list of intersections of poly2
                        let edge2 = poly2.findEdgeByPoint(segment.pe);
                        $271a1c686af88dba$var$addToIntPoints(edge2, segment.pe, int_points2);
                        // split edge2 in poly2 if need
                        let int_point2 = int_points2[int_points2.length - 1];
                        if (int_point2.is_vertex & $271a1c686af88dba$var$START_VERTEX) {
                            int_point2.edge_after = edge2;
                            int_point2.edge_before = edge2.prev;
                        } else if (int_point2.is_vertex & $271a1c686af88dba$var$END_VERTEX) int_point2.edge_after = edge2.next;
                        else {
                            // first locate int_points that may refer to edge2 as edge.after
                            // let int_point2_edge_before = int_points2.find( int_point => int_point.edge_before === edge2)
                            let int_point2_edge_after = int_points2.find((int_point)=>int_point.edge_after === edge2);
                            let newEdge2 = poly2.addVertex(int_point2.pt, edge2);
                            int_point2.edge_before = newEdge2;
                            int_point2.edge_after = newEdge2.next;
                            if (int_point2_edge_after) int_point2_edge_after.edge_after = newEdge2;
                            newEdge2.bvStart = undefined;
                            newEdge2.bvEnd = $271a1c686af88dba$var$BOUNDARY;
                            newEdge2.bv = undefined;
                            newEdge2.setInclusion(poly1);
                            newEdge2.next.bvStart = $271a1c686af88dba$var$BOUNDARY;
                            newEdge2.next.bvEnd = undefined;
                            newEdge2.next.bv = undefined;
                            newEdge2.next.setInclusion(poly1);
                        }
                        $271a1c686af88dba$var$sortIntersections(intersections);
                        iterate_more = true;
                        break;
                    }
                }
                edge_tmp = edge_tmp.next;
            }
            // we changed intersections inside loop, have to exit and repair again
            if (iterate_more) break;
            throw $271a1c686af88dba$export$b8e9cd941e8016ac.UNRESOLVED_BOUNDARY_CONFLICT;
        }
    }
    return iterate_more;
}
function $271a1c686af88dba$var$removeNotRelevantChains(polygon, op, int_points, is_res_polygon) {
    if (!int_points) return;
    let cur_face = undefined;
    let first_int_point_in_face_num = undefined;
    let int_point_current;
    let int_point_next;
    for(let i = 0; i < int_points.length; i++){
        int_point_current = int_points[i];
        if (int_point_current.face !== cur_face) {
            first_int_point_in_face_num = i;
            cur_face = int_point_current.face;
        }
        if (cur_face.isEmpty()) continue;
        // Get next int point from the same face that current
        // Count how many duplicated points with same <x,y> in "points from" pool ?
        let int_points_from_pull_start = i;
        let int_points_from_pull_num = $271a1c686af88dba$var$intPointsPoolCount(int_points, i, cur_face);
        let next_int_point_num;
        if (int_points_from_pull_start + int_points_from_pull_num < int_points.length && int_points[int_points_from_pull_start + int_points_from_pull_num].face === int_point_current.face) next_int_point_num = int_points_from_pull_start + int_points_from_pull_num;
        else next_int_point_num = first_int_point_in_face_num;
        int_point_next = int_points[next_int_point_num];
        /* Count how many duplicated points with same <x,y> in "points to" pull ? */ let int_points_to_pull_start = next_int_point_num;
        let int_points_to_pull_num = $271a1c686af88dba$var$intPointsPoolCount(int_points, int_points_to_pull_start, cur_face);
        let edge_from = int_point_current.edge_after;
        let edge_to = int_point_next.edge_before;
        if (edge_from.bv === $271a1c686af88dba$var$INSIDE$1 && edge_to.bv === $271a1c686af88dba$var$INSIDE$1 && op === $271a1c686af88dba$var$BOOLEAN_UNION || edge_from.bv === $271a1c686af88dba$var$OUTSIDE && edge_to.bv === $271a1c686af88dba$var$OUTSIDE && op === $271a1c686af88dba$var$BOOLEAN_INTERSECT || (edge_from.bv === $271a1c686af88dba$var$OUTSIDE || edge_to.bv === $271a1c686af88dba$var$OUTSIDE) && op === $271a1c686af88dba$var$BOOLEAN_SUBTRACT && !is_res_polygon || (edge_from.bv === $271a1c686af88dba$var$INSIDE$1 || edge_to.bv === $271a1c686af88dba$var$INSIDE$1) && op === $271a1c686af88dba$var$BOOLEAN_SUBTRACT && is_res_polygon || edge_from.bv === $271a1c686af88dba$var$BOUNDARY && edge_to.bv === $271a1c686af88dba$var$BOUNDARY && edge_from.overlap & $271a1c686af88dba$var$OVERLAP_SAME && is_res_polygon || edge_from.bv === $271a1c686af88dba$var$BOUNDARY && edge_to.bv === $271a1c686af88dba$var$BOUNDARY && edge_from.overlap & $271a1c686af88dba$var$OVERLAP_OPPOSITE) {
            polygon.removeChain(cur_face, edge_from, edge_to);
            /* update all points in "points from" pull */ for(let k = int_points_from_pull_start; k < int_points_from_pull_start + int_points_from_pull_num; k++)int_points[k].edge_after = undefined;
            /* update all points in "points to" pull */ for(let k = int_points_to_pull_start; k < int_points_to_pull_start + int_points_to_pull_num; k++)int_points[k].edge_before = undefined;
        }
        /* skip to the last point in "points from" group */ i += int_points_from_pull_num - 1;
    }
}
function $271a1c686af88dba$var$copyWrkToRes(res_polygon, wrk_polygon, op, int_points) {
    for (let face of wrk_polygon.faces){
        for (let edge of face)res_polygon.edges.add(edge);
        // If union - add face from wrk_polygon that is not intersected with res_polygon
        if (/*(op === BOOLEAN_UNION || op == BOOLEAN_SUBTRACT) &&*/ int_points.find((ip)=>ip.face === face) === undefined) res_polygon.addFace(face.first, face.last);
    }
}
function $271a1c686af88dba$var$swapLinks(res_polygon, wrk_polygon, intersections) {
    if (intersections.int_points1.length === 0) return;
    for(let i = 0; i < intersections.int_points1.length; i++){
        let int_point1 = intersections.int_points1[i];
        let int_point2 = intersections.int_points2[i];
        // Simple case - find continuation on the other polygon
        // Process edge from res_polygon
        if (int_point1.edge_before !== undefined && int_point1.edge_after === undefined) {
            if (int_point2.edge_before === undefined && int_point2.edge_after !== undefined) {
                // Connect edges
                int_point1.edge_before.next = int_point2.edge_after;
                int_point2.edge_after.prev = int_point1.edge_before;
                // Fill in missed links in intersection points
                int_point1.edge_after = int_point2.edge_after;
                int_point2.edge_before = int_point1.edge_before;
            }
        }
        // Process edge from wrk_polygon
        if (int_point2.edge_before !== undefined && int_point2.edge_after === undefined) {
            if (int_point1.edge_before === undefined && int_point1.edge_after !== undefined) {
                // Connect edges
                int_point2.edge_before.next = int_point1.edge_after;
                int_point1.edge_after.prev = int_point2.edge_before;
                // Complete missed links
                int_point2.edge_after = int_point1.edge_after;
                int_point1.edge_before = int_point2.edge_before;
            }
        }
        // Continuation not found - complex case
        // Continuation will be found on the same polygon.
        // It happens when intersection point is actually touching point
        // Polygon1
        if (int_point1.edge_before !== undefined && int_point1.edge_after === undefined) for (let int_point of intersections.int_points1_sorted){
            if (int_point === int_point1) continue; // skip same
            if (int_point.edge_before === undefined && int_point.edge_after !== undefined) {
                if (int_point.pt.equalTo(int_point1.pt)) {
                    // Connect edges
                    int_point1.edge_before.next = int_point.edge_after;
                    int_point.edge_after.prev = int_point1.edge_before;
                    // Complete missed links
                    int_point1.edge_after = int_point.edge_after;
                    int_point.edge_before = int_point1.edge_before;
                }
            }
        }
        // Polygon2
        if (int_point2.edge_before !== undefined && int_point2.edge_after === undefined) for (let int_point of intersections.int_points2_sorted){
            if (int_point === int_point2) continue; // skip same
            if (int_point.edge_before === undefined && int_point.edge_after !== undefined) {
                if (int_point.pt.equalTo(int_point2.pt)) {
                    // Connect edges
                    int_point2.edge_before.next = int_point.edge_after;
                    int_point.edge_after.prev = int_point2.edge_before;
                    // Complete missed links
                    int_point2.edge_after = int_point.edge_after;
                    int_point.edge_before = int_point2.edge_before;
                }
            }
        }
    }
// Sanity check that no dead ends left
}
function $271a1c686af88dba$var$removeOldFaces(polygon, int_points) {
    for (let int_point of int_points){
        polygon.faces.delete(int_point.face);
        int_point.face = undefined;
        if (int_point.edge_before) int_point.edge_before.face = undefined;
        if (int_point.edge_after) int_point.edge_after.face = undefined;
    }
}
function $271a1c686af88dba$var$restoreFaces(polygon, int_points, other_int_points) {
    // For each intersection point - create new face
    for (let int_point of int_points){
        if (int_point.edge_before === undefined || int_point.edge_after === undefined) continue;
        if (int_point.face) continue;
        if (int_point.edge_after.face || int_point.edge_before.face) continue;
        let first = int_point.edge_after; // face start
        let last = int_point.edge_before; // face end;
        try {
            $271a1c686af88dba$var$LinkedList.testInfiniteLoop(first); // check and throw error if infinite loop found
        } catch (error) {
            throw $271a1c686af88dba$export$b8e9cd941e8016ac.CANNOT_COMPLETE_BOOLEAN_OPERATION;
        }
        let face = polygon.addFace(first, last);
        // Mark intersection points from the newly create face
        // to avoid multiple creation of the same face.
        // Face was assigned to each edge of new face in addFace function
        for (let int_point_tmp of int_points)if (int_point_tmp.edge_before && int_point_tmp.edge_after && int_point_tmp.edge_before.face === face && int_point_tmp.edge_after.face === face) int_point_tmp.face = face;
        // Mark other intersection points as well
        for (let int_point_tmp of other_int_points)if (int_point_tmp.edge_before && int_point_tmp.edge_after && int_point_tmp.edge_before.face === face && int_point_tmp.edge_after.face === face) int_point_tmp.face = face;
    }
}
function $271a1c686af88dba$var$removeNotRelevantNotIntersectedFaces(polygon, notIntersectedFaces, op, is_res_polygon) {
    for (let face of notIntersectedFaces){
        let rel = face.first.bv;
        if (op === $271a1c686af88dba$var$BOOLEAN_UNION && rel === $271a1c686af88dba$var$INSIDE$1 || op === $271a1c686af88dba$var$BOOLEAN_SUBTRACT && rel === $271a1c686af88dba$var$INSIDE$1 && is_res_polygon || op === $271a1c686af88dba$var$BOOLEAN_SUBTRACT && rel === $271a1c686af88dba$var$OUTSIDE && !is_res_polygon || op === $271a1c686af88dba$var$BOOLEAN_INTERSECT && rel === $271a1c686af88dba$var$OUTSIDE) polygon.deleteFace(face);
    }
}
var $271a1c686af88dba$export$7810ed04e2e13fba = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BOOLEAN_INTERSECT: $271a1c686af88dba$var$BOOLEAN_INTERSECT,
    BOOLEAN_SUBTRACT: $271a1c686af88dba$var$BOOLEAN_SUBTRACT,
    BOOLEAN_UNION: $271a1c686af88dba$var$BOOLEAN_UNION,
    calculateIntersections: $271a1c686af88dba$var$calculateIntersections,
    innerClip: $271a1c686af88dba$var$innerClip,
    intersect: $271a1c686af88dba$var$intersect$1,
    outerClip: $271a1c686af88dba$var$outerClip,
    removeNotRelevantChains: $271a1c686af88dba$var$removeNotRelevantChains,
    removeOldFaces: $271a1c686af88dba$var$removeOldFaces,
    restoreFaces: $271a1c686af88dba$var$restoreFaces,
    subtract: $271a1c686af88dba$var$subtract,
    unify: $271a1c686af88dba$var$unify
});
/*
    Dimensionally extended 9-intersected model
    See https://en.wikipedia.org/wiki/DE-9IM for more details
 */ // const DISJOINT = RegExp('FF.FF....');
const $271a1c686af88dba$var$EQUAL = RegExp("T.F..FFF.|T.F...F..");
const $271a1c686af88dba$var$INTERSECT = RegExp("T........|.T.......|...T.....|....T....");
const $271a1c686af88dba$var$TOUCH = RegExp("FT.......|F..T.....|F...T....");
const $271a1c686af88dba$var$INSIDE = RegExp("T.F..F...");
const $271a1c686af88dba$var$COVERED = RegExp("T.F..F...|.TF..F...|..FT.F...|..F.TF...");
class $271a1c686af88dba$var$DE9IM {
    /**
     * Create new instance of DE9IM matrix
     */ constructor(){
        /**
         * Array representing 3x3 intersection matrix
         * @type {Shape[]}
         */ this.m = new Array(9).fill(undefined);
    }
    /**
     * Get Interior To Interior intersection
     * @returns {Shape[] | undefined}
     */ get I2I() {
        return this.m[0];
    }
    /**
     * Set Interior To Interior intersection
     * @param geom
     */ set I2I(geom) {
        this.m[0] = geom;
    }
    /**
     * Get Interior To Boundary intersection
     * @returns {Shape[] | undefined}
     */ get I2B() {
        return this.m[1];
    }
    /**
     * Set Interior to Boundary intersection
     * @param geomc
     */ set I2B(geom) {
        this.m[1] = geom;
    }
    /**
     * Get Interior To Exterior intersection
     * @returns {Shape[] | undefined}
     */ get I2E() {
        return this.m[2];
    }
    /**
     * Set Interior to Exterior intersection
     * @param geom
     */ set I2E(geom) {
        this.m[2] = geom;
    }
    /**
     * Get Boundary To Interior intersection
     * @returns {Shape[] | undefined}
     */ get B2I() {
        return this.m[3];
    }
    /**
     * Set Boundary to Interior intersection
     * @param geom
     */ set B2I(geom) {
        this.m[3] = geom;
    }
    /**
     * Get Boundary To Boundary intersection
     * @returns {Shape[] | undefined}
     */ get B2B() {
        return this.m[4];
    }
    /**
     * Set Boundary to Boundary intersection
     * @param geom
     */ set B2B(geom) {
        this.m[4] = geom;
    }
    /**
     * Get Boundary To Exterior intersection
     * @returns {Shape[] | undefined}
     */ get B2E() {
        return this.m[5];
    }
    /**
     * Set Boundary to Exterior intersection
     * @param geom
     */ set B2E(geom) {
        this.m[5] = geom;
    }
    /**
     * Get Exterior To Interior intersection
     * @returns {Shape[] | undefined}
     */ get E2I() {
        return this.m[6];
    }
    /**
     * Set Exterior to Interior intersection
     * @param geom
     */ set E2I(geom) {
        this.m[6] = geom;
    }
    /**
     * Get Exterior To Boundary intersection
     * @returns {Shape[] | undefined}
     */ get E2B() {
        return this.m[7];
    }
    /**
     * Set Exterior to Boundary intersection
     * @param geom
     */ set E2B(geom) {
        this.m[7] = geom;
    }
    /**
     * Get Exterior to Exterior intersection
     * @returns {Shape[] | undefined}
     */ get E2E() {
        return this.m[8];
    }
    /**
     * Set Exterior to Exterior intersection
     * @param geom
     */ set E2E(geom) {
        this.m[8] = geom;
    }
    /**
     * Return de9im matrix as string where<br/>
     * - intersection is 'T'<br/>
     * - not intersected is 'F'<br/>
     * - not relevant is '*'<br/>
     * For example, string 'FF**FF****' means 'DISJOINT'
     * @returns {string}
     */ toString() {
        return this.m.map((e)=>{
            if (e instanceof Array && e.length > 0) return "T";
            else if (e instanceof Array && e.length === 0) return "F";
            else return "*";
        }).join("");
    }
    equal() {
        return $271a1c686af88dba$var$EQUAL.test(this.toString());
    }
    intersect() {
        return $271a1c686af88dba$var$INTERSECT.test(this.toString());
    }
    touch() {
        return $271a1c686af88dba$var$TOUCH.test(this.toString());
    }
    inside() {
        return $271a1c686af88dba$var$INSIDE.test(this.toString());
    }
    covered() {
        return $271a1c686af88dba$var$COVERED.test(this.toString());
    }
}
/**
 * @module RayShoot
 */ /**
 * Implements ray shooting algorithm. Returns relation between point and polygon: inside, outside or boundary
 * @param {Polygon} polygon - polygon to test
 * @param {Point} point - point to test
 * @returns {INSIDE|OUTSIDE|BOUNDARY}
 */ function $271a1c686af88dba$export$3adad403c78dc9b2(polygon, point) {
    let contains = undefined;
    // 1. Quick reject
    // if (polygon.box.not_intersect(point.box)) {
    //     return Flatten.OUTSIDE;
    // }
    let ray = new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(point);
    let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(ray.pt, ray.norm);
    // 2. Locate relevant edges of the polygon
    const searchBox = new $271a1c686af88dba$export$2e2bcd8739ae039.Box(ray.box.xmin - $271a1c686af88dba$export$2e2bcd8739ae039.DP_TOL, ray.box.ymin - $271a1c686af88dba$export$2e2bcd8739ae039.DP_TOL, ray.box.xmax, ray.box.ymax + $271a1c686af88dba$export$2e2bcd8739ae039.DP_TOL);
    if (polygon.box.not_intersect(searchBox)) return $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE;
    let resp_edges = polygon.edges.search(searchBox);
    if (resp_edges.length === 0) return $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE;
    // 2.5 Check if boundary
    for (let edge of resp_edges){
        if (edge.shape.contains(point)) return $271a1c686af88dba$export$2e2bcd8739ae039.BOUNDARY;
    }
    let faces = [
        ...polygon.faces
    ];
    // 3. Calculate intersections
    let intersections = [];
    for (let edge of resp_edges)for (let ip of ray.intersect(edge.shape)){
        // If intersection is equal to query point then point lays on boundary
        if (ip.equalTo(point)) return $271a1c686af88dba$export$2e2bcd8739ae039.BOUNDARY;
        intersections.push({
            pt: ip,
            edge: edge,
            face_index: faces.indexOf(edge.face)
        });
    }
    // 4. Sort intersection in x-ascending order
    intersections.sort((i1, i2)=>{
        if ($271a1c686af88dba$var$LT(i1.pt.x, i2.pt.x)) return -1;
        if ($271a1c686af88dba$var$GT(i1.pt.x, i2.pt.x)) return 1;
        if (i1.face_index < i2.face_index) return -1;
        if (i1.face_index > i2.face_index) return 1;
        if (i1.edge.arc_length < i2.edge.arc_length) return -1;
        if (i1.edge.arc_length > i2.edge.arc_length) return 1;
        return 0;
    });
    // 5. Count real intersections, exclude touching
    let counter = 0;
    for(let i = 0; i < intersections.length; i++){
        let intersection = intersections[i];
        if (intersection.pt.equalTo(intersection.edge.shape.start)) {
            /* skip same point between same edges if already counted */ if (i > 0 && intersection.pt.equalTo(intersections[i - 1].pt) && intersection.face_index === intersections[i - 1].face_index && intersection.edge.prev === intersections[i - 1].edge) continue;
            let prev_edge = intersection.edge.prev;
            while($271a1c686af88dba$var$EQ_0(prev_edge.length))prev_edge = prev_edge.prev;
            let prev_tangent = prev_edge.shape.tangentInEnd();
            let prev_point = intersection.pt.translate(prev_tangent);
            let cur_tangent = intersection.edge.shape.tangentInStart();
            let cur_point = intersection.pt.translate(cur_tangent);
            let prev_on_the_left = prev_point.leftTo(line);
            let cur_on_the_left = cur_point.leftTo(line);
            if (prev_on_the_left && !cur_on_the_left || !prev_on_the_left && cur_on_the_left) counter++;
        } else if (intersection.pt.equalTo(intersection.edge.shape.end)) {
            /* skip same point between same edges if already counted */ if (i > 0 && intersection.pt.equalTo(intersections[i - 1].pt) && intersection.face_index === intersections[i - 1].face_index && intersection.edge.next === intersections[i - 1].edge) continue;
            let next_edge = intersection.edge.next;
            while($271a1c686af88dba$var$EQ_0(next_edge.length))next_edge = next_edge.next;
            let next_tangent = next_edge.shape.tangentInStart();
            let next_point = intersection.pt.translate(next_tangent);
            let cur_tangent = intersection.edge.shape.tangentInEnd();
            let cur_point = intersection.pt.translate(cur_tangent);
            let next_on_the_left = next_point.leftTo(line);
            let cur_on_the_left = cur_point.leftTo(line);
            if (next_on_the_left && !cur_on_the_left || !next_on_the_left && cur_on_the_left) counter++;
        } else if (intersection.edge.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) counter++;
        else {
            /* Check if ray does not touch the curve in the extremal (top or bottom) point */ let box = intersection.edge.shape.box;
            if (!($271a1c686af88dba$var$EQ(intersection.pt.y, box.ymin) || $271a1c686af88dba$var$EQ(intersection.pt.y, box.ymax))) counter++;
        }
    }
    // 6. Odd or even?
    contains = counter % 2 === 1 ? $271a1c686af88dba$export$48ea0cac79c83ca8 : $271a1c686af88dba$export$be7fee058d85725d;
    return contains;
}
/*
    Calculate relationship between two shapes and return result in the form of
    Dimensionally Extended nine-Intersection Matrix (https://en.wikipedia.org/wiki/DE-9IM)
 */ /**
 * Returns true if shapes are topologically equal:  their interiors intersect and
 * no part of the interior or boundary of one geometry intersects the exterior of the other
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$equal(shape1, shape2) {
    return $271a1c686af88dba$var$relate(shape1, shape2).equal();
}
/**
 * Returns true if shapes have at least one point in common, same as "not disjoint"
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$intersect(shape1, shape2) {
    return $271a1c686af88dba$var$relate(shape1, shape2).intersect();
}
/**
 * Returns true if shapes have at least one point in common, but their interiors do not intersect
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$touch(shape1, shape2) {
    return $271a1c686af88dba$var$relate(shape1, shape2).touch();
}
/**
 * Returns true if shapes have no points in common neither in interior nor in boundary
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$disjoint(shape1, shape2) {
    return !$271a1c686af88dba$var$intersect(shape1, shape2);
}
/**
 * Returns true shape1 lies in the interior of shape2
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$inside(shape1, shape2) {
    return $271a1c686af88dba$var$relate(shape1, shape2).inside();
}
/**
 * Returns true if every point in shape1 lies in the interior or on the boundary of shape2
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$covered(shape1, shape2) {
    return $271a1c686af88dba$var$relate(shape1, shape2).covered();
}
/**
 * Returns true shape1's interior contains shape2 <br/>
 * Same as inside(shape2, shape1)
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$contain(shape1, shape2) {
    return $271a1c686af88dba$var$inside(shape2, shape1);
}
/**
 * Returns true shape1's cover shape2, same as shape2 covered by shape1
 * @param shape1
 * @param shape2
 * @returns {boolean}
 */ function $271a1c686af88dba$var$cover(shape1, shape2) {
    return $271a1c686af88dba$var$covered(shape2, shape1);
}
/**
 * Returns relation between two shapes as intersection 3x3 matrix, where each
 * element contains relevant intersection as array of shapes.
 * If there is no intersection, element contains empty array
 * If intersection is irrelevant it left undefined. (For example, intersection
 * between two exteriors is usually irrelevant)
 * @param shape1
 * @param shape2
 * @returns {DE9IM}
 */ function $271a1c686af88dba$var$relate(shape1, shape2) {
    if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$relateLine2Line(shape1, shape2);
    else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$relateLine2Circle(shape1, shape2);
    else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return $271a1c686af88dba$var$relateLine2Box(shape1, shape2);
    else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$relateLine2Polygon(shape1, shape2);
    else if ((shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$relateShape2Polygon(shape1, shape2);
    else if ((shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) && (shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box)) return $271a1c686af88dba$var$relateShape2Polygon(shape1, new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(shape2));
    else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$relatePolygon2Polygon(shape1, shape2);
    else if ((shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) && (shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box)) return $271a1c686af88dba$var$relatePolygon2Polygon(new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(shape1), new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(shape2));
    else if ((shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$relatePolygon2Polygon(new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(shape1), shape2);
    else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon && (shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box)) return $271a1c686af88dba$var$relatePolygon2Polygon(shape1, new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(shape2));
}
function $271a1c686af88dba$var$relateLine2Line(line1, line2) {
    let denim = new $271a1c686af88dba$var$DE9IM();
    let ip = $271a1c686af88dba$var$intersectLine2Line(line1, line2);
    if (ip.length === 0) {
        if (line1.contains(line2.pt) && line2.contains(line1.pt)) {
            denim.I2I = [
                line1
            ]; // equal  'T.F...F..'  - no boundary
            denim.I2E = [];
            denim.E2I = [];
        } else {
            denim.I2I = [];
            denim.I2E = [
                line1
            ];
            denim.E2I = [
                line2
            ];
        }
    } else {
        denim.I2I = ip;
        denim.I2E = line1.split(ip);
        denim.E2I = line2.split(ip);
    }
    return denim;
}
function $271a1c686af88dba$var$relateLine2Circle(line, circle) {
    let denim = new $271a1c686af88dba$var$DE9IM();
    let ip = $271a1c686af88dba$var$intersectLine2Circle(line, circle);
    if (ip.length === 0) {
        denim.I2I = [];
        denim.I2B = [];
        denim.I2E = [
            line
        ];
        denim.E2I = [
            circle
        ];
    } else if (ip.length === 1) {
        denim.I2I = [];
        denim.I2B = ip;
        denim.I2E = line.split(ip);
        denim.E2I = [
            circle
        ];
    } else {
        let multiline = new $271a1c686af88dba$export$a5433e0f3b1dce29([
            line
        ]);
        let ip_sorted = line.sortPoints(ip);
        multiline.split(ip_sorted);
        let splitShapes = multiline.toShapes();
        denim.I2I = [
            splitShapes[1]
        ];
        denim.I2B = ip_sorted;
        denim.I2E = [
            splitShapes[0],
            splitShapes[2]
        ];
        denim.E2I = new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon([
            circle.toArc()
        ]).cutWithLine(line);
    }
    return denim;
}
function $271a1c686af88dba$var$relateLine2Box(line, box) {
    let denim = new $271a1c686af88dba$var$DE9IM();
    let ip = $271a1c686af88dba$var$intersectLine2Box(line, box);
    if (ip.length === 0) {
        denim.I2I = [];
        denim.I2B = [];
        denim.I2E = [
            line
        ];
        denim.E2I = [
            box
        ];
    } else if (ip.length === 1) {
        denim.I2I = [];
        denim.I2B = ip;
        denim.I2E = line.split(ip);
        denim.E2I = [
            box
        ];
    } else {
        let multiline = new $271a1c686af88dba$export$a5433e0f3b1dce29([
            line
        ]);
        let ip_sorted = line.sortPoints(ip);
        multiline.split(ip_sorted);
        let splitShapes = multiline.toShapes();
        /* Are two intersection points on the same segment of the box boundary ? */ if (box.toSegments().some((segment)=>segment.contains(ip[0]) && segment.contains(ip[1]))) {
            denim.I2I = []; // case of touching
            denim.I2B = [
                splitShapes[1]
            ];
            denim.I2E = [
                splitShapes[0],
                splitShapes[2]
            ];
            denim.E2I = [
                box
            ];
        } else {
            denim.I2I = [
                splitShapes[1]
            ]; // [segment(ip[0], ip[1])];
            denim.I2B = ip_sorted;
            denim.I2E = [
                splitShapes[0],
                splitShapes[2]
            ];
            denim.E2I = new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(box.toSegments()).cutWithLine(line);
        }
    }
    return denim;
}
function $271a1c686af88dba$var$relateLine2Polygon(line, polygon) {
    let denim = new $271a1c686af88dba$var$DE9IM();
    let ip = $271a1c686af88dba$var$intersectLine2Polygon(line, polygon);
    let multiline = new $271a1c686af88dba$export$a5433e0f3b1dce29([
        line
    ]);
    let ip_sorted = ip.length > 0 ? ip.slice() : line.sortPoints(ip);
    multiline.split(ip_sorted);
    [
        ...multiline
    ].forEach((edge)=>edge.setInclusion(polygon));
    denim.I2I = [
        ...multiline
    ].filter((edge)=>edge.bv === $271a1c686af88dba$export$2e2bcd8739ae039.INSIDE).map((edge)=>edge.shape);
    denim.I2B = [
        ...multiline
    ].slice(1).map((edge)=>edge.bv === $271a1c686af88dba$export$2e2bcd8739ae039.BOUNDARY ? edge.shape : edge.shape.start);
    denim.I2E = [
        ...multiline
    ].filter((edge)=>edge.bv === $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE).map((edge)=>edge.shape);
    denim.E2I = polygon.cutWithLine(line);
    return denim;
}
function $271a1c686af88dba$var$relateShape2Polygon(shape, polygon) {
    let denim = new $271a1c686af88dba$var$DE9IM();
    let ip = $271a1c686af88dba$var$intersectShape2Polygon(shape, polygon);
    let ip_sorted = ip.length > 0 ? ip.slice() : shape.sortPoints(ip);
    let multiline = new $271a1c686af88dba$export$a5433e0f3b1dce29([
        shape
    ]);
    multiline.split(ip_sorted);
    [
        ...multiline
    ].forEach((edge)=>edge.setInclusion(polygon));
    denim.I2I = [
        ...multiline
    ].filter((edge)=>edge.bv === $271a1c686af88dba$export$2e2bcd8739ae039.INSIDE).map((edge)=>edge.shape);
    denim.I2B = [
        ...multiline
    ].slice(1).map((edge)=>edge.bv === $271a1c686af88dba$export$2e2bcd8739ae039.BOUNDARY ? edge.shape : edge.shape.start);
    denim.I2E = [
        ...multiline
    ].filter((edge)=>edge.bv === $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE).map((edge)=>edge.shape);
    denim.B2I = [];
    denim.B2B = [];
    denim.B2E = [];
    for (let pt of [
        shape.start,
        shape.end
    ])switch($271a1c686af88dba$export$3adad403c78dc9b2(polygon, pt)){
        case $271a1c686af88dba$export$2e2bcd8739ae039.INSIDE:
            denim.B2I.push(pt);
            break;
        case $271a1c686af88dba$export$2e2bcd8739ae039.BOUNDARY:
            denim.B2B.push(pt);
            break;
        case $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE:
            denim.B2E.push(pt);
            break;
    }
    // denim.E2I  TODO: calculate, not clear what is expected result
    return denim;
}
function $271a1c686af88dba$var$relatePolygon2Polygon(polygon1, polygon2) {
    let denim = new $271a1c686af88dba$var$DE9IM();
    let [ip_sorted1, ip_sorted2] = $271a1c686af88dba$var$calculateIntersections(polygon1, polygon2);
    let boolean_intersection = $271a1c686af88dba$var$intersect$1(polygon1, polygon2);
    let boolean_difference1 = $271a1c686af88dba$var$subtract(polygon1, polygon2);
    let boolean_difference2 = $271a1c686af88dba$var$subtract(polygon2, polygon1);
    let [inner_clip_shapes1, inner_clip_shapes2] = $271a1c686af88dba$var$innerClip(polygon1, polygon2);
    let outer_clip_shapes1 = $271a1c686af88dba$var$outerClip(polygon1, polygon2);
    let outer_clip_shapes2 = $271a1c686af88dba$var$outerClip(polygon2, polygon1);
    denim.I2I = boolean_intersection.isEmpty() ? [] : [
        boolean_intersection
    ];
    denim.I2B = inner_clip_shapes2;
    denim.I2E = boolean_difference1.isEmpty() ? [] : [
        boolean_difference1
    ];
    denim.B2I = inner_clip_shapes1;
    denim.B2B = ip_sorted1;
    denim.B2E = outer_clip_shapes1;
    denim.E2I = boolean_difference2.isEmpty() ? [] : [
        boolean_difference2
    ];
    denim.E2B = outer_clip_shapes2;
    // denim.E2E    not relevant meanwhile
    return denim;
}
var $271a1c686af88dba$export$932c2897ef8e4e8e = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    contain: $271a1c686af88dba$var$contain,
    cover: $271a1c686af88dba$var$cover,
    covered: $271a1c686af88dba$var$covered,
    disjoint: $271a1c686af88dba$var$disjoint,
    equal: $271a1c686af88dba$var$equal,
    inside: $271a1c686af88dba$var$inside,
    intersect: $271a1c686af88dba$var$intersect,
    relate: $271a1c686af88dba$var$relate,
    touch: $271a1c686af88dba$var$touch
});
/**
 * Class representing an affine transformation 3x3 matrix:
 * <pre>
 *      [ a  c  tx
 * A =    b  d  ty
 *        0  0  1  ]
 * </pre
 * @type {Matrix}
 */ class $271a1c686af88dba$export$5b12bf1653c0dd85 {
    /**
     * Construct new instance of affine transformation matrix <br/>
     * If parameters omitted, construct identity matrix a = 1, d = 1
     * @param {number} a - position(0,0)   sx*cos(alpha)
     * @param {number} b - position (0,1)  sx*sin(alpha)
     * @param {number} c - position (1,0)  -sy*sin(alpha)
     * @param {number} d - position (1,1)  sy*cos(alpha)
     * @param {number} tx - position (2,0) translation by x
     * @param {number} ty - position (2,1) translation by y
     */ constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }
    /**
     * Return new cloned instance of matrix
     * @return {Matrix}
     **/ clone() {
        return new $271a1c686af88dba$export$5b12bf1653c0dd85(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }
    /**
     * Transform vector [x,y] using transformation matrix. <br/>
     * Vector [x,y] is an abstract array[2] of numbers and not a FlattenJS object <br/>
     * The result is also an abstract vector [x',y'] = A * [x,y]:
     * <code>
     * [x'       [ ax + by + tx
     *  y'   =     cx + dy + ty
     *  1]                    1 ]
     * </code>
     * @param {number[]} vector - array[2] of numbers
     * @returns {number[]} transformation result - array[2] of numbers
     */ transform(vector) {
        return [
            vector[0] * this.a + vector[1] * this.c + this.tx,
            vector[0] * this.b + vector[1] * this.d + this.ty
        ];
    }
    /**
     * Returns result of multiplication of this matrix by other matrix
     * @param {Matrix} other_matrix - matrix to multiply by
     * @returns {Matrix}
     */ multiply(other_matrix) {
        return new $271a1c686af88dba$export$5b12bf1653c0dd85(this.a * other_matrix.a + this.c * other_matrix.b, this.b * other_matrix.a + this.d * other_matrix.b, this.a * other_matrix.c + this.c * other_matrix.d, this.b * other_matrix.c + this.d * other_matrix.d, this.a * other_matrix.tx + this.c * other_matrix.ty + this.tx, this.b * other_matrix.tx + this.d * other_matrix.ty + this.ty);
    }
    /**
     * Return new matrix as a result of multiplication of the current matrix
     * by the matrix(1,0,0,1,tx,ty)
     * @param {Vector} vector - Translation by vector or
     * @param {number} tx - translation by x-axis
     * @param {number} ty - translation by y-axis
     * @returns {Matrix}
     */ translate(...args) {
        let tx, ty;
        if (args.length == 1 && !isNaN(args[0].x) && !isNaN(args[0].y)) {
            tx = args[0].x;
            ty = args[0].y;
        } else if (args.length === 2 && typeof args[0] == "number" && typeof args[1] == "number") {
            tx = args[0];
            ty = args[1];
        } else throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
        return this.multiply(new $271a1c686af88dba$export$5b12bf1653c0dd85(1, 0, 0, 1, tx, ty));
    }
    /**
     * Return new matrix as a result of multiplication of the current matrix
     * by the matrix that defines rotation by given angle (in radians) around
     * center of rotation (centerX,centerY) in counterclockwise direction
     * @param {number} angle - angle in radians
     * @param {number} centerX - center of rotation
     * @param {number} centerY - center of rotation
     * @returns {Matrix}
     */ rotate(angle, centerX = 0.0, centerY = 0.0) {
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        return this.translate(centerX, centerY).multiply(new $271a1c686af88dba$export$5b12bf1653c0dd85(cos, sin, -sin, cos, 0, 0)).translate(-centerX, -centerY);
    }
    /**
     * Return new matrix as a result of multiplication of the current matrix
     * by the matrix (sx,0,0,sy,0,0) that defines scaling
     * @param {number} sx
     * @param {number} sy
     * @returns {Matrix}
     */ scale(sx, sy) {
        return this.multiply(new $271a1c686af88dba$export$5b12bf1653c0dd85(sx, 0, 0, sy, 0, 0));
    }
    /**
     * Returns true if two matrix are equal parameter by parameter
     * @param {Matrix} matrix - other matrix
     * @returns {boolean} true if equal, false otherwise
     */ equalTo(matrix) {
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.tx, matrix.tx)) return false;
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.ty, matrix.ty)) return false;
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.a, matrix.a)) return false;
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.b, matrix.b)) return false;
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.c, matrix.c)) return false;
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.d, matrix.d)) return false;
        return true;
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Matrix = $271a1c686af88dba$export$5b12bf1653c0dd85;
/**
 * Function to create matrix equivalent to "new" constructor
 * @param args
 */ const $271a1c686af88dba$export$9bdad1ae37d738e0 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.matrix = $271a1c686af88dba$export$9bdad1ae37d738e0;
/**
 * Created by Alex Bol on 4/1/2017.
 */ /**
 * Interval is a pair of numbers or a pair of any comparable objects on which may be defined predicates
 * *equal*, *less* and method *max(p1, p1)* that returns maximum in a pair.
 * When interval is an object rather than a pair of numbers, this object should have properties *low*, *high*, *max*
 * and implement methods *less_than(), equal_to(), intersect(), not_intersect(), clone(), output()*.
 * Two static methods *comparable_max(), comparable_less_than()* define how to compare values in pair. <br/>
 * This interface is described in typescript definition file *index.d.ts*
 *
 * Axis aligned rectangle is an example of such interval.
 * We may look at rectangle as an interval between its low left and top right corners.
 * See **Box** class in [flatten-js](https://github.com/alexbol99/flatten-js) library as the example
 * of Interval interface implementation
 * @type {Interval}
 */ const $271a1c686af88dba$var$Interval = class Interval {
    /**
     * Accept two comparable values and creates new instance of interval
     * Predicate Interval.comparable_less(low, high) supposed to return true on these values
     * @param low
     * @param high
     */ constructor(low, high){
        this.low = low;
        this.high = high;
    }
    /**
     * Clone interval
     * @returns {Interval}
     */ clone() {
        return new Interval(this.low, this.high);
    }
    /**
     * Propery max returns clone of this interval
     * @returns {Interval}
     */ get max() {
        return this.clone(); // this.high;
    }
    /**
     * Predicate returns true is this interval less than other interval
     * @param other_interval
     * @returns {boolean}
     */ less_than(other_interval) {
        return this.low < other_interval.low || this.low === other_interval.low && this.high < other_interval.high;
    }
    /**
     * Predicate returns true is this interval equals to other interval
     * @param other_interval
     * @returns {boolean}
     */ equal_to(other_interval) {
        return this.low === other_interval.low && this.high === other_interval.high;
    }
    /**
     * Predicate returns true if this interval intersects other interval
     * @param other_interval
     * @returns {boolean}
     */ intersect(other_interval) {
        return !this.not_intersect(other_interval);
    }
    /**
     * Predicate returns true if this interval does not intersect other interval
     * @param other_interval
     * @returns {boolean}
     */ not_intersect(other_interval) {
        return this.high < other_interval.low || other_interval.high < this.low;
    }
    /**
     * Returns new interval merged with other interval
     * @param {Interval} other_interval - Other interval to merge with
     * @returns {Interval}
     */ merge(other_interval) {
        return new Interval(this.low === undefined ? other_interval.low : this.low < other_interval.low ? this.low : other_interval.low, this.high === undefined ? other_interval.high : this.high > other_interval.high ? this.high : other_interval.high);
    }
    /**
     * Returns how key should return
     */ output() {
        return [
            this.low,
            this.high
        ];
    }
    /**
     * Function returns maximum between two comparable values
     * @param interval1
     * @param interval2
     * @returns {Interval}
     */ static comparable_max(interval1, interval2) {
        return interval1.merge(interval2);
    }
    /**
     * Predicate returns true if first value less than second value
     * @param val1
     * @param val2
     * @returns {boolean}
     */ static comparable_less_than(val1, val2) {
        return val1 < val2;
    }
};
/**
 * Created by Alex Bol on 3/28/2017.
 */ // module.exports = {
//     RB_TREE_COLOR_RED: 0,
//     RB_TREE_COLOR_BLACK: 1
// };
const $271a1c686af88dba$var$RB_TREE_COLOR_RED = 0;
const $271a1c686af88dba$var$RB_TREE_COLOR_BLACK = 1;
/**
 * Created by Alex Bol on 4/1/2017.
 */ class $271a1c686af88dba$var$Node {
    constructor(key, value, left = null, right = null, parent = null, color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK){
        this.left = left; // reference to left child node
        this.right = right; // reference to right child node
        this.parent = parent; // reference to parent node
        this.color = color;
        this.item = {
            key: key,
            value: value
        }; // key is supposed to be instance of Interval
        /* If not, this should by an array of two numbers */ if (key && key instanceof Array && key.length === 2) {
            if (!Number.isNaN(key[0]) && !Number.isNaN(key[1])) {
                let [low, high] = key;
                if (low > high) [low, high] = [
                    high,
                    low
                ];
                this.item.key = new $271a1c686af88dba$var$Interval(low, high);
            }
        }
        this.max = this.item.key ? this.item.key.max : undefined;
    }
    isNil() {
        return this.item.key === undefined && this.item.value === undefined && this.left === null && this.right === null && this.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
    }
    _value_less_than(other_node) {
        return this.item.value && other_node.item.value && this.item.value.less_than ? this.item.value.less_than(other_node.item.value) : this.item.value < other_node.item.value;
    }
    less_than(other_node) {
        // if tree stores only keys
        if (this.item.value === this.item.key && other_node.item.value === other_node.item.key) return this.item.key.less_than(other_node.item.key);
        else return this.item.key.less_than(other_node.item.key) || this.item.key.equal_to(other_node.item.key) && this._value_less_than(other_node);
    }
    _value_equal(other_node) {
        return this.item.value && other_node.item.value && this.item.value.equal_to ? this.item.value.equal_to(other_node.item.value) : this.item.value === other_node.item.value;
    }
    equal_to(other_node) {
        // if tree stores only keys
        if (this.item.value === this.item.key && other_node.item.value === other_node.item.key) return this.item.key.equal_to(other_node.item.key);
        else return this.item.key.equal_to(other_node.item.key) && this._value_equal(other_node);
    }
    intersect(other_node) {
        return this.item.key.intersect(other_node.item.key);
    }
    copy_data(other_node) {
        this.item.key = other_node.item.key;
        this.item.value = other_node.item.value;
    }
    update_max() {
        // use key (Interval) max property instead of key.high
        this.max = this.item.key ? this.item.key.max : undefined;
        if (this.right && this.right.max) {
            const comparable_max = this.item.key.constructor.comparable_max; // static method
            this.max = comparable_max(this.max, this.right.max);
        }
        if (this.left && this.left.max) {
            const comparable_max = this.item.key.constructor.comparable_max; // static method
            this.max = comparable_max(this.max, this.left.max);
        }
    }
    // Other_node does not intersect any node of left subtree, if this.left.max < other_node.item.key.low
    not_intersect_left_subtree(search_node) {
        const comparable_less_than = this.item.key.constructor.comparable_less_than; // static method
        let high = this.left.max.high !== undefined ? this.left.max.high : this.left.max;
        return comparable_less_than(high, search_node.item.key.low);
    }
    // Other_node does not intersect right subtree if other_node.item.key.high < this.right.key.low
    not_intersect_right_subtree(search_node) {
        const comparable_less_than = this.item.key.constructor.comparable_less_than; // static method
        let low = this.right.max.low !== undefined ? this.right.max.low : this.right.item.key.low;
        return comparable_less_than(search_node.item.key.high, low);
    }
}
/**
 * Created by Alex Bol on 3/31/2017.
 */ // const nil_node = new Node();
/**
 * Implementation of interval binary search tree <br/>
 * Interval tree stores items which are couples of {key:interval, value: value} <br/>
 * Interval is an object with high and low properties or simply pair [low,high] of numeric values <br />
 * @type {IntervalTree}
 */ class $271a1c686af88dba$var$IntervalTree {
    /**
     * Construct new empty instance of IntervalTree
     */ constructor(){
        this.root = null;
        this.nil_node = new $271a1c686af88dba$var$Node();
    }
    /**
     * Returns number of items stored in the interval tree
     * @returns {number}
     */ get size() {
        let count = 0;
        this.tree_walk(this.root, ()=>count++);
        return count;
    }
    /**
     * Returns array of sorted keys in the ascending order
     * @returns {Array}
     */ get keys() {
        let res = [];
        this.tree_walk(this.root, (node)=>res.push(node.item.key.output ? node.item.key.output() : node.item.key));
        return res;
    }
    /**
     * Return array of values in the ascending keys order
     * @returns {Array}
     */ get values() {
        let res = [];
        this.tree_walk(this.root, (node)=>res.push(node.item.value));
        return res;
    }
    /**
     * Returns array of items (<key,value> pairs) in the ascended keys order
     * @returns {Array}
     */ get items() {
        let res = [];
        this.tree_walk(this.root, (node)=>res.push({
                key: node.item.key.output ? node.item.key.output() : node.item.key,
                value: node.item.value
            }));
        return res;
    }
    /**
     * Returns true if tree is empty
     * @returns {boolean}
     */ isEmpty() {
        return this.root == null || this.root === this.nil_node;
    }
    /**
     * Clear tree
     */ clear() {
        this.root = null;
    }
    /**
     * Insert new item into interval tree
     * @param {Interval} key - interval object or array of two numbers [low, high]
     * @param {any} value - value representing any object (optional)
     * @returns {Node} returns reference to inserted node as an object {key:interval, value: value}
     */ insert(key, value = key) {
        if (key === undefined) return;
        let insert_node = new $271a1c686af88dba$var$Node(key, value, this.nil_node, this.nil_node, null, $271a1c686af88dba$var$RB_TREE_COLOR_RED);
        this.tree_insert(insert_node);
        this.recalc_max(insert_node);
        return insert_node;
    }
    /**
     * Returns true if item {key,value} exist in the tree
     * @param {Interval} key - interval correspondent to keys stored in the tree
     * @param {any} value - value object to be checked
     * @returns {boolean} true if item {key, value} exist in the tree, false otherwise
     */ exist(key, value = key) {
        let search_node = new $271a1c686af88dba$var$Node(key, value);
        return !!this.tree_search(this.root, search_node);
    }
    /**
     * Remove entry {key, value} from the tree
     * @param {Interval} key - interval correspondent to keys stored in the tree
     * @param {any} value - value object
     * @returns {boolean} true if item {key, value} deleted, false if not found
     */ remove(key, value = key) {
        let search_node = new $271a1c686af88dba$var$Node(key, value);
        let delete_node = this.tree_search(this.root, search_node);
        if (delete_node) this.tree_delete(delete_node);
        return delete_node;
    }
    /**
     * Returns array of entry values which keys intersect with given interval <br/>
     * If no values stored in the tree, returns array of keys which intersect given interval
     * @param {Interval} interval - search interval, or tuple [low, high]
     * @param outputMapperFn(value,key) - optional function that maps (value, key) to custom output
     * @returns {Array}
     */ search(interval, outputMapperFn = (value, key)=>value === key ? key.output() : value) {
        let search_node = new $271a1c686af88dba$var$Node(interval);
        let resp_nodes = [];
        this.tree_search_interval(this.root, search_node, resp_nodes);
        return resp_nodes.map((node)=>outputMapperFn(node.item.value, node.item.key));
    }
    /**
     * Returns true if intersection between given and any interval stored in the tree found
     * @param {Interval} interval - search interval or tuple [low, high]
     * @returns {boolean}
     */ intersect_any(interval) {
        let search_node = new $271a1c686af88dba$var$Node(interval);
        return this.tree_find_any_interval(this.root, search_node);
    }
    /**
     * Tree visitor. For each node implement a callback function. <br/>
     * Method calls a callback function with two parameters (key, value)
     * @param visitor(key,value) - function to be called for each tree item
     */ forEach(visitor) {
        this.tree_walk(this.root, (node)=>visitor(node.item.key, node.item.value));
    }
    /**
     * Value Mapper. Walk through every node and map node value to another value
     * @param callback(value,key) - function to be called for each tree item
     */ map(callback) {
        const tree = new $271a1c686af88dba$var$IntervalTree();
        this.tree_walk(this.root, (node)=>tree.insert(node.item.key, callback(node.item.value, node.item.key)));
        return tree;
    }
    /**
     * @param {Interval} interval - optional if the iterator is intended to start from the beginning
     * @param outputMapperFn(value,key) - optional function that maps (value, key) to custom output
     * @returns {Iterator}
     */ *iterate(interval, outputMapperFn = (value, key)=>value === key ? key.output() : value) {
        let node;
        if (interval) node = this.tree_search_nearest_forward(this.root, new $271a1c686af88dba$var$Node(interval));
        else if (this.root) node = this.local_minimum(this.root);
        while(node){
            yield outputMapperFn(node.item.value, node.item.key);
            node = this.tree_successor(node);
        }
    }
    recalc_max(node) {
        let node_current = node;
        while(node_current.parent != null){
            node_current.parent.update_max();
            node_current = node_current.parent;
        }
    }
    tree_insert(insert_node) {
        let current_node = this.root;
        let parent_node = null;
        if (this.root == null || this.root === this.nil_node) this.root = insert_node;
        else {
            while(current_node !== this.nil_node){
                parent_node = current_node;
                if (insert_node.less_than(current_node)) current_node = current_node.left;
                else current_node = current_node.right;
            }
            insert_node.parent = parent_node;
            if (insert_node.less_than(parent_node)) parent_node.left = insert_node;
            else parent_node.right = insert_node;
        }
        this.insert_fixup(insert_node);
    }
    // After insertion insert_node may have red-colored parent, and this is a single possible violation
    // Go upwords to the root and re-color until violation will be resolved
    insert_fixup(insert_node) {
        let current_node;
        let uncle_node;
        current_node = insert_node;
        while(current_node !== this.root && current_node.parent.color === $271a1c686af88dba$var$RB_TREE_COLOR_RED)if (current_node.parent === current_node.parent.parent.left) {
            uncle_node = current_node.parent.parent.right; // right brother of parent
            if (uncle_node.color === $271a1c686af88dba$var$RB_TREE_COLOR_RED) {
                // re-color father and uncle into black
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                uncle_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                current_node.parent.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED;
                current_node = current_node.parent.parent;
            } else {
                if (current_node === current_node.parent.right) {
                    // This case is transformed into Case 3.
                    current_node = current_node.parent;
                    this.rotate_left(current_node);
                }
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK; // Case 3. Current is left child.
                // Re-color father and grandfather, rotate grandfather right
                current_node.parent.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED;
                this.rotate_right(current_node.parent.parent);
            }
        } else {
            uncle_node = current_node.parent.parent.left; // left brother of parent
            if (uncle_node.color === $271a1c686af88dba$var$RB_TREE_COLOR_RED) {
                // re-color father and uncle into black
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                uncle_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                current_node.parent.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED;
                current_node = current_node.parent.parent;
            } else {
                if (current_node === current_node.parent.left) {
                    // Transform into case 6
                    current_node = current_node.parent;
                    this.rotate_right(current_node);
                }
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK; // Case 6. Current is right child.
                // Re-color father and grandfather, rotate grandfather left
                current_node.parent.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED;
                this.rotate_left(current_node.parent.parent);
            }
        }
        this.root.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
    }
    tree_delete(delete_node) {
        let cut_node; // node to be cut - either delete_node or successor_node  ("y" from 14.4)
        let fix_node; // node to fix rb tree property   ("x" from 14.4)
        if (delete_node.left === this.nil_node || delete_node.right === this.nil_node) cut_node = delete_node;
        else cut_node = this.tree_successor(delete_node);
        // fix_node if single child of cut_node
        if (cut_node.left !== this.nil_node) fix_node = cut_node.left;
        else fix_node = cut_node.right;
        // remove cut_node from parent
        /*if (fix_node != this.nil_node) {*/ fix_node.parent = cut_node.parent;
        /*}*/ if (cut_node === this.root) this.root = fix_node;
        else {
            if (cut_node === cut_node.parent.left) cut_node.parent.left = fix_node;
            else cut_node.parent.right = fix_node;
            cut_node.parent.update_max(); // update max property of the parent
        }
        this.recalc_max(fix_node); // update max property upward from fix_node to root
        // COPY DATA !!!
        // Delete_node becomes cut_node, it means that we cannot hold reference
        // to node in outer structure and we will have to delete by key, additional search need
        if (cut_node !== delete_node) {
            delete_node.copy_data(cut_node);
            delete_node.update_max(); // update max property of the cut node at the new place
            this.recalc_max(delete_node); // update max property upward from delete_node to root
        }
        if (/*fix_node != this.nil_node && */ cut_node.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK) this.delete_fixup(fix_node);
    }
    delete_fixup(fix_node) {
        let current_node = fix_node;
        let brother_node;
        while(current_node !== this.root && current_node.parent != null && current_node.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK)if (current_node === current_node.parent.left) {
            brother_node = current_node.parent.right;
            if (brother_node.color === $271a1c686af88dba$var$RB_TREE_COLOR_RED) {
                brother_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK; // re-color brother
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED; // re-color father
                this.rotate_left(current_node.parent);
                brother_node = current_node.parent.right; // update brother
            }
            // Derive to cases 2..4: brother is black
            if (brother_node.left.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK && brother_node.right.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK) {
                brother_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED; // re-color brother
                current_node = current_node.parent; // continue iteration
            } else {
                if (brother_node.right.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK) {
                    brother_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED; // re-color brother
                    brother_node.left.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK; // re-color nephew
                    this.rotate_right(brother_node);
                    brother_node = current_node.parent.right; // update brother
                // Derive to case 4: left nephew black, right nephew red
                }
                // case 4: left nephew black, right nephew red
                brother_node.color = current_node.parent.color;
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                brother_node.right.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                this.rotate_left(current_node.parent);
                current_node = this.root; // exit from loop
            }
        } else {
            brother_node = current_node.parent.left;
            if (brother_node.color === $271a1c686af88dba$var$RB_TREE_COLOR_RED) {
                brother_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK; // re-color brother
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED; // re-color father
                this.rotate_right(current_node.parent);
                brother_node = current_node.parent.left; // update brother
            }
            // Go to cases 2..4
            if (brother_node.left.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK && brother_node.right.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK) {
                brother_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED; // re-color brother
                current_node = current_node.parent; // continue iteration
            } else {
                if (brother_node.left.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK) {
                    brother_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_RED; // re-color brother
                    brother_node.right.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK; // re-color nephew
                    this.rotate_left(brother_node);
                    brother_node = current_node.parent.left; // update brother
                // Derive to case 4: right nephew black, left nephew red
                }
                // case 4: right nephew black, left nephew red
                brother_node.color = current_node.parent.color;
                current_node.parent.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                brother_node.left.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
                this.rotate_right(current_node.parent);
                current_node = this.root; // force exit from loop
            }
        }
        current_node.color = $271a1c686af88dba$var$RB_TREE_COLOR_BLACK;
    }
    tree_search(node, search_node) {
        if (node == null || node === this.nil_node) return undefined;
        if (search_node.equal_to(node)) return node;
        if (search_node.less_than(node)) return this.tree_search(node.left, search_node);
        else return this.tree_search(node.right, search_node);
    }
    tree_search_nearest_forward(node, search_node) {
        let best;
        let curr = node;
        while(curr && curr !== this.nil_node)if (curr.less_than(search_node)) {
            if (curr.intersect(search_node)) {
                best = curr;
                curr = curr.left;
            } else curr = curr.right;
        } else {
            if (!best || curr.less_than(best)) best = curr;
            curr = curr.left;
        }
        return best || null;
    }
    // Original search_interval method; container res support push() insertion
    // Search all intervals intersecting given one
    tree_search_interval(node, search_node, res) {
        if (node != null && node !== this.nil_node) {
            // if (node->left != this.nil_node && node->left->max >= low) {
            if (node.left !== this.nil_node && !node.not_intersect_left_subtree(search_node)) this.tree_search_interval(node.left, search_node, res);
            // if (low <= node->high && node->low <= high) {
            if (node.intersect(search_node)) res.push(node);
            // if (node->right != this.nil_node && node->low <= high) {
            if (node.right !== this.nil_node && !node.not_intersect_right_subtree(search_node)) this.tree_search_interval(node.right, search_node, res);
        }
    }
    tree_find_any_interval(node, search_node) {
        let found = false;
        if (node != null && node !== this.nil_node) {
            if (node.left !== this.nil_node && !node.not_intersect_left_subtree(search_node)) found = this.tree_find_any_interval(node.left, search_node);
            if (!found) found = node.intersect(search_node);
            if (!found && node.right !== this.nil_node && !node.not_intersect_right_subtree(search_node)) found = this.tree_find_any_interval(node.right, search_node);
        }
        return found;
    }
    local_minimum(node) {
        let node_min = node;
        while(node_min.left != null && node_min.left !== this.nil_node)node_min = node_min.left;
        return node_min;
    }
    // not in use
    local_maximum(node) {
        let node_max = node;
        while(node_max.right != null && node_max.right !== this.nil_node)node_max = node_max.right;
        return node_max;
    }
    tree_successor(node) {
        let node_successor;
        let current_node;
        let parent_node;
        if (node.right !== this.nil_node) node_successor = this.local_minimum(node.right);
        else {
            current_node = node;
            parent_node = node.parent;
            while(parent_node != null && parent_node.right === current_node){
                current_node = parent_node;
                parent_node = parent_node.parent;
            }
            node_successor = parent_node;
        }
        return node_successor;
    }
    //           |            right-rotate(T,y)       |
    //           y            ---------------.       x
    //          / \                                  / \
    //         x   c          left-rotate(T,x)      a   y
    //        / \             <---------------         / \
    //       a   b                                    b   c
    rotate_left(x) {
        let y = x.right;
        x.right = y.left; // b goes to x.right
        if (y.left !== this.nil_node) y.left.parent = x; // x becomes parent of b
        y.parent = x.parent; // move parent
        if (x === this.root) this.root = y; // y becomes root
        else if (x === x.parent.left) x.parent.left = y;
        else x.parent.right = y;
        y.left = x; // x becomes left child of y
        x.parent = y; // and y becomes parent of x
        if (x != null && x !== this.nil_node) x.update_max();
        y = x.parent;
        if (y != null && y !== this.nil_node) y.update_max();
    }
    rotate_right(y) {
        let x = y.left;
        y.left = x.right; // b goes to y.left
        if (x.right !== this.nil_node) x.right.parent = y; // y becomes parent of b
        x.parent = y.parent; // move parent
        if (y === this.root) this.root = x;
        else if (y === y.parent.left) y.parent.left = x;
        else y.parent.right = x;
        x.right = y; // y becomes right child of x
        y.parent = x; // and x becomes parent of y
        if (y !== null && y !== this.nil_node) y.update_max();
        x = y.parent;
        if (x != null && x !== this.nil_node) x.update_max();
    }
    tree_walk(node, action) {
        if (node != null && node !== this.nil_node) {
            this.tree_walk(node.left, action);
            // arr.push(node.toArray());
            action(node);
            this.tree_walk(node.right, action);
        }
    }
    /* Return true if all red nodes have exactly two black child nodes */ testRedBlackProperty() {
        let res = true;
        this.tree_walk(this.root, function(node) {
            if (node.color === $271a1c686af88dba$var$RB_TREE_COLOR_RED) {
                if (!(node.left.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK && node.right.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK)) res = false;
            }
        });
        return res;
    }
    /* Throw error if not every path from root to bottom has same black height */ testBlackHeightProperty(node) {
        let height = 0;
        let heightLeft = 0;
        let heightRight = 0;
        if (node.color === $271a1c686af88dba$var$RB_TREE_COLOR_BLACK) height++;
        if (node.left !== this.nil_node) heightLeft = this.testBlackHeightProperty(node.left);
        else heightLeft = 1;
        if (node.right !== this.nil_node) heightRight = this.testBlackHeightProperty(node.right);
        else heightRight = 1;
        if (heightLeft !== heightRight) throw new Error("Red-black height property violated");
        height += heightLeft;
        return height;
    }
}
/**
 * Created by Alex Bol on 3/12/2017.
 */ /**
 * Class representing a planar set - a generic container with ability to keep and retrieve shapes and
 * perform spatial queries. Planar set is an extension of Set container, so it supports
 * Set properties and methods
 */ class $271a1c686af88dba$export$bfc59922c63341df extends Set {
    /**
     * Create new instance of PlanarSet
     * @param shapes - array or set of geometric objects to store in planar set
     * Each object should have a <b>box</b> property
     */ constructor(shapes){
        super(shapes);
        this.index = new $271a1c686af88dba$var$IntervalTree();
        this.forEach((shape)=>this.index.insert(shape));
    }
    /**
     * Add new shape to planar set and to its spatial index.<br/>
     * If shape already exist, it will not be added again.
     * This happens with no error, it is possible to use <i>size</i> property to check if
     * a shape was actually added.<br/>
     * Method returns planar set object updated and may be chained
     * @param {AnyShape | {Box, AnyShape}} entry - shape to be added, should have valid <i>box</i> property
     * Another option to transfer as an object {key: Box, value: AnyShape}
     * @returns {PlanarSet}
     */ add(entry) {
        let size = this.size;
        const { key: key, value: value } = entry;
        const box = key || entry.box;
        const shape = value || entry;
        super.add(shape);
        // size not changed - item not added, probably trying to add same item twice
        if (this.size > size) this.index.insert(box, shape);
        return this; // in accordance to Set.add interface
    }
    /**
     * Delete shape from planar set. Returns true if shape was actually deleted, false otherwise
     * @param {AnyShape | {Box, AnyShape}} entry - shape to be deleted
     * @returns {boolean}
     */ delete(entry) {
        const { key: key, value: value } = entry;
        const box = key || entry.box;
        const shape = value || entry;
        let deleted = super.delete(shape);
        if (deleted) this.index.remove(box, shape);
        return deleted;
    }
    /**
     * Clear planar set
     */ clear() {
        super.clear();
        this.index = new $271a1c686af88dba$var$IntervalTree();
    }
    /**
     * 2d range search in planar set.<br/>
     * Returns array of all shapes in planar set which bounding box is intersected with query box
     * @param {Box} box - query box
     * @returns {AnyShape[]}
     */ search(box) {
        let resp = this.index.search(box);
        return resp;
    }
    /**
     * Point location test. Returns array of shapes which contains given point
     * @param {Point} point - query point
     * @returns {AnyShape[]}
     */ hit(point) {
        let box = new $271a1c686af88dba$export$2e2bcd8739ae039.Box(point.x - 1, point.y - 1, point.x + 1, point.y + 1);
        let resp = this.index.search(box);
        return resp.filter((shape)=>point.on(shape));
    }
    /**
     * Returns svg string to draw all shapes in planar set
     * @returns {String}
     */ svg() {
        let svgcontent = [
            ...this
        ].reduce((acc, shape)=>acc + shape.svg(), "");
        return svgcontent;
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet = $271a1c686af88dba$export$bfc59922c63341df;
/**
 * Base class representing shape
 * Implement common methods of affine transformations
 */ class $271a1c686af88dba$var$Shape {
    get name() {
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.CANNOT_INVOKE_ABSTRACT_METHOD;
    }
    get box() {
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.CANNOT_INVOKE_ABSTRACT_METHOD;
    }
    clone() {
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.CANNOT_INVOKE_ABSTRACT_METHOD;
    }
    /**
     * Returns new shape translated by given vector.
     * Translation vector may be also defined by a pair of numbers.
     * @param {Vector | (number, number) } args - Translation vector
     * or tuple of numbers
     * @returns {Shape}
     */ translate(...args) {
        return this.transform(new $271a1c686af88dba$export$5b12bf1653c0dd85().translate(...args));
    }
    /**
     * Returns new shape rotated by given angle around given center point.
     * If center point is omitted, rotates around zero point (0,0).
     * Positive value of angle defines rotation in counterclockwise direction,
     * negative angle defines rotation in clockwise direction
     * @param {number} angle - angle in radians
     * @param {Point} [center=(0,0)] center
     * @returns {Shape}
     */ rotate(angle, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        return this.transform(new $271a1c686af88dba$export$5b12bf1653c0dd85().rotate(angle, center.x, center.y));
    }
    /**
     * Return new shape with coordinates multiplied by scaling factor
     * @param {number} sx - x-axis scaling factor
     * @param {number} sy - y-axis scaling factor
     * @returns {Shape}
     */ scale(sx, sy) {
        return this.transform(new $271a1c686af88dba$export$5b12bf1653c0dd85().scale(sx, sy));
    }
    transform(...args) {
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.CANNOT_INVOKE_ABSTRACT_METHOD;
    }
    /**
     * This method returns an object that defines how data will be
     * serialized when called JSON.stringify() method
     * @returns {Object}
     */ toJSON() {
        return Object.assign({}, this, {
            name: this.name
        });
    }
    svg(attrs = {}) {
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.CANNOT_INVOKE_ABSTRACT_METHOD;
    }
}
/**
 * Created by Alex Bol on 2/18/2017.
 */ /**
 *
 * Class representing a point
 * @type {Point}
 */ let $271a1c686af88dba$export$baf26146a414f24a = class Point1 extends $271a1c686af88dba$var$Shape {
    /**
     * Point may be constructed by two numbers, or by array of two numbers
     * @param {number} x - x-coordinate (float number)
     * @param {number} y - y-coordinate (float number)
     */ constructor(...args){
        super();
        /**
         * x-coordinate (float number)
         * @type {number}
         */ this.x = 0;
        /**
         * y-coordinate (float number)
         * @type {number}
         */ this.y = 0;
        if (args.length === 0) return;
        if (args.length === 1 && args[0] instanceof Array && args[0].length === 2) {
            let arr = args[0];
            if (typeof arr[0] == "number" && typeof arr[1] == "number") {
                this.x = arr[0];
                this.y = arr[1];
                return;
            }
        }
        if (args.length === 1 && args[0] instanceof Object && args[0].name === "point") {
            let { x: x, y: y } = args[0];
            this.x = x;
            this.y = y;
            return;
        }
        if (args.length === 2) {
            if (typeof args[0] == "number" && typeof args[1] == "number") {
                this.x = args[0];
                this.y = args[1];
                return;
            }
        }
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
    }
    /**
     * Returns bounding box of a point
     * @returns {Box}
     */ get box() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Box(this.x, this.y, this.x, this.y);
    }
    /**
     * Return new cloned instance of point
     * @returns {Point}
     */ clone() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.x, this.y);
    }
    get vertices() {
        return [
            this.clone()
        ];
    }
    /**
     * Returns true if points are equal up to [Flatten.Utils.DP_TOL]{@link DP_TOL} tolerance
     * @param {Point} pt Query point
     * @returns {boolean}
     */ equalTo(pt) {
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.x, pt.x) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.y, pt.y);
    }
    /**
     * Defines predicate "less than" between points. Returns true if the point is less than query points, false otherwise <br/>
     * By definition point1 < point2 if {point1.y < point2.y || point1.y == point2.y && point1.x < point2.x <br/>
     * Numeric values compared with [Flatten.Utils.DP_TOL]{@link DP_TOL} tolerance
     * @param {Point} pt Query point
     * @returns {boolean}
     */ lessThan(pt) {
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(this.y, pt.y)) return true;
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.y, pt.y) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(this.x, pt.x)) return true;
        return false;
    }
    /**
     * Return new point transformed by affine transformation matrix
     * @param {Matrix} m - affine transformation matrix (a,b,c,d,tx,ty)
     * @returns {Point}
     */ transform(m) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point(m.transform([
            this.x,
            this.y
        ]));
    }
    /**
     * Returns projection point on given line
     * @param {Line} line Line this point be projected on
     * @returns {Point}
     */ projectionOn(line) {
        if (this.equalTo(line.pt)) return this.clone();
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this, line.pt);
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(vec.cross(line.norm))) return line.pt.clone();
        let dist = vec.dot(line.norm); // signed distance
        let proj_vec = line.norm.multiply(dist);
        return this.translate(proj_vec);
    }
    /**
     * Returns true if point belongs to the "left" semi-plane, which means, point belongs to the same semi plane where line normal vector points to
     * Return false if point belongs to the "right" semi-plane or to the line itself
     * @param {Line} line Query line
     * @returns {boolean}
     */ leftTo(line) {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(line.pt, this);
        let onLeftSemiPlane = $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GT(vec.dot(line.norm), 0);
        return onLeftSemiPlane;
    }
    /**
     * Calculate distance and shortest segment from point to shape and return as array [distance, shortest segment]
     * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
     * @returns {number} distance from point to shape
     * @returns {Segment} shortest segment between point and shape (started at point, ended at shape)
     */ distanceTo(shape) {
        if (shape instanceof Point1) {
            let dx = shape.x - this.x;
            let dy = shape.y - this.y;
            return [
                Math.sqrt(dx * dx + dy * dy),
                new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(this, shape)
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2line(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2circle(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2segment(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2arc(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2polygon(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2planarSet(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(this, shape);
    }
    /**
     * Returns true if point is on a shape, false otherwise
     * @param {Shape} shape
     * @returns {boolean}
     */ on(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.equalTo(shape);
        if (shape.contains && shape.contains instanceof Function) return shape.contains(this);
        throw $271a1c686af88dba$export$2e2bcd8739ae039.Errors.UNSUPPORTED_SHAPE_TYPE;
    }
    get name() {
        return "point";
    }
    /**
     * Return string to draw point in svg as circle with radius "r" <br/>
     * Accept any valid attributes of svg elements as svg object
     * Defaults attribues are: <br/>
     * {
     *    r:"3",
     *    stroke:"black",
     *    strokeWidth:"1",
     *    fill:"red"
     * }
     * @param {Object} attrs - Any valid attributes of svg circle element, like "r", "stroke", "strokeWidth", "fill"
     * @returns {String}
     */ svg(attrs = {}) {
        const r = attrs.r ?? 3; // default radius - 3
        return `\n<circle cx="${this.x}" cy="${this.y}" r="${r}"
            ${$271a1c686af88dba$var$convertToString({
            fill: "red",
            ...attrs
        })} />`;
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Point = $271a1c686af88dba$export$baf26146a414f24a;
/**
 * Function to create point equivalent to "new" constructor
 * @param args
 */ const $271a1c686af88dba$export$105684a3041cb6f3 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Point(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.point = $271a1c686af88dba$export$105684a3041cb6f3;
// export {Point};
/**
 * Created by Alex Bol on 2/19/2017.
 */ /**
 * Class representing a vector
 * @type {Vector}
 */ let $271a1c686af88dba$export$9b781de7bf37bf48 = class Vector extends $271a1c686af88dba$var$Shape {
    /**
     * Vector may be constructed by two points, or by two float numbers,
     * or by array of two numbers
     * @param {Point} ps - start point
     * @param {Point} pe - end point
     */ constructor(...args){
        super();
        /**
         * x-coordinate of a vector (float number)
         * @type {number}
         */ this.x = 0;
        /**
         * y-coordinate of a vector (float number)
         * @type {number}
         */ this.y = 0;
        /* return zero vector */ if (args.length === 0) return;
        if (args.length === 1 && args[0] instanceof Array && args[0].length === 2) {
            let arr = args[0];
            if (typeof arr[0] == "number" && typeof arr[1] == "number") {
                this.x = arr[0];
                this.y = arr[1];
                return;
            }
        }
        if (args.length === 1 && args[0] instanceof Object && args[0].name === "vector") {
            let { x: x, y: y } = args[0];
            this.x = x;
            this.y = y;
            return;
        }
        if (args.length === 2) {
            let a1 = args[0];
            let a2 = args[1];
            if (typeof a1 == "number" && typeof a2 == "number") {
                this.x = a1;
                this.y = a2;
                return;
            }
            if (a1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point && a2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
                this.x = a2.x - a1.x;
                this.y = a2.y - a1.y;
                return;
            }
        }
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
    }
    /**
     * Method clone returns new instance of Vector
     * @returns {Vector}
     */ clone() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.x, this.y);
    }
    /**
     * Slope of the vector in radians from 0 to 2PI
     * @returns {number}
     */ get slope() {
        let angle = Math.atan2(this.y, this.x);
        if (angle < 0) angle = 2 * Math.PI + angle;
        return angle;
    }
    /**
     * Length of vector
     * @returns {number}
     */ get length() {
        return Math.sqrt(this.dot(this));
    }
    /**
     * Returns true if vectors are equal up to [DP_TOL]{@link http://localhost:63342/flatten-js/docs/global.html#DP_TOL}
     * tolerance
     * @param {Vector} v
     * @returns {boolean}
     */ equalTo(v) {
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.x, v.x) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.y, v.y);
    }
    /**
     * Returns new vector multiplied by scalar
     * @param {number} scalar
     * @returns {Vector}
     */ multiply(scalar) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(scalar * this.x, scalar * this.y);
    }
    /**
     * Returns scalar product (dot product) of two vectors <br/>
     * <code>dot_product = (this * v)</code>
     * @param {Vector} v Other vector
     * @returns {number}
     */ dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    /**
     * Returns vector product (cross product) of two vectors <br/>
     * <code>cross_product = (this x v)</code>
     * @param {Vector} v Other vector
     * @returns {number}
     */ cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    /**
     * Returns unit vector.<br/>
     * Throw error if given vector has zero length
     * @returns {Vector}
     */ normalize() {
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(this.length)) return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.x / this.length, this.y / this.length);
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.ZERO_DIVISION;
    }
    /**
     * Returns new vector rotated by given angle,
     * positive angle defines rotation in counterclockwise direction,
     * negative - in clockwise direction
     * Vector only can be rotated around (0,0) point!
     * @param {number} angle - Angle in radians
     * @returns {Vector}
     */ rotate(angle, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        if (center.x === 0 && center.y === 0) return this.transform(new $271a1c686af88dba$export$5b12bf1653c0dd85().rotate(angle));
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.OPERATION_IS_NOT_SUPPORTED;
    }
    /**
     * Return new vector transformed by affine transformation matrix m
     * @param {Matrix} m - affine transformation matrix (a,b,c,d,tx,ty)
     * @returns {Vector}
     */ transform(m) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(m.transform([
            this.x,
            this.y
        ]));
    }
    /**
     * Returns vector rotated 90 degrees counterclockwise
     * @returns {Vector}
     */ rotate90CCW() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(-this.y, this.x);
    }
    /**
     * Returns vector rotated 90 degrees clockwise
     * @returns {Vector}
     */ rotate90CW() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.y, -this.x);
    }
    /**
     * Return inverted vector
     * @returns {Vector}
     */ invert() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(-this.x, -this.y);
    }
    /**
     * Return result of addition of other vector to this vector as a new vector
     * @param {Vector} v Other vector
     * @returns {Vector}
     */ add(v) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.x + v.x, this.y + v.y);
    }
    /**
     * Return result of subtraction of other vector from current vector as a new vector
     * @param {Vector} v Another vector
     * @returns {Vector}
     */ subtract(v) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.x - v.x, this.y - v.y);
    }
    /**
     * Return angle between this vector and other vector. <br/>
     * Angle is measured from 0 to 2*PI in the counterclockwise direction
     * from current vector to  another.
     * @param {Vector} v Another vector
     * @returns {number}
     */ angleTo(v) {
        let norm1 = this.normalize();
        let norm2 = v.normalize();
        let angle = Math.atan2(norm1.cross(norm2), norm1.dot(norm2));
        if (angle < 0) angle += 2 * Math.PI;
        return angle;
    }
    /**
     * Return vector projection of the current vector on another vector
     * @param {Vector} v Another vector
     * @returns {Vector}
     */ projectionOn(v) {
        let n = v.normalize();
        let d = this.dot(n);
        return n.multiply(d);
    }
    get name() {
        return "vector";
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Vector = $271a1c686af88dba$export$9b781de7bf37bf48;
/**
 * Function to create vector equivalent to "new" constructor
 * @param args
 */ const $271a1c686af88dba$export$6074e20ba5c64bef = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.vector = $271a1c686af88dba$export$6074e20ba5c64bef;
/**
 * Created by Alex Bol on 3/10/2017.
 */ /**
 * Class representing a segment
 * @type {Segment}
 */ let $271a1c686af88dba$export$d53aa5c5ab432700 = class Segment extends $271a1c686af88dba$var$Shape {
    /**
     *
     * @param {Point} ps - start point
     * @param {Point} pe - end point
     */ constructor(...args){
        super();
        /**
         * Start point
         * @type {Point}
         */ this.ps = new $271a1c686af88dba$export$2e2bcd8739ae039.Point();
        /**
         * End Point
         * @type {Point}
         */ this.pe = new $271a1c686af88dba$export$2e2bcd8739ae039.Point();
        if (args.length === 0) return;
        if (args.length === 1 && args[0] instanceof Array && args[0].length === 4) {
            let coords = args[0];
            this.ps = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(coords[0], coords[1]);
            this.pe = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(coords[2], coords[3]);
            return;
        }
        if (args.length === 1 && args[0] instanceof Object && args[0].name === "segment") {
            let { ps: ps, pe: pe } = args[0];
            this.ps = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(ps.x, ps.y);
            this.pe = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(pe.x, pe.y);
            return;
        }
        // second point omitted issue #84
        if (args.length === 1 && args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            this.ps = args[0].clone();
            return;
        }
        if (args.length === 2 && args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point && args[1] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            this.ps = args[0].clone();
            this.pe = args[1].clone();
            return;
        }
        if (args.length === 4) {
            this.ps = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(args[0], args[1]);
            this.pe = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(args[2], args[3]);
            return;
        }
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
    }
    /**
     * Return new cloned instance of segment
     * @returns {Segment}
     */ clone() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(this.start, this.end);
    }
    /**
     * Start point
     * @returns {Point}
     */ get start() {
        return this.ps;
    }
    /**
     * End point
     * @returns {Point}
     */ get end() {
        return this.pe;
    }
    /**
     * Returns array of start and end point
     * @returns [Point,Point]
     */ get vertices() {
        return [
            this.ps.clone(),
            this.pe.clone()
        ];
    }
    /**
     * Length of a segment
     * @returns {number}
     */ get length() {
        return this.start.distanceTo(this.end)[0];
    }
    /**
     * Slope of the line - angle to axe x in radians from 0 to 2PI
     * @returns {number}
     */ get slope() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.start, this.end);
        return vec.slope;
    }
    /**
     * Bounding box
     * @returns {Box}
     */ get box() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Box(Math.min(this.start.x, this.end.x), Math.min(this.start.y, this.end.y), Math.max(this.start.x, this.end.x), Math.max(this.start.y, this.end.y));
    }
    /**
     * Returns true if equals to query segment, false otherwise
     * @param {Segment} seg - query segment
     * @returns {boolean}
     */ equalTo(seg) {
        return this.ps.equalTo(seg.ps) && this.pe.equalTo(seg.pe);
    }
    /**
     * Returns true if segment contains point
     * @param {Point} pt Query point
     * @returns {boolean}
     */ contains(pt) {
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(this.distanceToPoint(pt));
    }
    /**
     * Returns array of intersection points between segment and other shape
     * @param {Shape} shape - Shape of the one of supported types <br/>
     * @returns {Point[]}
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.contains(shape) ? [
            shape
        ] : [];
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectSegment2Line(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return $271a1c686af88dba$var$intersectRay2Segment(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectSegment2Segment(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$intersectSegment2Circle(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return $271a1c686af88dba$var$intersectSegment2Box(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectSegment2Arc(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$intersectSegment2Polygon(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$var$intersectShape2Multiline(this, shape);
    }
    /**
     * Calculate distance and shortest segment from segment to shape and return as array [distance, shortest segment]
     * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
     * @returns {[number, Segment]} shortest segment between segment and shape (started at segment, ended at shape)
     */ distanceTo(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2segment(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2circle(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2line(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2segment(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2arc(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2polygon(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2planarSet(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(this, shape);
    }
    /**
     * Returns unit vector in the direction from start to end
     * @returns {Vector}
     */ tangentInStart() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.start, this.end);
        return vec.normalize();
    }
    /**
     * Return unit vector in the direction from end to start
     * @returns {Vector}
     */ tangentInEnd() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.end, this.start);
        return vec.normalize();
    }
    /**
     * Returns new segment with swapped start and end points
     * @returns {Segment}
     */ reverse() {
        return new Segment(this.end, this.start);
    }
    /**
     * When point belongs to segment, return array of two segments split by given point,
     * if point is inside segment. Returns clone of this segment if query point is incident
     * to start or end point of the segment. Returns empty array if point does not belong to segment
     * @param {Point} pt Query point
     * @returns {Segment[]}
     */ split(pt) {
        if (this.start.equalTo(pt)) return [
            null,
            this.clone()
        ];
        if (this.end.equalTo(pt)) return [
            this.clone(),
            null
        ];
        return [
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(this.start, pt),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pt, this.end)
        ];
    }
    /**
     * Return middle point of the segment
     * @returns {Point}
     */ middle() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2);
    }
    /**
     * Get point at given length
     * @param {number} length - The length along the segment
     * @returns {Point}
     */ pointAtLength(length) {
        if (length > this.length || length < 0) return null;
        if (length == 0) return this.start;
        if (length == this.length) return this.end;
        let factor = length / this.length;
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point((this.end.x - this.start.x) * factor + this.start.x, (this.end.y - this.start.y) * factor + this.start.y);
    }
    distanceToPoint(pt) {
        let [dist, ...rest] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2segment(pt, this);
        return dist;
    }
    definiteIntegral(ymin = 0.0) {
        let dx = this.end.x - this.start.x;
        let dy1 = this.start.y - ymin;
        let dy2 = this.end.y - ymin;
        return dx * (dy1 + dy2) / 2;
    }
    /**
     * Return new segment transformed using affine transformation matrix
     * @param {Matrix} matrix - affine transformation matrix
     * @returns {Segment} - transformed segment
     */ transform(matrix = new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix()) {
        return new Segment(this.ps.transform(matrix), this.pe.transform(matrix));
    }
    /**
     * Returns true if segment start is equal to segment end up to DP_TOL
     * @returns {boolean}
     */ isZeroLength() {
        return this.ps.equalTo(this.pe);
    }
    /**
     * Sort given array of points from segment start to end, assuming all points lay on the segment
     * @param {Point[]} - array of points
     * @returns {Point[]} new array sorted
     */ sortPoints(pts) {
        let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(this.start, this.end);
        return line.sortPoints(pts);
    }
    get name() {
        return "segment";
    }
    /**
     * Return string to draw segment in svg
     * @param {Object} attrs - an object with attributes for svg path element,
     * like "stroke", "strokeWidth" <br/>
     * Defaults are stroke:"black", strokeWidth:"1"
     * @returns {string}
     */ svg(attrs = {}) {
        return `\n<line x1="${this.start.x}" y1="${this.start.y}" x2="${this.end.x}" y2="${this.end.y}" ${$271a1c686af88dba$var$convertToString(attrs)} />`;
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Segment = $271a1c686af88dba$export$d53aa5c5ab432700;
/**
 * Shortcut method to create new segment
 */ const $271a1c686af88dba$export$6519c25590136c5e = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.segment = $271a1c686af88dba$export$6519c25590136c5e;
/**
 * Created by Alex Bol on 2/20/2017.
 */ let { vector: $271a1c686af88dba$var$vector } = $271a1c686af88dba$export$2e2bcd8739ae039;
/**
 * Class representing a line
 * @type {Line}
 */ let $271a1c686af88dba$export$17d680238e50603e = class Line extends $271a1c686af88dba$var$Shape {
    /**
     * Line may be constructed by point and normal vector or by two points that a line passes through
     * @param {Point} pt - point that a line passes through
     * @param {Vector|Point} norm - normal vector to a line or second point a line passes through
     */ constructor(...args){
        super();
        /**
         * Point a line passes through
         * @type {Point}
         */ this.pt = new $271a1c686af88dba$export$2e2bcd8739ae039.Point();
        /**
         * Normal vector to a line <br/>
         * Vector is normalized (length == 1)<br/>
         * Direction of the vector is chosen to satisfy inequality norm * p >= 0
         * @type {Vector}
         */ this.norm = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(0, 1);
        if (args.length === 0) return;
        if (args.length === 1 && args[0] instanceof Object && args[0].name === "line") {
            let { pt: pt, norm: norm } = args[0];
            this.pt = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(pt);
            this.norm = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(norm);
            return;
        }
        if (args.length === 2) {
            let a1 = args[0];
            let a2 = args[1];
            if (a1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point && a2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
                this.pt = a1;
                this.norm = Line.points2norm(a1, a2);
                if (this.norm.dot($271a1c686af88dba$var$vector(this.pt.x, this.pt.y)) >= 0) this.norm.invert();
                return;
            }
            if (a1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point && a2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Vector) {
                if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(a2.x) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(a2.y)) throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
                this.pt = a1.clone();
                this.norm = a2.clone();
                this.norm = this.norm.normalize();
                if (this.norm.dot($271a1c686af88dba$var$vector(this.pt.x, this.pt.y)) >= 0) this.norm.invert();
                return;
            }
            if (a1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Vector && a2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
                if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(a1.x) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(a1.y)) throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
                this.pt = a2.clone();
                this.norm = a1.clone();
                this.norm = this.norm.normalize();
                if (this.norm.dot($271a1c686af88dba$var$vector(this.pt.x, this.pt.y)) >= 0) this.norm.invert();
                return;
            }
        }
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
    }
    /**
     * Return new cloned instance of line
     * @returns {Line}
     */ clone() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Line(this.pt, this.norm);
    }
    /* The following methods need for implementation of Edge interface
    /**
     * Line has no start point
     * @returns {undefined}
     */ get start() {
        return undefined;
    }
    /**
     * Line has no end point
     */ get end() {
        return undefined;
    }
    /**
     * Return positive infinity number as length
     * @returns {number}
     */ get length() {
        return Number.POSITIVE_INFINITY;
    }
    /**
     * Returns infinite box
     * @returns {Box}
     */ get box() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Box(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
    /**
     * Middle point is undefined
     * @returns {undefined}
     */ get middle() {
        return undefined;
    }
    /**
     * Slope of the line - angle in radians between line and axe x from 0 to 2PI
     * @returns {number} - slope of the line
     */ get slope() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.norm.y, -this.norm.x);
        return vec.slope;
    }
    /**
     * Get coefficients [A,B,C] of a standard line equation in the form Ax + By = C
     * @code [A, B, C] = line.standard
     * @returns {number[]} - array of coefficients
     */ get standard() {
        let A = this.norm.x;
        let B = this.norm.y;
        let C = this.norm.dot($271a1c686af88dba$var$vector(this.pt.x, this.pt.y));
        return [
            A,
            B,
            C
        ];
    }
    /**
     * Return true if parallel or incident to other line
     * @param {Line} other_line - line to check
     * @returns {boolean}
     */ parallelTo(other_line) {
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(this.norm.cross(other_line.norm));
    }
    /**
     * Returns true if incident to other line
     * @param {Line} other_line - line to check
     * @returns {boolean}
     */ incidentTo(other_line) {
        return this.parallelTo(other_line) && this.pt.on(other_line);
    }
    /**
     * Returns true if point belongs to line
     * @param {Point} pt Query point
     * @returns {boolean}
     */ contains(pt) {
        if (this.pt.equalTo(pt)) return true;
        /* Line contains point if vector to point is orthogonal to the line normal vector */ let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.pt, pt);
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(this.norm.dot(vec));
    }
    /**
     * Return coordinate of the point that lies on the line in the transformed
     * coordinate system where center is the projection of the point(0,0) to
     * the line and axe y is collinear to the normal vector. <br/>
     * This method assumes that point lies on the line and does not check it
     * @param {Point} pt - point on a line
     * @returns {number}
     */ coord(pt) {
        return $271a1c686af88dba$var$vector(pt.x, pt.y).cross(this.norm);
    }
    /**
     * Returns array of intersection points
     * @param {Shape} shape - shape to intersect with
     * @returns {Point[]}
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.contains(shape) ? [
            shape
        ] : [];
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectLine2Line(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return $271a1c686af88dba$var$intersectRay2Line(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$intersectLine2Circle(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return $271a1c686af88dba$var$intersectLine2Box(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectSegment2Line(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectLine2Arc(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$intersectLine2Polygon(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$var$intersectShape2Multiline(this, shape);
    }
    /**
     * Calculate distance and shortest segment from line to shape and returns array [distance, shortest_segment]
     * @param {Shape} shape Shape of the one of the types Point, Circle, Segment, Arc, Polygon
     * @returns {[number, Segment]}
     */ distanceTo(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2line(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.circle2line(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2line(shape, this);
            return [
                distance,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.arc2line(shape, this);
            return [
                distance,
                shortest_segment.reverse()
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2polygon(this, shape);
            return [
                distance,
                shortest_segment
            ];
        }
    }
    /**
     * Split line with a point or array of points and return array of shapes
     * Assumed (but not checked) that all points lay on the line
     * @param {Point | Point[]} pt
     * @returns {MultilineShapes}
     */ split(pt) {
        if (pt instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return [
            new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(pt, this.norm),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(pt, this.norm)
        ];
        else {
            let multiline = new $271a1c686af88dba$export$2e2bcd8739ae039.Multiline([
                this
            ]);
            let sorted_points = this.sortPoints(pt);
            multiline.split(sorted_points);
            return multiline.toShapes();
        }
    }
    /**
     * Return new line rotated by angle
     * @param {number} angle - angle in radians
     * @param {Point} center - center of rotation
     */ rotate(angle, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Line(this.pt.rotate(angle, center), this.norm.rotate(angle));
    }
    /**
     * Return new line transformed by affine transformation matrix
     * @param {Matrix} m - affine transformation matrix (a,b,c,d,tx,ty)
     * @returns {Line}
     */ transform(m) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Line(this.pt.transform(m), this.norm.clone());
    }
    /**
     * Sort given array of points that lay on a line with respect to coordinate on a line
     * The method assumes that points lay on the line and does not check this
     * @param {Point[]} pts - array of points
     * @returns {Point[]} new array sorted
     */ sortPoints(pts) {
        return pts.slice().sort((pt1, pt2)=>{
            if (this.coord(pt1) < this.coord(pt2)) return -1;
            if (this.coord(pt1) > this.coord(pt2)) return 1;
            return 0;
        });
    }
    get name() {
        return "line";
    }
    /**
     * Return string to draw svg segment representing line inside given box
     * @param {Box} box Box representing drawing area
     * @param {Object} attrs - an object with attributes of svg circle element
     */ svg(box, attrs = {}) {
        let ip = $271a1c686af88dba$var$intersectLine2Box(this, box);
        if (ip.length === 0) return "";
        let ps = ip[0];
        let pe = ip.length === 2 ? ip[1] : ip.find((pt)=>!pt.equalTo(ps));
        if (pe === undefined) pe = ps;
        let segment = new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ps, pe);
        return segment.svg(attrs);
    }
    static points2norm(pt1, pt2) {
        if (pt1.equalTo(pt2)) throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(pt1, pt2);
        let unit = vec.normalize();
        return unit.rotate90CCW();
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Line = $271a1c686af88dba$export$17d680238e50603e;
/**
 * Function to create line equivalent to "new" constructor
 * @param args
 */ const $271a1c686af88dba$export$53f1d5ea8de3d7c = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Line(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.line = $271a1c686af88dba$export$53f1d5ea8de3d7c;
/**
 * Created by Alex Bol on 3/6/2017.
 */ /**
 * Class representing a circle
 * @type {Circle}
 */ let $271a1c686af88dba$export$c89a927ffc67e6fa = class Circle extends $271a1c686af88dba$var$Shape {
    /**
     * Class private property
     * @type {string}
     */ /**
     *
     * @param {Point} pc - circle center point
     * @param {number} r - circle radius
     */ constructor(...args){
        super();
        /**
         * Circle center
         * @type {Point}
         */ this.pc = new $271a1c686af88dba$export$2e2bcd8739ae039.Point();
        /**
         * Circle radius
         * @type {number}
         */ this.r = 1;
        if (args.length === 1 && args[0] instanceof Object && args[0].name === "circle") {
            let { pc: pc, r: r } = args[0];
            this.pc = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(pc);
            this.r = r;
        } else {
            let [pc, r] = [
                ...args
            ];
            if (pc && pc instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) this.pc = pc.clone();
            if (r !== undefined) this.r = r;
        }
    // throw Errors.ILLEGAL_PARAMETERS;    unreachable code
    }
    /**
     * Return new cloned instance of circle
     * @returns {Circle}
     */ clone() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(this.pc.clone(), this.r);
    }
    /**
     * Circle center
     * @returns {Point}
     */ get center() {
        return this.pc;
    }
    /**
     * Circle bounding box
     * @returns {Box}
     */ get box() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Box(this.pc.x - this.r, this.pc.y - this.r, this.pc.x + this.r, this.pc.y + this.r);
    }
    /**
     * Return true if circle contains shape: no point of shape lies outside of the circle
     * @param {Shape} shape - test shape
     * @returns {boolean}
     */ contains(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.distanceTo(this.center)[0], this.r);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.start.distanceTo(this.center)[0], this.r) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.end.distanceTo(this.center)[0], this.r);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return this.intersect(shape).length === 0 && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.start.distanceTo(this.center)[0], this.r) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.end.distanceTo(this.center)[0], this.r);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return this.intersect(shape).length === 0 && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.r, this.r) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(shape.center.distanceTo(this.center)[0], this.r);
    /* TODO: box, polygon */ }
    /**
     * Transform circle to closed arc
     * @param {boolean} counterclockwise
     * @returns {Arc}
     */ toArc(counterclockwise = true) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.center, this.r, Math.PI, -Math.PI, counterclockwise);
    }
    /**
     * Method scale is supported only for uniform scaling of the circle with (0,0) center
     * @param {number} sx
     * @param {number} sy
     * @returns {Circle}
     */ scale(sx, sy) {
        if (sx !== sy) throw $271a1c686af88dba$export$b8e9cd941e8016ac.OPERATION_IS_NOT_SUPPORTED;
        if (!(this.pc.x === 0.0 && this.pc.y === 0.0)) throw $271a1c686af88dba$export$b8e9cd941e8016ac.OPERATION_IS_NOT_SUPPORTED;
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(this.pc, this.r * sx);
    }
    /**
     * Return new circle transformed using affine transformation matrix
     * @param {Matrix} matrix - affine transformation matrix
     * @returns {Circle}
     */ transform(matrix = new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix()) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(this.pc.transform(matrix), this.r);
    }
    /**
     * Returns array of intersection points between circle and other shape
     * @param {Shape} shape Shape of the one of supported types
     * @returns {Point[]}
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.contains(shape) ? [
            shape
        ] : [];
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectLine2Circle(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return $271a1c686af88dba$var$intersectRay2Circle(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectSegment2Circle(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$intersectCircle2Circle(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return $271a1c686af88dba$var$intersectCircle2Box(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectArc2Circle(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$intersectCircle2Polygon(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$var$intersectShape2Multiline(this, shape);
    }
    /**
     * Calculate distance and shortest segment from circle to shape and return array [distance, shortest segment]
     * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
     * @returns {number} distance from circle to shape
     * @returns {Segment} shortest segment between circle and shape (started at circle, ended at shape)

     */ distanceTo(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2circle(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.circle2circle(this, shape);
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.circle2line(this, shape);
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2circle(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.arc2circle(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) {
            let [distance, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2polygon(this, shape);
            return [
                distance,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2planarSet(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
    }
    get name() {
        return "circle";
    }
    /**
     * Return string to draw circle in svg
     * @param {Object} attrs - an object with attributes of svg circle element
     * @returns {string}
     */ svg(attrs = {}) {
        return `\n<circle cx="${this.pc.x}" cy="${this.pc.y}" r="${this.r}"
                ${$271a1c686af88dba$var$convertToString({
            fill: "none",
            ...attrs
        })} />`;
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Circle = $271a1c686af88dba$export$c89a927ffc67e6fa;
/**
 * Shortcut to create new circle
 * @param args
 */ const $271a1c686af88dba$export$e1d786d2f707b414 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.circle = $271a1c686af88dba$export$e1d786d2f707b414;
/**
 * Created by Alex Bol on 3/10/2017.
 */ /**
 * Class representing a circular arc
 * @type {Arc}
 */ class $271a1c686af88dba$export$6ef80ffb606dd232 extends $271a1c686af88dba$var$Shape {
    /**
     *
     * @param {Point} pc - arc center
     * @param {number} r - arc radius
     * @param {number} startAngle - start angle in radians from 0 to 2*PI
     * @param {number} endAngle - end angle in radians from 0 to 2*PI
     * @param {boolean} counterClockwise - arc direction, true - clockwise, false - counterclockwise
     */ constructor(...args){
        super();
        /**
         * Arc center
         * @type {Point}
         */ this.pc = new $271a1c686af88dba$export$2e2bcd8739ae039.Point();
        /**
         * Arc radius
         * @type {number}
         */ this.r = 1;
        /**
         * Arc start angle in radians
         * @type {number}
         */ this.startAngle = 0;
        /**
         * Arc end angle in radians
         * @type {number}
         */ this.endAngle = 2 * Math.PI;
        /**
         * Arc orientation
         * @type {boolean}
         */ this.counterClockwise = $271a1c686af88dba$export$2e2bcd8739ae039.CCW;
        if (args.length === 0) return;
        if (args.length === 1 && args[0] instanceof Object && args[0].name === "arc") {
            let { pc: pc, r: r, startAngle: startAngle, endAngle: endAngle, counterClockwise: counterClockwise } = args[0];
            this.pc = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(pc.x, pc.y);
            this.r = r;
            this.startAngle = startAngle;
            this.endAngle = endAngle;
            this.counterClockwise = counterClockwise;
        } else {
            let [pc, r, startAngle, endAngle, counterClockwise] = [
                ...args
            ];
            if (pc && pc instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) this.pc = pc.clone();
            if (r !== undefined) this.r = r;
            if (startAngle !== undefined) this.startAngle = startAngle;
            if (endAngle !== undefined) this.endAngle = endAngle;
            if (counterClockwise !== undefined) this.counterClockwise = counterClockwise;
        }
    // throw Flatten.Errors.ILLEGAL_PARAMETERS; unreachable code
    }
    /**
     * Return new cloned instance of arc
     * @returns {Arc}
     */ clone() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc.clone(), this.r, this.startAngle, this.endAngle, this.counterClockwise);
    }
    /**
     * Get sweep angle in radians. Sweep angle is non-negative number from 0 to 2*PI
     * @returns {number}
     */ get sweep() {
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.startAngle, this.endAngle)) return 0.0;
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(Math.abs(this.startAngle - this.endAngle), $271a1c686af88dba$export$2e2bcd8739ae039.PIx2)) return $271a1c686af88dba$export$2e2bcd8739ae039.PIx2;
        let sweep;
        if (this.counterClockwise) sweep = $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GT(this.endAngle, this.startAngle) ? this.endAngle - this.startAngle : this.endAngle - this.startAngle + $271a1c686af88dba$export$2e2bcd8739ae039.PIx2;
        else sweep = $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GT(this.startAngle, this.endAngle) ? this.startAngle - this.endAngle : this.startAngle - this.endAngle + $271a1c686af88dba$export$2e2bcd8739ae039.PIx2;
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GT(sweep, $271a1c686af88dba$export$2e2bcd8739ae039.PIx2)) sweep -= $271a1c686af88dba$export$2e2bcd8739ae039.PIx2;
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(sweep, 0)) sweep += $271a1c686af88dba$export$2e2bcd8739ae039.PIx2;
        return sweep;
    }
    /**
     * Get start point of arc
     * @returns {Point}
     */ get start() {
        let p0 = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.pc.x + this.r, this.pc.y);
        return p0.rotate(this.startAngle, this.pc);
    }
    /**
     * Get end point of arc
     * @returns {Point}
     */ get end() {
        let p0 = new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.pc.x + this.r, this.pc.y);
        return p0.rotate(this.endAngle, this.pc);
    }
    /**
     * Get center of arc
     * @returns {Point}
     */ get center() {
        return this.pc.clone();
    }
    get vertices() {
        return [
            this.start.clone(),
            this.end.clone()
        ];
    }
    /**
     * Get arc length
     * @returns {number}
     */ get length() {
        return Math.abs(this.sweep * this.r);
    }
    /**
     * Get bounding box of the arc
     * @returns {Box}
     */ get box() {
        let func_arcs = this.breakToFunctional();
        let box = func_arcs.reduce((acc, arc)=>acc.merge(arc.start.box), new $271a1c686af88dba$export$2e2bcd8739ae039.Box());
        box = box.merge(this.end.box);
        return box;
    }
    /**
     * Returns true if arc contains point, false otherwise
     * @param {Point} pt - point to test
     * @returns {boolean}
     */ contains(pt) {
        // first check if  point on circle (pc,r)
        if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.pc.distanceTo(pt)[0], this.r)) return false;
        // point on circle
        if (pt.equalTo(this.start)) return true;
        let angle = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.pc, pt).slope;
        let test_arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, angle, this.counterClockwise);
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(test_arc.length, this.length);
    }
    /**
     * When given point belongs to arc, return array of two arcs split by this point. If points is incident
     * to start or end point of the arc, return clone of the arc. If point does not belong to the arcs, return
     * empty array.
     * @param {Point} pt Query point
     * @returns {Arc[]}
     */ split(pt) {
        if (this.start.equalTo(pt)) return [
            null,
            this.clone()
        ];
        if (this.end.equalTo(pt)) return [
            this.clone(),
            null
        ];
        let angle = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.pc, pt).slope;
        return [
            new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, angle, this.counterClockwise),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, angle, this.endAngle, this.counterClockwise)
        ];
    }
    /**
     * Return middle point of the arc
     * @returns {Point}
     */ middle() {
        let endAngle = this.counterClockwise ? this.startAngle + this.sweep / 2 : this.startAngle - this.sweep / 2;
        let arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, endAngle, this.counterClockwise);
        return arc.end;
    }
    /**
     * Get point at given length
     * @param {number} length - The length along the arc
     * @returns {Point}
     */ pointAtLength(length) {
        if (length > this.length || length < 0) return null;
        if (length === 0) return this.start;
        if (length === this.length) return this.end;
        let factor = length / this.length;
        let endAngle = this.counterClockwise ? this.startAngle + this.sweep * factor : this.startAngle - this.sweep * factor;
        let arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, endAngle, this.counterClockwise);
        return arc.end;
    }
    /**
     * Returns chord height ("sagitta") of the arc
     * @returns {number}
     */ chordHeight() {
        return (1.0 - Math.cos(Math.abs(this.sweep / 2.0))) * this.r;
    }
    /**
     * Returns array of intersection points between arc and other shape
     * @param {Shape} shape Shape of the one of supported types <br/>
     * @returns {Point[]}
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.contains(shape) ? [
            shape
        ] : [];
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectLine2Arc(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return $271a1c686af88dba$var$intersectRay2Arc(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$intersectArc2Circle(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectSegment2Arc(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return $271a1c686af88dba$var$intersectArc2Box(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectArc2Arc(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$intersectArc2Polygon(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$var$intersectShape2Multiline(this, shape);
    }
    /**
     * Calculate distance and shortest segment from arc to shape and return array [distance, shortest segment]
     * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
     * @returns {number} distance from arc to shape
     * @returns {Segment} shortest segment between arc and shape (started at arc, ended at shape)

     */ distanceTo(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2arc(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.arc2circle(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.arc2line(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.segment2arc(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.arc2arc(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2polygon(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2planarSet(this, shape);
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2multiline(this, shape);
    }
    /**
     * Breaks arc in extreme point 0, pi/2, pi, 3*pi/2 and returns array of sub-arcs
     * @returns {Arc[]}
     */ breakToFunctional() {
        let func_arcs_array = [];
        let angles = [
            0,
            Math.PI / 2,
            2 * Math.PI / 2,
            3 * Math.PI / 2
        ];
        let pts = [
            this.pc.translate(this.r, 0),
            this.pc.translate(0, this.r),
            this.pc.translate(-this.r, 0),
            this.pc.translate(0, -this.r)
        ];
        // If arc contains extreme point,
        // create test arc started at start point and ended at this extreme point
        let test_arcs = [];
        for(let i = 0; i < 4; i++)if (pts[i].on(this)) test_arcs.push(new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, angles[i], this.counterClockwise));
        if (test_arcs.length === 0) func_arcs_array.push(this.clone());
        else {
            // sort these arcs by length
            test_arcs.sort((arc1, arc2)=>arc1.length - arc2.length);
            for(let i = 0; i < test_arcs.length; i++){
                let prev_arc = func_arcs_array.length > 0 ? func_arcs_array[func_arcs_array.length - 1] : undefined;
                let new_arc;
                if (prev_arc) new_arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, prev_arc.endAngle, test_arcs[i].endAngle, this.counterClockwise);
                else new_arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, test_arcs[i].endAngle, this.counterClockwise);
                if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(new_arc.length)) func_arcs_array.push(new_arc.clone());
            }
            // add last sub arc
            let prev_arc = func_arcs_array.length > 0 ? func_arcs_array[func_arcs_array.length - 1] : undefined;
            let new_arc;
            if (prev_arc) new_arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, prev_arc.endAngle, this.endAngle, this.counterClockwise);
            else new_arc = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.startAngle, this.endAngle, this.counterClockwise);
            // It could be 2*PI when occasionally start = 0 and end = 2*PI but this is not valid for breakToFunctional
            if (!$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(new_arc.length) && !$271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(new_arc.sweep, 2 * Math.PI)) func_arcs_array.push(new_arc.clone());
        }
        return func_arcs_array;
    }
    /**
     * Return tangent unit vector in the start point in the direction from start to end
     * @returns {Vector}
     */ tangentInStart() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.pc, this.start);
        let angle = this.counterClockwise ? Math.PI / 2. : -Math.PI / 2.;
        return vec.rotate(angle).normalize();
    }
    /**
     * Return tangent unit vector in the end point in the direction from end to start
     * @returns {Vector}
     */ tangentInEnd() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.pc, this.end);
        let angle = this.counterClockwise ? -Math.PI / 2. : Math.PI / 2.;
        return vec.rotate(angle).normalize();
    }
    /**
     * Returns new arc with swapped start and end angles and reversed direction
     * @returns {Arc}
     */ reverse() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(this.pc, this.r, this.endAngle, this.startAngle, !this.counterClockwise);
    }
    /**
     * Return new arc transformed using affine transformation matrix <br/>
     * @param {Matrix} matrix - affine transformation matrix
     * @returns {Arc}
     */ transform(matrix = new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix()) {
        let newStart = this.start.transform(matrix);
        let newEnd = this.end.transform(matrix);
        let newCenter = this.pc.transform(matrix);
        let newDirection = this.counterClockwise;
        if (matrix.a * matrix.d < 0) newDirection = !newDirection;
        return $271a1c686af88dba$export$2e2bcd8739ae039.Arc.arcSE(newCenter, newStart, newEnd, newDirection);
    }
    static arcSE(center, start, end, counterClockwise) {
        let { vector: vector } = $271a1c686af88dba$export$2e2bcd8739ae039;
        let startAngle = vector(center, start).slope;
        let endAngle = vector(center, end).slope;
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(startAngle, endAngle)) {
            endAngle += 2 * Math.PI;
            counterClockwise = true;
        }
        let r = vector(center, start).length;
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(center, r, startAngle, endAngle, counterClockwise);
    }
    definiteIntegral(ymin = 0) {
        let f_arcs = this.breakToFunctional();
        let area = f_arcs.reduce((acc, arc)=>acc + arc.circularSegmentDefiniteIntegral(ymin), 0.0);
        return area;
    }
    circularSegmentDefiniteIntegral(ymin) {
        let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(this.start, this.end);
        let onLeftSide = this.pc.leftTo(line);
        let segment = new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(this.start, this.end);
        let areaTrapez = segment.definiteIntegral(ymin);
        let areaCircularSegment = this.circularSegmentArea();
        let area = onLeftSide ? areaTrapez - areaCircularSegment : areaTrapez + areaCircularSegment;
        return area;
    }
    circularSegmentArea() {
        return 0.5 * this.r * this.r * (this.sweep - Math.sin(this.sweep));
    }
    /**
     * Sort given array of points from arc start to end, assuming all points lay on the arc
     * @param {Point[]} pts array of points
     * @returns {Point[]} new array sorted
     */ sortPoints(pts) {
        let { vector: vector } = $271a1c686af88dba$export$2e2bcd8739ae039;
        return pts.slice().sort((pt1, pt2)=>{
            let slope1 = vector(this.pc, pt1).slope;
            let slope2 = vector(this.pc, pt2).slope;
            if (slope1 < slope2) return -1;
            if (slope1 > slope2) return 1;
            return 0;
        });
    }
    get name() {
        return "arc";
    }
    /**
     * Return string to draw arc in svg
     * @param {Object} attrs - an object with attributes of svg path element
     * @returns {string}
     */ svg(attrs = {}) {
        let largeArcFlag = this.sweep <= Math.PI ? "0" : "1";
        let sweepFlag = this.counterClockwise ? "1" : "0";
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(this.sweep, 2 * Math.PI)) {
            let circle = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(this.pc, this.r);
            return circle.svg(attrs);
        } else return `\n<path d="M${this.start.x},${this.start.y}
                             A${this.r},${this.r} 0 ${largeArcFlag},${sweepFlag} ${this.end.x},${this.end.y}"
                    ${$271a1c686af88dba$var$convertToString({
            fill: "none",
            ...attrs
        })} />`;
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Arc = $271a1c686af88dba$export$6ef80ffb606dd232;
/**
 * Function to create arc equivalent to "new" constructor
 * @param args
 */ const $271a1c686af88dba$export$ff1ef9a5c671f043 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.arc = $271a1c686af88dba$export$ff1ef9a5c671f043;
/**
 * Created by Alex Bol on 3/7/2017.
 */ /**
 * Class Box represents bounding box of the shape.
 * It may also represent axis-aligned rectangle
 * @type {Box}
 */ class $271a1c686af88dba$export$e71c4d32a2263218 extends $271a1c686af88dba$var$Shape {
    /**
     *
     * @param {number} xmin - minimal x coordinate
     * @param {number} ymin - minimal y coordinate
     * @param {number} xmax - maximal x coordinate
     * @param {number} ymax - maximal y coordinate
     */ constructor(xmin, ymin, xmax, ymax){
        super();
        /**
         * Minimal x coordinate
         * @type {number}
         */ this.xmin = xmin;
        /**
         * Minimal y coordinate
         * @type {number}
         */ this.ymin = ymin;
        /**
         * Maximal x coordinate
         * @type {number}
         */ this.xmax = xmax;
        /**
         * Maximal y coordinate
         * @type {number}
         */ this.ymax = ymax;
    }
    /**
     * Return new cloned instance of box
     * @returns {Box}
     */ clone() {
        return new $271a1c686af88dba$export$e71c4d32a2263218(this.xmin, this.ymin, this.xmax, this.ymax);
    }
    /**
     * Property low need for interval tree interface
     * @returns {Point}
     */ get low() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.xmin, this.ymin);
    }
    /**
     * Property high need for interval tree interface
     * @returns {Point}
     */ get high() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.xmax, this.ymax);
    }
    /**
     * Property max returns the box itself !
     * @returns {Box}
     */ get max() {
        return this.clone();
    }
    /**
     * Return center of the box
     * @returns {Point}
     */ get center() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Point((this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2);
    }
    /**
     * Return the width of the box
     * @returns {number}
     */ get width() {
        return Math.abs(this.xmax - this.xmin);
    }
    /**
     * Return the height of the box
     * @returns {number}
     */ get height() {
        return Math.abs(this.ymax - this.ymin);
    }
    /**
     * Return property box like all other shapes
     * @returns {Box}
     */ get box() {
        return this.clone();
    }
    /**
     * Returns true if not intersected with other box
     * @param {Box} other_box - other box to test
     * @returns {boolean}
     */ not_intersect(other_box) {
        return this.xmax < other_box.xmin || this.xmin > other_box.xmax || this.ymax < other_box.ymin || this.ymin > other_box.ymax;
    }
    /**
     * Returns true if intersected with other box
     * @param {Box} other_box - Query box
     * @returns {boolean}
     */ intersect(other_box) {
        return !this.not_intersect(other_box);
    }
    /**
     * Returns new box merged with other box
     * @param {Box} other_box - Other box to merge with
     * @returns {Box}
     */ merge(other_box) {
        return new $271a1c686af88dba$export$e71c4d32a2263218(this.xmin === undefined ? other_box.xmin : Math.min(this.xmin, other_box.xmin), this.ymin === undefined ? other_box.ymin : Math.min(this.ymin, other_box.ymin), this.xmax === undefined ? other_box.xmax : Math.max(this.xmax, other_box.xmax), this.ymax === undefined ? other_box.ymax : Math.max(this.ymax, other_box.ymax));
    }
    /**
     * Defines predicate "less than" between two boxes. Need for interval index
     * @param {Box} other_box - other box
     * @returns {boolean} - true if this box less than other box, false otherwise
     */ less_than(other_box) {
        if (this.low.lessThan(other_box.low)) return true;
        if (this.low.equalTo(other_box.low) && this.high.lessThan(other_box.high)) return true;
        return false;
    }
    /**
     * Returns true if this box is equal to other box, false otherwise
     * @param {Box} other_box - query box
     * @returns {boolean}
     */ equal_to(other_box) {
        return this.low.equalTo(other_box.low) && this.high.equalTo(other_box.high);
    }
    output() {
        return this.clone();
    }
    static comparable_max(box1, box2) {
        // return pt1.lessThan(pt2) ? pt2.clone() : pt1.clone();
        return box1.merge(box2);
    }
    static comparable_less_than(pt1, pt2) {
        return pt1.lessThan(pt2);
    }
    /**
     * Set new values to the box object
     * @param {number} xmin - mininal x coordinate
     * @param {number} ymin - minimal y coordinate
     * @param {number} xmax - maximal x coordinate
     * @param {number} ymax - maximal y coordinate
     */ set(xmin, ymin, xmax, ymax) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }
    /**
     * Transform box into array of points from low left corner in counterclockwise
     * @returns {Point[]}
     */ toPoints() {
        return [
            new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.xmin, this.ymin),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.xmax, this.ymin),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.xmax, this.ymax),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Point(this.xmin, this.ymax)
        ];
    }
    /**
     * Transform box into array of segments from low left corner in counterclockwise
     * @returns {Segment[]}
     */ toSegments() {
        let pts = this.toPoints();
        return [
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pts[0], pts[1]),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pts[1], pts[2]),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pts[2], pts[3]),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pts[3], pts[0])
        ];
    }
    /**
     * Box rotation is not supported
     * Attempt to rotate box throws error
     * @param {number} angle - angle in radians
     * @param {Point} [center=(0,0)] center
     */ rotate(angle, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.OPERATION_IS_NOT_SUPPORTED;
    }
    /**
     * Return new box transformed using affine transformation matrix
     * New box is a bounding box of transformed corner points
     * @param {Matrix} m - affine transformation matrix
     * @returns {Box}
     */ transform(m = new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix()) {
        const transformed_points = this.toPoints().map((pt)=>pt.transform(m));
        return transformed_points.reduce((new_box, pt)=>new_box.merge(pt.box), new $271a1c686af88dba$export$e71c4d32a2263218());
    }
    /**
     * Return true if box contains shape: no point of shape lies outside the box
     * @param {AnyShape} shape - test shape
     * @returns {boolean}
     */ contains(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return shape.x >= this.xmin && shape.x <= this.xmax && shape.y >= this.ymin && shape.y <= this.ymax;
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return shape.vertices.every((vertex)=>this.contains(vertex));
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return shape.toSegments().every((segment)=>this.contains(segment));
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return this.contains(shape.box);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return shape.vertices.every((vertex)=>this.contains(vertex)) && shape.toSegments().every((segment)=>$271a1c686af88dba$var$intersectSegment2Arc(segment, shape).length === 0);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line || shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return false;
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return shape.toShapes().every((shape)=>this.contains(shape));
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return this.contains(shape.box);
    }
    /**
     * Calculate distance and shortest segment from box to shape and return as array [distance, shortest segment]
     * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
     * @returns {number} distance from box to shape
     * @returns {Segment} shortest segment between box and shape (started at box, ended at shape)
     */ distanceTo(shape) {
        const distanceInfos = this.toSegments().map((segment)=>segment.distanceTo(shape));
        let shortestDistanceInfo = [
            Number.MAX_SAFE_INTEGER,
            null
        ];
        distanceInfos.forEach((distanceInfo)=>{
            if (distanceInfo[0] < shortestDistanceInfo[0]) shortestDistanceInfo = distanceInfo;
        });
        return shortestDistanceInfo;
    }
    get name() {
        return "box";
    }
    /**
     * Return string to draw box in svg
     * @param {Object} attrs - an object with attributes of svg rectangle element
     * @returns {string}
     */ svg(attrs = {}) {
        const width = this.xmax - this.xmin;
        const height = this.ymax - this.ymin;
        return `\n<rect x="${this.xmin}" y="${this.ymin}" width="${width}" height="${height}"
                ${$271a1c686af88dba$var$convertToString({
            fill: "none",
            ...attrs
        })} />`;
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Box = $271a1c686af88dba$export$e71c4d32a2263218;
/**
 * Shortcut to create new box
 * @param args
 * @returns {Box}
 */ const $271a1c686af88dba$export$827f4ee28efc37 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Box(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.box = $271a1c686af88dba$export$827f4ee28efc37;
/**
 * Created by Alex Bol on 3/17/2017.
 */ /**
 * Class representing an edge of polygon. Edge shape may be Segment or Arc.
 * Each edge contains references to the next and previous edges in the face of the polygon.
 *
 * @type {Edge}
 */ class $271a1c686af88dba$export$b9d9805c9b77a56d {
    /**
     * Construct new instance of edge
     * @param {Shape} shape Shape of type Segment or Arc
     */ constructor(shape){
        /**
         * Shape of the edge: Segment or Arc
         * @type {Segment|Arc}
         */ this.shape = shape;
        /**
         * Pointer to the next edge in the face
         * @type {Edge}
         */ this.next = undefined;
        /**
         * Pointer to the previous edge in the face
         * @type {Edge}
         */ this.prev = undefined;
        /**
         * Pointer to the face containing this edge
         * @type {Face}
         */ this.face = undefined;
        /**
         * "Arc distance" from the face start
         * @type {number}
         */ this.arc_length = 0;
        /**
         * Start inclusion flag (inside/outside/boundary)
         * @type {*}
         */ this.bvStart = undefined;
        /**
         * End inclusion flag (inside/outside/boundary)
         * @type {*}
         */ this.bvEnd = undefined;
        /**
         * Edge inclusion flag (Flatten.INSIDE, Flatten.OUTSIDE, Flatten.BOUNDARY)
         * @type {*}
         */ this.bv = undefined;
        /**
         * Overlap flag for boundary edge (Flatten.OVERLAP_SAME/Flatten.OVERLAP_OPPOSITE)
         * @type {*}
         */ this.overlap = undefined;
    }
    /**
     * Get edge start point
     */ get start() {
        return this.shape.start;
    }
    /**
     * Get edge end point
     */ get end() {
        return this.shape.end;
    }
    /**
     * Get edge length
     */ get length() {
        return this.shape.length;
    }
    /**
     * Get bounding box of the edge
     * @returns {Box}
     */ get box() {
        return this.shape.box;
    }
    get isSegment() {
        return this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment;
    }
    get isArc() {
        return this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc;
    }
    get isLine() {
        return this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line;
    }
    get isRay() {
        return this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray;
    }
    /**
     * Get middle point of the edge
     * @returns {Point}
     */ middle() {
        return this.shape.middle();
    }
    /**
     * Get point at given length
     * @param {number} length - The length along the edge
     * @returns {Point}
     */ pointAtLength(length) {
        return this.shape.pointAtLength(length);
    }
    /**
     * Returns true if point belongs to the edge, false otherwise
     * @param {Point} pt - test point
     */ contains(pt) {
        return this.shape.contains(pt);
    }
    /**
     * Set inclusion flag of the edge with respect to another polygon
     * Inclusion flag is one of Flatten.INSIDE, Flatten.OUTSIDE, Flatten.BOUNDARY
     * @param polygon
     */ setInclusion(polygon) {
        if (this.bv !== undefined) return this.bv;
        if (this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line || this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) {
            this.bv = $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE;
            return this.bv;
        }
        if (this.bvStart === undefined) this.bvStart = $271a1c686af88dba$export$3adad403c78dc9b2(polygon, this.start);
        if (this.bvEnd === undefined) this.bvEnd = $271a1c686af88dba$export$3adad403c78dc9b2(polygon, this.end);
        /* At least one end outside - the whole edge outside */ if (this.bvStart === $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE || this.bvEnd == $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE) this.bv = $271a1c686af88dba$export$2e2bcd8739ae039.OUTSIDE;
        else if (this.bvStart === $271a1c686af88dba$export$2e2bcd8739ae039.INSIDE || this.bvEnd == $271a1c686af88dba$export$2e2bcd8739ae039.INSIDE) this.bv = $271a1c686af88dba$export$2e2bcd8739ae039.INSIDE;
        else {
            let bvMiddle = $271a1c686af88dba$export$3adad403c78dc9b2(polygon, this.middle());
            // let boundary = this.middle().distanceTo(polygon)[0] < 10*Flatten.DP_TOL;
            // let bvMiddle = boundary ? Flatten.BOUNDARY : ray_shoot(polygon, this.middle());
            this.bv = bvMiddle;
        }
        return this.bv;
    }
    /**
     * Set overlapping between two coincident boundary edges
     * Overlapping flag is one of Flatten.OVERLAP_SAME or Flatten.OVERLAP_OPPOSITE
     * @param edge
     */ setOverlap(edge) {
        let flag = undefined;
        let shape1 = this.shape;
        let shape2 = edge.shape;
        if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            if (shape1.start.equalTo(shape2.start) && shape1.end.equalTo(shape2.end)) flag = $271a1c686af88dba$export$2e2bcd8739ae039.OVERLAP_SAME;
            else if (shape1.start.equalTo(shape2.end) && shape1.end.equalTo(shape2.start)) flag = $271a1c686af88dba$export$2e2bcd8739ae039.OVERLAP_OPPOSITE;
        } else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            if (shape1.start.equalTo(shape2.start) && shape1.end.equalTo(shape2.end) && /*shape1.counterClockwise === shape2.counterClockwise &&*/ shape1.middle().equalTo(shape2.middle())) flag = $271a1c686af88dba$export$2e2bcd8739ae039.OVERLAP_SAME;
            else if (shape1.start.equalTo(shape2.end) && shape1.end.equalTo(shape2.start) && /*shape1.counterClockwise !== shape2.counterClockwise &&*/ shape1.middle().equalTo(shape2.middle())) flag = $271a1c686af88dba$export$2e2bcd8739ae039.OVERLAP_OPPOSITE;
        } else if (shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc || shape1 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc && shape2 instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) {
            if (shape1.start.equalTo(shape2.start) && shape1.end.equalTo(shape2.end) && shape1.middle().equalTo(shape2.middle())) flag = $271a1c686af88dba$export$2e2bcd8739ae039.OVERLAP_SAME;
            else if (shape1.start.equalTo(shape2.end) && shape1.end.equalTo(shape2.start) && shape1.middle().equalTo(shape2.middle())) flag = $271a1c686af88dba$export$2e2bcd8739ae039.OVERLAP_OPPOSITE;
        }
        /* Do not update overlap flag if already set on previous chain */ if (this.overlap === undefined) this.overlap = flag;
        if (edge.overlap === undefined) edge.overlap = flag;
    }
    svg() {
        if (this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return ` L${this.shape.end.x},${this.shape.end.y}`;
        else if (this.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            let arc = this.shape;
            let largeArcFlag;
            let sweepFlag = arc.counterClockwise ? "1" : "0";
            // Draw full circe arc as special case: split it into two half-circles
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ(arc.sweep, 2 * Math.PI)) {
                let sign = arc.counterClockwise ? 1 : -1;
                let halfArc1 = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(arc.pc, arc.r, arc.startAngle, arc.startAngle + sign * Math.PI, arc.counterClockwise);
                let halfArc2 = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(arc.pc, arc.r, arc.startAngle + sign * Math.PI, arc.endAngle, arc.counterClockwise);
                largeArcFlag = "0";
                return ` A${halfArc1.r},${halfArc1.r} 0 ${largeArcFlag},${sweepFlag} ${halfArc1.end.x},${halfArc1.end.y}
                    A${halfArc2.r},${halfArc2.r} 0 ${largeArcFlag},${sweepFlag} ${halfArc2.end.x},${halfArc2.end.y}`;
            } else {
                largeArcFlag = arc.sweep <= Math.PI ? "0" : "1";
                return ` A${arc.r},${arc.r} 0 ${largeArcFlag},${sweepFlag} ${arc.end.x},${arc.end.y}`;
            }
        }
    }
    toJSON() {
        return this.shape.toJSON();
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Edge = $271a1c686af88dba$export$b9d9805c9b77a56d;
/**
 * Class implements circular bidirectional linked list <br/>
 * LinkedListElement - object of any type that has properties next and prev.
 */ class $271a1c686af88dba$var$CircularLinkedList extends $271a1c686af88dba$var$LinkedList {
    constructor(first, last){
        super(first, last);
        this.setCircularLinks();
    }
    setCircularLinks() {
        if (this.isEmpty()) return;
        this.last.next = this.first;
        this.first.prev = this.last;
    }
    [Symbol.iterator]() {
        let element = undefined;
        return {
            next: ()=>{
                let value = element ? element : this.first;
                let done = this.first ? element ? element === this.first : false : true;
                element = value ? value.next : undefined;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
    /**
     * Append new element to the end of the list
     * @param {LinkedListElement} element - new element to be appended
     * @returns {CircularLinkedList}
     */ append(element) {
        super.append(element);
        this.setCircularLinks();
        return this;
    }
    /**
     * Insert new element to the list after elementBefore
     * @param {LinkedListElement} newElement - new element to be inserted
     * @param {LinkedListElement} elementBefore - element in the list to insert after it
     * @returns {CircularLinkedList}
     */ insert(newElement, elementBefore) {
        super.insert(newElement, elementBefore);
        this.setCircularLinks();
        return this;
    }
    /**
     * Remove element from the list
     * @param {LinkedListElement} element - element to be removed from the list
     * @returns {CircularLinkedList}
     */ remove(element) {
        super.remove(element);
        // this.setCircularLinks();
        return this;
    }
}
/**
 * Created by Alex Bol on 3/17/2017.
 */ /**
 * Class representing a face (closed loop) in a [polygon]{@link Flatten.Polygon} object.
 * Face is a circular bidirectionally linked list of [edges]{@link Flatten.Edge}.
 * Face object cannot be instantiated with a constructor.
 * Instead, use [polygon.addFace()]{@link Flatten.Polygon#addFace} method.
 * <br/>
 * Note, that face only set entry point to the linked list of edges but does not contain edges by itself.
 * Container of edges is a property of the polygon object. <br/>
 *
 * @example
 * // Face implements "next" iterator which enables to iterate edges in for loop:
 * for (let edge of face) {
 *      console.log(edge.shape.length)     // do something
 * }
 *
 * // Instead, it is possible to iterate edges as linked list, starting from face.first:
 * let edge = face.first;
 * do {
 *   console.log(edge.shape.length);   // do something
 *   edge = edge.next;
 * } while (edge != face.first)
 */ class $271a1c686af88dba$export$aa6504bc3c7c25a1 extends $271a1c686af88dba$var$CircularLinkedList {
    constructor(polygon, ...args){
        super(); // construct empty list of edges
        /**
         * Reference to the first edge in face
         */ // this.first;
        /**
         * Reference to the last edge in face
         */ // this.last;
        this._box = undefined; // new Box();
        this._orientation = undefined;
        if (args.length === 0) return;
        /* If passed an array it supposed to be:
         1) array of shapes that performs close loop or
         2) array of points that performs set of vertices
         */ if (args.length === 1) {
            if (args[0] instanceof Array) {
                // let argsArray = args[0];
                let shapes = args[0]; // argsArray[0];
                if (shapes.length === 0) return;
                /* array of Flatten.Points */ if (shapes.every((shape)=>{
                    return shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point;
                })) {
                    let segments = $271a1c686af88dba$export$aa6504bc3c7c25a1.points2segments(shapes);
                    this.shapes2face(polygon.edges, segments);
                } else if (shapes.every((shape)=>{
                    return shape instanceof Array && shape.length === 2;
                })) {
                    let points = shapes.map((shape)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Point(shape[0], shape[1]));
                    let segments = $271a1c686af88dba$export$aa6504bc3c7c25a1.points2segments(points);
                    this.shapes2face(polygon.edges, segments);
                } else if (shapes.every((shape)=>{
                    return shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc;
                })) this.shapes2face(polygon.edges, shapes);
                else if (shapes.every((shape)=>{
                    return shape.name === "segment" || shape.name === "arc";
                })) {
                    let flattenShapes = [];
                    for (let shape of shapes){
                        let flattenShape;
                        if (shape.name === "segment") flattenShape = new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(shape);
                        else flattenShape = new $271a1c686af88dba$export$2e2bcd8739ae039.Arc(shape);
                        flattenShapes.push(flattenShape);
                    }
                    this.shapes2face(polygon.edges, flattenShapes);
                }
            } else if (args[0] instanceof $271a1c686af88dba$export$aa6504bc3c7c25a1) {
                let face = args[0];
                this.first = face.first;
                this.last = face.last;
                for (let edge of face)polygon.edges.add(edge);
            } else if (args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) this.shapes2face(polygon.edges, [
                args[0].toArc($271a1c686af88dba$export$ce920184faf97f5)
            ]);
            else if (args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) {
                let box = args[0];
                this.shapes2face(polygon.edges, [
                    new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmin, box.ymin), new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmax, box.ymin)),
                    new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmax, box.ymin), new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmax, box.ymax)),
                    new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmax, box.ymax), new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmin, box.ymax)),
                    new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmin, box.ymax), new $271a1c686af88dba$export$2e2bcd8739ae039.Point(box.xmin, box.ymin))
                ]);
            }
        }
        /* If passed two edges, consider them as start and end of the face loop */ /* THIS METHOD WILL BE USED BY BOOLEAN OPERATIONS */ /* Assume that edges already copied to polygon.edges set in the clip algorithm !!! */ if (args.length === 2 && args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Edge && args[1] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Edge) {
            this.first = args[0]; // first edge in face or undefined
            this.last = args[1]; // last edge in face or undefined
            this.last.next = this.first;
            this.first.prev = this.last;
            // set arc length
            this.setArcLength();
        // this.box = this.getBox();
        // this.orientation = this.getOrientation();      // face direction cw or ccw
        }
    }
    /**
     * Return array of edges from first to last
     * @returns {Array}
     */ get edges() {
        return this.toArray();
    }
    /**
     * Return array of shapes which comprise face
     * @returns {Array}
     */ get shapes() {
        return this.edges.map((edge)=>edge.shape.clone());
    }
    /**
     * Return bounding box of the face
     * @returns {Box}
     */ get box() {
        if (this._box === undefined) {
            let box = new $271a1c686af88dba$export$2e2bcd8739ae039.Box();
            for (let edge of this)box = box.merge(edge.box);
            this._box = box;
        }
        return this._box;
    }
    /**
     * Get all edges length
     * @returns {number}
     */ get perimeter() {
        return this.last.arc_length + this.last.length;
    }
    /**
     * Get point on face boundary at given length
     * @param {number} length - The length along the face boundary
     * @returns {Point}
     */ pointAtLength(length) {
        if (length > this.perimeter || length < 0) return null;
        let point = null;
        for (let edge of this)if (length >= edge.arc_length && (edge === this.last || length < edge.next.arc_length)) {
            point = edge.pointAtLength(length - edge.arc_length);
            break;
        }
        return point;
    }
    static points2segments(points) {
        let segments = [];
        for(let i = 0; i < points.length; i++){
            // skip zero length segment
            if (points[i].equalTo(points[(i + 1) % points.length])) continue;
            segments.push(new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(points[i], points[(i + 1) % points.length]));
        }
        return segments;
    }
    shapes2face(edges, shapes) {
        for (let shape of shapes){
            let edge = new $271a1c686af88dba$export$2e2bcd8739ae039.Edge(shape);
            this.append(edge);
            // this.box = this.box.merge(shape.box);
            edges.add(edge);
        }
    // this.orientation = this.getOrientation();              // face direction cw or ccw
    }
    /**
     * Append edge after the last edge of the face (and before the first edge). <br/>
     * @param {Edge} edge - Edge to be appended to the linked list
     * @returns {Face}
     */ append(edge) {
        super.append(edge);
        // set arc length
        this.setOneEdgeArcLength(edge);
        edge.face = this;
        // edges.add(edge);      // Add new edges into edges container
        return this;
    }
    /**
     * Insert edge newEdge into the linked list after the edge edgeBefore <br/>
     * @param {Edge} newEdge - Edge to be inserted into linked list
     * @param {Edge} edgeBefore - Edge to insert newEdge after it
     * @returns {Face}
     */ insert(newEdge, edgeBefore) {
        super.insert(newEdge, edgeBefore);
        // set arc length
        this.setOneEdgeArcLength(newEdge);
        newEdge.face = this;
        return this;
    }
    /**
     * Remove the given edge from the linked list of the face <br/>
     * @param {Edge} edge - Edge to be removed
     * @returns {Face}
     */ remove(edge) {
        super.remove(edge);
        // Recalculate arc length
        this.setArcLength();
        return this;
    }
    /**
     * Merge current edge with the next edge. Given edge will be extended,
     * next edge after it will be removed. The distortion of the polygon
     * is on the responsibility of the user of this method
     * @param {Edge} edge - edge to be extended
     * @returns {Face}
     */ merge_with_next_edge(edge) {
        edge.shape.end.x = edge.next.shape.end.x;
        edge.shape.end.y = edge.next.shape.end.y;
        this.remove(edge.next);
        return this;
    }
    /**
     * Reverse orientation of the face: first edge become last and vice a verse,
     * all edges starts and ends swapped, direction of arcs inverted. If face was oriented
     * clockwise, it becomes counterclockwise and vice versa
     */ reverse() {
        // collect edges in revert order with reverted shapes
        let edges = [];
        let edge_tmp = this.last;
        do {
            // reverse shape
            edge_tmp.shape = edge_tmp.shape.reverse();
            edges.push(edge_tmp);
            edge_tmp = edge_tmp.prev;
        }while (edge_tmp !== this.last);
        // restore linked list
        this.first = undefined;
        this.last = undefined;
        for (let edge of edges){
            if (this.first === undefined) {
                edge.prev = edge;
                edge.next = edge;
                this.first = edge;
                this.last = edge;
            } else {
                // append to end
                edge.prev = this.last;
                this.last.next = edge;
                // update edge to be last
                this.last = edge;
                // restore circular links
                this.last.next = this.first;
                this.first.prev = this.last;
            }
            // set arc length
            this.setOneEdgeArcLength(edge);
        }
        // Recalculate orientation, if set
        if (this._orientation !== undefined) {
            this._orientation = undefined;
            this._orientation = this.orientation();
        }
    }
    /**
     * Set arc_length property for each of the edges in the face.
     * Arc_length of the edge it the arc length from the first edge of the face
     */ setArcLength() {
        for (let edge of this){
            this.setOneEdgeArcLength(edge);
            edge.face = this;
        }
    }
    setOneEdgeArcLength(edge) {
        if (edge === this.first) edge.arc_length = 0.0;
        else edge.arc_length = edge.prev.arc_length + edge.prev.length;
    }
    /**
     * Returns the absolute value of the area of the face
     * @returns {number}
     */ area() {
        return Math.abs(this.signedArea());
    }
    /**
     * Returns signed area of the simple face.
     * Face is simple if it has no self intersections that change its orientation.
     * Then the area will be positive if the orientation of the face is clockwise,
     * and negative if orientation is counterclockwise.
     * It may be zero if polygon is degenerated.
     * @returns {number}
     */ signedArea() {
        let sArea = 0;
        let ymin = this.box.ymin;
        for (let edge of this)sArea += edge.shape.definiteIntegral(ymin);
        return sArea;
    }
    /**
     * Return face orientation: one of Flatten.ORIENTATION.CCW, Flatten.ORIENTATION.CW, Flatten.ORIENTATION.NOT_ORIENTABLE <br/>
     * According to Green theorem the area of a closed curve may be calculated as double integral,
     * and the sign of the integral will be defined by the direction of the curve.
     * When the integral ("signed area") will be negative, direction is counterclockwise,
     * when positive - clockwise and when it is zero, polygon is not orientable.
     * See {@link https://mathinsight.org/greens_theorem_find_area}
     * @returns {number}
     */ orientation() {
        if (this._orientation === undefined) {
            let area = this.signedArea();
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(area)) this._orientation = $271a1c686af88dba$export$7423c88bc54edb74.NOT_ORIENTABLE;
            else if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(area, 0)) this._orientation = $271a1c686af88dba$export$7423c88bc54edb74.CCW;
            else this._orientation = $271a1c686af88dba$export$7423c88bc54edb74.CW;
        }
        return this._orientation;
    }
    /**
     * Returns true if face of the polygon is simple (no self-intersection points found)
     * NOTE: this method is incomplete because it does not exclude touching points.
     * Self intersection test should check if polygon change orientation in the test point.
     * @param {PlanarSet} edges - reference to polygon edges to provide search index
     * @returns {boolean}
     */ isSimple(edges) {
        let ip = $271a1c686af88dba$export$aa6504bc3c7c25a1.getSelfIntersections(this, edges, true);
        return ip.length === 0;
    }
    static getSelfIntersections(face, edges, exitOnFirst = false) {
        let int_points = [];
        // calculate intersections
        for (let edge1 of face){
            // request edges of polygon in the box of edge1
            let resp = edges.search(edge1.box);
            // for each edge2 in response
            for (let edge2 of resp){
                // Skip itself
                if (edge1 === edge2) continue;
                // Skip is edge2 belongs to another face
                if (edge2.face !== face) continue;
                // Skip next and previous edge if both are segment (if one of them arc - calc intersection)
                if (edge1.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment && edge2.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment && (edge1.next === edge2 || edge1.prev === edge2)) continue;
                // calculate intersections between edge1 and edge2
                let ip = edge1.shape.intersect(edge2.shape);
                // for each intersection point
                for (let pt of ip){
                    // skip start-end connections
                    if (pt.equalTo(edge1.start) && pt.equalTo(edge2.end) && edge2 === edge1.prev) continue;
                    if (pt.equalTo(edge1.end) && pt.equalTo(edge2.start) && edge2 === edge1.next) continue;
                    int_points.push(pt);
                    if (exitOnFirst) break;
                }
                if (int_points.length > 0 && exitOnFirst) break;
            }
            if (int_points.length > 0 && exitOnFirst) break;
        }
        return int_points;
    }
    /**
     * Returns edge which contains given point
     * @param {Point} pt - test point
     * @returns {Edge}
     */ findEdgeByPoint(pt) {
        let edgeFound;
        for (let edge of this){
            if (pt.equalTo(edge.shape.start)) continue;
            if (pt.equalTo(edge.shape.end) || edge.shape.contains(pt)) {
                edgeFound = edge;
                break;
            }
        }
        return edgeFound;
    }
    /**
     * Returns new polygon created from one face
     * @returns {Polygon}
     */ toPolygon() {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(this.shapes);
    }
    toJSON() {
        return this.edges.map((edge)=>edge.toJSON());
    }
    /**
     * Returns string to be assigned to "d" attribute inside defined "path"
     * @returns {string}
     */ svg() {
        let svgStr = `M${this.first.start.x},${this.first.start.y}`;
        for (let edge of this)svgStr += edge.svg();
        svgStr += ` z`;
        return svgStr;
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Face = $271a1c686af88dba$export$aa6504bc3c7c25a1;
/**
 * Class representing a ray (a half-infinite line).
 * @type {Ray}
 */ class $271a1c686af88dba$export$a186db52eed6d40e extends $271a1c686af88dba$var$Shape {
    /**
     * Ray may be constructed by setting an <b>origin</b> point and a <b>normal</b> vector, so that any point <b>x</b>
     * on a ray fit an equation: <br />
     *  (<b>x</b> - <b>origin</b>) * <b>vector</b> = 0 <br />
     * Ray defined by constructor is a right semi-infinite line with respect to the normal vector <br/>
     * If normal vector is omitted ray is considered horizontal (normal vector is (0,1)). <br/>
     * Don't be confused: direction of the normal vector is orthogonal to the ray <br/>
     * @param {Point} pt - start point
     * @param {Vector} norm - normal vector
     */ constructor(...args){
        super();
        this.pt = new $271a1c686af88dba$export$2e2bcd8739ae039.Point();
        this.norm = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(0, 1);
        if (args.length === 0) return;
        if (args.length >= 1 && args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) this.pt = args[0].clone();
        if (args.length === 1) return;
        if (args.length === 2 && args[1] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Vector) {
            this.norm = args[1].clone();
            return;
        }
        throw $271a1c686af88dba$export$b8e9cd941e8016ac.ILLEGAL_PARAMETERS;
    }
    /**
     * Return new cloned instance of ray
     * @returns {Ray}
     */ clone() {
        return new $271a1c686af88dba$export$a186db52eed6d40e(this.pt, this.norm);
    }
    /**
     * Slope of the ray - angle in radians between ray and axe x from 0 to 2PI
     * @returns {number} - slope of the line
     */ get slope() {
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.norm.y, -this.norm.x);
        return vec.slope;
    }
    /**
     * Returns half-infinite bounding box of the ray
     * @returns {Box} - bounding box
     */ get box() {
        let slope = this.slope;
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Box(slope > Math.PI / 2 && slope < 3 * Math.PI / 2 ? Number.NEGATIVE_INFINITY : this.pt.x, slope >= 0 && slope <= Math.PI ? this.pt.y : Number.NEGATIVE_INFINITY, slope >= Math.PI / 2 && slope <= 3 * Math.PI / 2 ? this.pt.x : Number.POSITIVE_INFINITY, slope >= Math.PI && slope <= 2 * Math.PI || slope === 0 ? this.pt.y : Number.POSITIVE_INFINITY);
    }
    /**
     * Return ray start point
     * @returns {Point} - ray start point
     */ get start() {
        return this.pt;
    }
    /**
     * Ray has no end point?
     * @returns {undefined}
     */ get end() {
        return undefined;
    }
    /**
     * Return positive infinity number as length
     * @returns {number}
     */ get length() {
        return Number.POSITIVE_INFINITY;
    }
    /**
     * Returns true if point belongs to ray
     * @param {Point} pt Query point
     * @returns {boolean}
     */ contains(pt) {
        if (this.pt.equalTo(pt)) return true;
        /* Ray contains point if vector to point is orthogonal to the ray normal vector
            and cross product from vector to point is positive */ let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(this.pt, pt);
        return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(this.norm.dot(vec)) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(vec.cross(this.norm), 0);
    }
    /**
     * Return coordinate of the point that lies on the ray in the transformed
     * coordinate system where center is the projection of the point(0,0) to
     * the line containing this ray and axe y is collinear to the normal vector. <br/>
     * This method assumes that point lies on the ray
     * @param {Point} pt - point on a ray
     * @returns {number}
     */ coord(pt) {
        return $271a1c686af88dba$export$6074e20ba5c64bef(pt.x, pt.y).cross(this.norm);
    }
    /**
     * Split ray with point and return array of segment and new ray
     * @param {Point} pt
     * @returns [Segment,Ray]
     */ split(pt) {
        if (!this.contains(pt)) return [];
        if (this.pt.equalTo(pt)) return [
            this
        ];
        return [
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(this.pt, pt),
            new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(pt, this.norm)
        ];
    }
    /**
     * Returns array of intersection points between ray and another shape
     * @param {Shape} shape - Shape to intersect with ray
     * @returns {Point[]} array of intersection points
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.contains(shape) ? [
            shape
        ] : [];
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectRay2Segment(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectRay2Arc(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectRay2Line(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return $271a1c686af88dba$var$intersectRay2Ray(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$intersectRay2Circle(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box) return $271a1c686af88dba$var$intersectRay2Box(this, shape);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$intersectRay2Polygon(this, shape);
    }
    /**
     * Return new line rotated by angle
     * @param {number} angle - angle in radians
     * @param {Point} center - center of rotation
     */ rotate(angle, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(this.pt.rotate(angle, center), this.norm.rotate(angle));
    }
    /**
     * Return new ray transformed by affine transformation matrix
     * @param {Matrix} m - affine transformation matrix (a,b,c,d,tx,ty)
     * @returns {Ray}
     */ transform(m) {
        return new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(this.pt.transform(m), this.norm.clone());
    }
    get name() {
        return "ray";
    }
    /**
     * Return string to draw svg segment representing ray inside given box
     * @param {Box} box Box representing drawing area
     * @param {Object} attrs - an object with attributes of svg segment element
     */ svg(box, attrs = {}) {
        let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(this.pt, this.norm);
        let ip = $271a1c686af88dba$var$intersectLine2Box(line, box);
        ip = ip.filter((pt)=>this.contains(pt));
        if (ip.length === 0 || ip.length === 2) return "";
        let segment = new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(this.pt, ip[0]);
        return segment.svg(attrs);
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Ray = $271a1c686af88dba$export$a186db52eed6d40e;
const $271a1c686af88dba$export$e006947b4f05482d = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Ray(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.ray = $271a1c686af88dba$export$e006947b4f05482d;
/**
 * Created by Alex Bol on 3/15/2017.
 */ /**
 * Class representing a polygon.<br/>
 * Polygon in FlattenJS is a multipolygon comprised from a set of [faces]{@link Flatten.Face}. <br/>
 * Face, in turn, is a closed loop of [edges]{@link Flatten.Edge}, where edge may be segment or circular arc<br/>
 * @type {Polygon}
 */ let $271a1c686af88dba$export$7d31b617c820d435 = class Polygon {
    /**
     * Constructor creates new instance of polygon. With no arguments new polygon is empty.<br/>
     * Constructor accepts as argument array that define loop of shapes
     * or array of arrays in case of multi polygon <br/>
     * Loop may be defined in different ways: <br/>
     * - array of shapes of type Segment or Arc <br/>
     * - array of points (Flatten.Point) <br/>
     * - array of numeric pairs which represent points <br/>
     * - box or circle object <br/>
     * Alternatively, it is possible to use polygon.addFace method
     * @param {args} - array of shapes or array of arrays
     */ constructor(){
        /**
         * Container of faces (closed loops), may be empty
         * @type {PlanarSet}
         */ this.faces = new $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet();
        /**
         * Container of edges
         * @type {PlanarSet}
         */ this.edges = new $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet();
        /* It may be array of something that may represent one loop (face) or
         array of arrays that represent multiple loops
         */ let args = [
            ...arguments
        ];
        if (args.length === 1 && (args[0] instanceof Array && args[0].length > 0 || args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || args[0] instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Box)) {
            let argsArray = args[0];
            if (args[0] instanceof Array && args[0].every((loop)=>{
                return loop instanceof Array;
            })) {
                if (argsArray.every((el)=>{
                    return el instanceof Array && el.length === 2 && typeof el[0] === "number" && typeof el[1] === "number";
                })) this.faces.add(new $271a1c686af88dba$export$2e2bcd8739ae039.Face(this, argsArray)); // one-loop polygon as array of pairs of numbers
                else for (let loop of argsArray){
                    /* Check extra level of nesting for GeoJSON-style multi polygons */ if (loop instanceof Array && loop[0] instanceof Array && loop[0].every((el)=>{
                        return el instanceof Array && el.length === 2 && typeof el[0] === "number" && typeof el[1] === "number";
                    })) for (let loop1 of loop)this.faces.add(new $271a1c686af88dba$export$2e2bcd8739ae039.Face(this, loop1));
                    else this.faces.add(new $271a1c686af88dba$export$2e2bcd8739ae039.Face(this, loop));
                }
            } else this.faces.add(new $271a1c686af88dba$export$2e2bcd8739ae039.Face(this, argsArray)); // one-loop polygon
        }
    }
    /**
     * (Getter) Returns bounding box of the polygon
     * @returns {Box}
     */ get box() {
        return [
            ...this.faces
        ].reduce((acc, face)=>acc.merge(face.box), new $271a1c686af88dba$export$2e2bcd8739ae039.Box());
    }
    /**
     * (Getter) Returns array of vertices
     * @returns {Array}
     */ get vertices() {
        return [
            ...this.edges
        ].map((edge)=>edge.start);
    }
    /**
     * Create new cloned instance of the polygon
     * @returns {Polygon}
     */ clone() {
        let polygon = new Polygon();
        for (let face of this.faces)polygon.addFace(face.shapes);
        return polygon;
    }
    /**
     * Return true is polygon has no edges
     * @returns {boolean}
     */ isEmpty() {
        return this.edges.size === 0;
    }
    /**
     * Return true if polygon is valid for boolean operations
     * Polygon is valid if <br/>
     * 1. All faces are simple polygons (there are no self-intersected polygons) <br/>
     * 2. All faces are orientable and there is no island inside island or hole inside hole - TODO <br/>
     * 3. There is no intersections between faces (excluding touching) - TODO <br/>
     * @returns {boolean}
     */ isValid() {
        let valid = true;
        // 1. Polygon is invalid if at least one face is not simple
        for (let face of this.faces)if (!face.isSimple(this.edges)) {
            valid = false;
            break;
        }
        // 2. TODO: check if no island inside island and no hole inside hole
        // 3. TODO: check the there is no intersection between faces
        return valid;
    }
    /**
     * Returns area of the polygon. Area of an island will be added, area of a hole will be subtracted
     * @returns {number}
     */ area() {
        let signedArea = [
            ...this.faces
        ].reduce((acc, face)=>acc + face.signedArea(), 0);
        return Math.abs(signedArea);
    }
    /**
     * Add new face to polygon. Returns added face
     * @param {Point[]|Segment[]|Arc[]|Circle|Box} args -  new face may be create with one of the following ways: <br/>
     * 1) array of points that describe closed path (edges are segments) <br/>
     * 2) array of shapes (segments and arcs) which describe closed path <br/>
     * 3) circle - will be added as counterclockwise arc <br/>
     * 4) box - will be added as counterclockwise rectangle <br/>
     * You can chain method face.reverse() is you need to change direction of the creates face
     * @returns {Face}
     */ addFace(...args) {
        let face = new $271a1c686af88dba$export$2e2bcd8739ae039.Face(this, ...args);
        this.faces.add(face);
        return face;
    }
    /**
     * Delete existing face from polygon
     * @param {Face} face Face to be deleted
     * @returns {boolean}
     */ deleteFace(face) {
        for (let edge of face)this.edges.delete(edge);
        return this.faces.delete(face);
    }
    /**
     * Clear all faces and create new faces from edges
     */ recreateFaces() {
        // Remove all faces
        this.faces.clear();
        for (let edge of this.edges)edge.face = null;
        // Restore faces
        let first;
        let unassignedEdgeFound = true;
        while(unassignedEdgeFound){
            unassignedEdgeFound = false;
            for (let edge of this.edges)if (edge.face === null) {
                first = edge;
                unassignedEdgeFound = true;
                break;
            }
            if (unassignedEdgeFound) {
                let last = first;
                do last = last.next;
                while (last.next !== first);
                this.addFace(first, last);
            }
        }
    }
    /**
     * Delete chain of edges from the face.
     * @param {Face} face Face to remove chain
     * @param {Edge} edgeFrom Start of the chain of edges to be removed
     * @param {Edge} edgeTo End of the chain of edges to be removed
     */ removeChain(face, edgeFrom, edgeTo) {
        // Special case: all edges removed
        if (edgeTo.next === edgeFrom) {
            this.deleteFace(face);
            return;
        }
        for(let edge = edgeFrom; edge !== edgeTo.next; edge = edge.next){
            face.remove(edge);
            this.edges.delete(edge); // delete from PlanarSet of edges and update index
            if (face.isEmpty()) {
                this.deleteFace(face); // delete from PlanarSet of faces and update index
                break;
            }
        }
    }
    /**
     * Add point as a new vertex and split edge. Point supposed to belong to an edge.
     * When edge is split, new edge created from the start of the edge to the new vertex
     * and inserted before current edge.
     * Current edge is trimmed and updated.
     * Method returns new edge added. If no edge added, it returns edge before vertex
     * @param {Point} pt Point to be added as a new vertex
     * @param {Edge} edge Edge to be split with new vertex and then trimmed from start
     * @returns {Edge}
     */ addVertex(pt, edge) {
        let shapes = edge.shape.split(pt);
        // if (shapes.length < 2) return;
        if (shapes[0] === null) return edge.prev;
        if (shapes[1] === null) return edge;
        let newEdge = new $271a1c686af88dba$export$2e2bcd8739ae039.Edge(shapes[0]);
        let edgeBefore = edge.prev;
        /* Insert first split edge into linked list after edgeBefore */ edge.face.insert(newEdge, edgeBefore);
        // Remove old edge from edges container and 2d index
        this.edges.delete(edge);
        // Insert new edge to the edges container and 2d index
        this.edges.add(newEdge);
        // Update edge shape with second split edge keeping links
        edge.shape = shapes[1];
        // Add updated edge to the edges container and 2d index
        this.edges.add(edge);
        return newEdge;
    }
    /**
     * Merge given edge with next edge and remove vertex between them
     * @param {Edge} edge
     */ removeEndVertex(edge) {
        const edge_next = edge.next;
        if (edge_next === edge) return;
        edge.face.merge_with_next_edge(edge);
        this.edges.delete(edge_next);
    }
    /**
     * Cut polygon with multiline and return a new polygon
     * @param {Multiline} multiline
     * @returns {Polygon}
     */ cut(multiline) {
        let newPoly = this.clone();
        // smart intersections
        let intersections = {
            int_points1: [],
            int_points2: [],
            int_points1_sorted: [],
            int_points2_sorted: []
        };
        // intersect each edge of multiline with each edge of the polygon
        // and create smart intersections
        for (let edge1 of multiline.edges)for (let edge2 of newPoly.edges){
            let ip = $271a1c686af88dba$var$intersectEdge2Edge(edge1, edge2);
            // for each intersection point
            for (let pt of ip){
                $271a1c686af88dba$var$addToIntPoints(edge1, pt, intersections.int_points1);
                $271a1c686af88dba$var$addToIntPoints(edge2, pt, intersections.int_points2);
            }
        }
        // No intersections - return a copy of the original polygon
        if (intersections.int_points1.length === 0) return newPoly;
        // sort smart intersections
        intersections.int_points1_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points1);
        intersections.int_points2_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points2);
        // split by intersection points
        $271a1c686af88dba$var$splitByIntersections(multiline, intersections.int_points1_sorted);
        $271a1c686af88dba$var$splitByIntersections(newPoly, intersections.int_points2_sorted);
        // filter duplicated intersection points
        $271a1c686af88dba$var$filterDuplicatedIntersections(intersections);
        // sort intersection points again after filtering
        intersections.int_points1_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points1);
        intersections.int_points2_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points2);
        // initialize inclusion flags for edges of multiline incident to intersections
        $271a1c686af88dba$var$initializeInclusionFlags(intersections.int_points1);
        // calculate inclusion flag for edges of multiline incident to intersections
        $271a1c686af88dba$var$calculateInclusionFlags(intersections.int_points1, newPoly);
        // filter intersections between two edges that got same inclusion flag
        for (let int_point1 of intersections.int_points1_sorted)if (int_point1.edge_before && int_point1.edge_after && int_point1.edge_before.bv === int_point1.edge_after.bv) {
            intersections.int_points2[int_point1.id] = -1; // to be filtered out
            int_point1.id = -1; // to be filtered out
        }
        intersections.int_points1 = intersections.int_points1.filter((int_point)=>int_point.id >= 0);
        intersections.int_points2 = intersections.int_points2.filter((int_point)=>int_point.id >= 0);
        intersections.int_points1.forEach((int_point, index)=>{
            int_point.id = index;
        });
        intersections.int_points2.forEach((int_point, index)=>{
            int_point.id = index;
        });
        // No intersections left after filtering - return a copy of the original polygon
        if (intersections.int_points1.length === 0) return newPoly;
        // sort intersection points 3d time after filtering
        intersections.int_points1_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points1);
        intersections.int_points2_sorted = $271a1c686af88dba$var$getSortedArray(intersections.int_points2);
        // Add new inner edges between intersection points
        let int_point1_prev;
        let int_point1_curr;
        for(let i = 1; i < intersections.int_points1_sorted.length; i++){
            int_point1_curr = intersections.int_points1_sorted[i];
            int_point1_prev = intersections.int_points1_sorted[i - 1];
            if (int_point1_curr.edge_before && int_point1_curr.edge_before.bv === $271a1c686af88dba$export$48ea0cac79c83ca8) {
                let edgeFrom = int_point1_prev.edge_after;
                let edgeTo = int_point1_curr.edge_before;
                let newEdges = multiline.getChain(edgeFrom, edgeTo);
                $271a1c686af88dba$var$insertBetweenIntPoints(intersections.int_points2[int_point1_prev.id], intersections.int_points2[int_point1_curr.id], newEdges);
                newEdges.forEach((edge)=>newPoly.edges.add(edge));
                newEdges = newEdges.reverse().map((edge)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Edge(edge.shape.reverse()));
                for(let k = 0; k < newEdges.length - 1; k++){
                    newEdges[k].next = newEdges[k + 1];
                    newEdges[k + 1].prev = newEdges[k];
                }
                $271a1c686af88dba$var$insertBetweenIntPoints(intersections.int_points2[int_point1_curr.id], intersections.int_points2[int_point1_prev.id], newEdges);
                newEdges.forEach((edge)=>newPoly.edges.add(edge));
            }
        }
        // Recreate faces
        newPoly.recreateFaces();
        return newPoly;
    }
    /**
     * A special case of cut() function
     * The return is a polygon cut with line
     * @param {Line} line - cutting line
     * @returns {Polygon} newPoly - resulted polygon
     */ cutWithLine(line) {
        let multiline = new $271a1c686af88dba$export$a5433e0f3b1dce29([
            line
        ]);
        return this.cut(multiline);
    }
    /**
     * Returns the first found edge of polygon that contains given point
     * If point is a vertex, return the edge where the point is an end vertex, not a start one
     * @param {Point} pt
     * @returns {Edge}
     */ findEdgeByPoint(pt) {
        let edge;
        for (let face of this.faces){
            edge = face.findEdgeByPoint(pt);
            if (edge !== undefined) break;
        }
        return edge;
    }
    /**
     * Split polygon into array of polygons, where each polygon is an outer face with all
     * containing inner faces
     * @returns {Flatten.Polygon[]}
     */ splitToIslands() {
        if (this.isEmpty()) return []; // return empty array if polygon is empty
        let polygons = this.toArray(); // split into array of one-loop polygons
        /* Sort polygons by area in descending order */ polygons.sort((polygon1, polygon2)=>polygon2.area() - polygon1.area());
        /* define orientation of the island by orientation of the first polygon in array */ let orientation = [
            ...polygons[0].faces
        ][0].orientation();
        /* Create output array from polygons with same orientation as a first polygon (array of islands) */ let newPolygons = polygons.filter((polygon)=>[
                ...polygon.faces
            ][0].orientation() === orientation);
        for (let polygon of polygons){
            let face = [
                ...polygon.faces
            ][0];
            if (face.orientation() === orientation) continue; // skip same orientation
            /* Proceed with opposite orientation */ /* Look if any of island polygons contains tested polygon as a hole */ for (let islandPolygon of newPolygons)if (face.shapes.every((shape)=>islandPolygon.contains(shape))) {
                islandPolygon.addFace(face.shapes); // add polygon as a hole in islandPolygon
                break;
            }
        }
        // TODO: assert if not all polygons added into output
        return newPolygons;
    }
    /**
     * Reverse orientation of all faces to opposite
     * @returns {Polygon}
     */ reverse() {
        for (let face of this.faces)face.reverse();
        return this;
    }
    /**
     * Returns true if polygon contains shape: no point of shape lay outside of the polygon,
     * false otherwise
     * @param {Shape} shape - test shape
     * @returns {boolean}
     */ contains(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            let rel = $271a1c686af88dba$export$3adad403c78dc9b2(this, shape);
            return rel === $271a1c686af88dba$export$48ea0cac79c83ca8 || rel === $271a1c686af88dba$export$a523954c60dca5e4;
        } else return $271a1c686af88dba$var$cover(this, shape);
    }
    /**
     * Return distance and shortest segment between polygon and other shape as array [distance, shortest_segment]
     * @param {Shape} shape Shape of one of the types Point, Circle, Line, Segment, Arc or Polygon
     * @returns {Number | Segment}
     */ distanceTo(shape) {
        // let {Distance} = Flatten;
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.point2polygon(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                dist,
                shortest_segment
            ];
        }
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle || shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line || shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment || shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) {
            let [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2polygon(shape, this);
            shortest_segment = shortest_segment.reverse();
            return [
                dist,
                shortest_segment
            ];
        }
        /* this method is bit faster */ if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) {
            let min_dist_and_segment = [
                Number.POSITIVE_INFINITY,
                new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
            ];
            let dist, shortest_segment;
            for (let edge of this.edges){
                // let [dist, shortest_segment] = Distance.shape2polygon(edge.shape, shape);
                let min_stop = min_dist_and_segment[0];
                [dist, shortest_segment] = $271a1c686af88dba$export$2e2bcd8739ae039.Distance.shape2planarSet(edge.shape, shape.edges, min_stop);
                if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_stop)) min_dist_and_segment = [
                    dist,
                    shortest_segment
                ];
            }
            return min_dist_and_segment;
        }
    }
    /**
     * Return array of intersection points between polygon and other shape
     * @param shape Shape of the one of supported types <br/>
     * @returns {Point[]}
     */ intersect(shape) {
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Point) return this.contains(shape) ? [
            shape
        ] : [];
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Line) return $271a1c686af88dba$var$intersectLine2Polygon(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Ray) return $271a1c686af88dba$var$intersectRay2Polygon(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Circle) return $271a1c686af88dba$var$intersectCircle2Polygon(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment) return $271a1c686af88dba$var$intersectSegment2Polygon(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Arc) return $271a1c686af88dba$var$intersectArc2Polygon(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Polygon) return $271a1c686af88dba$var$intersectPolygon2Polygon(shape, this);
        if (shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Multiline) return $271a1c686af88dba$var$intersectMultiline2Polygon(shape, this);
    }
    /**
     * Returns new polygon translated by vector vec
     * @param {Vector} vec
     * @returns {Polygon}
     */ translate(vec) {
        let newPolygon = new Polygon();
        for (let face of this.faces)newPolygon.addFace(face.shapes.map((shape)=>shape.translate(vec)));
        return newPolygon;
    }
    /**
     * Return new polygon rotated by given angle around given point
     * If point omitted, rotate around origin (0,0)
     * Positive value of angle defines rotation counterclockwise, negative - clockwise
     * @param {number} angle - rotation angle in radians
     * @param {Point} center - rotation center, default is (0,0)
     * @returns {Polygon} - new rotated polygon
     */ rotate(angle = 0, center = new $271a1c686af88dba$export$2e2bcd8739ae039.Point()) {
        let newPolygon = new Polygon();
        for (let face of this.faces)newPolygon.addFace(face.shapes.map((shape)=>shape.rotate(angle, center)));
        return newPolygon;
    }
    /**
     * Return new polygon with coordinates multiplied by scaling factor
     * @param {number} sx - x-axis scaling factor
     * @param {number} sy - y-axis scaling factor
     * @returns {Polygon}
     */ scale(sx, sy) {
        let newPolygon = new Polygon();
        for (let face of this.faces)newPolygon.addFace(face.shapes.map((shape)=>shape.scale(sx, sy)));
        return newPolygon;
    }
    /**
     * Return new polygon transformed using affine transformation matrix
     * @param {Matrix} matrix - affine transformation matrix
     * @returns {Polygon} - new polygon
     */ transform(matrix = new $271a1c686af88dba$export$2e2bcd8739ae039.Matrix()) {
        let newPolygon = new Polygon();
        for (let face of this.faces)newPolygon.addFace(face.shapes.map((shape)=>shape.transform(matrix)));
        return newPolygon;
    }
    /**
     * This method returns an object that defines how data will be
     * serialized when called JSON.stringify() method
     * @returns {Object}
     */ toJSON() {
        return [
            ...this.faces
        ].map((face)=>face.toJSON());
    }
    /**
     * Transform all faces into array of polygons
     * @returns {Flatten.Polygon[]}
     */ toArray() {
        return [
            ...this.faces
        ].map((face)=>face.toPolygon());
    }
    /**
     * Return string to be assigned to 'd' attribute of <path> element
     * @returns {*}
     */ dpath() {
        return [
            ...this.faces
        ].reduce((acc, face)=>acc + face.svg(), "");
    }
    /**
     * Return string to draw polygon in svg
     * @param attrs  - an object with attributes for svg path element
     * @returns {string}
     */ svg(attrs = {}) {
        let svgStr = `\n<path ${$271a1c686af88dba$var$convertToString({
            fillRule: "evenodd",
            fill: "lightcyan",
            ...attrs
        })} d="`;
        for (let face of this.faces)svgStr += `\n${face.svg()}`;
        svgStr += `" >\n</path>`;
        return svgStr;
    }
};
$271a1c686af88dba$export$2e2bcd8739ae039.Polygon = $271a1c686af88dba$export$7d31b617c820d435;
/**
 * Shortcut method to create new polygon
 */ const $271a1c686af88dba$export$b7b19aa0ee06c73 = (...args)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Polygon(...args);
$271a1c686af88dba$export$2e2bcd8739ae039.polygon = $271a1c686af88dba$export$b7b19aa0ee06c73;
const { Circle: $271a1c686af88dba$var$Circle, Line: $271a1c686af88dba$var$Line, Point: $271a1c686af88dba$var$Point$2, Vector: $271a1c686af88dba$var$Vector, Utils: $271a1c686af88dba$var$Utils } = $271a1c686af88dba$export$2e2bcd8739ae039;
/**
 * Class Inversion represent operator of inversion in circle
 * Inversion is a transformation of the Euclidean plane that maps generalized circles
 * (where line is considered as a circle with infinite radius) into generalized circles
 * See also https://en.wikipedia.org/wiki/Inversive_geometry and
 * http://mathworld.wolfram.com/Inversion.html <br/>
 * @type {Inversion}
 */ class $271a1c686af88dba$export$ff40fcfb940069c {
    /**
     * Inversion constructor
     * @param {Circle} inversion_circle inversion circle
     */ constructor(inversion_circle){
        this.circle = inversion_circle;
    }
    get inversion_circle() {
        return this.circle;
    }
    static inversePoint(inversion_circle, point) {
        const v = new $271a1c686af88dba$var$Vector(inversion_circle.pc, point);
        const k2 = inversion_circle.r * inversion_circle.r;
        const len2 = v.dot(v);
        const reflected_point = $271a1c686af88dba$var$Utils.EQ_0(len2) ? new $271a1c686af88dba$var$Point$2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) : inversion_circle.pc.translate(v.multiply(k2 / len2));
        return reflected_point;
    }
    static inverseCircle(inversion_circle, circle) {
        const dist = inversion_circle.pc.distanceTo(circle.pc)[0];
        if ($271a1c686af88dba$var$Utils.EQ(dist, circle.r)) {
            let d = inversion_circle.r * inversion_circle.r / (2 * circle.r);
            let v = new $271a1c686af88dba$var$Vector(inversion_circle.pc, circle.pc);
            v = v.normalize();
            let pt = inversion_circle.pc.translate(v.multiply(d));
            return new $271a1c686af88dba$var$Line(pt, v);
        } else {
            /* Taken from http://mathworld.wolfram.com */ let v = new $271a1c686af88dba$var$Vector(inversion_circle.pc, circle.pc);
            let s = inversion_circle.r * inversion_circle.r / (v.dot(v) - circle.r * circle.r);
            let pc = inversion_circle.pc.translate(v.multiply(s));
            let r = Math.abs(s) * circle.r;
            return new $271a1c686af88dba$var$Circle(pc, r);
        }
    }
    static inverseLine(inversion_circle, line) {
        const [dist, shortest_segment] = inversion_circle.pc.distanceTo(line);
        if ($271a1c686af88dba$var$Utils.EQ_0(dist)) return line.clone();
        else {
            let r = inversion_circle.r * inversion_circle.r / (2 * dist);
            let v = new $271a1c686af88dba$var$Vector(inversion_circle.pc, shortest_segment.end);
            v = v.multiply(r / dist);
            return new $271a1c686af88dba$var$Circle(inversion_circle.pc.translate(v), r);
        }
    }
    inverse(shape) {
        if (shape instanceof $271a1c686af88dba$var$Point$2) return $271a1c686af88dba$export$ff40fcfb940069c.inversePoint(this.circle, shape);
        else if (shape instanceof $271a1c686af88dba$var$Circle) return $271a1c686af88dba$export$ff40fcfb940069c.inverseCircle(this.circle, shape);
        else if (shape instanceof $271a1c686af88dba$var$Line) return $271a1c686af88dba$export$ff40fcfb940069c.inverseLine(this.circle, shape);
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Inversion = $271a1c686af88dba$export$ff40fcfb940069c;
/**
 * Shortcut to create inversion operator
 * @param circle
 * @returns {Inversion}
 */ const $271a1c686af88dba$export$2bb0f59743968e2d = (circle)=>new $271a1c686af88dba$export$2e2bcd8739ae039.Inversion(circle);
$271a1c686af88dba$export$2e2bcd8739ae039.inversion = $271a1c686af88dba$export$2bb0f59743968e2d;
class $271a1c686af88dba$export$3081247862d57e3d {
    /**
     * Calculate distance and shortest segment between points
     * @param pt1
     * @param pt2
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static point2point(pt1, pt2) {
        return pt1.distanceTo(pt2);
    }
    /**
     * Calculate distance and shortest segment between point and line
     * @param pt
     * @param line
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static point2line(pt, line) {
        let closest_point = pt.projectionOn(line);
        let vec = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(pt, closest_point);
        return [
            vec.length,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pt, closest_point)
        ];
    }
    /**
     * Calculate distance and shortest segment between point and circle
     * @param pt
     * @param circle
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static point2circle(pt, circle) {
        let [dist2center, shortest_dist] = pt.distanceTo(circle.center);
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.EQ_0(dist2center)) return [
            circle.r,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pt, circle.toArc().start)
        ];
        else {
            let dist = Math.abs(dist2center - circle.r);
            let v = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(circle.pc, pt).normalize().multiply(circle.r);
            let closest_point = circle.pc.translate(v);
            return [
                dist,
                new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pt, closest_point)
            ];
        }
    }
    /**
     * Calculate distance and shortest segment between point and segment
     * @param pt
     * @param segment
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static point2segment(pt, segment) {
        /* Degenerated case of zero-length segment */ if (segment.start.equalTo(segment.end)) return $271a1c686af88dba$export$3081247862d57e3d.point2point(pt, segment.start);
        let v_seg = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(segment.start, segment.end);
        let v_ps2pt = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(segment.start, pt);
        let v_pe2pt = new $271a1c686af88dba$export$2e2bcd8739ae039.Vector(segment.end, pt);
        let start_sp = v_seg.dot(v_ps2pt);
        /* dot product v_seg * v_ps2pt */ let end_sp = -v_seg.dot(v_pe2pt);
        /* minus dot product v_seg * v_pe2pt */ let dist;
        let closest_point;
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(start_sp, 0) && $271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(end_sp, 0)) {
            let v_unit = segment.tangentInStart(); // new Flatten.Vector(v_seg.x / this.length, v_seg.y / this.length);
            /* unit vector ||v_unit|| = 1 */ dist = Math.abs(v_unit.cross(v_ps2pt));
            /* dist = abs(v_unit x v_ps2pt) */ closest_point = segment.start.translate(v_unit.multiply(v_unit.dot(v_ps2pt)));
            return [
                dist,
                new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(pt, closest_point)
            ];
        } else if (start_sp < 0) return pt.distanceTo(segment.start);
        else return pt.distanceTo(segment.end);
    }
    /**
     * Calculate distance and shortest segment between point and arc
     * @param pt
     * @param arc
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static point2arc(pt, arc) {
        let circle = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.pc, arc.r);
        let dist_and_segment = [];
        let dist, shortest_segment;
        [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.point2circle(pt, circle);
        if (shortest_segment.end.on(arc)) dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2circle(pt, circle));
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2point(pt, arc.start));
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2point(pt, arc.end));
        $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
        return dist_and_segment[0];
    }
    /**
     * Calculate distance and shortest segment between point and edge
     * @param pt
     * @param edge
     * @returns {[number, Flatten.Segment]}
     */ static point2edge(pt, edge) {
        return edge.shape instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Segment ? $271a1c686af88dba$export$3081247862d57e3d.point2segment(pt, edge.shape) : $271a1c686af88dba$export$3081247862d57e3d.point2arc(pt, edge.shape);
    }
    /**
     * Calculate distance and shortest segment between segment and line
     * @param seg
     * @param line
     * @returns {[number, Flatten.Segment]}
     */ static segment2line(seg, line) {
        let ip = seg.intersect(line);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ]; // distance = 0, closest point is the first point
        let dist_and_segment = [];
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2line(seg.start, line));
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2line(seg.end, line));
        $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
        return dist_and_segment[0];
    }
    /**
     * Calculate distance and shortest segment between two segments
     * @param seg1
     * @param seg2
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static segment2segment(seg1, seg2) {
        let ip = $271a1c686af88dba$var$intersectSegment2Segment(seg1, seg2);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ]; // distance = 0, closest point is the first point
        // Seg1 and seg2 not intersected
        let dist_and_segment = [];
        let dist_tmp, shortest_segment_tmp;
        [dist_tmp, shortest_segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2segment(seg2.start, seg1);
        dist_and_segment.push([
            dist_tmp,
            shortest_segment_tmp.reverse()
        ]);
        [dist_tmp, shortest_segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2segment(seg2.end, seg1);
        dist_and_segment.push([
            dist_tmp,
            shortest_segment_tmp.reverse()
        ]);
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2segment(seg1.start, seg2));
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2segment(seg1.end, seg2));
        $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
        return dist_and_segment[0];
    }
    /**
     * Calculate distance and shortest segment between segment and circle
     * @param seg
     * @param circle
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static segment2circle(seg, circle) {
        /* Case 1 Segment and circle intersected. Return the first point and zero distance */ let ip = seg.intersect(circle);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        // No intersection between segment and circle
        /* Case 2. Distance to projection of center point to line bigger than radius
         * And projection point belong to segment
          * Then measure again distance from projection to circle and return it */ let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(seg.ps, seg.pe);
        let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.point2line(circle.center, line);
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(dist, circle.r) && shortest_segment.end.on(seg)) return $271a1c686af88dba$export$3081247862d57e3d.point2circle(shortest_segment.end, circle);
        else {
            let [dist_from_start, shortest_segment_from_start] = $271a1c686af88dba$export$3081247862d57e3d.point2circle(seg.start, circle);
            let [dist_from_end, shortest_segment_from_end] = $271a1c686af88dba$export$3081247862d57e3d.point2circle(seg.end, circle);
            return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist_from_start, dist_from_end) ? [
                dist_from_start,
                shortest_segment_from_start
            ] : [
                dist_from_end,
                shortest_segment_from_end
            ];
        }
    }
    /**
     * Calculate distance and shortest segment between segment and arc
     * @param seg
     * @param arc
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static segment2arc(seg, arc) {
        /* Case 1 Segment and arc intersected. Return the first point and zero distance */ let ip = seg.intersect(arc);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        // No intersection between segment and arc
        let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(seg.ps, seg.pe);
        let circle = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.pc, arc.r);
        /* Case 2. Distance to projection of center point to line bigger than radius AND
         * projection point belongs to segment AND
           * distance from projection point to circle belongs to arc  =>
           * return this distance from projection to circle */ let [dist_from_center, shortest_segment_from_center] = $271a1c686af88dba$export$3081247862d57e3d.point2line(circle.center, line);
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(dist_from_center, circle.r) && shortest_segment_from_center.end.on(seg)) {
            let [dist_from_projection, shortest_segment_from_projection] = $271a1c686af88dba$export$3081247862d57e3d.point2circle(shortest_segment_from_center.end, circle);
            if (shortest_segment_from_projection.end.on(arc)) return [
                dist_from_projection,
                shortest_segment_from_projection
            ];
        }
        /* Case 3. Otherwise closest point is one of the end points of the segment */ let dist_and_segment = [];
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2arc(seg.start, arc));
        dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2arc(seg.end, arc));
        let dist_tmp, segment_tmp;
        [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2segment(arc.start, seg);
        dist_and_segment.push([
            dist_tmp,
            segment_tmp.reverse()
        ]);
        [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2segment(arc.end, seg);
        dist_and_segment.push([
            dist_tmp,
            segment_tmp.reverse()
        ]);
        $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
        return dist_and_segment[0];
    }
    /**
     * Calculate distance and shortest segment between two circles
     * @param circle1
     * @param circle2
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static circle2circle(circle1, circle2) {
        let ip = circle1.intersect(circle2);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        // Case 1. Concentric circles. Convert to arcs and take distance between two arc starts
        if (circle1.center.equalTo(circle2.center)) {
            let arc1 = circle1.toArc();
            let arc2 = circle2.toArc();
            return $271a1c686af88dba$export$3081247862d57e3d.point2point(arc1.start, arc2.start);
        } else {
            // Case 2. Not concentric circles
            let line = new $271a1c686af88dba$export$2e2bcd8739ae039.Line(circle1.center, circle2.center);
            let ip1 = line.intersect(circle1);
            let ip2 = line.intersect(circle2);
            let dist_and_segment = [];
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2point(ip1[0], ip2[0]));
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2point(ip1[0], ip2[1]));
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2point(ip1[1], ip2[0]));
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2point(ip1[1], ip2[1]));
            $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
            return dist_and_segment[0];
        }
    }
    /**
     * Calculate distance and shortest segment between two circles
     * @param circle
     * @param line
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static circle2line(circle, line) {
        let ip = circle.intersect(line);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        let [dist_from_center, shortest_segment_from_center] = $271a1c686af88dba$export$3081247862d57e3d.point2line(circle.center, line);
        let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.point2circle(shortest_segment_from_center.end, circle);
        shortest_segment = shortest_segment.reverse();
        return [
            dist,
            shortest_segment
        ];
    }
    /**
     * Calculate distance and shortest segment between arc and line
     * @param arc
     * @param line
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static arc2line(arc, line) {
        /* Case 1 Line and arc intersected. Return the first point and zero distance */ let ip = line.intersect(arc);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        let circle = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.center, arc.r);
        /* Case 2. Distance to projection of center point to line bigger than radius AND
         * projection point belongs to segment AND
           * distance from projection point to circle belongs to arc  =>
           * return this distance from projection to circle */ let [dist_from_center, shortest_segment_from_center] = $271a1c686af88dba$export$3081247862d57e3d.point2line(circle.center, line);
        if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GE(dist_from_center, circle.r)) {
            let [dist_from_projection, shortest_segment_from_projection] = $271a1c686af88dba$export$3081247862d57e3d.point2circle(shortest_segment_from_center.end, circle);
            if (shortest_segment_from_projection.end.on(arc)) return [
                dist_from_projection,
                shortest_segment_from_projection
            ];
        } else {
            let dist_and_segment = [];
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2line(arc.start, line));
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2line(arc.end, line));
            $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
            return dist_and_segment[0];
        }
    }
    /**
     * Calculate distance and shortest segment between arc and circle
     * @param arc
     * @param circle2
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static arc2circle(arc, circle2) {
        let ip = arc.intersect(circle2);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        let circle1 = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc.center, arc.r);
        let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.circle2circle(circle1, circle2);
        if (shortest_segment.start.on(arc)) return [
            dist,
            shortest_segment
        ];
        else {
            let dist_and_segment = [];
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2circle(arc.start, circle2));
            dist_and_segment.push($271a1c686af88dba$export$3081247862d57e3d.point2circle(arc.end, circle2));
            $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
            return dist_and_segment[0];
        }
    }
    /**
     * Calculate distance and shortest segment between two arcs
     * @param arc1
     * @param arc2
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static arc2arc(arc1, arc2) {
        let ip = arc1.intersect(arc2);
        if (ip.length > 0) return [
            0,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment(ip[0], ip[0])
        ];
        let circle1 = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc1.center, arc1.r);
        let circle2 = new $271a1c686af88dba$export$2e2bcd8739ae039.Circle(arc2.center, arc2.r);
        let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.circle2circle(circle1, circle2);
        if (shortest_segment.start.on(arc1) && shortest_segment.end.on(arc2)) return [
            dist,
            shortest_segment
        ];
        else {
            let dist_and_segment = [];
            let dist_tmp, segment_tmp;
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2arc(arc1.start, arc2);
            if (segment_tmp.end.on(arc2)) dist_and_segment.push([
                dist_tmp,
                segment_tmp
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2arc(arc1.end, arc2);
            if (segment_tmp.end.on(arc2)) dist_and_segment.push([
                dist_tmp,
                segment_tmp
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2arc(arc2.start, arc1);
            if (segment_tmp.end.on(arc1)) dist_and_segment.push([
                dist_tmp,
                segment_tmp.reverse()
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2arc(arc2.end, arc1);
            if (segment_tmp.end.on(arc1)) dist_and_segment.push([
                dist_tmp,
                segment_tmp.reverse()
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2point(arc1.start, arc2.start);
            dist_and_segment.push([
                dist_tmp,
                segment_tmp
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2point(arc1.start, arc2.end);
            dist_and_segment.push([
                dist_tmp,
                segment_tmp
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2point(arc1.end, arc2.start);
            dist_and_segment.push([
                dist_tmp,
                segment_tmp
            ]);
            [dist_tmp, segment_tmp] = $271a1c686af88dba$export$3081247862d57e3d.point2point(arc1.end, arc2.end);
            dist_and_segment.push([
                dist_tmp,
                segment_tmp
            ]);
            $271a1c686af88dba$export$3081247862d57e3d.sort(dist_and_segment);
            return dist_and_segment[0];
        }
    }
    /**
     * Calculate distance and shortest segment between point and polygon
     * @param point
     * @param polygon
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static point2polygon(point, polygon) {
        let min_dist_and_segment = [
            Number.POSITIVE_INFINITY,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
        ];
        for (let edge of polygon.edges){
            let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.point2edge(point, edge);
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_dist_and_segment[0])) min_dist_and_segment = [
                dist,
                shortest_segment
            ];
        }
        return min_dist_and_segment;
    }
    static shape2polygon(shape, polygon) {
        let min_dist_and_segment = [
            Number.POSITIVE_INFINITY,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
        ];
        for (let edge of polygon.edges){
            let [dist, shortest_segment] = shape.distanceTo(edge.shape);
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_dist_and_segment[0])) min_dist_and_segment = [
                dist,
                shortest_segment
            ];
        }
        return min_dist_and_segment;
    }
    /**
     * Calculate distance and shortest segment between two polygons
     * @param polygon1
     * @param polygon2
     * @returns {[number, Flatten.Segment]} - distance and shortest segment
     */ static polygon2polygon(polygon1, polygon2) {
        let min_dist_and_segment = [
            Number.POSITIVE_INFINITY,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
        ];
        for (let edge1 of polygon1.edges)for (let edge2 of polygon2.edges){
            let [dist, shortest_segment] = edge1.shape.distanceTo(edge2.shape);
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_dist_and_segment[0])) min_dist_and_segment = [
                dist,
                shortest_segment
            ];
        }
        return min_dist_and_segment;
    }
    /**
     * Returns [mindist, maxdist] array of squared minimal and maximal distance between boxes
     * Minimal distance by x is
     *    (box2.xmin - box1.xmax), if box1 is left to box2
     *    (box1.xmin - box2.xmax), if box2 is left to box1
     *    0,                       if box1 and box2 are intersected by x
     * Minimal distance by y is defined in the same way
     *
     * Maximal distance is estimated as a sum of squared dimensions of the merged box
     *
     * @param box1
     * @param box2
     * @returns {Number | Number} - minimal and maximal distance
     */ static box2box_minmax(box1, box2) {
        let mindist_x = Math.max(Math.max(box1.xmin - box2.xmax, 0), Math.max(box2.xmin - box1.xmax, 0));
        let mindist_y = Math.max(Math.max(box1.ymin - box2.ymax, 0), Math.max(box2.ymin - box1.ymax, 0));
        let mindist = mindist_x * mindist_x + mindist_y * mindist_y;
        let box = box1.merge(box2);
        let dx = box.xmax - box.xmin;
        let dy = box.ymax - box.ymin;
        let maxdist = dx * dx + dy * dy;
        return [
            mindist,
            maxdist
        ];
    }
    static minmax_tree_process_level(shape, level, min_stop, tree) {
        // Calculate minmax distance to each shape in current level
        // Insert result into the interval tree for further processing
        // update min_stop with maxdist, it will be the new stop distance
        let mindist, maxdist;
        for (let node of level){
            // [mindist, maxdist] = Distance.box2box_minmax(shape.box, node.max);
            // if (Flatten.Utils.GT(mindist, min_stop))
            //     continue;
            // Estimate min-max dist to the shape stored in the node.item, using node.item.key which is shape's box
            [mindist, maxdist] = $271a1c686af88dba$export$3081247862d57e3d.box2box_minmax(shape.box, node.item.key);
            if (node.item.value instanceof $271a1c686af88dba$export$2e2bcd8739ae039.Edge) tree.insert([
                mindist,
                maxdist
            ], node.item.value.shape);
            else tree.insert([
                mindist,
                maxdist
            ], node.item.value);
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(maxdist, min_stop)) min_stop = maxdist; // this will be the new distance estimation
        }
        if (level.length === 0) return min_stop;
        // Calculate new level from left and right children of the current
        let new_level_left = level.map((node)=>node.left.isNil() ? undefined : node.left).filter((node)=>node !== undefined);
        let new_level_right = level.map((node)=>node.right.isNil() ? undefined : node.right).filter((node)=>node !== undefined);
        // Merge left and right subtrees and leave only relevant subtrees
        let new_level = [
            ...new_level_left,
            ...new_level_right
        ].filter((node)=>{
            // Node subtree quick reject, node.max is a subtree box
            let [mindist, maxdist] = $271a1c686af88dba$export$3081247862d57e3d.box2box_minmax(shape.box, node.max);
            return $271a1c686af88dba$export$2e2bcd8739ae039.Utils.LE(mindist, min_stop);
        });
        min_stop = $271a1c686af88dba$export$3081247862d57e3d.minmax_tree_process_level(shape, new_level, min_stop, tree);
        return min_stop;
    }
    /**
     * Calculates sorted tree of [mindist, maxdist] intervals between query shape
     * and shapes of the planar set.
     * @param shape
     * @param set
     */ static minmax_tree(shape, set, min_stop) {
        let tree = new $271a1c686af88dba$var$IntervalTree();
        let level = [
            set.index.root
        ];
        let squared_min_stop = min_stop < Number.POSITIVE_INFINITY ? min_stop * min_stop : Number.POSITIVE_INFINITY;
        squared_min_stop = $271a1c686af88dba$export$3081247862d57e3d.minmax_tree_process_level(shape, level, squared_min_stop, tree);
        return tree;
    }
    static minmax_tree_calc_distance(shape, node, min_dist_and_segment) {
        let min_dist_and_segment_new, stop;
        if (node != null && !node.isNil()) {
            [min_dist_and_segment_new, stop] = $271a1c686af88dba$export$3081247862d57e3d.minmax_tree_calc_distance(shape, node.left, min_dist_and_segment);
            if (stop) return [
                min_dist_and_segment_new,
                stop
            ];
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(min_dist_and_segment_new[0], Math.sqrt(node.item.key.low))) return [
                min_dist_and_segment_new,
                true
            ]; // stop condition
            let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.distance(shape, node.item.value);
            // console.log(dist)
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_dist_and_segment_new[0])) min_dist_and_segment_new = [
                dist,
                shortest_segment
            ];
            [min_dist_and_segment_new, stop] = $271a1c686af88dba$export$3081247862d57e3d.minmax_tree_calc_distance(shape, node.right, min_dist_and_segment_new);
            return [
                min_dist_and_segment_new,
                stop
            ];
        }
        return [
            min_dist_and_segment,
            false
        ];
    }
    /**
     * Calculates distance between shape and Planar Set of shapes
     * @param shape
     * @param {PlanarSet} set
     * @param {Number} min_stop
     * @returns {*}
     */ static shape2planarSet(shape, set, min_stop = Number.POSITIVE_INFINITY) {
        let min_dist_and_segment = [
            min_stop,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
        ];
        let stop = false;
        if (set instanceof $271a1c686af88dba$export$2e2bcd8739ae039.PlanarSet) {
            let tree = $271a1c686af88dba$export$3081247862d57e3d.minmax_tree(shape, set, min_stop);
            [min_dist_and_segment, stop] = $271a1c686af88dba$export$3081247862d57e3d.minmax_tree_calc_distance(shape, tree.root, min_dist_and_segment);
        }
        return min_dist_and_segment;
    }
    static sort(dist_and_segment) {
        dist_and_segment.sort((d1, d2)=>{
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(d1[0], d2[0])) return -1;
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.GT(d1[0], d2[0])) return 1;
            return 0;
        });
    }
    static distance(shape1, shape2) {
        return shape1.distanceTo(shape2);
    }
    /**
     * Calculate distance and shortest segment any shape and multiline
     * @param shape
     * @param multiline
     * @returns {[number, Flatten.Segment]}
     */ static shape2multiline(shape, multiline) {
        let min_dist_and_segment = [
            Number.POSITIVE_INFINITY,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
        ];
        for (let edge of multiline){
            let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.distance(shape, edge.shape);
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_dist_and_segment[0])) min_dist_and_segment = [
                dist,
                shortest_segment
            ];
        }
        return min_dist_and_segment;
    }
    /**
     * Calculate distance and shortest segment between two multilines
     * @param multiline1
     * @param multiline2
     * @returns {[number, Flatten.Segment]}
     */ static multiline2multiline(multiline1, multiline2) {
        let min_dist_and_segment = [
            Number.POSITIVE_INFINITY,
            new $271a1c686af88dba$export$2e2bcd8739ae039.Segment()
        ];
        for (let edge1 of multiline1)for (let edge2 of multiline2){
            let [dist, shortest_segment] = $271a1c686af88dba$export$3081247862d57e3d.distance(edge1.shape, edge2.shape);
            if ($271a1c686af88dba$export$2e2bcd8739ae039.Utils.LT(dist, min_dist_and_segment[0])) min_dist_and_segment = [
                dist,
                shortest_segment
            ];
        }
        return min_dist_and_segment;
    }
}
$271a1c686af88dba$export$2e2bcd8739ae039.Distance = $271a1c686af88dba$export$3081247862d57e3d;
const { Multiline: $271a1c686af88dba$var$Multiline, Point: $271a1c686af88dba$var$Point$1, Segment: $271a1c686af88dba$var$Segment, Polygon: $271a1c686af88dba$var$Polygon } = $271a1c686af88dba$export$2e2bcd8739ae039;
// POINT (30 10)
// MULTIPOINT (10 40, 40 30, 20 20, 30 10)
// LINESTRING (30 10, 10 30, 40 40)
// MULTILINESTRING ((10 10, 20 20, 10 40), (40 40, 30 30, 40 20, 30 10))
// MULTILINESTRING ((8503.732 4424.547, 8963.747 3964.532), (8963.747 3964.532, 8707.468 3708.253), (8707.468 3708.253, 8247.454 4168.268), (8247.454 4168.268, 8503.732 4424.547))
// POLYGON ((35 10, 45 45, 15 40, 10 20, 35 10), (20 30, 35 35, 30 20, 20 30))
// MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), ((20 35, 10 30, 10 10, 30 5, 45 20, 20 35), (30 20, 20 15, 20 25, 30 20)))
// GEOMETRYCOLLECTION (POINT (0 0), LINESTRING (0 0, 1440 900), POLYGON ((0 0, 0 1024, 1024 1024, 1024 0, 0 0)))
// GEOMETRYCOLLECTION (POINT (40 10), LINESTRING (10 10, 20 20, 10 40), POLYGON ((40 40, 20 45, 45 30, 40 40)))
function $271a1c686af88dba$var$parseSinglePoint(pointStr) {
    return new $271a1c686af88dba$var$Point$1(pointStr.split(" ").map(Number));
}
function $271a1c686af88dba$var$parseMultiPoint(multipointStr) {
    return multipointStr.split(", ").map($271a1c686af88dba$var$parseSinglePoint);
}
function $271a1c686af88dba$var$parseLineString(lineStr) {
    const points = $271a1c686af88dba$var$parseMultiPoint(lineStr);
    let segments = [];
    for(let i = 0; i < points.length - 1; i++)segments.push(new $271a1c686af88dba$var$Segment(points[i], points[i + 1]));
    return new $271a1c686af88dba$var$Multiline(segments);
}
function $271a1c686af88dba$var$parseMultiLineString(multilineStr) {
    const lineStrings = multilineStr.replace(/\(\(/, "").replace(/\)\)$/, "").split("), (");
    return lineStrings.map($271a1c686af88dba$var$parseLineString);
}
function $271a1c686af88dba$var$parseSinglePolygon(polygonStr) {
    const facesStr = polygonStr.replace(/\(\(/, "").replace(/\)\)$/, "").split("), (");
    const polygon = new $271a1c686af88dba$var$Polygon();
    let orientation;
    facesStr.forEach((facesStr, idx)=>{
        let points = facesStr.split(", ").map((coordStr)=>{
            return new $271a1c686af88dba$var$Point$1(coordStr.split(" ").map(Number));
        });
        const face = polygon.addFace(points);
        if (idx === 0) orientation = face.orientation();
        else if (face.orientation() === orientation) face.reverse();
    });
    return polygon;
}
function $271a1c686af88dba$var$parseMutliPolygon(multiPolygonString) {
    // const polygonStrings = multiPolygonString.split('?')
    // Split the string by the delimiter ")), ((" which separates the polygons
    const polygonStrings = multiPolygonString.split(/\)\), \(\(/).map((polygon)=>"((" + polygon + "))");
    const polygons = polygonStrings.map($271a1c686af88dba$var$parseSinglePolygon);
    const polygon = new $271a1c686af88dba$var$Polygon();
    const faces = polygons.reduce((acc, polygon)=>[
            ...acc,
            ...polygon?.faces
        ], []);
    faces.forEach((face)=>polygon.addFace([
            ...face?.shapes
        ]));
    return polygon;
}
function $271a1c686af88dba$var$parsePolygon(wkt) {
    if (wkt.startsWith("POLYGON")) {
        const polygonStr = wkt.replace(/^POLYGON /, "");
        return $271a1c686af88dba$var$parseSinglePolygon(polygonStr);
    } else {
        // const multiPolygonString = wkt.replace(/^MULTIPOLYGON \(/, '').replace(/\)$/, '').replace(/\)\), \(\(/,'))?((')
        const multiPolygonString = wkt.replace(/^MULTIPOLYGON \(\(\((.*)\)\)\)$/, "$1");
        return $271a1c686af88dba$var$parseMutliPolygon(multiPolygonString);
    }
}
function $271a1c686af88dba$var$parseArrayOfPoints(str) {
    const arr = str.split("\n").map((x)=>x.match(/\(([^)]+)\)/)[1]);
    return arr.map($271a1c686af88dba$var$parseSinglePoint);
}
function $271a1c686af88dba$var$parseArrayOfLineStrings(str) {
    const arr = str.split("\n").map((x)=>x.match(/\(([^)]+)\)/)[1]);
    return arr.map($271a1c686af88dba$var$parseLineString).reduce((acc, x)=>[
            ...acc,
            ...x
        ], []);
}
/**
 * Convert WKT string to array of Flatten shapes.
 * @param str
 * @returns {Point | Point[] | Multiline | Multiline[] | Polygon | Shape[] | null}
 */ function $271a1c686af88dba$export$86c11aa368fb2b9f(str) {
    if (str.startsWith("POINT")) {
        const pointStr = str.replace(/^POINT \(/, "").replace(/\)$/, "");
        return $271a1c686af88dba$var$parseSinglePoint(pointStr);
    } else if (str.startsWith("MULTIPOINT")) {
        const multiPointStr = str.replace(/^MULTIPOINT \(/, "").replace(/\)$/, "");
        return $271a1c686af88dba$var$parseMultiPoint(multiPointStr);
    } else if (str.startsWith("LINESTRING")) {
        const lineStr = str.replace(/^LINESTRING \(/, "").replace(/\)$/, "");
        return $271a1c686af88dba$var$parseLineString(lineStr);
    } else if (str.startsWith("MULTILINESTRING")) {
        const multilineStr = str.replace(/^MULTILINESTRING /, "");
        return $271a1c686af88dba$var$parseMultiLineString(multilineStr);
    } else if (str.startsWith("POLYGON") || str.startsWith("MULTIPOLYGON")) return $271a1c686af88dba$var$parsePolygon(str);
    else if (str.startsWith("GEOMETRYCOLLECTION")) {
        // const regex = /(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION) \([^\)]+\)/g
        /* Explanation:
(?<type>POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON):
This named group will capture the geometry type. The type label helps with understanding the structure but
 is not necessary unless you process the matches programmatically and want easy access to the geometry type.
\( and \): Match the opening and closing parentheses.
(?:[^\(\)]|\([^\)]*\))*: A non-capturing group that allows for:
[^\(\)]: Matching any character except parentheses, handling simple geometries.
|\([^\)]*\): Handling nested parentheses for geometries like POLYGON and MULTILINESTRING.
* after the non-capturing group: Allows for repeating the pattern zero or more times to match all contents between the outermost parentheses. */ const regex = /(?<type>POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON) \((?:[^\(\)]|\([^\)]*\))*\)/g;
        const wktArray = str.match(regex);
        if (wktArray[0].startsWith("GEOMETRYCOLLECTION")) wktArray[0] = wktArray[0].replace("GEOMETRYCOLLECTION (", "");
        const flArray = wktArray.map($271a1c686af88dba$export$86c11aa368fb2b9f).map((x)=>x instanceof Array ? x : [
                x
            ]);
        return flArray.reduce((acc, x)=>[
                ...acc,
                ...x
            ], []);
    } else if ($271a1c686af88dba$var$isArrayOfPoints(str)) return $271a1c686af88dba$var$parseArrayOfPoints(str);
    else if ($271a1c686af88dba$var$isArrayOfLines(str)) return $271a1c686af88dba$var$parseArrayOfLineStrings(str);
    return [];
}
function $271a1c686af88dba$var$isArrayOfPoints(str) {
    return str.split("\n")?.every((str)=>str.includes("POINT"));
}
function $271a1c686af88dba$var$isArrayOfLines(str) {
    return str.split("\n")?.every((str)=>str.includes("LINESTRING"));
}
/**
 * Return true if given string starts with one of WKT tags and possibly contains WKT string,
 * @param str
 * @returns {boolean}
 */ function $271a1c686af88dba$export$20801799df1b655f(str) {
    return str.startsWith("POINT") || $271a1c686af88dba$var$isArrayOfPoints(str) || str.startsWith("LINESTRING") || $271a1c686af88dba$var$isArrayOfLines(str) || str.startsWith("MULTILINESTRING") || str.startsWith("POLYGON") || str.startsWith("MULTIPOINT") || str.startsWith("MULTIPOLYGON") || str.startsWith("GEOMETRYCOLLECTION");
}
$271a1c686af88dba$export$2e2bcd8739ae039.isWktString = $271a1c686af88dba$export$20801799df1b655f;
$271a1c686af88dba$export$2e2bcd8739ae039.parseWKT = $271a1c686af88dba$export$86c11aa368fb2b9f;
/**
 * Created by Alex Bol on 2/18/2017.
 */ $271a1c686af88dba$export$2e2bcd8739ae039.BooleanOperations = $271a1c686af88dba$export$7810ed04e2e13fba;
$271a1c686af88dba$export$2e2bcd8739ae039.Relations = $271a1c686af88dba$export$932c2897ef8e4e8e;


// import Flatten from 'https://unpkg.com/@flatten-js/core/dist/main.mjs';
const { point: $685d2651675ad770$var$point, Polygon: $685d2651675ad770$var$Polygon } = (0, $271a1c686af88dba$export$2e2bcd8739ae039);
const { subtract: $685d2651675ad770$var$subtract } = (0, $271a1c686af88dba$export$2e2bcd8739ae039).BooleanOperations;
function $685d2651675ad770$export$2e2bcd8739ae039(path0, path1, by_layer = true) {
    let layers = new Set();
    path0.sort((a, b)=>a.z - b.z);
    path1.sort((a, b)=>a.z - b.z);
    path0.forEach((point)=>layers.add(point.z));
    path1.forEach((point)=>layers.add(point.z));
    let newPath = [];
    for (let layer of layers){
        let layer_points0 = path0.filter((p)=>p.z == layer).map((p)=>$685d2651675ad770$var$point([
                p.x,
                p.y
            ]));
        let layer_points1 = path1.filter((p)=>p.z == layer).map((p)=>$685d2651675ad770$var$point([
                p.x,
                p.y
            ]));
        let polygon0 = new $685d2651675ad770$var$Polygon(layer_points0);
        let polygon1 = new $685d2651675ad770$var$Polygon(layer_points1);
        let thicknesses = new Map(); //store thickness in external data structure
        for(let i = 0; i < path0.length; i++)if (path0[i].z == layer) thicknesses.set([
            path0[i].x,
            path0[i].y
        ], path0[i].t);
        for(let i = 0; i < path1.length; i++)if (path1[i].z == layer) thicknesses.set([
            path1[i].x,
            path1[i].y
        ], path1[i].t);
        //to add: tolerance
        let combinedPolygon = $685d2651675ad770$var$subtract(polygon0, polygon1);
        let polygonSVG = combinedPolygon.svg(); //convert to svg to rely on flatten-js's even-odd algorithm
        const shapesString = polygonSVG.match(/(M[^M]+z)/g); //separate svg into just the section containing points
        let shapeidx = 0;
        for (let shape of shapesString){
            let pairs = shape.match(/L-?\d+(\.\d+)?,-?\d+(\.\d+)?/g); //get pairs of points (not starting with M)
            for (let pair of pairs){
                var thickness = thicknesses.has(pair.match(/-?\d+(\.\d+)?/g)); //todo: fix thickness (right now it's defaulting to "false" = 0)
                let [xNew, yNew] = pair.match(/-?\d+(\.\d+)?/g).map(parseFloat);
                const newPoint = {
                    x: xNew,
                    y: yNew,
                    z: layer,
                    t: thickness
                };
                newPath.push(newPoint);
            }
        }
    }
    return newPath;
}
window.difference = $685d2651675ad770$export$2e2bcd8739ae039;



// import Flatten from 'https://unpkg.com/@flatten-js/core/dist/main.mjs';
const { point: $d882048206233452$var$point, Polygon: $d882048206233452$var$Polygon } = (0, $271a1c686af88dba$export$2e2bcd8739ae039);
const { unify: $d882048206233452$var$unify } = (0, $271a1c686af88dba$export$2e2bcd8739ae039).BooleanOperations;
function $d882048206233452$export$2e2bcd8739ae039(path0, path1) {
    let layers = new Set();
    path0.sort((a, b)=>a.z - b.z);
    path1.sort((a, b)=>a.z - b.z);
    path0.forEach((point)=>layers.add(point.z));
    path1.forEach((point)=>layers.add(point.z));
    let newPath = [];
    for (let layer of layers){
        let layer_points0 = path0.filter((p)=>p.z == layer).map((p)=>$d882048206233452$var$point([
                p.x,
                p.y
            ]));
        let layer_points1 = path1.filter((p)=>p.z == layer).map((p)=>$d882048206233452$var$point([
                p.x,
                p.y
            ]));
        let polygon0 = new $d882048206233452$var$Polygon(layer_points0);
        let polygon1 = new $d882048206233452$var$Polygon(layer_points1);
        let thicknesses = new Map(); //store thickness in external data structure
        for(let i = 0; i < path0.length; i++)if (path0[i].z == layer) thicknesses.set([
            path0[i].x,
            path0[i].y
        ], path0[i].t);
        for(let i = 0; i < path1.length; i++)if (path1[i].z == layer) thicknesses.set([
            path1[i].x,
            path1[i].y
        ], path1[i].t);
        //to add: tolerance
        let combinedPolygon = $d882048206233452$var$unify(polygon0, polygon1);
        let polygonSVG = combinedPolygon.svg(); //convert to svg to rely on flatten-js's even-odd algorithm
        const shapesString = polygonSVG.match(/(M[^M]+z)/g); //separate svg into just the section containing points
        let shapeidx = 0;
        for (let shape of shapesString){
            let pairs = shape.match(/L-?\d+(\.\d+)?,-?\d+(\.\d+)?/g); //get pairs of points (not starting with M)
            for (let pair of pairs){
                var thickness = thicknesses.has(pair.match(/-?\d+(\.\d+)?/g)); //todo: fix thickness (right now it's defaulting to "false" = 0)
                let [xNew, yNew] = pair.match(/-?\d+(\.\d+)?/g).map(parseFloat);
                const newPoint = {
                    x: xNew,
                    y: yNew,
                    z: layer,
                    t: thickness
                };
                newPath.push(newPoint);
            }
        }
    }
    return newPath;
}
window.union = $d882048206233452$export$2e2bcd8739ae039;


async function $2935d9173ffd2f41$var$arrayToAudioBuffer(data, AudioContext) {
    try {
        const audioBuffer = await AudioContext.decodeAudioData(data);
        return audioBuffer;
    } catch (error) {
        console.error("Error decoding audio data:", error);
        throw error;
    }
}
function $2935d9173ffd2f41$export$2e2bcd8739ae039(filename, nbPoints = "default", offset = 0, heightRange = [
    -1,
    1
]) {
    let values = [];
    let waveFile = localStorage.getItem(filename); //returns base64
    if (waveFile === null) throw new Error(filename + " does not exist.");
    let binaryData = window.atob(waveFile.split("base64,")[1]); //remove metadata at start
    console.log(binaryData);
    console.log(binaryData.length);
    if (nbPoints == "default" || nbPoints > binaryData.length) nbPoints = binaryData.length;
    if (waveFile.includes("audio/midi;base64")) {
        let bytes = new Uint8Array(nbPoints);
        for(let i = 0; i < binaryData.length; i++)if (i % Math.floor(binaryData.length / nbPoints) == 0) bytes[i] = binaryData.charCodeAt(i);
        let nums = [];
        for(let i = 0; i < bytes.length; i++)nums.push(bytes[i] / (256 * heightRange[1]) + heightRange[0]);
        console.log(nums);
        return nums;
    // console.log(nums);
    }
    if (filename.split(".")[1] == "wav") {
        console.log(typeof binaryData);
        let step = binaryData.length / nbPoints;
        let arrayBuff = new Uint8Array(nbPoints);
        for(let i = 0; i < nbPoints; i++)arrayBuff[i] = binaryData.charCodeAt(i * step);
        let nums = [];
        for(let i = 0; i < arrayBuff.length; i++)nums.push(arrayBuff[i]);
        console.log(nums);
        return nums;
    // var audioContext = new window.AudioContext || window.webkitAudioContext;
    // var audioBuff = arrayToAudioBuffer(arrayBuff.buffer, audioContext);
    // const numChannels = audioBuff.numberOfChannels;
    // const sampleDist = binaryData.length / nbPoints;
    // var points = [];
    // for(let i = 0; i < nbPoints; i+=sampleDist){
    //     let pointHeight = 0;
    //     for(let j = 0; j < numChannels; j++){
    //         const rawData = audioBuff.getChannelData(j);
    //         pointHeight += Math.abs(rawData[i]);
    //     }
    //     points.push(pointHeight / sampleDist);
    //     console.log(points);
    // }
    // const norm = Math.max(Math.max(...points), 1);
    // return points.map(n => n / norm);
    // const wavesurfer = WaveSurfer.create({
    //     container: document.body,
    //     waveColor: 'rgb(0, 0, 0)',
    //     progressColor: 'RGB(100, 0, 100',
    //     renderFunction: (channels, ctx) => {
    //         const step = channels[0].length / nbPoints;
    //         for(let i = 0; i < nbPoints; i += step){
    //             const pointHeight = Math.floor(i);
    //             const value =
    //         }
    //     }
    // })
    // const scale = channels[0].length;
    // if(nbPoints == 'default'){ //nbPoints = how many points to return/samples for waveform
    //     nbPoints = binaryString.length;
    //  }
    //  let bytes = new Uint8Array(nbPoints);
    //  for(let i = 0; i < binaryString.length; i++){
    //      if(i % Math.floor(binaryString.length/nbPoints) == 0){ //push back nbPoints points to new array
    //          bytes[i] = binaryString.charCodeAt(i);        
    //      }
    //  }
    //  let nums = [];
    //  for(let i = 0; i < bytes.length; i++){
    //      nums.push(bytes[i] / (256*heightRange[1]) + heightRange[0]);
    //  }
    //  return nums;
    }
}
window.waveform = $2935d9173ffd2f41$export$2e2bcd8739ae039;




var $a067c65f26654429$exports = {};

$parcel$export($a067c65f26654429$exports, "base", () => $c45d59629d16dffd$export$e2253033e6e1df16);
$parcel$export($a067c65f26654429$exports, "addBase", () => $c45d59629d16dffd$export$65b4735759d794d4);
$parcel$export($a067c65f26654429$exports, "baseSpiral", () => $c45d59629d16dffd$export$c8860df64baac0eb);
$parcel$export($a067c65f26654429$exports, "baseFill", () => $c45d59629d16dffd$export$a3b482626e4c0b96);
$parcel$export($a067c65f26654429$exports, "generateGCode", () => $171d16fda35ebcb0$export$6a5b418875592792);
$parcel$export($a067c65f26654429$exports, "downloadGCode", () => $171d16fda35ebcb0$export$1d298176a7b26db);
$parcel$export($a067c65f26654429$exports, "getNumTubes", () => $171d16fda35ebcb0$export$2dad54cf1d4fdb11);
$parcel$export($a067c65f26654429$exports, "centerPrint", () => $14d375dbaed5c813$export$2e2bcd8739ae039);
$parcel$export($a067c65f26654429$exports, "toolpathUnitGenerator", () => $831dc3114bca2c7c$export$2e2bcd8739ae039);
$parcel$export($a067c65f26654429$exports, "spiralize", () => $fc30310f8636f11b$export$2e2bcd8739ae039);
$parcel$export($a067c65f26654429$exports, "showCurve", () => $6e41298316d419fa$export$2e2bcd8739ae039);

const { point: $c45d59629d16dffd$var$point, Polygon: $c45d59629d16dffd$var$Polygon, Segment: $c45d59629d16dffd$var$Segment } = (0, $271a1c686af88dba$export$2e2bcd8739ae039);
function $c45d59629d16dffd$export$c8860df64baac0eb(position, nbPointsInLayer, layerHeight, nozzle_diameter, radius, thickness = 0) {
    // Add archemedes spiral centered at the middle of the vessel, width of spiral based on nozzle_diameter
    let basePath = [];
    let height = layerHeight;
    let diameter = radius * 2;
    let layers = nbPointsInLayer * diameter / (nozzle_diameter * 4);
    let scale = nozzle_diameter / Math.PI;
    let bias = .0001;
    let step = 2 * Math.PI / nbPointsInLayer;
    let offset = nbPointsInLayer % 2 == 0 ? 0 : Math.PI / nbPointsInLayer;
    for(let angle = -layers * step; angle < layers * step; angle += step){
        let spiralRadius = scale * angle;
        if (angle < 0) {
            const newPoint = {
                x: bias + position[0] + spiralRadius * Math.cos(angle + Math.PI),
                y: bias + position[1] + spiralRadius * Math.sin(angle + Math.PI),
                z: height,
                t: thickness
            };
            basePath.push(newPoint);
        } else {
            const newPoint = {
                x: bias + position[0] + spiralRadius * Math.sin(angle - Math.PI / 2 - offset),
                y: bias + position[1] + spiralRadius * Math.cos(angle - Math.PI / 2 - offset),
                z: height,
                t: thickness
            };
            basePath.push(newPoint);
        }
    }
    return basePath;
}
function $c45d59629d16dffd$export$a3b482626e4c0b96(position, path, nbPointsInLayer, layerHeight, nozzle_diameter, radius, thickness = 0) {
    // Add lines filling in the base of the vessel
    let basePath = [];
    let height = layerHeight;
    for(let i = 0; i < nbPointsInLayer; i++)basePath.push($c45d59629d16dffd$var$point(path[i].x, path[i].y));
    let baseCircle = new $c45d59629d16dffd$var$Polygon(basePath);
    let diameter = radius * 2;
    let start = [
        position[0] - diameter,
        position[1] - diameter,
        layerHeight * 2
    ];
    let newPoints = [];
    for(let i = 0; i < diameter * 2; i += nozzle_diameter){
        let line = new $c45d59629d16dffd$var$Segment($c45d59629d16dffd$var$point([
            start[0] + i,
            start[1]
        ]), $c45d59629d16dffd$var$point([
            start[0] + i,
            start[1] + diameter * 2
        ]));
        let intersectionPoints = line.intersect(baseCircle).map((pt)=>[
                pt.x,
                pt.y
            ]).flat();
        if (intersectionPoints.length == 4) {
            const newPointBottom = {
                x: intersectionPoints[0],
                y: intersectionPoints[1],
                z: height,
                t: thickness
            };
            const newPointTop = {
                x: intersectionPoints[2],
                y: intersectionPoints[3],
                z: height,
                t: thickness
            };
            if (i % (2 * nozzle_diameter) == 0) newPoints.push(newPointBottom, newPointTop);
            else newPoints.push(newPointTop, newPointBottom);
        }
    }
    return newPoints;
}
function $c45d59629d16dffd$export$e2253033e6e1df16(position, path, nbPointsInLayer, layerHeight, nozzleDiameter, radius) {
    // Construct a base where the top layer is a spiral pattern and the bottom layer are lines running
    // across the base of the vessel. Pattern variation contributes to greater stability in the final print.
    let bottomBase = $c45d59629d16dffd$export$a3b482626e4c0b96(position, path, nbPointsInLayer, layerHeight, nozzleDiameter, radius);
    let topBase = $c45d59629d16dffd$export$c8860df64baac0eb(position, nbPointsInLayer, layerHeight * 2, nozzleDiameter, radius);
    let newPath = bottomBase.concat(topBase);
    return newPath;
}
function $c45d59629d16dffd$export$65b4735759d794d4(b, path) {
    return b.concat(path);
}
window.baseSpiral = $c45d59629d16dffd$export$c8860df64baac0eb;
window.baseFill = $c45d59629d16dffd$export$a3b482626e4c0b96;
window.base = $c45d59629d16dffd$export$e2253033e6e1df16;
window.addBase = $c45d59629d16dffd$export$65b4735759d794d4;


// Helper functions for GCodeGenerator
function $171d16fda35ebcb0$var$extrude(nozzleDiameter, layerHeight, segmentLen, thicknesses) {
    let points = [];
    let extrusionMultiplier = (nozzleDiameter / 1.91) ** 2; //extrusion multiplier for correct filament thickness
    let totalExtruded = 0;
    points.push(0);
    for(var i = 0; i < segmentLen.length; i++){
        var newPoint = segmentLen[i] * layerHeight / nozzleDiameter * (4 / Math.PI + layerHeight / nozzleDiameter);
        var pointThickness = 1 + .1 * thicknesses[i]; //range between 90% and 110% of total thickness
        points.push(((newPoint + totalExtruded) * extrusionMultiplier * pointThickness).toFixed(3));
        totalExtruded += newPoint;
    }
    return points;
}
let $171d16fda35ebcb0$var$round2pt = (value)=>Math.floor(value * 100) / 100.0;
let $171d16fda35ebcb0$var$euclideanDist = (p1, p2)=>Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);
function $171d16fda35ebcb0$export$6a5b418875592792(path, nozzleDiameter, printSpeed) {
    if (Array.isArray(path) && path.length > 0) {
        let layerHeight = path[0].z;
        printSpeed = Math.floor(printSpeed * 60);
        let segmentLen = [];
        for(var i = 0; i < path.length - 1; i++)segmentLen.push($171d16fda35ebcb0$var$euclideanDist(path[i], path[i + 1]));
        let thicknesses = path.map((point)=>point.z);
        // let thicknesses = path.filter((_, index) => (index + 1) % 4 === 0);
        let extr = $171d16fda35ebcb0$var$extrude(nozzleDiameter, layerHeight, segmentLen, thicknesses);
        let startGcodePrefix = ";;; START GCODE ;;;\nM82 ;absolute extrusion mode\nG28 ;Home\nG1 X207.5 Y202.5 Z20 F10000 ;Move X and Y to center, Z to 20mm high\nG1 E2000 F20000 ; !!Prime Extruder\nG92 E0\n;;; ======\n";
        let endGcodePostfix = ";;; === END GCODE ===\nM83 ;Set to Relative Extrusion Mode\nG28 Z ;Home Z\n; === DEPRESSURIZE ===\nG91\nG91\nG1 E-200 F4000\nG90\nG90\n";
        let gcode = startGcodePrefix;
        for(var i = 1; i < path.length; i++){
            x = $171d16fda35ebcb0$var$round2pt(path[i].x);
            y = $171d16fda35ebcb0$var$round2pt(path[i].y);
            z = $171d16fda35ebcb0$var$round2pt(path[i].z);
            if (i == 0) gcode += "G1 F10000 X" + x + " Y" + y + " Z" + z + " E" + extr[i] + "\n";
            else gcode += "G1 F" + printSpeed + " X" + x + " Y" + y + " Z" + z + " E" + extr[i] + "\n";
        }
        gcode += endGcodePostfix;
        return gcode;
    }
    var error_str = "Cannot call generateGCode on an empty path.";
    throw new Error(error_str);
}
function $171d16fda35ebcb0$export$1d298176a7b26db(gcode_string, fileName = "COILCAM_GCODE") {
    const blob = new Blob([
        gcode_string
    ], {
        type: "text/plain"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
function $171d16fda35ebcb0$export$2dad54cf1d4fdb11(path, nozzleDiameter, layerHeight) {
    let segmentLen = [];
    for(var i = 1; i < len(path); i++)segmentLen.push($171d16fda35ebcb0$var$euclideanDist(path[i], path[i - 1]));
    let extrusions = $171d16fda35ebcb0$var$extrude(nozzleDiameter, layerHeight, segmentLen);
    let totalExtrusion = extrusions[extrusions.length - 1];
    return (nozzleDiameter / 2 ^ 2 * totalExtrusion) / 45 / 430; //multiplier from original gcode
}
window.downloadGCode = $171d16fda35ebcb0$export$1d298176a7b26db;
window.generateGCode = $171d16fda35ebcb0$export$6a5b418875592792;
window.getNumTubes = $171d16fda35ebcb0$export$2dad54cf1d4fdb11;


function $14d375dbaed5c813$export$2e2bcd8739ae039(path, position, bedDimensions, layerHeight) {
    if (Array.isArray(path) && path.length > 0) {
        let bedXOffset = bedDimensions[0] / 2 - position[0];
        let bedYOffset = bedDimensions[1] / 2 - position[1];
        let bedZOffset = layerHeight - path[0].z;
        for(var i = 0; i < path.length; i++){
            path[i].x += bedXOffset;
            path[i].y += bedYOffset;
            path[i].z += bedZOffset;
        }
        return path;
    }
    var error_str = "Cannot call centerPrint on an empty path.";
    throw new Error(error_str);
}
window.centerPrint = $14d375dbaed5c813$export$2e2bcd8739ae039;


function $831dc3114bca2c7c$var$setSingleParameter(input, parameter_name, nbLayers, nbPointsInLayer) {
    let parameterLength = nbLayers;
    let useNbPointsInLayer = parameter_name == "radiusShapingParameter" || parameter_name == "thicknessShapingParameter";
    if (useNbPointsInLayer) parameterLength *= nbPointsInLayer;
    if (!input?.length) {
        if (parameter_name == "scalingRadiusShapingParameter") return new Array(parameterLength).fill(1);
        return new Array(parameterLength).fill(0);
    } else if (!Array.isArray(input)) return new Array(parameterLength).fill(input);
    else if (input.length == parameterLength) return input;
    else if (useNbPointsInLayer) {
        if (input.length == nbPointsInLayer) return new Array(nbPointsInLayer * nbLayers).fill(input).flat();
        var error_str = "Length of values for parameter " + parameter_name + " is currently " + input.length + ", must be 0, 1, equal to nbPointsInLayer: " + nbPointsInLayer + " or nbPointsInLayer*nbLayers: " + nbPointsInLayer * nbLayers;
        throw new Error(error_str);
    }
    var error_str = "Length of values for parameter " + parameter_name + " is currently " + input.length + ", must be 0, 1 or equal to nbLayers: " + nbLayers;
    throw new Error(error_str);
}
function $831dc3114bca2c7c$var$setParameter(input, parameter_name, nbLayers, nbPointsInLayer) {
    if (parameter_name == "radiusShapingParameter") {
        console.log("setting rad2d");
        let radsp = [
            [],
            []
        ];
        if (input?.length && Array.isArray(input[0])) {
            radsp[0] = $831dc3114bca2c7c$var$setSingleParameter(input[0], parameter_name, nbLayers, nbPointsInLayer);
            radsp[1] = input[1];
        } else {
            radsp[0] = $831dc3114bca2c7c$var$setSingleParameter(input, parameter_name, nbLayers, nbPointsInLayer);
            radsp[1] = new Array(nbPointsInLayer).fill(0);
        }
        return radsp;
    }
    if (parameter_name == "translateShapingParameter") {
        let tsp = [
            [],
            []
        ];
        if (input == null || input == []) return new Array(2).fill(new Array(nbLayers).fill(0));
        tsp[0] = $831dc3114bca2c7c$var$setSingleParameter(input[0], parameter_name, nbLayers, nbPointsInLayer);
        tsp[1] = $831dc3114bca2c7c$var$setSingleParameter(input[1], parameter_name, nbLayers, nbPointsInLayer);
        return tsp;
    }
    return $831dc3114bca2c7c$var$setSingleParameter(input, parameter_name, nbLayers, nbPointsInLayer);
}
function $831dc3114bca2c7c$export$2e2bcd8739ae039(position, initialRadius, layerHeight, nbLayers, nbPointsInLayer, radiusShapingParameter = [], scaleShapingParameter = [], scalingRadiusShapingParameter = [], translateShapingParameter = [], rotateShapingParameter = [], thicknessShapingParameter = []) {
    let path = [];
    let radsp = $831dc3114bca2c7c$var$setParameter(radiusShapingParameter, "radiusShapingParameter", nbLayers, nbPointsInLayer);
    let ssp = $831dc3114bca2c7c$var$setParameter(scaleShapingParameter, "scaleShapingParameter", nbLayers, nbPointsInLayer);
    let rsp = $831dc3114bca2c7c$var$setParameter(rotateShapingParameter, "rotateShapingParameter", nbLayers, nbPointsInLayer);
    let tsp = $831dc3114bca2c7c$var$setParameter(translateShapingParameter, "translateShapingParameter", nbLayers, nbPointsInLayer);
    let srsp = $831dc3114bca2c7c$var$setParameter(scalingRadiusShapingParameter, "scalingRadiusShapingParameter", nbLayers, nbPointsInLayer);
    let thsp = $831dc3114bca2c7c$var$setParameter(thicknessShapingParameter, "thicknessShapingParameter", nbLayers, nbPointsInLayer);
    console.log("RADSP", radsp.length);
    var ctr = 0;
    for(let j = 0; j < nbLayers; j++)for(let i = 0; i < nbPointsInLayer; i++){
        let angle = 2 * i * Math.PI / nbPointsInLayer;
        const newPoint = {
            x: position[0] + (initialRadius + srsp[j] * radsp[0][ctr] + ssp[j]) * Math.cos(angle + radsp[1][i] + rsp[j] * Math.PI / 180) + tsp[0][j],
            y: position[1] + (initialRadius + srsp[j] * radsp[0][ctr] + ssp[j]) * Math.sin(angle + radsp[1][i] + rsp[j] * Math.PI / 180) + tsp[1][j],
            z: position[2] + layerHeight * j,
            t: thsp[ctr]
        };
        path.push(newPoint);
        ctr++;
    }
    return path;
}
window.toolpathUnitGenerator = $831dc3114bca2c7c$export$2e2bcd8739ae039;


function $fc30310f8636f11b$export$2e2bcd8739ae039(path, layerHeight) {
    if (Array.isArray(path) && path.length > 0) {
        var nbPointsInLayer = [];
        var currHeight = layerHeight;
        var ctr = 0;
        // Points per layer can vary because of union/difference operators - calculate nbPointsInLayer per layer
        for(let i = 0; i < path.length; i++){
            if (path[i].z > currHeight) {
                currHeight = path[i].z;
                nbPointsInLayer.push(ctr);
                ctr = 0;
            }
            ctr++;
        }
        nbPointsInLayer.push(ctr);
        var nPointsIterated = 0;
        var points = path;
        for(let i = 0; i < nbPointsInLayer.length; i++){
            var ratio = layerHeight / nbPointsInLayer[i];
            for(let j = 0; j < nbPointsInLayer[i]; j++)points[nPointsIterated + j].z += (j + 1) * ratio;
            nPointsIterated += nbPointsInLayer[i];
        }
        return points;
    }
}
window.spiralize = $fc30310f8636f11b$export$2e2bcd8739ae039;


function $6e41298316d419fa$export$2e2bcd8739ae039(curvePath, isVertical, position, initialRadius, layerHeight, nbLayers, nbPointsInLayer) {
    let path = [];
    if (isVertical) for(let i = 0; i < nbLayers; i++)path.push(position[0] + curvePath[i], position[1], position[2] + layerHeight * i, 0);
    else {
        let normterm = Math.max(...curvePath); //keep size manageable compared to radius
        console.log(normterm);
        for(let i = 0; i < nbPointsInLayer; i++){
            let angle = 2 * i * Math.PI / nbPointsInLayer;
            path.push(position[0] + 2 * curvePath[i] * initialRadius / normterm * Math.cos(angle)); //check
            path.push(position[1] + 2 * curvePath[i] * initialRadius / normterm * Math.sin(angle));
            path.push(0, 0);
        }
    }
    return path;
}
window.showCurve = $6e41298316d419fa$export$2e2bcd8739ae039;




 // Notes: any .js files that only export a single function need to export 
 // that function as "export default" for "> npm run build" to execute properly
 // Run "> npm run build" (then update the version number), then "npm publish" every time a change is made!
 // Also include window.function = function for all exported functions - they must be in global scope to call them in codemirror


//# sourceMappingURL=module.js.map
