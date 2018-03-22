import React from "react";
import Circle from "../../components/Circle";
import Title from "../../components/Title";
import Icon from "../../icons";

export default ({ title, sub, icon }) => {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Circle>
        <Icon />
      </Circle>
      <Title size={12} max="240px">{sub}</Title>
    </div>
  );
};
