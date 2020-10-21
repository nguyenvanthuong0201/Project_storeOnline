import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Button, Checkbox, Drawer, Input, Select, Upload } from "antd";
import AvatarAdd from "./compoment/AvatarAdd";
import { UploadOutlined } from "@ant-design/icons";

function CptCustomer_drawerAdd(props) {
  const initialValues = { firstName: "", lastName: "", phoneNumber: null };
  const { drawer, setDrawer } = props;
  const [form] = Form.useForm();
  const handleOnCloseDrawer = () => {
    setDrawer(false);
  };

  const onFinish = async (value) => {
    // console.log("value", value);
    // setDrawer(false);
    // const storageRef = firebase.storage().ref("images").child(id);
    // await storageRef.put(value.upload[0].originFileObj);
    // storageRef.getDownloadURL().then((url) => {
    //   //   imageRef.set({ image: url, title: "Hoang" });
    //   console.log(url);
    // });
    // console.log("value.upload", value.upload[0].originFileObj);
  };

  const onFinishFailed = (onFinishFailed) => {
    console.log("onFinishFailed", onFinishFailed);
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Drawer
        width={512}
        title="Registration employee"
        visible={drawer}
        onClose={handleOnCloseDrawer}
        placement="right"
        maskClosable={true} /// Form nhấn bên ngoài để đóng ngăn
      >
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="horizontal" // Form chỉnh các lable va input
        >
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone "
            name="phone"
            rules={[{ required: true, message: "Please input your Phone !" }]}
          >
            <Input type="tel" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Position"
            name="position"
            rules={[
              { required: true, message: "Please input your first position!" },
            ]}
          >
            <Select>
              <Select.Option value="employee">Employee</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
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
