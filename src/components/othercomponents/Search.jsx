import React from "react";
import "./othercomponents.css";

function Search(props) {
  return (

      <div className="search-div">
         {(props.isSearchingAllowed !== undefined? props.isSearchingAllowed : true) && (<input
          className="other-search"
          type="search"
          placeholder="Search by Book Name, Author, Description etc..."
        />
         )}</div>
    
  );
}

export default Search;
