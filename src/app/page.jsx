"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import TextTypist from "@/components/typist";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowTrendUp,
  faAsterisk,
  faCheck,
  faEnvelope,
  faLaptopCode,
  faLocationArrow,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import myImage from "../../public/myImage.png";
import myImage1 from "../../public/myImage1.jpg";
import myImage2 from "../../public/myImage2.jpg";
import aboutMeAnimatedImage from "../../public/aboutMeAnimatedImage.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../../public/skills/html.png";
import css from "../../public/skills/css.png";
import typescript from "../../public/skills/typescript.png";
import javascript from "../../public/skills/javascript.png";
import nextjs from "../../public/skills/nextjs.svg";
import nodejs from "../../public/skills/nodejs.svg";
import react from "../../public/skills/react.svg";
import express from "../../public/skills/express.svg";
import project1 from "../../public/project1.jpg";
import project2 from "../../public/project2.jpg";
import ContactPage from "@/components/contact";
import LatestBlogAndNews from "@/components/latestBlogAndNews";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  const [experience, setExperience] = useState(0);
  const [project, setProject] = useState(0);
  const [client, setClient] = useState(0);

  useEffect(() => {
    const increaseExperience = () => {
      if (experience < 2) {
        setExperience(experience + 1);
      }
    };

    const increaseProject = () => {
      if (project < 10) {
        setProject(project + 1);
      }
    };

    const increaseClient = () => {
      if (client < 100) {
        setClient(client + 1);
      }
    };

    const experienceTimer = setInterval(increaseExperience, 100);
    const projectTimer = setInterval(increaseProject, 100);
    const clientTimer = setInterval(increaseClient, 100);

    return () => {
      clearInterval(experienceTimer);
      clearInterval(projectTimer);
      clearInterval(clientTimer);
    };
  }, [experience, project, client]);

  return (
    <main className={styles.homePage}>
      <div className={styles.firstSection}>
        <div className={styles.leftDescription} data-aos="fade-up">
          <div className={styles.flexDiv}>
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
          <div className={styles.centerImage} data-aos="zoom-in">
            <Image src={myImage} alt="myImage" priority />
          </div>
        </div>

        <div className={styles.experience} data-aos="fade-left">
          <div>
            <p className={styles.number}>{experience}+</p>
            <p>Years Of Experience</p>
          </div>
          <hr />
          <div>
            <p className={styles.number}>{project}+</p>
            <p>Project Complete</p>
          </div>
          <hr />
          <div>
            <p className={styles.number}>{client}%</p>
            <p>Client Satisfactions</p>
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
            <div className={styles.left} data-aos="fade-up-right">
              <h1>
                Professional <span>Problem Solutions</span> For Digital Products
              </h1>
              <p>
                At vero eos et accusamus etodio dignissimos ducimus praesentium
                voluptatum corrupti quos dolores quas molestias excepturi sint
                occaecati cupiditate provident qui officia deserunt mollitia
                animi, id est laborum et dolorum
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

            <div className={styles.right} data-aos="fade-up-left">
              <Image
                src={aboutMeAnimatedImage}
                alt="anime"
                className={styles.animatedImage}
              />
              <div className={styles.image}>
                <Image src={myImage1} alt="Shahriyar Mammadov" priority />
              </div>

              <div className={styles.myRole}>
                <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
                <h4>Software Developer</h4>
                <FontAwesomeIcon icon={faArrowTrendUp} />
              </div>
              <div className={styles.myName}>
                <Image src={myImage2} alt="Shahriyar" />
                <h4>Shahriyar M.</h4>
                <FontAwesomeIcon icon={faArrowTrendUp} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY RESUME */}
      <section className={styles.myResumeSection}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.leftLogo} data-aos="zoom-out-right">
              <FontAwesomeIcon icon={faAsterisk} className={styles.logo} />
            </div>

            <div className={styles.right}>
              <div className={styles.sectionName} data-aos="zoom-out-right">
                <h5>My Resume</h5>
              </div>

              <div className="headText" data-aos="zoom-out-left">
                <h1>
                  Real <span>Problem Solutions</span> <br />
                  Experience
                </h1>
              </div>

              <div className={styles.resumeCard}>
                <div>
                  <div className={styles.card} data-aos="fade-up-right">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faLocationArrow} />
                    </div>
                    <div className={styles.name}>
                      <p>2021 - Present</p>
                      <h3>Full Stack Web Developer</h3>
                      <p>Google</p>
                    </div>
                  </div>
                  <div className={styles.card} data-aos="fade-up-left">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faLocationArrow} />
                    </div>
                    <div className={styles.name}>
                      <p>2021 - Present</p>
                      <h3>Full Stack Web Developer</h3>
                      <p>Google</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className={styles.card} data-aos="fade-up-right">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faLocationArrow} />
                    </div>
                    <div className={styles.name}>
                      <p>2021 - Present</p>
                      <h3>Full Stack Web Developer</h3>
                      <p>Google</p>
                    </div>
                  </div>
                  <div className={styles.card} data-aos="fade-up-left">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faLocationArrow} />
                    </div>
                    <div className={styles.name}>
                      <p>2021 - Present</p>
                      <h3>Full Stack Web Developer</h3>
                      <p>Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className={styles.popularServicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionName}>
            <h5>Popular Services</h5>
          </div>

          <div className={styles.headText} data-aos="zoom-out-up">
            <h1>
              My <span>Special Service</span> For your Business Development
            </h1>
          </div>

          <div className={styles.cards}>
            <div className={styles.card} data-aos="zoom-out-right">
              <div className={styles.number}>01.</div>
              <div className={styles.serviceName}>
                <h2>Brand Identity Design</h2>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </div>
            <div className={styles.card} data-aos="zoom-out-left">
              <div className={styles.number}>02.</div>
              <div className={styles.serviceName}>
                <h2>Brand Identity Design</h2>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </div>
            <div className={styles.card} data-aos="zoom-out-right">
              <div className={styles.number}>03.</div>
              <div className={styles.serviceName}>
                <h2>Brand Identity Design</h2>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </div>
            <div className={styles.card} data-aos="zoom-out-left">
              <div className={styles.number}>04.</div>
              <div className={styles.serviceName}>
                <h2>Brand Identity Design</h2>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY SKILLS */}
      <section className={styles.mySkills}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.sectionName} data-aos="fade-down-right">
              <h5>My Skills</h5>
            </div>
            <div className="headText" data-aos="fade-down-right">
              <h1>
                Let’s Explore Popular <span>Skills & Experience</span>
              </h1>

              <p>
                Sed ut perspiciatis unde omnis iste natus to voluptatem
                accusantium doloremque laudantium, totam rem aperiamc eaque ipsa
                quae ab illo inventore veritatis
              </p>
            </div>
          </div>

          <div className={styles.rightSkills} data-aos="flip-up">
            <div className={styles.skills}>
              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={html} alt="HTML" />
                </div>
                <div className={styles.skillName}>
                  <h4>Html</h4>
                </div>
                <div className={styles.skillPercentage}>100%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={css} alt="CSS" />
                </div>
                <div className={styles.skillName}>
                  <h4>Css</h4>
                </div>
                <div className={styles.skillPercentage}>100%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={typescript} alt="typescript" />
                </div>
                <div className={styles.skillName}>
                  <h4>TypeScript</h4>
                </div>
                <div className={styles.skillPercentage}>85%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={react} alt="REACT" />
                </div>
                <div className={styles.skillName}>
                  <h4>React</h4>
                </div>
                <div className={styles.skillPercentage}>95%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={express} alt="EXPRESS.JS" />
                </div>
                <div className={styles.skillName}>
                  <h4>Express.js</h4>
                </div>
                <div className={styles.skillPercentage}>100%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={nodejs} alt="NODE.JS" />
                </div>
                <div className={styles.skillName}>
                  <h4>Node.js</h4>
                </div>
                <div className={styles.skillPercentage}>95%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={nextjs} alt="NEXT.JS" />
                </div>
                <div className={styles.skillName}>
                  <h4>Next.js</h4>
                </div>
                <div className={styles.skillPercentage}>90%</div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillLogo}>
                  <Image src={javascript} alt="JAVASCRIPT" />
                </div>
                <div className={styles.skillName}>
                  <h4>JavaScript</h4>
                </div>
                <div className={styles.skillPercentage}>90%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST WORKS */}
      <section className={styles.latestWorksSection}>
        <div className={styles.container}>
          <div className={styles.sectionName}>
            <h5>Latest Works</h5>
          </div>
          <div className={styles.headText}>
            <h1>
              Explore My Popular <span>Projects</span>
            </h1>
          </div>

          <div className={styles.projects}>
            <div className={styles.project}>
              <div className={styles.image} data-aos="fade-right">
                <Image src={project1} alt="Project 1" />
              </div>
              <div className={styles.projectDescription} data-aos="fade-left">
                <b>FullStack Builder</b>
                <Link href={"/projectDetail"}>WebSite Builder</Link>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis architecto beatae
                </p>

                <div className={styles.icon}>
                  <Link href={"/projectDetail"}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDescription} data-aos="fade-right">
                <b>FullStack Builder</b>
                <Link href={"/projectDetail"}>WebSite Builder</Link>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis architecto beatae
                </p>

                <div className={styles.icon}>
                  <Link href={"/projectDetail"}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </Link>
                </div>
              </div>
              <div className={styles.image} data-aos="fade-left">
                <Image src={project2} alt="Project 2" />
              </div>
            </div>
          </div>

          <div className={styles.viewMoreButton}>
            <Link href={"/allProjects"} className={styles.btn}>
              View More Projects <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST BLOG AND NEWS SECTION */}
      <LatestBlogAndNews />

      {/* CONTACT SECTION */}
      <ContactPage />
    </main>
  );
}
