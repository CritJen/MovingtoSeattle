//This is currently unused, left for styling flexibility later

import React from "react";
import { Icon } from "antd";

const Marker = props => {
  return (
    <>
      {!props.hovered && (
        <Icon
          type="home"
          theme="filled"
          style={{ fontSize: "14px", color: "#4B0082" }}
          onMouseEnter={() => props.toggleHovered(props.id)}
        />
      )}
      {props.hovered && (
        <Icon
          type="star"
          theme="twoTone"
          twoToneColor="#FF00FF"
          style={{ fontSize: "18px" }}
          onMouseLeave={() => props.toggleHovered(props.id)}
        />
      )}
    </>
  );
};

export default Marker;
