import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import {
  ArrowRightOutlined,
  DollarCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../StatisticCard.css";
import { Link } from "react-router-dom";

// function animateNumber(
//   finalNumber,
//   duration = 5000,
//   startNumber = 0,
//   callback
// ) {
//   let currentNumber = startNumber;
//   const interval = window.setInterval(updateNumber, 17);
//   function updateNumber() {
//     if (currentNumber >= finalNumber) {
//       clearInterval(interval);
//     } else {
//       let inc = Math.ceil(finalNumber / (duration / 17));
//       if (currentNumber + inc > finalNumber) {
//         currentNumber = finalNumber;
//         clearInterval(interval);
//       } else {
//         currentNumber += inc;
//       }
//       try {
//         callback(currentNumber);
//       } catch (error) {
//         console.log("Không nên chuyển trang vội");
//       }
//     }
//   }
// }
//// Hàm autoNumber dropTO
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  const startTime = performance.now();
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime > duration) {
      callback(finalNumber);
    } else {
      try {
        const timeRate = (1.0 * elapsedTime) / duration;
        const numberRate = easeOutExpo(timeRate);
        const currentNumber = Math.round(numberRate * finalNumber);
        callback(currentNumber);
        requestAnimationFrame(updateNumber);
      } catch (error) {
        console.log(error);
      }
    }
  }
  requestAnimationFrame(updateNumber);
}
/////////////////////////

function CptStatisticCard(props) {
  animateNumber(100, 3000, 0, function (number) {
    const formattedNumber = number;
    document.getElementById("totalCustomer").innerText = formattedNumber;
  });
  animateNumber(2000, 3000, 0, function (number) {
    const formattedNumber = number;
    document.getElementById("totalMoney").innerText = formattedNumber;
  });

  return (
    <>
      <Col xs={24} md={12} lg={12} className="StaticCart_col">
        <Row className="StaticCart__Left StaticCart__totalCustomer ">
          <div className="StaticCart__totalCustomerTotal">
            <div
              className="StaticCart__totalCustomerTotal--number"
              id="totalCustomer"
            ></div>
            <div className="StaticCart__totalCustomerTotal--title">
              Total Customer
            </div>
            <div className="StaticCart__totalCustomerTotal--admin">
              <span>
                Employee : <b>2</b>
              </span>
              <br />
              <span>
                Admin: <b>2</b>
              </span>
            </div>
          </div>
          <div className="StaticCart__totalCustomerIcon">
            <UserOutlined />
          </div>
        </Row>
        <Row>
          <Link to="/" className="StaticCart__totalCustomer--link">
            See details <ArrowRightOutlined />
          </Link>
        </Row>
      </Col>
      <Col xs={24} md={12} lg={11} offset={1} className="StaticCart_col">
        <Row className="StaticCart__Left StaticCart__totalCustomer ">
          <div className="StaticCart__totalCustomerTotal">
            <div
              className="StaticCart__totalCustomerTotal--number"
              id="totalMoney"
            >
              <span>Đ</span>
            </div>
            <div className="StaticCart__totalCustomerTotal--title">
              Total Money
            </div>
            <div className="StaticCart__totalCustomerTotal--admin">
              <span>
                Bill : <b>50</b>
              </span>
              <br />
              <span>
                Products: <b>300</b>
              </span>
            </div>
          </div>
          <div className="StaticCart__totalCustomerIcon">
            <DollarCircleOutlined />
          </div>
        </Row>
        <Row>
          <Link to="/" className="StaticCart__totalCustomer--link">
            See details <ArrowRightOutlined />
          </Link>
        </Row>
      </Col>
    </>
  );
}

export default CptStatisticCard;
