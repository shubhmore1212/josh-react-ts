import { ReactElement } from "react";

import { InputChangeEvent } from "../../constant";

interface IProps {
  searchHandler: (e: InputChangeEvent) => void;
}
const SearchBox: React.FC<IProps> = (props): ReactElement => {
  const { searchHandler } = props;

  return (
    <div className="search-box-container">
      <input
        id="search-box"
        className="search-box"
        type="text"
        placeholder="Search"
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBox;
