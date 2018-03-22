import React from "react";
import Wrapper from "../../components/wrapper";
import Title from "../../components/Title";
import Button from "../../components/Button";

export default () => {
  return (
    <Wrapper height={`${window.outerHeight - 100}px`}>
      <Title>Hello, I'm muneer</Title>
      <Title>I'm a full stack app developer</Title>
      <Button>
        View my work
      </Button>
    </Wrapper>
  );
};
