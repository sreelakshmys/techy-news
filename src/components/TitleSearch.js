import React from "react";
import { NavLink } from "react-router-dom";
export default function TitleSearch({
  userInput,
  handleOnChange,
  handleSearch,
}) {
  return (
    <div className="title-area">
      <NavLink to="/" className="link">
        <h1 className="title">Techy News</h1>
      </NavLink>
      <div className="searchform">
        <input
          type="text"
          className="searchInput"
          placeholder="What are you looking for?"
          value={userInput}
          onChange={handleOnChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              return handleSearch;
            }
          }}
        />
        <button onClick={handleSearch} className="search">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="4.36289"
              cy="4.36289"
              r="3.86289"
              stroke="currentColor"
            ></circle>
            <rect
              width="1.09072"
              height="5.21053"
              rx="0.545362"
              transform="matrix(0.707106 -0.707108 0.707106 0.707108 6.54434 7.31555)"
              fill="currentColor"
            ></rect>
          </svg>
        </button>
      </div>
    </div>
  );
}
