import React from "react";
import { Helmet } from "react-helmet-async";

const User = ({ user }) => {
  return (
    <div className=" data data-row">
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Page to display list of users fetched from API for my Altschool Africa second semester examination"/>
        <link rel="canonical" href="/users"/>
      </Helmet>
      <div className="img-div">
        <img src={`${user.picture.medium}`} alt="" />
      </div>
      <div className="data-info">
        <p className="info-name">{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        <p>{`Gender: ${user.gender}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Age: ${user.dob.age} Years Old`}</p>
      </div>
    </div>
  );
};

export default User;
