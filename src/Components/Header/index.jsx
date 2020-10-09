import React, { useState } from "react";
import { ConfigProvider, DatePicker, Radio, Switch } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./Header.css";
import { Menu } from "antd";
import { Layout } from "antd";
import { Select } from "antd";
import enUS from "antd/es/locale/en_US";
import viVN from "antd/es/locale/vi_VN";
import moment from "moment";
import "moment/locale/zh-cn";
import App from "../../App";
moment.locale("en");

const { Option } = Select;

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

function CptHeader(props) {
  const {
    collapsed,
    onCollapse,
    theme,
    locale,
    onChangeLocale,
    onChangeDarkMode,
  } = props;

  const HandleClickCollapsed = () => {
    onCollapse(!collapsed);
  };
  const changeTheme = (value) => {
    onChangeDarkMode({
      ...theme,
      theme: value ? "dark" : "light",
    });
  };
  // Dùng cho radio button để chọn ngôn ngữ
  // const changeLocale = (e) => {
  //   onChangeLocale(e.target.value);
  //   console.log(e.target.value);
  //   if (!e.target.value) {
  //     moment.locale("en");
  //   } else {
  //     moment.locale("vi");
  //   }
  // };
  const changeLocale = (language) => {
    // switch (language) {
    //   case "en":
    //     moment.locale("en");
    //     onChangeLocale(enUS);
    //     break;

    //   case "vi":
    //     moment.locale("vi");
    //     onChangeLocale(viVN);
    //     break;

    //   default:
    //     break;
    // }
    if (language === "en") {
      onChangeLocale(enUS);
      moment.locale("en");
    }
    if (language === "vi") {
      moment.locale("vi");
    }
  };

  return (
    <Header className="site-layout-background Header">
      <div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: HandleClickCollapsed,
          }
        )}
      </div>
      <div className="Header_controller">
        <div className="Header_langue">
          <Select
            defaultValue="Vietnamese"
            defaultValue="English"
            style={{ width: 200 }}
            onChange={changeLocale}
          >
            <Option value="en">English</Option>
            <Option value="vi">Vietnamese</Option>
          </Select>
        </div>

        {/* /// Xử dụng Radio>button để chọn ngôn ngữ */}
        {/* <div className="Header_langue">
          <span style={{ marginRight: 6 }}> locale: </span>
          <Radio.Group value={locale} oCnhange={changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="vi" value={viVN}>
              Việt Nam
            </Radio.Button>
          </Radio.Group>
        </div> */}
        <div>
          <Switch
            checked={theme.theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
        <div className="Header__account">
          <h1>Hello I m gì đó</h1>
          <DatePicker />
        </div>
      </div>
    </Header>
  );
}

export default CptHeader;
