import React from "react";
import styled from "styled-components";
import Icon from "../../icons";
import {Link} from 'react-router-dom'

const footers = [
  {
    name: "Linkedin",
    icon: "linkedin"
  },
  {
    name: "Github",
    icon: "github"
  },
  {
    name: "Medium",
    icon: "facebook"
  }
];

const FooterWrapper = styled.div`
  background: #1b242f;
  display: flex;
  min-width: 40%;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  & > :first-child {
    display: flex;
    flex-direction: row;
  }

  & :last-child {
    flex-direction: column;
    color: white;
  }
`;

const FooterItem = styled.div`
  margin: 10px 20px;
`;

export default () => (
  <FooterWrapper>
    <div>
      {footers.map((f, ind) => (
        <FooterItem>
          <Link to='/'>
          <Icon name={f.icon} color="white" size={25} />
          </Link>
        </FooterItem>
      ))}
    </div>
    <div>Muneer PP © 2018</div>
  </FooterWrapper>
);
