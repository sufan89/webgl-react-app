import { Layout, Menu } from "antd";
import React from "react";
import routers from "../router/index ";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class GlLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const menus = routers.map((subMenu, index) => {
      if (subMenu.routers.length > 0) {
        const subMenuItem = subMenu.routers.map((subMenuItem, itemIndex) => {
          return (
            <Menu.Item key={itemIndex.toString()}>
              {subMenuItem.name}
              <Link to={subMenuItem.path}></Link>
            </Menu.Item>
          );
        });
        return (
          <SubMenu key={index.toString()} title={subMenu.name}>
            {subMenuItem}
          </SubMenu>
        );
      } else {
        return null;
      }
    });
    const routes = routers.map((route, index) => {
      if (route.routers.length) {
        return route.routers.map((item, routeIndex) => {
          return (
            <Route
              key={index.toString() + routeIndex.toString()}
              component={item.component}
              path={item.path}
            ></Route>
          );
        });
      } else {
        return null;
      }
    });
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
              {menus}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 10, minHeight: "100vh" }}
              >
                {routes}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default GlLayout;
