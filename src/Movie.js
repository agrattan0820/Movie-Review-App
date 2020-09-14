import React from "react";
import "./Movie.css";

function Movie({ title, description, image }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default Movie;
