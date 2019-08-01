import React from "react";
import styles from "../stylesheets/suggestions.module.css";
import { connect } from "react-redux";
import HomeCard from "../views/HomeCard";
import { toggleHovered as toggleHoveredAction } from "../reducers/suggestionsReducer";

class SuggestedHomes extends React.Component {
  render() {
    const { toggleHovered } = this.props;
    return (
      <React.Fragment>
        <div className={styles.suggestionsColumn}>
          {this.props.suggestions.map(rental => (
            //Setting a key in the HomeCard props object for each key of the rental object plus our toggleHovered action
            <HomeCard {...rental} toggleHovered={toggleHovered} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ suggestions }) {
  return { suggestions };
}

export default connect(
  mapStateToProps,
  { toggleHovered: toggleHoveredAction }
)(SuggestedHomes);
