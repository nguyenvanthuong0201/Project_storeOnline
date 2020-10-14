import React from "react";
import PropTypes from "prop-types";

ConProfile.propTypes = {};

function ConProfile(props) {
  const array = [
    { title: "Thương", data: "firebase" },
    { title: "Hoàng", data: "MongoDB" },
  ];
  return (
    <div>
      {array.map((ar, index) => {
        return <li key={index}>{ar.title}</li>;
      })}
    </div>
  );
}

export default ConProfile;
