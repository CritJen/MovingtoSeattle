import React from "react";
import PropTypes from "prop-types";
import styles from "../stylesheets/suggestions.module.css";
import { connect } from "react-redux";
import HomeCard from "../views/HomeCard";

const propTypes = {};

const defaultProps = {};

class SuggestedHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedRentals: []
    };
  }

  componentDidMount = () => {
    // console.log(this.props);
    // this.setState({ suggestedRentals: rentals });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.suggestionsColumn}>
          {this.props.suggestions.map(rental => (
            <HomeCard {...rental} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

SuggestedHomes.propTypes = propTypes;
SuggestedHomes.defaultProps = defaultProps;

function mapStateToProps({ suggestions }) {
  return { suggestions };
}

export default connect(
  mapStateToProps,
  {}
)(SuggestedHomes);
