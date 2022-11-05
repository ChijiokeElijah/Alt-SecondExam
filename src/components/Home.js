import React from "react";
import deskImage from "../images/image-hero-desktop.png";
import "../App.css";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    
    <main className="main-container">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home Page of my Altschool Africa second semester examination" />
        <link rel="canonical" href="/"/>
      </Helmet>
      <div className="row">
        <div className="col-2">
          <h1> ALTSCHOOL SCHOOL OF ENGINEERING</h1>
          <h2>SECOND SEMESTER EXAMINATION</h2>
          <h3 className="question">QUESTION No. 4</h3>
          <p>
            Set a firebase hosting and authentication using the Google
            Authentication method, and set up backend pagination using
            randomuser.me paginated API URLs. Show the necessary navigation and
            its disabled state. Show accessibility state as well. Show SEO for
            each page, show a navigation menu at the top of each page, implement
            Error boundary and provide a page to test it, 404 page, and proper
            UI designs.<br/> <b>Modality of submission</b> Create a new repository for your
            project on GitHub Invite me as a collaborator, GitHub username
            (@oluwasetemi). Put the hosted link (Netlify, Vercel and Firebase
            are the only accepted links) on the GitHub repo link below the
            description of the project and put the same link in the README of
            the project.
          </p>
          <button>Sign In with Google</button>
        </div>
        <div className="col-2">
          <img src={deskImage} alt="" />
        </div>
      </div>
    </main>
  );
}
