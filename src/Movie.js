import React from "react";
import "./sass/App.scss";

function Movie({ title, description, image }) {
  return (
    <div className="movie-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default Movie;
