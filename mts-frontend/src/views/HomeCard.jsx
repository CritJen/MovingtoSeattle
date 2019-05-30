import React from "react";
import PropTypes from "prop-types";
import styles from "../stylesheets/homeCard.module.css";
import { Icon } from "antd";

const propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  monthly_rent: PropTypes.number,
  bedroom: PropTypes.string,
  bathroom: PropTypes.string
};

const defaultProps = {
  name: "",
  address: "",
  monthly_rent: undefined,
  bedroom: "",
  bathroom: ""
};

export default function HomeCard({
  name,
  address,
  monthly_rent,
  bedroom,
  bathroom
}) {
  var cleanAddress = address.replace(/[|&;$%@"<>()+,]/g, "");

  debugger;
  return (
    <React.Fragment>
      <div className={styles.card}>
        <span>{name}</span>
        <br />
        <span>{cleanAddress}</span>
        <br />
        <span>
          {bedroom} || {bathroom}
        </span>
        <br />
        <Icon type="save" />
      </div>
    </React.Fragment>
  );
}

HomeCard.propTypes = propTypes;
HomeCard.defaultProps = defaultProps;
