import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.min.css";
import registerServiceWorker from "./registerServiceWorker";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
