import React from "react";
import PropTypes from "prop-types";
import Filters from "../views/Filters";
import { toggleCategory as toggleCategoryAction } from "../reducers/categoriesReducer";
import { connect } from "react-redux";

const propTypes = {
  categories: PropTypes.array.isRequired,
  toggleCategory: PropTypes.func.isRequired
};

const defaultProps = {};

function FiltersContainer({ toggleCategory, categories }) {
  const onToggleCategory = categoryId => ev => {
    const { value: categoryId } = ev.target;
    toggleCategory(categoryId);
  };

  return (
    <Filters onToggleCategory={onToggleCategory} categories={categories} />
  );
}

FiltersContainer.propTypes = propTypes;
FiltersContainer.defaultProps = defaultProps;

//Creating a categories prop with a value of an array of objects containing all possible categories
function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(
  mapStateToProps,
  { toggleCategory: toggleCategoryAction }
)(FiltersContainer);
