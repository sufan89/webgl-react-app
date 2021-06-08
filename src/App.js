import React from "react";
import "./App.css";
import Layout from "./layout/layout";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import SimplePoint from "./demo/drawPoint/simplePoint";
import { Button } from "antd";

function App() {
  return <Layout />;
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Button type="primary">查询</Button>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
export default App;
