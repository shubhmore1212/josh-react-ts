import React from "react";

import { SelectChangeEvent } from "../../constant";

interface optionType {
  key: string | undefined;
  value: string;
}
interface IProps {
  selectHandler: (e: string) => void;
  options: optionType[];
  value: string;
}

const SelectBox = (props: IProps): React.ReactElement => {
  const { selectHandler, options, value } = props;

  const selectFunction = (e: SelectChangeEvent) => {
    let data = e.target.value;
    selectHandler(data);
  };

  return (
    <div className="select-box-container">
      <select
        value={value}
        name="select-input"
        id="select-input"
        onChange={selectFunction}
      >
        {options.map((option, idx) => (
          <option value={option.key} key={idx}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(SelectBox);
