import React from "react";
import styled from "styled-components";

const Row = styled.div`
  color: red;
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 20px 30%;
  align-items: center;
`;

const Item = styled.div`
  margin-right: 20px;
  flex: 1;
`;

const Value = styled.div`
  color: white;
  flex: 3;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
`;

const Icons = {
  skype: "fa fa-skype",
  email: "fa fa-envelope",
  phone: "fa fa-phone"
};

const colors = {
  skype: "#00AFF0",
  phone: "white",
  email: "#D44638"
};

const resolveIcon = icon => Icons[icon];

const resolveIconColor = icon => colors[icon];

export default ({ item, value, link }) => {
  return (
    <Row>
      <Item>
        <i
          className={resolveIcon(item)}
          style={{
            fontSize: 30,
            color: resolveIconColor(item)
          }}
        />
      </Item>
      <Value>
        <a href={link}>{value}</a>
      </Value>
    </Row>
  );
};
