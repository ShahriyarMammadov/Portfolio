import React from "react";
import "./index.scss";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import js from "../../images/javascript.svg";
import mongodb from "../../images/mongodb.svg";
import nodejs from "../../images/node-js.svg";
import sass from "../../images/sass.svg";
import expressjs from "../../images/express.svg";
import figma from "../../images/figma.svg";

const Skills = () => {
  return (
    <div className="skill">
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={js} alt="" />
      <img src={sass} alt="" />
      <img src={react} alt="" />
      <img src={redux} alt="" />
      <img src={nodejs} alt="" />
      <img src={mongodb} alt="" />
      <img src={expressjs} alt="" />
      <img src={figma} alt="" />
    </div>
  );
};

export default Skills;
