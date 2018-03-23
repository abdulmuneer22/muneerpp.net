import React from "react";
import InputBox from "../../components/InputBox";
import TextArea from "../../components/TextArea";

export default ({ label, multi }) => {
  return (
    <div
      style={{
        flexDirection: "row",
        margin: "10px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          minWidth: "100px"
        }}
      >
        {label}
      </div>
      {multi ? <TextArea /> : <InputBox />}
    </div>
  );
};
