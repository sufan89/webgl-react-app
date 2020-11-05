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
  canvasNode.width = elNode.width;
  canvasNode.height = elNode.height;
  elNode.appendChild(canvasNode);
  let context = create3DContext(canvasNode, opt_attribs);
  return context;
};
/**
 * create webgl context
 * @param canvas Elment
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
export { setupWebGL };
