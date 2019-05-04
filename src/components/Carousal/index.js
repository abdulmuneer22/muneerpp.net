// import React from "react";
// import data from "./data";

// export default ({ projectDetails }) => {
//   return (
//     <img
//       src={projectDetails.images[0]}
//       style={{
//         width: "380px",
//         margin: "0 auto"
//       }}
//     />
//   );
// };

import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SimpleSlider = ({ projectDetails }) => (
  <Slider {...settings}>
    {projectDetails.images.map(itm => (
      <img src={itm} />
    ))}
  </Slider>
);

export default SimpleSlider;
