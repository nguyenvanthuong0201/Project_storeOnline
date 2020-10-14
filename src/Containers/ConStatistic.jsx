import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";
import { Col, Row } from "antd";
import CptStatisticCard from "../Components/cptStatistic/CptStatisticCard";
import CptStatisticCharts from "../Components/cptStatistic/CptStatisticCharts";

const ConStatistic = () => {
  return (
    <>
      <Row>
        <CptStatisticCard />
      </Row>
      <Row>
        <CptStatisticCharts />
      </Row>
    </>
  );
};

export default ConStatistic;
