import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Logo from "../../../../../Assets/images/Logo.png";

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
