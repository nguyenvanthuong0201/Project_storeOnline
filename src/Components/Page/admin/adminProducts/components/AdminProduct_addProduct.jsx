import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Button,
  Checkbox,
  Drawer,
  Input,
  Select,
  Upload,
  Divider,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { sizeAdminProduct } from "../../../../../data/dataAdminProduct";
import firebase from "../../../../../utils/firebase";

function AddProduct(props) {
  const { drawer, setDrawer, bodyEdit } = props;
  const [form] = Form.useForm();
  const handleOnCloseDrawer = () => {
    setDrawer(false);
  };
  console.log("bodyEdit", bodyEdit);

  const onFinish = async (value) => {
    const body = {
      ...value,
      key: "",
    };
    console.log("body", body);
    const id = "Product_" + Date.now();
    const storageRef = firebase.storage().ref("images").child(id);
    const tutorialsRef = firebase.firestore().collection("/product");
    if (body.key === "") {
      await storageRef.put(body.picture[0].originFileObj);
      storageRef.getDownloadURL().then((url) => {
        console.log("url", url);
        tutorialsRef
          .add({
            title: body.title,
            type: body.type,
            size: body.size,
            sale: body.sale,
            cost: body.cost,
            amount: body.amount,
            picture: [url],
          })
          .then(function (docRef) {
            console.log("Tutorial created with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding Tutorial: ", error);
          });
      });
    } else {
      if (typeof body.picture === "string") {
        const updateRef = firebase
          .firestore()
          .collection("product")
          .doc(bodyEdit.key);
        updateRef
          .set({
            title: bodyEdit.title,
            type: bodyEdit.type,
            size: bodyEdit.size,
            cost: bodyEdit.cost,
            amount: bodyEdit.amount,
            picture: bodyEdit.picture,
            sale: bodyEdit.sale,
          })
          .then((docRef) => {
            // setdataInput({ title: "", description: "", image: "", key: "" });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        await storageRef.put(body.picture[0]);
        storageRef.getDownloadURL().then((url) => {
          //   imageRef.set({ image: url, title: "Hoang" });
          const updateRef = firebase
            .firestore()
            .collection("product")
            .doc(bodyEdit.key);
          updateRef
            .set({
              title: bodyEdit.title,
              type: bodyEdit.type,
              size: bodyEdit.size,
              cost: bodyEdit.cost,
              amount: bodyEdit.amount,
              picture: bodyEdit.picture,
              sale: bodyEdit.sale,
            })
            .then((docRef) => {
              //   setdataInput({ title: "", description: "", image: "", key: "" });
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        });
      }
    }
  };

  const onFinishFailed = (onFinishFailed) => {
    console.log("onFinishFailed", onFinishFailed);
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
        title="Add Product"
        visible={drawer}
        onClose={handleOnCloseDrawer}
        placement="right"
        maskClosable={true} /// Form nhấn bên ngoài để đóng ngăn
      >
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="horizontal" // Form chỉnh các lable va input
        >
          <Form.Item
            name="picture"
            label="Picture"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="logo"
              listType="picture"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Title"
            initialValue={bodyEdit ? bodyEdit.title : ""}
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Type"
            name="type"
            initialValue={bodyEdit ? bodyEdit.type : ""}
            rules={[{ required: true, message: "Please input your type!" }]}
          >
            <Select>
              <Select.Option value="Shirt">Shirt</Select.Option>
              <Select.Option value="Pants">Pants</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Amount "
            name="amount"
            initialValue={bodyEdit ? bodyEdit.amount : ""}
            rules={[{ required: true, message: "Please input your amount !" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Sale "
            name="sale"
            initialValue={bodyEdit ? bodyEdit.sale : ""}
            rules={[{ required: true, message: "Please input your sale !" }]}
          >
            <Input type="number" suffix="₫" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Cost"
            name="cost"
            initialValue={bodyEdit ? bodyEdit.cost : ""}
            rules={[{ required: true, message: "Please input your cost!" }]}
          >
            <Input type="number" suffix="₫" />
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            initialValue={bodyEdit ? bodyEdit.size : ""}
          >
            <Checkbox.Group options={sizeAdminProduct} />
          </Form.Item>
          <Divider />

          <Form.Item shouldUpdate={true}>
            {() => (
              <Fragment>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    bodyEdit
                      ? ""
                      : !form.isFieldsTouched(true) ||
                        form
                          .getFieldsError()
                          .filter(({ errors }) => errors.length).length
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

export default AddProduct;
