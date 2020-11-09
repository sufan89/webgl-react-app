import React from "react";
import curvegl from "../../curvegl";
class SimplePoint extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    curvegl.setupWebGL("curvegl");
  }
  render() {
    return <div id="curvegl" style={{ width: "400px", height: "400px" }}></div>;
  }
}
export default SimplePoint;
