import React from "react";
import "./sass/App.scss";

function Movie({ link, title, description, image }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="movie-container">
        <h1 className="movie-title">{title}</h1>
        <hr />
        <p className="movie-description">{description}</p>
        <img className="movie-image" src={image} alt={title} />
      </div>
    </a>
  );
}

export default Movie;
