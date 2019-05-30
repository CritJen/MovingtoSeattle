import React from "react";
import PropTypes from "prop-types";
import InfoWindow from "./InfoWindow";

const propTypes = {};

const defaultProps = {};

const Marker = props => {
  const markerStyle = {
    border: "1px solid white",
    borderRadius: "50%",
    height: 10,
    width: 10,
    backgroundColor: "blue",
    cursor: "pointer",
    zIndex: 10
  };

  return (
    <>
      <div style={markerStyle} />
      {props.show}
    </>
  );
};

Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

export default Marker;
