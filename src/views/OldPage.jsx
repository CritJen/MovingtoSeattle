import React from "react";
import PropTypes from "prop-types";
import styles from "../stylesheets/page.module.css";

const propTypes = {
  topform: PropTypes.node.isRequired,
  mapcontainer: PropTypes.node.isRequired,
  rightbar: PropTypes.node.isRequired
};

const defaultProps = {};

export default function Page({ topForm, mapContainer }) {
  return (
    <React.Fragment>
      <div className={styles.map}>{mapContainer}</div>
      <div> {topForm} </div>
    </React.Fragment>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
