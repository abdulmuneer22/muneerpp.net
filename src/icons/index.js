import React from "react";

export default ({ name, size, color }) => {
  return (
    <span
      class={`icon-${name}`}
      style={{
        fontSize: `${size || "14"}px`,
        color: `${color || "red"}`
      }}
    />
  );
};
