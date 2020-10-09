import { ConfigProvider, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CptFooter from "./Components/Footer/index";
import CptHeader from "./Components/Header";
import CptSiderbar from "./Components/Sidebar";
import routes from "./routers/index";
import ConHeader from "./Containers/ConHeader";

const { Content } = Layout;

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

  const handleAddFormOnFinish = (data) => {
    setValues([
      ...values,
      {
        key: values.length + 1,
        ...data, /// tự hiểu là 3 thuộc tính còn lại
      },
    ]);
    setShowDrawer(false);
  };

  const handleOnFinishFailed = () => {
    setErrorInfo(errorInfo);
  };
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState({
    theme: "dark",
    current: "2",
  });

  /// Router trang
  const showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path}>
            {route.main}
          </Route>
        );
      });
    }
    return result;
  };

  return (
    <Router>
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          {/* Start Siderbar */}
          <CptSiderbar collapsed={collapsed} theme={theme} />
          <Layout className="site-layout">
            <ConHeader collapsed={collapsed} onCollapse={onCollapse} />

            {/* End Header */}

            {/* Start Content */}
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {/* this is content nè  */}
              <Switch>{showContent(routes)}</Switch>
            </Content>
            {/* End Content */}
            {/* Start Footer */}
            <CptFooter />
            {/* End Footer */}
          </Layout>
        </Layout>
      </Fragment>
    </Router>
  );
}

export default App;
