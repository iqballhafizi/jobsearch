import React, { useState, useEffect } from "react";

import "./styles/search.css";

function Search({ updateDescription}) {
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <div className="input-group search-box">
      <span class="material-icons">work_outline</span>
      <input
        type="text"
        className="form-control "
        placeholder="Titles, companies, expertise or benefits"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="input-group-append search-btn">
        <button className="btn btn-primary" type="button" id="button-search" onClick={() => updateDescription(searchTerm)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
