"use client";
import React from "react";
import "./index.scss";
import PageNameAndBreadcrumbComponent from "@/components/pageName";
import ContactPage from "../../components/contact";

const Contact = () => {
  return (
    <div id="contactPage">
      <div className="container">
        <div className="pageName">
          <PageNameAndBreadcrumbComponent
            data={{ pageName: "Contact Us", breadcrumb: "Contact Us" }}
          />
        </div>
        <div className="paddingContainer">
          <ContactPage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
