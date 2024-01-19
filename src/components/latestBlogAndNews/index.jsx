import React from "react";
import "./index.scss";
import styles from "../../app/page.module.scss";
import { Image } from "antd";

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
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/qaychi-az.appspot.com/o/qaychiimages%2Fjavascript.png?alt=media&token=0d0b0977-d45a-47d6-b1d1-e37d1f6708c0"
                  }
                  alt="front end"
                />
              </div>
            </div>
            <div className="blog" data-aos="fade-left">
              <div className="image">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/qaychi-az.appspot.com/o/qaychiimages%2Fproblemsolving.png?alt=media&token=7f76bcd5-b360-4e15-a53b-f56aa534c5bd"
                  }
                  alt="software engineer"
                />
              </div>
            </div>
            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/qaychi-az.appspot.com/o/qaychiimages%2Fsoftwareengineer.png?alt=media&token=fb7037fa-a4ba-4cde-9bc5-6c389e35ee25"
                  }
                  alt="javascript"
                />
              </div>
            </div>
            <div className="blog" data-aos="fade-left">
              <div className="image">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/qaychi-az.appspot.com/o/qaychiimages%2Ffrontend.png?alt=media&token=fd7317c2-2021-4215-bfb7-d35c2ec2db19"
                  }
                  alt="problem solving"
                />
              </div>
            </div>

            <div className="blog" data-aos="fade-right">
              <div className="image">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/qaychi-az.appspot.com/o/qaychiimages%2Fdiploma.jpg?alt=media&token=d6d1b7c0-8553-4edc-8afe-68cee6ec23d7"
                  }
                  alt="code academy"
                />
              </div>
            </div>

            <div className="blog" data-aos="fade-left">
              <div className="image">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/qaychi-az.appspot.com/o/qaychiimages%2Fcertificates.jpg?alt=media&token=8f37c1da-ded2-48fa-9656-df8b447ce6b5"
                  }
                  alt="code academy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogAndNews;
