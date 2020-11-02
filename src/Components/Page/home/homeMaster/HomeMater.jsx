import { Card, Carousel, Col, Row } from "antd";
import React, { Component } from "react";
import HomeBannerBottom from "./component/HomeBannerBottom";
import HomeBannerRight from "./component/HomeBannerRight";
import HomeCarousel from "./component/HomeCarousel";
import HomeSlideProduct from "./component/HomeSlideProduct";
import "./homeMaster.css";

class HomeMater extends Component {
  render() {
    console.log("car");
    return (
      <Card style={{ borderRadius: "10px" }} size="small">
        <Row gutter={[32, 0]}>
          <Col xs={24} md={24} lg={16} xl={16}>
            <HomeCarousel />
          </Col>
          <Col xs={24} md={24} lg={8} xl={8}>
            <HomeBannerRight />
          </Col>
        </Row>
        <HomeBannerBottom />
        {/* Start Slide */}
        <HomeSlideProduct />
        {/* End slide */}
      </Card>
    );
  }
}

export default HomeMater;
