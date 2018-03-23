import React from "react";
import Title from "../../components/Title";
import Wrapper from "../../components/wrapper";
import HorizontalRow from "../../components/HorizontalRow";
import Skills from "./Skills";

import Tile from "./Tile";

const ab_list = [
  {
    title: "Mobile APPs",
    sub: "Fast load times and lag free interaction, my highest priority.",
    icon: "mobile"
  },
  {
    title: "Web APPs",
    sub: "My layouts will work on any device, big or small.",
    icon: "web"
  },
  {
    title: 'REST API Development',
    sub: "Strong preference for easy to use, intuitive UX/UI.",
    icon: "api"
  },
  {
    title: "Dynamic",
    sub: "Websites don't have to be static, I love making pages come to life.",
    icon: "dynamic"
  }
];

export default () => {
  return (
    <Wrapper background_color="white"  j_c="flex-start">
      <Title color="black">ABOUT</Title>
      <Skills />
      <HorizontalRow>{ab_list.map(itm => <Tile {...itm} />)}</HorizontalRow>
    </Wrapper>
  );
};
