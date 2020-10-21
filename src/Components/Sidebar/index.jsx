import React, { useState } from "react";
import "./Sidebar.css";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TeamOutlined,
  LineChartOutlined,
  SkinOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Layout, Table, Menu, Breadcrumb, Divider } from "antd";
import CusIcon from "../../Customs/CusIcon";
import { useSelector } from "react-redux";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function CptSiderbar(props) {
  const { collapsed } = props;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
      {/* <div className="logo" theme={theme.theme} /> */}
      <Menu mode="inline" theme="dark">
        <div className="logo_logoContent">
          <CusIcon />
          <div className="logo_logoIconTitle">
            {collapsed ? "" : "ChinChan"}
          </div>
        </div>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          <Link to="/">Statistic</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>
          <Link to="/customer">Customer</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SkinOutlined />}>
          <Link to="/product">Product</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<InboxOutlined />}>
          <Link to="/cart">Bill</Link>
        </Menu.Item>
        <SubMenu key="sub6" icon={<UserOutlined />} title="Admin">
          <Menu.Item key="7">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/profile">Employee</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default CptSiderbar;
