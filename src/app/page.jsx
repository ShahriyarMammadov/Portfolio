"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import TextTypist from "@/components/typist";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowTrendUp,
  faCheck,
  faEnvelope,
  faLaptopCode,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import myImage from "../../public/myImage.png";
import myImage1 from "../../public/myImage1.jpg";
import aboutMeAnimatedImage from "../../public/aboutMeAnimatedImage.png";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.firstSection}>
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
              <Link href="#">
                Download Resume
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>

          <div className={styles.centerImage}>
            <Image src={myImage} alt="myImage" priority />
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

        {/* ABOUT ME */}
        <section className={styles.aboutMeSection}>
          <div className={styles.container}>
            <div className={styles.sectionName}>
              <h5>About Me</h5>
            </div>
            <div className={styles.flex}>
              <div className={styles.left}>
                <h1>
                  Professional <span>Problem Solutions</span> For Digital
                  Products
                </h1>
                <p>
                  At vero eos et accusamus etodio dignissimos ducimus
                  praesentium voluptatum corrupti quos dolores quas molestias
                  excepturi sint occaecati cupiditate provident qui officia
                  deserunt mollitia animi, id est laborum et dolorum
                </p>

                <div className={styles.checkDiv}>
                  <div className={styles.check}>
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      <h2>Branding & Design</h2>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      <h2>Web Development</h2>
                    </div>
                  </div>
                  <div className={styles.check}>
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      <h2>Product Design</h2>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      <h2>Digital Marketing</h2>
                    </div>
                  </div>
                </div>

                <div className={styles.contactMe}>
                  <div className={styles.mail}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div>
                      <p>Email Us</p>
                      <a href="mailto:shahriyarmammadov@gmail.com">
                        shahriyarmammadov@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className={styles.phone}>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    <div>
                      <p>Make A Call</p>
                      <a href="tel:+994503134473">+994 (50) 313 4473</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.right}>
                <Image
                  src={aboutMeAnimatedImage}
                  alt="anime"
                  className={styles.animatedImage}
                />
                <div className={styles.image}>
                  <Image src={myImage1} alt="Shahriyar Mammadov" priority />
                </div>

                <div className={styles.myRole}>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={styles.image}
                    size="2xl"
                  />
                  <h4>Software Developer</h4>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </div>
                <div className={styles.myName}>
                  <Image src={myImage} alt="Shahriyar" />
                  <h4>Shahriyar M.</h4>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
