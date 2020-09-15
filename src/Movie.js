import React from "react";
import "./sass/App.scss";

function Movie({ title, description, image }) {
  return (
    <div className="movie-container">
      <h1 className="movie-title">{title}</h1>
      <hr />
      <p className="movie-description">{description}</p>
      <img className="movie-image" src={image} alt={title} />
    </div>
  );
}

export default Movie;
