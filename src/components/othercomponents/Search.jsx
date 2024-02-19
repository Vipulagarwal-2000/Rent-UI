import React from "react";
import "./othercomponents.css";

function Search() {
  return (

      <div className="search-div">
        <input
          className="other-search"
          type="search"
          placeholder="Search by Book Name, Author, Description etc..."
        />
      </div>
    
  );
}

export default Search;
