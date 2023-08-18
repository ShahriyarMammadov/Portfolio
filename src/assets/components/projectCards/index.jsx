import React from "react";
import "./index.scss";
import movieApp from "../../images/movie.png";
import rental from "../../images/rental.png";
import shortly from "../../images/shortly.png";
import universities from "../../images/universities.png";
import country from "../../images/country.png";
import github from "../../images/github.png";
import magicBook from "../../images/magic.png";
import delta from "../../images/delta.png";

const ProjectCards = () => {
  return (
    <>
      <div>
        <div className="cards">
          <a href="https://shortenerurlapp.netlify.app/" target={"_blank"}>
            <div className="card">
              <div className="image">
                <img src={shortly} alt="" />
              </div>
              <div className="cardBody">
                <h2>Shortling Api Landing Page</h2>
              </div>
            </div>
          </a>
          <a href="https://searchmoviesapplication.netlify.app/" target={"_blank"}>
            <div className="card">
              <div className="image">
                <img src={movieApp} alt="" />
              </div>
              <div className="cardBody">
                <h2>Movie Search and About App</h2>
              </div>
            </div>
          </a>
          <a
            href="https://bookingdata.netlify.app/"
            target={"_blank"}
          >
            <div className="card">
              <div className="image">
                <img src={magicBook} alt="" />
              </div>
              <div className="cardBody">
                <h2>Magic Books</h2>
              </div>
            </div>
          </a>
          <a
            href="https://e-delta.netlify.app/"
            target={"_blank"}
          >
            <div className="card">
              <div className="image">
                <img src={delta} alt="delta" />
              </div>
              <div className="cardBody">
                <h2>Delta E-commerce</h2>
              </div>
            </div>
          </a>
          <a
            href="https://prismatic-babka-55c1c4.netlify.app"
            target={"_blank"}
          >
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
            href="https://githubusersdetailssearch.netlify.app/"
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
            href="https://countyabout.netlify.app/"
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
          <a
            href="https://weathernext.netlify.app/"
            target={"_blank"}
          >
            <div className="card">
              <div className="image">
                <img src={universities} alt="" />
              </div>
              <div className="cardBody">
                <h2>Universities Search App</h2>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/ShahriyarMammadov"
            target={"_blank"}
            className="visit"
          >
            Visit my github Account For More projects
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
