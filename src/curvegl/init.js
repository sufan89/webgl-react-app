/**
 * 初始化webgl
 */
const setupWebGL = (elName, opt_attribs) => {
  if (elName === "") {
    return null;
  }
  let elNode = document.getElementById(elName);
  if (!elNode) {
    console.log("Can`t find node");
    return null;
  }
  let canvasNode = document.createElement("canvas");
  elNode.appendChild(canvasNode);
  canvasNode.style.width = elNode.style.width;
  canvasNode.style.height = elNode.style.height;
  let context = create3DContext(canvasNode, opt_attribs);
  return context;
};
/**
 * create webgl context
 * @param canvas node
 * @param init opt
 */
const create3DContext = (canvas, opt_attribs) => {
  let names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  let context = null;
  for (let ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {}
    if (context) {
      break;
    }
  }
  return context;
};
/**
 * init shaders
 * @param webgl context
 * @param vshader a vertex shader program (string)
 * @param hShader
 * @returns true, if the program object was created and successfully made current
 */
const initShaders = (gl, vShader, fShader) => {
  let program = createProgram(gl, vShader, fShader);
  if (!program) {
    console.log("Failed to create program");
    return false;
  }
  gl.useProgram(program);
  gl.program = program;
};
/**
 * create programs
 * @param webgl context
 * @param vshader a vertex shader program
 * @param vshader
 * @returns created webgl program
 */
const createProgram = (gl, vshader, fshader) => {
  let vertextShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  let fragementShader = loadShader(gl, gl.FRAGEMENT_SHADER, fshader);
  if (!vertextShader || !fragementShader) {
    return null;
  }
  let program = gl.createProgram();
  if (!program) {
    return null;
  }
  gl.attachShader(program, vertextShader);
  gl.attachShader(program, fragementShader);
  gl.linkProgram(program);
  let linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    let error = gl.getProgramInfoLog(program);
    console.log("Failed to link program:" + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragementShader);
    gl.deleteShader(vertextShader);
    return null;
  }
  return program;
};
/**
 * create a shader object
 * @param {*} gl  gl context
 * @param {*} type
 * @param {*} source
 */
const loadShader = (gl, type, source) => {
  let shader = gl.createShader(type);
  if (shader === null) {
    console.log("unable to create shader");
    return null;
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    let error = gl.getShaderInfoLog(shader);
    console.log("Failed to compile shader:" + error);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

export { setupWebGL, initShaders };
