import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { Table } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

function CptProduct(props) {
  const [filterTable, setFilterTable] = useState(null);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "20%",
    },
    {
      title: "Picture",
      dataIndex: "picture",
      width: "10%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "10%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Product Type",
      dataIndex: "productType",
      width: "10%",
      filters: [
        {
          text: "Quần",
          value: "Quần",
        },
        {
          text: "Áo",
          value: "Áo",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.productType.indexOf(value) === 0,
    },
    {
      title: "Size",
      dataIndex: "size",
      width: "10%",
      filters: [
        {
          text: "S",
          value: "S",
        },
        {
          text: "M",
          value: "M",
        },
        {
          text: "L",
          value: "L",
        },
        {
          text: "XL",
          value: "XL",
        },
        {
          text: "XXL",
          value: "XXL",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.size.indexOf(value) === 0,
      sorter: (a, b) => a.size.length - b.size.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "10%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Sale Price",
      width: "10%",
      dataIndex: "salePrice",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.salePrice - b.salePrice,
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
        <Col xs={24} md={24} lg={3} offset={11}>
          <Button type="primary" block icon={<PlusSquareOutlined />}>
            Add product
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
    </div>
  );
}

export default CptProduct;
