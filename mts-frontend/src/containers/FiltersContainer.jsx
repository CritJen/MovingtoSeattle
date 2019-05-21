import React from "react";
import PropTypes from "prop-types";
import Filters from "../views/Filters";
import { toggleCategory as toggleCategoryAction } from "../reducers/categoriesReducer";
import { connect } from "react-redux";
import { Menu } from "antd";

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
    <Menu theme="dark">
      <Filters onToggleCategory={onToggleCategory} categories={categories} />
    </Menu>
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
