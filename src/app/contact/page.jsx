import React from "react";
import "./index.scss";
import PageNameAndBreadcrumbComponent from "@/components/pageName";

const ContactPage = () => {
  return (
    <div id="contactPage">
      <div className="container">
        <div className="pageName">
          <PageNameAndBreadcrumbComponent
            data={{ pageName: "Contact Us", breadcrumb: "Contact Us" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
