import { ConfigProvider } from "antd";
import React, { useState } from "react";
import CptHeader from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { actDarkMode, actLocale } from "../Actions";

function ConHeader(props) {
  const { onCollapse, collapsed } = props;
  const locale = useSelector((state) => state.reLocale);
  const theme = useSelector((state) => state.reDarkMode);
  const dispatch = useDispatch();

  const onChangeDarkMode = (mode) => {
    const action = actDarkMode(mode);
    dispatch(action);
  };
  const onChangeLocale = (locale) => {
    const action = actLocale(locale);
    dispatch(action);
  };
  return (
    <ConfigProvider locale={locale}>
      <CptHeader
        collapsed={collapsed}
        onCollapse={onCollapse}
        locale={locale}
        onChangeLocale={onChangeLocale}
        theme={theme}
        onChangeDarkMode={onChangeDarkMode}
        key={
          locale
            ? locale.locale
            : "en" /* Have to refresh for production environment */
        }
      />
    </ConfigProvider>
  );
}

export default ConHeader;
