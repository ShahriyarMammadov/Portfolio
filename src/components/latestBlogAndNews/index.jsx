import React from "react";
import "./index.scss";
import styles from "../../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const LatestBlogAndNews = () => {
  return (
    <div id="latestBlogAndNewsPage">
      <div className={styles.container}>
        <div className={styles.sectionName}>
          <h5>News & Blog</h5>
        </div>
        <div className="headText">
          <h1>
            Latest News & <span>Blog</span>
          </h1>

          <div className="blogs">
            <div className="blog">
              <div className="image">
                <Image src={blog1} alt="blog1" />
              </div>
              <div className="description">
                <div className="category">
                  <Link href={"/"}>Design</Link>
                  <Link href={"/"}>Figma</Link>
                </div>
                <Link href={"/"} className="blogName">
                  <h2>Tips For Conductin See Usability Studies</h2>
                </Link>
                <hr />
                <div className="date">
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faCalendarDays} /> September 25, 2023
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="image">
                <Image src={blog2} alt="blog1" />
              </div>
              <div className="description">
                <div className="category">
                  <Link href={"/"}>Design</Link>
                  <Link href={"/"}>Figma</Link>
                </div>
                <Link href={"/"} className="blogName">
                  <h2>Tips For Conductin See Usability Studies</h2>
                </Link>
                <hr />
                <div className="date">
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faCalendarDays} /> September 25, 2023
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="image">
                <Image src={blog2} alt="blog1" />
              </div>
              <div className="description">
                <div className="category">
                  <Link href={"/"}>Design</Link>
                  <Link href={"/"}>Figma</Link>
                </div>
                <Link href={"/"} className="blogName">
                  <h2>Tips For Conductin See Usability Studies</h2>
                </Link>
                <hr />
                <div className="date">
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faCalendarDays} /> September 25, 2023
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="image">
                <Image src={blog1} alt="blog1" />
              </div>
              <div className="description">
                <div className="category">
                  <Link href={"/"}>Design</Link>
                  <Link href={"/"}>Figma</Link>
                </div>
                <Link href={"/"} className="blogName">
                  <h2>Tips For Conductin See Usability Studies</h2>
                </Link>
                <hr />
                <div className="date">
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faCalendarDays} /> September 25, 2023
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="image">
                <Image src={blog2} alt="blog1" />
              </div>
              <div className="description">
                <div className="category">
                  <Link href={"/"}>Design</Link>
                  <Link href={"/"}>Figma</Link>
                </div>
                <Link href={"/"} className="blogName">
                  <h2>Tips For Conductin See Usability Studies</h2>
                </Link>
                <hr />
                <div className="date">
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faCalendarDays} /> September 25, 2023
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogAndNews;
