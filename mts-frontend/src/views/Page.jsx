import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  topform: PropTypes.node.isRequired,
  mapcontainer: PropTypes.node.isRequired,
  rightbar: PropTypes.node.isRequired
};

const defaultProps = {};

export default function Page({ topForm, mapContainer, rightBar }) {
  return (
    <React.Fragment>
      <div> {topForm} </div>
      <div>{mapContainer}</div>
      <div>{rightBar}</div>
    </React.Fragment>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
