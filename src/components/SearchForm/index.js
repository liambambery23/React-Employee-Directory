import React from "react";
import "./style.css";



function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
      <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Enter a name to begin"
          id="employee"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;