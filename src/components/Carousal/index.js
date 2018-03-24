import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import data from "./data";

const SlideItem = styled.div`
  background-image: ${props => props.thumb};
  background-repeat: no-repeat;
  background-position: center;
  height: 1400px;
`;

export default () => {
  return (
    <Carousel autoplay={true} afterChange={() => {}}>
      {data.map(itm => <SlideItem background={itm.color} thumb={itm.thumb} />)}
    </Carousel>
  );
};
