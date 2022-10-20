import React from "react";
import { SearchIcon } from "../../assets/image";

import "./search.scss";

// type Props = {
//   props?: React.ReactNode
// };
const Search = () => {
  return (
    <div className="search-input">
      <div className="input">
        <div className="search-input-content">
          <div>
          <span>Anywhere</span>
          </div>
          <div className="line" />
          <span>Any Week</span>
          <div className="line" />
          <p>Add guests</p>
        </div>
      </div>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
