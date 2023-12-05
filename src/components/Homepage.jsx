import React from "react";
import { Link } from "react-router-dom";
import Secondary from "./Secondary";

const Homepage = (props) => {
  return (
    <div>
      <h1>Hello welcome to the HomePage</h1>
      <Secondary></Secondary>
      <Link to="/two">Second clickz</Link>
    </div>
  );
};

export default Homepage;
