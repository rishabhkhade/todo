import React from "react";
import "./Search.scss";

const placeholders = [
  "chocolate box",
  "cheese",
  "apple juice",
  "orange",
  "pineapple",
];

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <span className="search-icon">🔍</span>

        <div className="placeholder-wrapper">
          <div className="placeholder-text">
            Search for
            <div className="listing-wrapper">
              {placeholders.map((item, index) => (
                <span className="listing">"{item}"</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
