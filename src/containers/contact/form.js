import React from "react";
import Row from "./row";
import Button from "../../components/Button";

export default () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Row label="Name" />
      <Row label="Email" />
      <Row label="Your message" multi={true} />
      
      <div
      style={{
        display : 'flex',
        alignItems : 'flex-end',
        justifyContent : 'flex-end',
      }}
      >
      <Button>SUBMIT</Button>
      </div>
    </div>
  );
};
