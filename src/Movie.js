import React, { useEffect } from "react";
import "./sass/App.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Movie({ link, title, description, image, year, month, day }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const movieAnimations = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    tap: { scale: 0.9 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={movieAnimations}
      ref={ref}
      initial="hidden"
      animate={controls}
      whileTap="tap"
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
