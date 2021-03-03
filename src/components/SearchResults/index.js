import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
        <span onClick={() => props.sortByName()} className="remove">
       Sort Name
      </span>
      {props.results.map(result => (
        <li key={result.email} className="list-group-item">
          <img alt="Profile" src={result.picture.medium} className="img-fluid" />
        {result.name.first} {result.name.last}
        <p className="email">Email: {result.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
