import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const APP_ID = "d8a584d9-bd2a-4731-bee0-de61d97049ba";
  const API_KEY = "pkHjVPMSv0I48ATgtjYQBaDyGJGIszNk";

  const exampleCall =
    "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
