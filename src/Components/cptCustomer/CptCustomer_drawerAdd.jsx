import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Button, Checkbox, Drawer, Input } from "antd";

function CptCustomer_drawerAdd(props) {
  const initialValues = { firstName: "", lastName: "", phoneNumber: null };
  const { drawer, setDrawer } = props;
  const [form] = Form.useForm();
  const handleOnCloseDrawer = () => {
    setDrawer(false);
  };

  const onFinish = (value) => {
    console.log("value", value);
    setDrawer(false);
  };
  const onFinishFailed = (onFinishFailed) => {
    console.log("onFinishFailed", onFinishFailed);
  };
  return (
    <div>
      <Drawer
        width={512}
        title="Add Customer"
        visible={true}
        onClose={handleOnCloseDrawer}
        placement="right"
        maskClosable={true} /// Form nhấn bên ngoài để đóng ngăn
      >
        <Form
          form={form}
          name="basic"
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="horizontal" // Form chỉnh các lable va input
        >
          <Form.Item
            style={{ width: "200px" }}
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input className="AddCustomer " />
          </Form.Item>

          <Form.Item
            style={{ width: "200px" }}
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input className="AddCustomer" />
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
    </div>
  );
}

export default CptCustomer_drawerAdd;
