import React from "react";
import PropTypes from "prop-types";
import Column from "antd/lib/table/Column";
import { Table } from "antd";
function ConProfile(props) {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource}>
        <Column
          title="Jobs"
          dataIndex="name"
          key="name"
          width="11%"
          sortDirections={["ascend", "descend"]}
          sorter={(a, b) => a.name - b.name}
        />
        <Column
          title="Jobs"
          dataIndex="age"
          className="tableJobList__column"
          sorter={(a, b) => a.age - b.age}
          sortDirections={["ascend", "descend"]}
        />
        <Column
          title="Reward(VNĐ)"
          dataIndex="address"
          width="13%"
          className="tableJobList__column"
          sorter={(a, b) => a.address - b.address}
          sortDirections={["ascend", "descend"]}
        />
      </Table>
      ;
    </div>
  );
}

export default ConProfile;
