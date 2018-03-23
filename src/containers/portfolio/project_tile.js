import React, { Component } from "react";
import Card from "../../components/Card";
import Icon from "../../icons";
import Title from "../../components/Title";
import Button from '../../components/Button'

export class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    const { name, sub, category } = this.props;
    const { hovered } = this.state;
    return (
      <Card
        style={{
          backgroundImage: !hovered ? 'url("/assets/thumb.jpg")' : "",
          alignItems : 'center',
          justifyContent : 'center'
        }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        {hovered && (
          <div
          style={{
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent :'center',
            height : '100%',
          }}
          >
            <Title color="black" size="10">{name}</Title>
            <Title color="black" size="10">{sub}</Title>
            <Button
            border="green"
            color="green"
            >
              Learn more
            </Button>
          </div>
        )}
      </Card>
    );
  }
}

export default ProjectTile;
