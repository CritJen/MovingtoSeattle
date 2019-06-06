import React from "react";
import PropTypes from "prop-types";
import styles from "../stylesheets/page.module.css";

const propTypes = {
  mapContainer: PropTypes.node.isRequired,
  topForm: PropTypes.node.isRequired,
  suggestions: PropTypes.node.isRequired
};

const defaultProps = {};

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
  }

  toggleResults = () => {
    this.setState({ showingResults: !this.state.showingResults });
  };

  render() {
    const { mapContainer, topForm, suggestions } = this.props;
    return (
      <React.Fragment>
        <div style={{ padding: 5 }}>{topForm}</div>
        <div className={styles.map}>{mapContainer}</div>
        <div>{suggestions}</div>
      </React.Fragment>
    );
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
