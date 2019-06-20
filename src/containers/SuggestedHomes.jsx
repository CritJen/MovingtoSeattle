import React from "react";
import styles from "../stylesheets/suggestions.module.css";
import { connect } from "react-redux";
import HomeCard from "../views/HomeCard";
import { toggleHovered as toggleHoveredAction } from "../reducers/suggestionsReducer";

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
    const { toggleHovered } = this.props;
    return (
      <React.Fragment>
        <div className={styles.suggestionsColumn}>
          {this.props.suggestions.map(rental => (
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
