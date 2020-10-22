import React, { useState } from "react";
import { Button, Card, Col, Drawer, Input, PageHeader, Row } from "antd";
import { Table } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import CptCustomer_information from "./component/CptCustomer_information";
import CptCustomer_drawerAdd from "./component/CptCustomer_drawerAdd";

function AdminCustomer(props) {
  const [drawer, setDrawer] = useState(false);
  console.log("bool", drawer);
  const [filterTable, setFilterTable] = useState(null);
  const columns = [
    {
      title: "CustomerId",
      dataIndex: "customerId",
      width: "10%",
      fixed: "left",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      width: "10%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.firstName.length - b.firstName.length,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      width: "10%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "10%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "20%",
    },
    {
      title: "City",
      dataIndex: "city",
      width: "10%",

      filterMultiple: false,
      onFilter: (value, record) => record.city.indexOf(value) === 0,
      sorter: (a, b) => a.city.length - b.city.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Registration date",
      dataIndex: "registrationDate",
      width: "10%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.registrationDate.length - b.registrationDate.length,
    },
    {
      title: "Bill",
      width: "5%",
      dataIndex: "bill",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.bill - b.bill,
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "5%",
      fixed: "right",
      render: (text, record) => (
        <>
          <Button
            style={{ width: "50px" }}
            type="primary"
            size="small"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];
  const handleDelete = (id) => {
    console.log(id);
  };
  const data = [
    {
      customerId: "ABC05681",
      firstName: "Thương ",
      lastName: "Nguyễn Văn",
      phone: "0388846810",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Khánh Hòa",
      registrationDate: 20022020,
      bill: 101,
    },
    {
      customerId: "ABC05682",
      firstName: "Khiêm ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
    {
      customerId: "ABC05684",
      firstName: "An ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
    {
      customerId: "ABC05683",
      firstName: "Trọng ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
    {
      customerId: "ABC05685",
      firstName: "Trọng ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
    {
      customerId: "ABC05686",
      firstName: "Hoàng ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
    {
      customerId: "ABC05687",
      firstName: "Hoàng ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
    {
      customerId: "ABC05688",
      firstName: "Hoàng ",
      lastName: "Nguyễn Văn",
      phone: "123456789",
      email: "nguyenvanthuong0201@gmail.com",
      address: "32 Võ Văn Hào",
      city: "Hồ Chí Minh",
      registrationDate: 20022020,
      bill: 1,
    },
  ];
  const handleSearchTable = (value) => {
    const filterTable = data.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilterTable(filterTable);
  };

  return (
    <div>
      {/* <PageHeader title="Customer" ghost={false} /> */}
      <Card style={{ borderRadius: "10px" }} size="small">
        <Row>
          <Col xs={24} md={16} lg={15}>
            <Row>
              <Col xs={24} md={24} lg={10}>
                <Input.Search
                  placeholder="Search by..."
                  enterButton
                  onSearch={handleSearchTable}
                  allowClear={true}
                />
              </Col>
              <Col xs={24} md={24} lg={3} offset={11}>
                <Button
                  type="primary"
                  block
                  icon={<PlusSquareOutlined />}
                  onClick={() => setDrawer(true)}
                >
                  Add
                </Button>
              </Col>
            </Row>
            {/* Start Drawer*/}
            <CptCustomer_drawerAdd drawer={drawer} setDrawer={setDrawer} />
            {/* End Drawer*/}
            <Row>
              <Col xs={24} md={24} lg={24}>
                <Table
                  columns={columns}
                  dataSource={filterTable == null ? data : filterTable}
                  pagination={{ pageSize: 10 }}
                  size="small"
                  scroll={{ x: 1500, y: 350 }}
                  rowKey="customerId"
                  style={{ marginTop: "10px" }}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={8} lg={8} offset={1}>
            <CptCustomer_information />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default AdminCustomer;
