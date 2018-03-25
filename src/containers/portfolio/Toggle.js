import React, { Component } from "react";
import styled from "styled-components";

const catList = [
  {
    title: "Android",
    index: 0
  },
  {
    title: "iOS",
    index: 1
  },
  {
    title: "React Native",
    index: 2
  },
  {
    title: "Node JS",
    index: 3
  },
  {
    title: "Loopback",
    index: 4
  },
  {
    title: "Graphql",
    index: 5
  }
];

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const ToggleItem = styled.div`
  margin: 0px 15px;
  background: ${props => (props.activeTab === props.ind ? "#1EA9E3" : "white")};
  color: ${props => (props.activeTab === props.ind ? "white" : "black")};
  padding: 10px;
  cursor: pointer;
`;

export default ({ activeTab, updateTab }) => (
  <ToggleWrapper>
    {catList.map((cat, ind) => (
      <ToggleItem
        activeTab={activeTab}
        ind={ind}
        onClick={() => updateTab(cat.index)}
      >
        {cat.title}
      </ToggleItem>
    ))}
  </ToggleWrapper>
);
