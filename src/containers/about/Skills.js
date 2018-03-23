import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 50px 0px;
  flex-direction: column;
  margin : 30px 0px;

  & > img {
    width: 180px;
    height: 180px;
    border-radius: ${180 / 2}px;
    margin: 20px 0px;
  }

  .d_r {
    background: white;
    border: 1px solid #9fabb0;
    padding: 10px 25px;
    margin: 20px 10px;
    color: #9fabb0;
  }
`;

export default () => {
  return (
    <Wrapper>
      <img src={"/assets/me.jpg"} />

      <div>Muneer</div>
      <div>
        React Native , React JS , Node JS , Graphql Developer and Trainer.
      </div>

      <div className="d_r">DOWNLOAD RESUME</div>
    </Wrapper>
  );
};
