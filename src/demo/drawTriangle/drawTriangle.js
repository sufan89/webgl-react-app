import React from "react";
import curvegl from "../../curvegl";
import fragementShader from "./shaders/frage.glsl";
import vertextShader from "./shaders/vert.glsl";
class drawTriangle extends React.Component {
  constructor(props) {
    super(props);
    this.gl = null;
    this.glNode = null;
    this.a_Position = null;
  }
  initVertexBuffers = () => {
    let vertices = new Float32Array([0, 0.5, -0.5, -0.5, 0.5, -0.5]);
    let n = 3;
    let vertexBuffer = this.gl.createBuffer();
    if (!vertexBuffer) {
      console.log("Failed to create the buffer object");
      return -1;
    }
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);
    this.a_Position = this.gl.getAttribLocation(this.gl.program, "a_Position");
    if (this.a_Position < 0) {
      console.log("Failed to get the storage location of a_Position");
      return -1;
    }
    this.gl.vertexAttribPointer(this.a_Position, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.a_Position);
    return n;
  };
  componentDidMount() {
    const { gl, glNode } = curvegl.setupWebGL("curvegl");
    curvegl.initShaders(gl, vertextShader, fragementShader);
    this.gl = gl;
    this.glNode = glNode;
    let n = this.initVertexBuffers();
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    if (n > 0) {
      this.gl.drawArrays(this.gl.TRIANGLES, 0, n);
    }
  }
  render() {
    return <div id="curvegl" style={{ width: "400px", height: "400px" }}></div>;
  }
}
export default drawTriangle;
