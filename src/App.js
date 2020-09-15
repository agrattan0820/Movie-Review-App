import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./sass/App.scss";

function App() {
  const API_KEY = "pkHjVPMSv0I48ATgtjYQBaDyGJGIszNk";

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${API_KEY}`
    );
    const reviewData = await response.json();
    setReviews(reviewData.results);
    setLoading(false);
    console.log(reviewData.results);
  };

  return (
    <div className="App">
      <header>
        <h1>NYT Critic's Picks</h1>
      </header>
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
      <footer></footer>
    </div>
  );
}

export default App;
