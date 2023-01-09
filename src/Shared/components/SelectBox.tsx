import React from "react";

import { SelectChangeEvent } from "../../constant";

interface IProps {
  selectHandler: (e: SelectChangeEvent) => void;
  options: string[];
}

const SelectBox = (props: IProps): React.ReactElement => {
  const { selectHandler, options } = props;

  return (
    <div className="select-box-container">
      <select name="select-input" id="select-input" onChange={selectHandler}>
        {options.map((option: string) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
