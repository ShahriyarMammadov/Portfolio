import React from "react";
import "./index.scss";
import movieApp from "../../images/movie.png";
import rental from "../../images/rental.png";
import shortly from "../../images/shortly.png";
import universities from "../../images/universities.png";
import country from "../../images/country.png";
import github from "../../images/github.png";

const ProjectCards = () => {
  return (
    <div>
      <div className="cards">
        <a href="https://zingy-entremet-bf70c0.netlify.app" target={"_blank"}>
          <div className="card">
            <div className="image">
              <img src={shortly} alt="" />
            </div>
            <div className="cardBody">
              <h2>Shortling Api Landing Page</h2>
            </div>
          </div>
        </a>
        <a href="https://sunny-zuccutto-110f2c.netlify.app" target={"_blank"}>
          <div className="card">
            <div className="image">
              <img src={movieApp} alt="" />
            </div>
            <div className="cardBody">
              <h2>Movie Search and About App</h2>
            </div>
          </div>
        </a>
        <a href="https://prismatic-babka-55c1c4.netlify.app" target={"_blank"}>
          <div className="card">
            <div className="image">
              <img src={rental} alt="" />
            </div>
            <div className="cardBody">
              <h2>Rental Page</h2>
            </div>
          </div>
        </a>
        <a
          href="https://symphonious-fairy-964a7e.netlify.app/"
          target={"_blank"}
        >
          <div className="card">
            <div className="image">
              <img src={github} alt="" />
            </div>
            <div className="cardBody">
              <h2>GitHub Users Search App</h2>
            </div>
          </div>
        </a>
        <a
          href="https://graceful-pithivier-45fdf6.netlify.app"
          target={"_blank"}
        >
          <div className="card">
            <div className="image">
              <img src={country} alt="" />
            </div>
            <div className="cardBody">
              <h2>Country Search and About App</h2>
            </div>
          </div>
        </a>
        <a href="https://luminous-otter-a5f888.netlify.app/" target={"_blank"}>
          <div className="card">
            <div className="image">
              <img src={universities} alt="" />
            </div>
            <div className="cardBody">
              <h2>Universities Search App</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
