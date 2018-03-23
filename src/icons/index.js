import React from "react";

export default ({ name, size, color, onClick }) => {
  return (
    <span
      onClick={onClick}
      class={`icon-${name}`}
      style={{
        fontSize: `${size || "14"}px`,
        color: `${color || "red"}`
      }}
    />
  );
};
