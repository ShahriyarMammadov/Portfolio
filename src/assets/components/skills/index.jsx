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
import nextjs from "../../images/nextjs.png";
import typescript from "../../images/typescript.png";

const Skills = () => {
  return (
    <div className="skill">
      <img src={html} alt="html" />
      <img src={css} alt="css" />
      <img src={js} alt="js" />
      <img src={sass} alt="sass" />
      <img src={react} alt="react" />
      <img src={redux} alt="redux" />
      <img src={nodejs} alt="nodejs" />
      <img src={mongodb} alt="mongodb" />
      <img src={expressjs} alt="expressjs" />
      <img src={figma} alt="figma" />
      <img src={nextjs} alt="nextjs" />
      <img src={typescript} alt="typescript" />
    </div>
  );
};

export default Skills;
