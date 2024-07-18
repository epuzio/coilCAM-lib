import * as functions1D from './coilCAM/function-operators/1D-functions/index.js';
import * as functions2D from './coilCAM/function-operators/2D-functions/index.js';
import * as complexFunctions from './coilCAM/function-operators/complex-functions/index.js';
import * as setup from './coilCAM/setup/index.js';

export {
    functions1D,
    functions2D,
    complexFunctions,
    setup
};

// note: any .js files that only export a single function need to export 
// that function as "export default" for "> npm run build" to execute properly
// Run "> npm run build" (then update the version number), then "npm publish" every time a change is made!