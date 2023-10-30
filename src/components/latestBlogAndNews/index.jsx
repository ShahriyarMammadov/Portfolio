import React from "react";
import "./index.scss";
import styles from "../../app/page.module.scss";
import Image from "next/image";
import codeacademy from "../../../public/certificates/code.jpg";
import frontEnd from "../../../public/certificates/frontend.png";
import javascript from "../../../public/certificates/javascript.png";
import problemsolving from "../../../public/certificates/problemsolving.png";
import softwareengineer from "../../../public/certificates/softwareengineer.png";

const LatestBlogAndNews = () => {
  return (
    <div id="latestBlogAndNewsPage">
      <div className={styles.container}>
        <div className={styles.sectionName}>
          <h5>Certificates & Diploma</h5>
        </div>
        <div className="headText">
          <h1>
            Certificates & <span>Diploma</span>
          </h1>

          <div className="blogs">
            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image src={frontEnd} alt="front end" />
              </div>
            </div>
            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image src={softwareengineer} alt="software engineer" />
              </div>
            </div>
            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image src={javascript} alt="javascript" />
              </div>
            </div>
            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image src={problemsolving} alt="problem solving" />
              </div>
            </div>

            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image src={codeacademy} alt="code academy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogAndNews;
