import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../../assets/components/skills";
import ProjectCards from "../../assets/components/projectCards";
import ContactComponent from "../../assets/components/contact";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
            data-aos-once="false"
          >
            <h1>Hi, I am Shahriyar Mammadov, I am a Front-end Developer.</h1>
          </div>

          <div
            className="image"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
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
        >
          <div className="text">
            <p>
              My name is Shahriyar Mammadov, I was born on 20.05.2002 in Baku, I
              have been studying Bachelor of Computer Science at Azerbaijan
              Technical University since 2020, in the same year I studied Full
              Stack Web Developer in the <i>#codeforfuture</i> project organized
              by Code Academy and graduated successfully..
            </p>
            <img src="https://icons8.com/icon/jD-fJzVguBmw/redux" alt="" />
          </div>

          <div
            className="skills"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="115"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <div className="headerText">
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
