import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import ProjectTile from "./project_tile";
import pList from "./pList";
import FlexWrap from "../../components/FlexWrap";
import Title from "../../components/Title";
import { Modal } from "antd";
import Toggles from "./Toggle";

import "./modal.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      activeTab: 0
    };
  }

  handleLearnMore = () => {
    this.setState({
      showModal: true
    });
  };

  updateTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  render() {
    const { showModal, activeTab } = this.state;
    return (
      <div>
        <Wrapper
          background_color="white"
          style={{
            marginTop: "30px"
          }}
        >
          <Title color="black" border_width="3px">
            PROJECTS
          </Title>

          <Toggles activeTab={activeTab} updateTab={this.updateTab} />

          <FlexWrap>
            {pList.map((p, ind) => (
              <ProjectTile
                {...p}
                key={ind}
                onClick={this.handleLearnMore}
                {...this.props}
              />
            ))}
          </FlexWrap>
        </Wrapper>
      </div>
    );
  }
}
