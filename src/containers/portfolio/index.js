import React from "react";
import Wrapper from "../../components/wrapper";
import ProjectTile from "./project_tile";
import pList from "./pList";
import FlexWrap from "../../components/FlexWrap";

export default () => {
  return (
    <Wrapper background_color="white">
      Projects
      <FlexWrap>
        {pList.map((p, ind) => <ProjectTile {...p} key={ind} />)}
      </FlexWrap>
    </Wrapper>
  );
};
