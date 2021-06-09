import simplePoint from "../demo/drawPoint/simplePoint";
import clickAddPoint from "../demo/clickAddPoint/clickAddPoint";
import coloredPoint from "../demo/coloredPoint/coloredPoint";
import drawTriangle from "../demo/drawTriangle/drawTriangle";
const routers = [
  {
    path: "/simple",
    name: "简单图形",
    routers: [
      {
        name: "简单点",
        path: "/simplePoint",
        component: simplePoint,
      },
      {
        name: "点击绘制点",
        path: "/clickAddPoint",
        component: clickAddPoint,
      },
      {
        name: "点击绘制多颜色点",
        path: "/coloredPoint",
        component: coloredPoint,
      },
      {
        name: "绘制简单三角形",
        path: "/drawTriangle",
        component: drawTriangle,
      },
    ],
  },
];
export default routers;
