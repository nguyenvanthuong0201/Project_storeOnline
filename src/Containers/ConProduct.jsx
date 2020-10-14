import React from "react";
import PropTypes from "prop-types";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import CptProduct from "../Components/Products/CptProduct";

ConProduct.propTypes = {};

function ConProduct(props) {
  const locale = useSelector((state) => state.reLocale);

  return (
    <ConfigProvider locale={locale}>
      <CptProduct key={locale ? locale.locale : "en"} />
    </ConfigProvider>
  );
}

export default ConProduct;
