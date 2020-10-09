import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { Form, Input, Button, Checkbox } from "antd";

AddDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
};

function AddDrawer({ show, handleOnClose, onFinish, onFinishFailed }) {
  const initialValues = { firstName: "", lastName: "", phoneNumber: null };

  const [form] = Form.useForm();
  const [force, setForceUpdate] = useState();
  const [, setState] = useState();

  /// To disable submit button at the beginning.
  useEffect(() => {
    /// Form Dùng effect để gài bẫy
    setState({});
  }, []);

  return (
    <Drawer
      width={512}
      title="Add Contact"
      visible={show}
      onClose={handleOnClose}
      placement="left"
      maskClosable={true} /// Form nhấn bên ngoài để đóng ngăn
    >
      <Form
        form={form}
        name="basic"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical" // Form chỉnh các lable va input
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your Phone number!" },
          ]}
        >
          <Input type="tel" />
        </Form.Item>
        {/* 
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />   
        </Form.Item> */}

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item shouldUpdate={true}>
          {() => (
            <Fragment>
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Add
              </Button>
              {/* Form button reset */}
              <Button htmlType="reset" onClick={() => form.resetFields()}>
                reset
              </Button>
            </Fragment>
          )}
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default AddDrawer;
