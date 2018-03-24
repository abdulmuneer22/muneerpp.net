import React from "react";
import _ from "lodash";

import Row from "./Row";
import Carousal from "../../components/Carousal";
import Title from "../../components/Title";

import data from "./data";

export default () => {
  return (
    <div
      style={{
        // maxWidth: "60%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Title
        style={{
          margin: "25px auto"
        }}
        size="20px"
        color="black"
      >
        Project Details
      </Title>

      <Carousal />

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto"
        }}
      >
        {_.keysIn(data).map((k, ind) => (
          <Row data={{ key: k, value: data[k] }} />
        ))}
      </div>
    </div>
  );
};
