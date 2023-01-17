import React, { ReactElement } from "react";

import { InputChangeEvent } from "../../constant";

interface IProps {
  searchInput: string;
  searchHandler: (e: InputChangeEvent) => void;
}
const SearchBox: React.FC<IProps> = (props): ReactElement => {
  const { searchInput, searchHandler } = props;

  return (
    <div className="search-box-container">
      <input
        id="search-box"
        className="search-box"
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={searchHandler}
      />
    </div>
  );
};

export default React.memo(SearchBox);
