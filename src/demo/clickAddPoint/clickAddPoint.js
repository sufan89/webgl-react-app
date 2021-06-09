import React from "react";
import curvegl from "../../curvegl";
import fragementShader from "./shaders/clickAddPoint.frage.glsl";
import vertexShader from "./shaders/clickAddPoint.vert.glsl";
class ClickAddPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gl: null, glNode: null };
    this.a_Position = null;
    this.g_points = [];
  }
  curveglClick = (ev) => {
    let x = ev.clientX;
    let y = ev.clientY;
    let rect = ev.target.getBoundingClientRect();
    // 计算点击后的画布坐标
    x =
      (x - rect.left - this.state.glNode.width / 2) /
      (this.state.glNode.width / 2);
    y =
      (this.state.glNode.height / 2 - (y - rect.top)) /
      (this.state.glNode.height / 2);
    this.g_points.push(x);
    this.g_points.push(y);

    this.state.gl.clear(this.state.gl.COLOR_BUFFER_BIT);

    let len = this.g_points.length;
    for (let i = 0; i < len; i += 2) {
      this.state.gl.vertexAttrib3f(
        this.a_Position,
        this.g_points[i],
        this.g_points[i + 1],
        0.0
      );
      this.state.gl.drawArrays(this.state.gl.POINTS, 0, 1);
    }
  };
  componentDidMount() {
    const { gl, glNode } = curvegl.setupWebGL("clickGl");
    if (gl) {
      // 初始化成功
      // 添加canvas事件
      glNode.onmousedown = this.curveglClick;
      this.setState({ gl, glNode });
      curvegl.initShaders(gl, vertexShader, fragementShader);
      this.a_Position = gl.getAttribLocation(gl.program, "a_Position");
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }
  render() {
    return <div id="clickGl" style={{ width: "400px", height: "400px" }}></div>;
  }
}
export default ClickAddPoint;
