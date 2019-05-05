import React from "react";
import Row from "./row";
import Button from "../../components/Button";

import styled from "styled-components";

const ContactItem = styled.div`
  color: red;
`;

export default () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Row item="skype" value="muneer.pp_1" link="skype:muneer.pp_1?call" />
      <Row
        item="phone"
        value={`+91-7406365333`}
        link="callto:+91-7406365333?call"
      />
      <Row
        item="email"
        value="muneer.pp@outlook.com"
        link="mailto:muneer.pp@outlook.com"
      />
    </div>
  );
};
