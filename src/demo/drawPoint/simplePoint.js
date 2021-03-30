import React from "react";
import curvegl from "../../curvegl";
import fragementShader from "./shaders/point.frage";
import vertextShader from "./shaders/point.vert";
class SimplePoint extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const gl = curvegl.setupWebGL("curvegl");
    // console.log(fragementShader, vertextShader, "1212");
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
