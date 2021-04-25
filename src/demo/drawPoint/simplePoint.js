import React from "react";
import curvegl from "../../curvegl";
// import fragementShader from "raw-loader!glslify-loader!./shaders/point.frage.glsl";
// import vertextShader from "raw-loader!glslify-loader!./shaders/point.vert.glsl";
var fragementShader = require("./shaders/point.frage.glsl");
var vertextShader = require("./shaders/point.vert.glsl");
var glsl = require("glslify");
// import { file } from "glslify";
class SimplePoint extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const gl = curvegl.setupWebGL("curvegl");
    console.log(glsl);
    // console.log(fragementShader, vertextShader, "1212");
    // let vertextShader = glsl("file", "./shaders/point.vert.glsl");
    // let vertextShader = require("./shaders/point.vert.glsl");
    // let fragementShader = glsl("file", "./shaders/point.frage.glsl");
    console.log(fragementShader, "fragementShader");
    // let frag = require(fragementShader);
    // console.log(frag, "frag");
    let xr = new XMLHttpRequest();
    xr.open("GET", fragementShader, true);
    xr.send(null);

    curvegl.initShaders(gl, vertextShader, fragementShader);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  }

  render() {
    return <div id="curvegl" style={{ width: "400px", height: "400px" }}></div>;
  }
}
export default SimplePoint;
