import React from "react";
import Loader from "./Loader";

export default function Articles({
  newsStories,
  isLoading,
  currentPage,
  hitsPerPage,
}) {
  return (
    <div className="articles">
      {isLoading ? (
        <div className="searchresults">
          <Loader />
        </div>
      ) : newsStories.length === 0 ? (
        <h4>Oops!! No results found. Try again :)</h4>
      ) : (
        <>
          {newsStories.map((newsItem, index) => (
            <a className="href-tag" href={newsItem.url} alt={newsItem.title}>
              <li key={newsItem.objectID}>
                {currentPage === 0
                  ? `${index + 1} . ${newsItem.title}`
                  : `${index + 1 + currentPage * hitsPerPage} . `}

                <p className="subtext">
                  {newsItem.points} points by {newsItem.author}
                </p>
              </li>
            </a>
          ))}
        </>
      )}
    </div>
  );
}
