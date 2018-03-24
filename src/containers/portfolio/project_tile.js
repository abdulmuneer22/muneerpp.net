import React, { Component } from "react";
import Card from "../../components/Card";
import Icon from "../../icons";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  handleOnClick = () => {
    const { push,name } = this.props;
    push(`/project-details/${name}`);
  };

  render() {
    const { name, sub, category, thumb, onClick } = this.props;
    const { hovered } = this.state;
    return (
      <Card
        style={{
          backgroundImage: !hovered ? thumb : "",
          alignItems: "center",
          justifyContent: "center"
        }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        {hovered && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%"
            }}
          >
            <Title color="black" size="10">
              {name}
            </Title>
            <Title color="black" size="10">
              {sub}
            </Title>

            <Button border="green" color="green" onClick={this.handleOnClick}>
              Learn more
            </Button>
          </div>
        )}
      </Card>
    );
  }
}

export default ProjectTile;
