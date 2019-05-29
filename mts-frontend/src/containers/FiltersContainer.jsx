import React from "react";
import PropTypes from "prop-types";
import Filters from "../views/Filters";
import {
  toggleCategory as toggleCategoryAction,
  changeWeight as changeWeightAction
} from "../reducers/categoriesReducer";
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
  properties
}) {
  const onToggleCategory = categoryId => ev => {
    toggleCategory(categoryId);
  };

  const onWeightChange = category => value => {
    changeWeight({ category, value });
  };

  return (
    <>
      <Filters
        onToggleCategory={onToggleCategory}
        categories={categories}
        onWeightChange={onWeightChange}
      />
      <Button onClick={() => findDistance(locations, properties)}>
        Where Should I Live?
      </Button>
    </>
  );
}

FiltersContainer.propTypes = propTypes;
FiltersContainer.defaultProps = defaultProps;

//Creating a categories prop with a value of an array of objects containing all possible categories
function mapStateToProps({ categories, properties, locations }) {
  return { categories, properties, locations };
}

export default connect(
  mapStateToProps,
  { toggleCategory: toggleCategoryAction, changeWeight: changeWeightAction }
)(FiltersContainer);
