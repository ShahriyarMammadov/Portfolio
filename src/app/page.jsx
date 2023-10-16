"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import TextTypist from "@/components/typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import myImage from "../../public/myImage.png";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.leftDescription}>
          <h2>Hello, i'm</h2>
          <h1>Shahriyar Mammadov</h1>
          <TextTypist
            textArray={[500, "web developer", 1000, "web designer"]}
          />
          <p>
            We denounce with righteous indignation dislike demoralized by the
            charms of pleasure
          </p>

          <div>
            <button>
              Hire Me <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <a href="#">
              Download Resume
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>

        <div className={styles.centerImage}>
          <Image src={myImage} alt="myImage" />
          <div className={styles.experience}>
            <div>
              <p className={styles.number}>2+</p>
              <p>Years Of Experience</p>
            </div>
            <hr />
            <div>
              <p className={styles.number}>10+</p>
              <p>Project Complete</p>
            </div>
            <hr />
            <div>
              <p className={styles.number}>100%</p>
              <p>Client Satisfactions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
