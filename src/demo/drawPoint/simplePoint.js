import React from "react";
import curvegl from "../../curvegl";
import fragementShader from "./shaders/point.frage.glsl";
import vertextShader from "./shaders/point.vert.glsl";
class SimplePoint extends React.Component {
  componentDidMount() {
    const gl = curvegl.setupWebGL("curvegl");
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
