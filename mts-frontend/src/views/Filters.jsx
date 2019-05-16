import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

const propTypes = {};

const defaultProps = {};

export default function Filters({ onToggleCategory, categories }) {
  return (
    <div>
      {categories.map(category => {
        return (
          <Checkbox
            onChange={onToggleCategory(category.id)}
            value={category.id}
            name={category.name}
          >
            {category.name}
          </Checkbox>
        );
      })}
    </div>
  );
}

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;
