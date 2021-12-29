import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StoryVideo from "../../assets/story-video.mp4";

import StoryLeft from "../../assets/leaf_amarachi4.png";
import StoryRight from "../../assets/leaf_amarachi2.png";

import "./story.scss";

const Story = () => {
  //register the plugin
  gsap.registerPlugin(ScrollTrigger);

  //parallax effect for the left image
  useEffect(() => {
    gsap.fromTo(
      ".story-left__image",
      {
        y: 0,
      },
      {
        y: -350,
        scrollTrigger: {
          trigger: ".story-left__image",
          scrub: true,
          start: "top +=600",
          end: "bottom top",
          duration: 1,
        },
      }
    );
  }, []);

  //parallax effect for the right image
  useEffect(() => {
    gsap.fromTo(
      ".story-right__image",
      {
        y: 0,
      },
      {
        y: -250,
        scrollTrigger: {
          trigger: ".story-right__image",
          start: "top +=600",
          end: "bottom top",
          duration: 1,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="story-container">
      <div className="story-text__container">
        <h2 className="title">The Story of Amarachi</h2>
        <div className="paragraphs">
          <div className="left-paragraph">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="right-paragraph">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="story-video__container">
        <video className="story-video" controls muted>
          <source src={StoryVideo} type="video/mp4" />
        </video>
      </div>
      <div className="story-left__image">
        <img className="left-image" src={StoryLeft} alt="leaf" />
      </div>
      <div className="story-right__image">
        <img className="right-image" src={StoryRight} alt="leaf" />
      </div>
    </div>
  );
};

export default Story;
