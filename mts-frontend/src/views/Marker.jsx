import React from "react";
import PropTypes from "prop-types";
import InfoWindow from "./InfoWindow";

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
    transition: "transform 1000ms ease-in-out"
  };

  return (
    <>
      <div style={markerStyle}>
        <div />
      </div>
      {props.show}
    </>
  );
};

Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

export default Marker;
