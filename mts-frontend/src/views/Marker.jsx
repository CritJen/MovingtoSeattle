import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";

const propTypes = {};

const defaultProps = {};

const Marker = props => {
  const markerStyle = {
    border: "1px #E6E6FA",
    borderRadius: "50%",
    height: props.hovered ? 30 : 10,
    width: props.hovered ? 30 : 10,
    backgroundColor: "#9932CC",
    cursor: "pointer",
    zIndex: 10,
    transition: "transform 500ms ease-in-out"
  };

  return (
    <>
      {!props.hovered && (
        <Icon
          type="home"
          theme="filled"
          style={{ fontSize: "14px", color: "#4B0082" }}
        />
      )}
      {props.hovered && (
        <Icon
          type="star"
          theme="twoTone"
          twoToneColor="#FF00FF"
          style={{ fontSize: "18px" }}
        />
      )}
    </>
  );
};

Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

export default Marker;
