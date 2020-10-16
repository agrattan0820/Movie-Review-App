import React from "react";
import "./sass/App.scss";
import { motion } from "framer-motion";

function Movie({ link, title, description, image, year, month, day }) {
  const movieAnimations = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={movieAnimations}
      initial="hidden"
      animate="visible"
    >
      <div className="movie-container">
        <h1 className="movie-title">{title}</h1>
        <hr />
        <p className="movie-description">{description}</p>
        <img className="movie-image" src={image} alt={title} />
        <p className="movie-year">
          Published: {month}/{day}/{year}
        </p>
      </div>
    </motion.a>
  );
}

export default Movie;
