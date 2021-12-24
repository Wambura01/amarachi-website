import React from "react";

import Navigation from "../navigation/navigation";
import RightNav from "../right-nav/right-nav";

import Tarragon from "../../assets/tarragon-landing.png";
import BgVideo from "../../assets/bg-video.mp4";
import bush from "../../assets/leaf_amarachi6.png";
import fern from "../../assets/leaf_amarachi5.png";

import "./landing.scss";

function Landing() {
  return (
    <div className="landing">
      <video autoPlay loop muted className="bg-video">
        <source src={BgVideo} type="video/mp4" />
      </video>
      <Navigation />
      <RightNav />
      <div className="main-content__container">
        <div className="main-text">
          <h2 className="title">Amarachi</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="main-image">
          <img src={Tarragon} alt="herb" />
        </div>
      </div>
      <div className="bottom-images">
        <div className="left">
          <img src={bush} alt="bush" />
        </div>
        <div className="right">
          <img src={fern} alt="bush" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
