import React from "react";
import Wrapper from "../../components/wrapper";
import ProjectTile from "./project_tile";
import pList from "./pList";
import FlexWrap from "../../components/FlexWrap";
import Title from "../../components/Title";

export default () => {
  return (
    <Wrapper
      background_color="white"
      style={{
        marginTop: "30px"
      }}
    >
      <Title color="black" border_width="3px">
        PROJECTS
      </Title>

      <FlexWrap>
        {pList.map((p, ind) => <ProjectTile {...p} key={ind} />)}
      </FlexWrap>
    </Wrapper>
  );
};
