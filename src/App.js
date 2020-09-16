import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import FilmReel from "./images/film_reel.jpg";
import "./sass/App.scss";

function App() {
  const API_KEY = "pkHjVPMSv0I48ATgtjYQBaDyGJGIszNk";

  const [reviews, setReviews] = useState([]);
  const [offsetNum, setOffsetNum] = useState(0);
  const [morePages, setMorePages] = useState();
  const [loading, setLoading] = useState(false);

  const nextPage = () => {
    if (morePages) {
      setOffsetNum(offsetNum + 20);
    }
  };

  const prevPage = () => {
    if (offsetNum !== 0) {
      setOffsetNum(offsetNum - 20);
    }
  };

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, [offsetNum]);

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
        {!loading && (
          <nav>
            {offsetNum !== 0 && (
              <button className="prev-page-btn" onClick={prevPage}>
                Previous Page
              </button>
            )}
            {morePages && (
              <button className="next-page-btn" onClick={nextPage}>
                Next Page
              </button>
            )}
          </nav>
        )}
      </header>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <div className="movie-list">
          {reviews.map((review, index) => (
            <Movie
              key={index}
              link={review.link.url}
              title={
                review.display_title === null
                  ? "No Title Found"
                  : review.display_title
              }
              description={
                review.summary_short === null
                  ? "No Summary Found"
                  : review.summary_short
              }
              image={
                review.multimedia === null ? FilmReel : review.multimedia.src
              }
            />
          ))}
        </div>
      )}
      {!loading && (
        <footer>
          <nav>
            {offsetNum !== 0 && (
              <button className="prev-page-btn" onClick={prevPage}>
                Previous Page
              </button>
            )}
            {morePages && (
              <button className="next-page-btn" onClick={nextPage}>
                Next Page
              </button>
            )}
          </nav>
        </footer>
      )}
    </div>
  );
}

export default App;
