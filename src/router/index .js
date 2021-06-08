import simplePoint from "../demo/drawPoint/simplePoint";
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
    ],
  },
];
export default routers;
