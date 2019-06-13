import React from "react";
import styled from "styled-components";
import Icon from "../../icons";
import { Link } from "react-router-dom";

const footers = [
  {
    name: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muneer-pp-5052b6128/"
  },
  {
    name: "Github",
    icon: "github",
    link: "https://github.com/abdulmuneer22"
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/muneer.vatakara"
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
          <a href={f.link} target="_blank">
            <Icon name={f.icon} color="white" size={25} />
          </a>
        </FooterItem>
      ))}
    </div>
    <div>Muneer PP © 2019</div>
  </FooterWrapper>
);
