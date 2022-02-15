import "./App.css";
import React, { useState, useEffect } from "react";
import TitleSearch from "./components/TitleSearch";
import Articles from "./components/Articles";

const API_URL = "https://hn.algolia.com/api/v1/search?";

export default function App() {
  const [newsStories, setNewsStories] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hitsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Initial state
  useEffect(() => {
    setIsLoading(true);

    const url = userInput
      ? `${API_URL}query=${userInput}&hitsPerPage=${hitsPerPage}&page=${currentPage}`
      : `${API_URL}tags=front_page&hitsPerPage=${hitsPerPage}&page=${currentPage}`;

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then((res) => {
        setNewsStories(res.hits);
        setTotalPages(res.nbPages);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [currentPage, userInput, hitsPerPage, totalPages]);

  function handleOnChange(event) {
    setUserInput(event.target.value);
  }

  function handleSearch() {
    if (userInput) {
      const filteredNewsStories = newsStories.filter((newsItem) => {
        if (newsItem.title.toLowerCase().includes(userInput.toLowerCase())) {
          return newsItem;
        }
      });
      setNewsStories(filteredNewsStories);
    }
  }

  return (
    <div className="App">
      <div className="main">
        <TitleSearch
          userInput={userInput}
          handleOnChange={handleOnChange}
          handleSearch={handleSearch}
        />
        <Articles
          newsStories={newsStories}
          isLoading={isLoading}
          currentPage={currentPage}
          hitsPerPage={hitsPerPage}
        />
      </div>
    </div>
  );
}
