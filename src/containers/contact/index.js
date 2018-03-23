import React from "react";
import Wrapper from "../../components/wrapper";
import Title from "../../components/Title";
import Form from './form'

export default () => {
  return (
    <Wrapper
    style={{
      padding : '20px 0px'
    }}
    >
      <Title>Contact</Title>

      <Title>Have a question or want to work together?</Title>
      <Form/>
    </Wrapper>
  );
};
