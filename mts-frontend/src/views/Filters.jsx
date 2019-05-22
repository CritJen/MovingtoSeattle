import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Slider, Switch } from "antd";
import styles from "../stylesheets/filters.module.css";

const propTypes = {};

const defaultProps = {};

export default function Filters({
  onToggleCategory,
  categories,
  onWeightChange
}) {
  return categories.map(category => {
    const { selected, name } = category;
    return (
      <div className={styles.filterColumn}>
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
