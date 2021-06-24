import React from "react";
import curvegl from "../../curvegl";
import fshader from "./shaders/fshader.glsl";
import vshader from "./shaders/vshader.glsl";
class drawMultiPoint extends React.Component {
  constructor(props) {
    super(props);
    this.gl = null;
    this.glNode = null;
  }
  initVertexBuffers = (gl) => {
    const vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
    const n = 3;
    let vertextBuffer = gl.createBuffer();
    if (!vertextBuffer) {
      console.log("failed to create the buffer object");
      return -1;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let a_Position = gl.getAttribLocation(gl.program, "a_Position");
    if (a_Position < 0) {
      console.log("Failed to get the storage location of a_Position");
      return -1;
    }
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return n;
  };
  componentDidMount() {
    const { gl, glNode } = curvegl.setupWebGL("curvegl");
    this.gl = gl;
    this.glNode = glNode;
    curvegl.initShaders(this.gl, vshader, fshader);
    const n = this.initVertexBuffers(this.gl);
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.drawArrays(this.gl.POINTS, 0, n);
  }
  render() {
    return <div id="curvegl" style={{ width: "400px", height: "400px" }}></div>;
  }
}
export default drawMultiPoint;
