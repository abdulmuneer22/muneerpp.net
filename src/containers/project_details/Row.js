import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0px;
`;

const Label = styled.div`
  color: rgba(51, 51, 51, 0.4);
  min-width: 200px;
  font-size: 18px;
`;

const Value = styled.div`
  color: #666;
  line-height: 1.6;
  font-size: 18px;
  display: flex;
  flex: 1;
  li {
    margin-bottom: 20px;
    list-style-position: inherit;
    margin-left: 0px;
  }
`;

function createMarkup(value) {
  return { __html: value };
}

export default ({ data }) => {
  const { key, value } = data;
  return (
    <Row>
      <Label>{key}</Label>
      <Value dangerouslySetInnerHTML={createMarkup(value)} />
    </Row>
  );
};
