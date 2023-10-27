import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PageNameAndBreadcrumbComponent = ({ data }) => {
  return (
    <div id="PageNameAndBreadcrumbComponent">
      <div className="pageName">
        <h1>{data?.pageName}</h1>
      </div>
      <div className="breadcrumb">
        <Link href={"/"}>Home</Link>
        <FontAwesomeIcon icon={faShoePrints} />
        <p className="currentPage">{data?.breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageNameAndBreadcrumbComponent;
