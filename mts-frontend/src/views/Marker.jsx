import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";

const propTypes = {};

const defaultProps = {};

const Marker = props => {
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
