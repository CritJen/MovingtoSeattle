import React from "react";
import PropTypes from "prop-types";
import Filters from "../views/Filters";
import {
  toggleCategory as toggleCategoryAction,
  changeWeight as changeWeightAction
} from "../reducers/categoriesReducer";
import { addSuggestions as addSuggestionsAction } from "../reducers/suggestionsReducer";
import { connect } from "react-redux";
import { Button } from "antd";
import { findDistance } from "../utils/findLocations";

const propTypes = {
  categories: PropTypes.array.isRequired,
  toggleCategory: PropTypes.func.isRequired
};

const defaultProps = {};

function FiltersContainer({
  toggleCategory,
  categories,
  changeWeight,
  locations,
  properties,
  addSuggestions
}) {
  const onToggleCategory = categoryId => ev => {
    toggleCategory(categoryId);
  };

  const onSuggestionButtonClick = () => {
    const suggestions = findDistance(locations, properties);
    addSuggestions(suggestions);
  };

  const onWeightChange = category => value => {
    changeWeight({ category, value });
  };

  return (
    <>
      <h3
        style={{
          borderBottom: "1px double black",
          textAlign: "center",
          paddingBottom: 5
        }}
      >
        What would you like to live near?
      </h3>
      <p
        style={{
          borderBottom: "1px dashed #333",
          textAlign: "center",
          paddingBottom: 5
        }}
      >
        Choose as many categories as you like!
      </p>
      <Filters
        onToggleCategory={onToggleCategory}
        categories={categories}
        onWeightChange={onWeightChange}
      />
      <br />
      <Button onClick={onSuggestionButtonClick}>Let's find some places!</Button>
    </>
  );
}

FiltersContainer.propTypes = propTypes;
FiltersContainer.defaultProps = defaultProps;

//Creating a categories prop with a value of an array of objects containing all possible categories
function mapStateToProps({ categories, properties, locations }) {
  const selectedCategories = categories.filter(category => category.selected);
  return {
    categories,
    properties,
    locations: locations.filter(location =>
      selectedCategories.some(
        selectedCategory => selectedCategory.id === location.category_id
      )
    )
  };
}

export default connect(
  mapStateToProps,
  {
    toggleCategory: toggleCategoryAction,
    changeWeight: changeWeightAction,
    addSuggestions: addSuggestionsAction
  }
)(FiltersContainer);
