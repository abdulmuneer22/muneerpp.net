import React from "react";
import Card from "../../components/Card";
import Icon from "../../icons";

export default ({ name, sub, category }) => (
  <Card
    style={{
      backgroundImage: 'url("/assets/thumb.jpg")'
    }}
  >
    {name}
    {sub}
    {category}
  </Card>
);
