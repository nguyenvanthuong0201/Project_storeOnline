import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Logo from "../../../../../Assets/images/Logo.png";
import ao1 from "../../../../../Assets/images/ao1-1.png";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

export default class HomeSlideProduct extends Component {
  render() {
    return (
      <>
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            perMove: 1,
            gap: "1rem",
          }}
          id="splide2"
        >
          <SplideSlide>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={ao1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={ao1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={ao1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={ao1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={ao1} />}
            >
              <h3>25588205</h3>
              <Meta title="Europe Street beat" />
            </Card>
          </SplideSlide>
        </Splide>
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            perMove: 1,
            gap: "1rem",
          }}
          id="splide2"
        >
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
        </Splide>
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            perMove: 1,
            gap: "1rem",
          }}
          id="splide2"
        >
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Logo} alt="anh 1" />
          </SplideSlide>
        </Splide>
      </>
    );
  }
}
