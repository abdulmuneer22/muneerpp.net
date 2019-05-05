import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Icon from "../../icons";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 50px 0px;
  flex-direction: column;
  margin: 30px 0px;

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
    a {
      color: black;
    }
  }
`;

const Para = styled.p`
  color: #333;
  max-width: 70%;
  font-size: 18px;
  line-height: 2;

  div > div {
    margin: 0px 5px;
  }

  text-align: justify;
`;

const p1 =
  "I am fascinated about technology , i wrote my first computer program at age of 12 . I have been hooked with technologies and trends . as a";
const full = ` I am fascinated about technology , i wrote my first computer program at
age of 12 . I have been hooked with technologies and trends . i did my bachelor degree in BE Computer Science . I am a
part time Mobile and Web App Developer and User Interface Designer , but first i am a
versatile person capable of switching into any technology though prefer
web based technologies since it got more audience than any other product
. Technology is ever changing animal . that's why it is always exciting
. I constantly gather new information and keep up to date through blog
posts , YouTube , Web Pages , local community forums and even occasional
journal articles . I understand the ways in which technology can be used
to enhance and drive your business to success .`;

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_full: false
    };
  }

  render() {
    const { show_full } = this.state;
    return (
      <Wrapper>
        <img src={"/assets/me.jpg"} />

        <div>Muneer</div>
        <div>
          React Native , React JS , Node JS , Graphql Developer and Trainer.
        </div>

        <Para>
          {full}
          {/* {!show_full ? (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div>{p1}</div>
              <Icon
                name="down"
                color="#333"
                onClick={() =>
                  this.setState({
                    show_full: true
                  })
                }
              />
            </div>
          ) : (
            full
          )} */}
        </Para>

        <div className="d_r">
          <a href="/assets/resume/muneer.pdf" download>
            DOWNLOAD RESUME
          </a>
        </div>
      </Wrapper>
    );
  }
}

export default Skills;
