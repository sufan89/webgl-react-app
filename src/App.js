import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SimplePoint from "./demo/drawPoint/simplePoint";
import { Button } from "antd";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/simplePoint">simplePoint</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/simplePoint">
            <SimplePoint></SimplePoint>
          </Route>
        </Switch>
      </div>
    </Router>
  );
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
