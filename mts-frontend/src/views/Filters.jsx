import React from "react";
import PropTypes from "prop-types";
import { Slider, Switch } from "antd";
import styles from "../stylesheets/filters.module.css";

const propTypes = {
  onToggleCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  onWeightChange: PropTypes.func.isRequired
};

const defaultProps = { categories: [] };

export default function Filters({
  onToggleCategory,
  categories,
  onWeightChange
}) {
  return categories.map(category => {
    const { selected, name, id } = category;
    return (
      <div className={styles.filterColumn} key={id}>
        {name}
        <Slider
          defaultValue={30}
          disabled={!selected}
          onChange={onWeightChange(category.id)}
        />
        <Switch
          size="small"
          checked={selected}
          onChange={onToggleCategory(category.id)}
        />
      </div>
    );
  });

  Filters.propTypes = propTypes;
  Filters.defaultProps = defaultProps;
}
