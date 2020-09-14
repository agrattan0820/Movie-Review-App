import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./sass/App.scss";

function App() {
  const API_KEY = "pkHjVPMSv0I48ATgtjYQBaDyGJGIszNk";

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${API_KEY}`
    );
    const reviewData = await response.json();
    setReviews(reviewData.results);
    console.log(reviewData.results);
  };

  return (
    <div className="App">
      <div className="movie-list">
        {reviews.map((review) => (
          <Movie
            key={review.display_title}
            title={review.display_title}
            description={review.summary_short}
            image={review.multimedia.src}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
