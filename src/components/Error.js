import React from "react";
import ErrorImg from "../images/error.png";
import "../App.css";
import { Helmet } from "react-helmet-async";



export default function Error() {
  return (
    
    <div className="wrapper">
      <Helmet>
      <title>Error</title>
        <meta name="description" content="Error Page of my Altschool Africa second semester examination"></meta>
      </Helmet>
      <h2>Error 404: Contact Page Not Found!</h2>
      <h5>Contact Support...Oops! </h5>
     <div className="error">
      <img src={ErrorImg} alt="" />
    </div>
    </div>
  );
}
