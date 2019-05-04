import React from "react";
import _ from "lodash";

import Row from "./Row";
import Carousal from "../../components/Carousal";
import Title from "../../components/Title";

import projects from "../../data/projects";

export default ({
  match: {
    params: { projectId }
  }
}) => {
  let project = projects.find(obj => obj.name === projectId);
  if (project) {
    let projectDetails = project["description"];
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

        <Carousal projectDetails={projectDetails} />

        <div
          style={{
            maxWidth: "900px",
            margin: "30px auto"
          }}
        >
          {_.keysIn(projectDetails).map(
            (k, ind) =>
              k !== "images" && (
                <Row data={{ key: k, value: projectDetails[k] }} />
              )
          )}
        </div>
      </div>
    );
  } else {
    return <div>Invalid Project</div>;
  }
};
