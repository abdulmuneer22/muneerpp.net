import React from "react";
import Title from "../../components/Title";
import Wrapper from "../../components/wrapper";
import HorizontalRow from "../../components/HorizontalRow";

import Tile from "./Tile";

const ab_list = [
  {
    title: "Fast",
    sub: "Fast load times and lag free interaction, my highest priority.",
    icon: "fast"
  },
  {
    title: "Responsive",
    sub: "My layouts will work on any device, big or small.",
    icon: "fast"
  },
  {
    title: "Intuitive",
    sub: "Strong preference for easy to use, intuitive UX/UI.",
    icon: "fast"
  },
  {
    title: "Dynamic",
    sub: "Websites don't have to be static, I love making pages come to life.",
    icon: "fast"
  }
];

export default () => {
  return (
    <Wrapper>
      <Title>ABOUT</Title>
      <HorizontalRow>{ab_list.map(itm => <Tile {...itm} />)}</HorizontalRow>
    </Wrapper>
  );
};
