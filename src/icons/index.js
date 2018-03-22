import React from "react";

export default ({ name, height }) => {
  return (
    <img
      src={`/assets/${name || "speed"}.svg`}
      style={{
        height: `${height || "60px"}`,
        fill: "white"
      }}
    />
  );
};
