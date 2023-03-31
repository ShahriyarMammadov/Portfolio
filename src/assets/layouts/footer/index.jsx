import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./index.scss";

const Footer = () => {
  const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <h3>{date}</h3>
      <h1>
        Made By Shahriyar{" "}
        <span>created at: {moment("20230201", "YYYYMMDD").fromNow()}</span>
      </h1>
    </footer>
  );
};

export default Footer;
