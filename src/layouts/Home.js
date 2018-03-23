import React from "react";
import Landing from "../containers/landing";
import About from "../containers/about";
import Portfolio from "../containers/portfolio";
import Blog from "../containers/blog";
import Contact from "../containers/contact";

export default () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        background: "red",
        flexDirection: "column"
      }}
    >
      <Landing />
      <About />
      <Portfolio />
      {/* <Blog />*/}
      <Contact />
    </div>
  );
};
