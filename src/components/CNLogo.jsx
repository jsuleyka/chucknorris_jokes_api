import React from "react";
import "../stylesheets/CHLogo.css";
import logo from "../images/chucknorris_logo.png";

const CHLogo = () => (
  <div className="logo-container">
    <img src={logo} className="cn-logo" alt="ChuckNorris Logo" />
  </div>
);

export default CHLogo;
