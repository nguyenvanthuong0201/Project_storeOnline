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
  const theme = useSelector((state) => state.reDarkMode);
  const locale = useSelector((state) => state.reLocale);
  const { collapsed } = props;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme={theme.theme}>
      {/* <div className="logo" theme={theme.theme} /> */}
      <Menu
        theme={theme.theme}
        mode="inline"
        defaultSelectedKeys={[theme.current]}
        mode="inline"
      >
        <div className="logo_logoContent">
          <CusIcon />
          <div className="logo_logoIconTitle">
            {collapsed ? "" : "ChinChan"}
          </div>
        </div>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          <Link to="/">
            {locale.locale === "vi" ? "Thống kê" : "Statistic"}
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>
          <Link to="/customer">
            {locale.locale === "vi" ? "Khách hàng" : "Customer"}
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SkinOutlined />}>
          <Link to="/product">
            {locale.locale === "vi" ? "Sản phẩm" : "Product"}
          </Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<InboxOutlined />}>
          <Link to="/cart">{locale.locale === "vi" ? "Hóa đơn" : "Bill"}</Link>
        </Menu.Item>
        <SubMenu
          key="sub6"
          icon={<UserOutlined />}
          title={locale.locale === "vi" ? "Quản lý" : "Admin"}
        >
          <Menu.Item key="7">
            <Link to="/profile">
              {locale.locale === "vi" ? "Hồ sơ " : "Profile"}
            </Link>
          </Menu.Item>
          <Menu.Item key="8">Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default CptSiderbar;
