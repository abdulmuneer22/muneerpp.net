import React from "react";
import Title from "../../components/Title";
import Wrapper from "../../components/wrapper";
import HorizontalRow from "../../components/HorizontalRow";
import Skills from "./Skills";
import Tile from "./Tile";
import about_lst from "./about_list";

export default () => {
  return (
    <Wrapper background_color="white" j_c="flex-start">
      <Title color="black" border_width="3px">
        ABOUT
      </Title>
      <Skills />
      <HorizontalRow>{about_lst.map(itm => <Tile {...itm} />)}</HorizontalRow>
    </Wrapper>
  );
};
