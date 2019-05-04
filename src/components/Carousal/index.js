import React from "react";
import data from "./data";

export default ({ projectDetails }) => {
  return (
    <img
      src={projectDetails.images[0]}
      style={{
        width: "380px",
        margin: "0 auto"
      }}
    />
  );
};
