import React from "react";
import "./App.css";

function Movie({ title, image }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>Description</p>
      <img src={image} alt="" />
    </div>
  );
}

export default Movie;
