import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./sass/App.scss";

function App() {
  const API_KEY = "pkHjVPMSv0I48ATgtjYQBaDyGJGIszNk";
  const offsetNum = 0;

  const [reviews, setReviews] = useState([]);
  const [morePages, setMorePages] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${API_KEY}&offset=${offsetNum}`
    );
    const reviewData = await response.json();
    setReviews(reviewData.results);
    setMorePages(reviewData.has_more);
    setLoading(false);
    console.log(reviewData);
  };

  return (
    <div className="App">
      <header>
        <h1>NYT Critic's Picks</h1>
      </header>
      {loading && <h2>Loading...</h2>}
      {!loading && (
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
      )}
      <footer>
        <nav>
          {offsetNum === 0 && <button>Previous Page</button>}
          {morePages && <button> Next Page</button>}
        </nav>
      </footer>
    </div>
  );
}

export default App;
