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
  bathroom,
  neighborhood,
  link_id
}) {
  let cleanAddress = address.replace(/[|&;$%@"<>()+,]/g, "");
  let link = `https://www.seattlerentals.com/${neighborhood}/apartments/${link_id}`;

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
        <Icon
          type="eye"
          theme="twoTone"
          twoToneColor="#52c41a"
          onClick={() => window.open(link, "_blank")}
        />
      </div>
    </React.Fragment>
  );
}

HomeCard.propTypes = propTypes;
HomeCard.defaultProps = defaultProps;
