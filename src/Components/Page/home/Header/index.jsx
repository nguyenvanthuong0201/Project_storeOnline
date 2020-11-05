import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Breadcrumb, Button, Badge, Dropdown } from "antd";
import HomeCart from "./component/HomeCart";
import Avatar from "antd/lib/avatar/avatar";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const { Header, Content } = Layout;

HeaderHome.propTypes = {};
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank">Nguyễn Văn Thương</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">Giỏ hàng</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">Logout</a>
    </Menu.Item>
  </Menu>
);

function HeaderHome(props) {
  return (
    <Header
      style={{ position: "fixed", zIndex: 999, width: "100%" }}
      collapsible={true}
    >
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/product">Product</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/introduce">Introduce</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <div style={{ float: "right" }}>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </div>
        <div style={{ float: "right", marginRight: "20px" }}>
          <NavLink to="/viewCart">
            <Badge count={999}>
              <Avatar shape="square" icon={<ShoppingCartOutlined />} />
            </Badge>
          </NavLink>
        </div>
      </Menu>
    </Header>
  );
}
export default HeaderHome;
