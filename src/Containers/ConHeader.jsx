import { ConfigProvider } from "antd";
import React, { useState } from "react";
import CptHeader from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { actDarkMode, actLocale } from "../Actions";

function ConHeader(props) {
  const { onCollapse, collapsed } = props;

  return <CptHeader collapsed={collapsed} onCollapse={onCollapse} />;
}

export default ConHeader;
