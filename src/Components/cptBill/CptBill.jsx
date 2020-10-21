import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { Table } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

function CptBill(props) {
  const [filterTable, setFilterTable] = useState(null);
  const columns = [
    {
      title: "PaymentId",
      dataIndex: "paymentId",
      width: "10%",
      fixed: "left",
    },
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
      title: "Cart",
      dataIndex: "cart",
      width: "20%",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "10%",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "15%",
      fixed: "right",

      render: (text, record) => (
        <>
          <Button type="primary" onClick={() => handleDelete(record.id)}>
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
      id: "ABC0",
      picture: "Hình 1 2-4 ",
      title: "Áo bà ba",
      amount: 8,
      productType: "Áo",
      size: "XL",
      price: 112300000,
      salePrice: 120000000,
    },
    {
      id: "ABC1",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC2",
      picture: "Hình 122 2-4 ",
      title: "Giầy",
      amount: 0,
      productType: "Giầy",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC3",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC4",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC5",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC6",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC7",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC8",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC9",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC10",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
    },
    {
      id: "ABC11",
      picture: "Hình 122 2-4 ",
      title: "Quần bà ba dá  asdas asdsa adsa asdas á asdsa asd asd áda",
      amount: 0,
      productType: "Quần",
      size: "L",
      description: "Mô tẩ tat rr 31 Võ Văn Hào",
      availability: "Hết Hàng",
      price: 2220000000,
      salePrice: 25250505000,
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
      <Row>
        <Col xs={24} md={24} lg={10}>
          <Input.Search
            placeholder="Search by..."
            enterButton
            onSearch={handleSearchTable}
            allowClear={true}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={24} lg={24}>
          <Table
            columns={columns}
            dataSource={filterTable == null ? data : filterTable}
            pagination={{ pageSize: 6 }}
            size="small"
            rowKey="id"
            scroll={{ x: 1500, y: 300 }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default CptBill;
