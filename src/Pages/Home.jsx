import React from "react";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link to="/movie-list">Go to Movie List</Link>
    </>
  );
};

export default Home;
