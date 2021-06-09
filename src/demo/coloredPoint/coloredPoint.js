import React from "react";
import curvegl from "../../curvegl";
import vertShader from "./shaders/vert.glsl";
import frageShader from "./shaders/frage.glsl";
class coloredPoint extends React.Component {
  constructor(props) {
    super(props);
    this.gl = null;
    this.glNode = null;
    this.a_Position = null;
    this.u_FragColor = null;
    this.g_points = [];
    this.g_colors = [];
  }
  /**
   * 画布点击事件
   */
  curveglClick = (ev) => {
    let x = ev.clientX;
    let y = ev.clientY;
    let rect = ev.target.getBoundingClientRect();
    x = (x - rect.left - this.glNode.width / 2) / (this.glNode.width / 2);
    y = (this.glNode.height / 2 - (y - rect.top)) / (this.glNode.height / 2);
    this.g_points.push([x, y]);
    if (x >= 0.0 && y >= 0.0) {
      this.g_colors.push([1.0, 0.0, 0.0, 1.0]);
    } else if (x < 0.0 && y < 0.0) {
      this.g_colors.push([0.0, 1.0, 0.0, 1.0]);
    } else {
      this.g_colors.push([1.0, 1.0, 1.0, 1.0]);
    }
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    for (let i = 0; i < this.g_points.length; i++) {
      let xy = this.g_points[i];
      let rgba = this.g_colors[i];
      this.gl.vertexAttrib3f(this.a_Position, xy[0], xy[1], 0.0);
      this.gl.uniform4f(this.u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
      this.gl.drawArrays(this.gl.POINTS, 0, 1);
    }
  };
  componentDidMount() {
    const { gl, glNode } = curvegl.setupWebGL("clickGl");
    if (gl) {
      this.gl = gl;
      this.glNode = glNode;
      curvegl.initShaders(gl, vertShader, frageShader);
      this.a_Position = this.gl.getAttribLocation(
        this.gl.program,
        "a_Position"
      );
      this.u_FragColor = this.gl.getUniformLocation(
        this.gl.program,
        "u_FragColor"
      );
      this.glNode.onmousedown = this.curveglClick;
      this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
  }
  render() {
    return <div id="clickGl" style={{ width: "400px", height: "400px" }}></div>;
  }
}
export default coloredPoint;
