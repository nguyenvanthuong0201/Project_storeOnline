import React from "react";
import PropTypes from "prop-types";
import {
  ConfigProvider,
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Modal,
  Select,
  Radio,
} from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

ConCustomerList.propTypes = {};

function ConCustomerList(props) {
  return (
    <div>
      <div className="example">
        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker style={{ width: 200 }} />
      </div>
      <div className="example">
        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <TimePicker />
        <RangePicker style={{ width: 200 }} />
      </div>
    </div>
  );
}

export default ConCustomerList;
