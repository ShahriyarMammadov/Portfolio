import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
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
  );
};

export default HomePage;
