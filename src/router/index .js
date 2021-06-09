import simplePoint from "../demo/drawPoint/simplePoint";
import clickAddPoint from "../demo/clickAddPoint/clickAddPoint";
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
    ],
  },
];
export default routers;
