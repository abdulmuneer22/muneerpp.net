import React from "react";
import Landing from "../containers/landing";
import About from "../containers/about";
import Portfolio from "../containers/portfolio";
// import Blog from "../containers/blog";
import Contact from "../containers/contact";
import ProjectDetails from "../containers/project_details";
import Footer from '../components/Footer'

export default ({ history }) => {
  // console.log("Home props", props);
  return (
    <div>
      <Landing />
      <About />
      <Portfolio {...history} />
      <Contact />
      <Footer />
    </div>
  );
};
