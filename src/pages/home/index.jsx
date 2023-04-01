import React, { useEffect, useState } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../../assets/components/skills";
import ProjectCards from "../../assets/components/projectCards";
import ContactComponent from "../../assets/components/contact";
import CVURL from "../../assets/CV.pdf";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    AOS.init({
      disable: isMobile,
    });
    AOS.refresh();
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Shahriyar Mammadov",
        text: "Shahriyar's Portfolio",
        url: "https://dazzling-fenglisu-d9353d.netlify.app/",
      });
    } else {
      alert("your browser don't support");
    }
  };

  return (
    <>
      <section id="section1">
        <div className="box">
          <div
            className="leftAboutText"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <h1>Hi, I am Shahriyar Mammadov, I am a Front-end Developer.</h1>
            <i
              className="fa-solid fa-share-from-square"
              onClick={handleShare}
            ></i>
          </div>

          <div
            className="image"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          ></div>
        </div>
      </section>

      <section id="section2">
        <div
          className="headerText"
          data-aos="fade-up-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <h1>About</h1>
          <div className="hr"></div>
        </div>

        <div
          className="aboutText"
          data-aos="fade-up-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div className="text">
            <p>
              My name is Shahriyar Mammadov, I was born on 20.05.2002 in Baku, I
              have been studying Bachelor of Computer Science at Azerbaijan
              Technical University since 2020, in the same year I studied Full
              Stack Web Development in the <i>#codeforfuture</i> project
              organized by Code Academy and I graduated successfully (96/100).
              During my studies, I learned HTML, CSS, javascript, React, Redux,
              next.js, Figma, node.js, express.js, etc. I have acquired deep
              knowledge of working with a team.
            </p>

            <a href={CVURL} download="Shahriyar Mammadov">
              download CV
            </a>
          </div>

          <div
            className="skills"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="115"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-once="true"
          >
            <div className="headerText skills">
              <h1>My Skills</h1>
              <div className="hr"></div>
            </div>

            <Skills />
          </div>
        </div>
      </section>

      <section
        id="section3"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-offset="20"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <div className="headerText">
          <h1>My Projects</h1>
          <div className="hr"></div>
        </div>
        <ProjectCards />
      </section>

      <section
        id="contact"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-offset="125"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <div className="headerText">
          <h1>Contact Me</h1>
          <div className="hr"></div>
        </div>
        <div className="contact">
          <div className="right">
            <ContactComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
