import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Drawer, InputNumber, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DrawerCart(props) {
  const { drawer, setDrawer, dataAddOnCart } = props;
  const handleOnCloseDrawer = () => {
    setDrawer(false);
  };
  return (
    <Drawer
      width={512}
      title="View Card"
      visible={drawer}
      onClose={handleOnCloseDrawer}
      placement="right"
      maskClosable={true} /// Form nhấn bên ngoài để đóng ngăn
    >
      <Row gutter={[32, 0]}>
        <Col xs={10} ms={10} lg={10} xl={10}>
          <img style={{ width: "100%" }} src={dataAddOnCart.picture} alt="" />
        </Col>
        <Col xs={10} ms={10} lg={10} xl={10}>
          <InputNumber />
        </Col>
        <Col xs={4} ms={4} lg={4} xl={4}>
          <Button type="danger" icon={<DeleteOutlined />} />
        </Col>
      </Row>
    </Drawer>
  );
}

export default DrawerCart;
