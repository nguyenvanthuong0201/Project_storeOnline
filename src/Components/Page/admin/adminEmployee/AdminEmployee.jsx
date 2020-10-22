import React, { useState } from "react";
import { Button, Card, Col, Image, Input, Row } from "antd";
import { Table } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

AdminEmployee.propTypes = {};

function AdminEmployee(props) {
  const [filterTable, setFilterTable] = useState(null);
  const columns = [
    {
      title: "EmployeeId",
      dataIndex: "employeeId",
      width: "10%",
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
      title: "Position",
      dataIndex: "position",
      width: "10%",
      filters: [
        {
          text: "Admin",
          value: "Admin",
        },
        {
          text: "Employee",
          value: "Employee",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.position.indexOf(value) === 0,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "10%",
      filters: [
        {
          text: "Male",
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "10%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Email",
      width: "30%",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "15%",
      render: (text, record) => (
        <>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="dashed" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const handleEdit = (record) => {
    console.log(record);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  const data = [
    {
      employeeId: "EM1",
      firstName: "Thương",
      lastName: "Nguyễn Văn",
      position: "Admin",
      gender: "Male",
      phone: 8438884810,
      email: "nguyenvanthuong0201@gmail.com",
    },
    {
      employeeId: "EM2",
      firstName: "Trung",
      lastName: "Nguyễn Văn",
      position: "Admin",
      gender: "Male",
      phone: 8438884810,
      email: "nguyenvanthuong0201@gmail.com",
    },
    {
      employeeId: "EM3",
      firstName: "Sự",
      lastName: "Nguyễn Văn",
      position: "Employee",
      gender: "Male",
      phone: 8438884810,
      email: "nguyenvanthuong0201@gmail.com",
    },
    {
      employeeId: "EM4",
      firstName: "Sự",
      lastName: "Nguyễn Văn",
      position: "Employee",
      gender: "Male",
      phone: 8438884810,
      email: "nguyenvanthuong0201@gmail.com",
    },
    {
      employeeId: "EM5",
      firstName: "Thanh",
      lastName: "Nguyễn Văn",
      position: "Employee",
      gender: "Female",
      phone: 8438884810,
      email: "nguyenvanthuong0201@gmail.com",
    },
  ];
  // / Search toàng cục
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
      <Card style={{ borderRadius: "10px" }} size="small">
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
            <Button type="primary" block icon={<PlusSquareOutlined />}>
              Add employee
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={24} md={24} lg={24}>
            <Table
              columns={columns}
              dataSource={filterTable == null ? data : filterTable}
              pagination={{ pageSize: 10 }}
              size="small"
              scroll={{ y: 300 }}
              rowKey="id"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default AdminEmployee;
