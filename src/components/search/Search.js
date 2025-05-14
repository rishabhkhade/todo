import React from "react";
import "./Search.scss";

const placeholders = [
  "cheese",
  "apple juice",
  "orange",
  "pineapple",
  "kurkure",
  "amul butter",
  "milk",
  "bread",
  "egg",
  "chocolate",
  "chips",
  "sweets",
  "biscuit",
  "fruits",
  "amul butter",
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
