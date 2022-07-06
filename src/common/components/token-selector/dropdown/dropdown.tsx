import { FC } from "react";
import Input from "../../input";
import TokenItem from "../token-item";
import type { Option } from "../../../../components/impact-calculator/impact-calculator";
import "./dropdown.css";

interface IDropdownProps {
  options: Option[];
  searchValue: string;
  onChangeSearch: (value: string) => void;
  onClickToken: (option: Option) => void;
}

export const Dropdown: FC<IDropdownProps> = ({
  options,
  searchValue,
  onChangeSearch,
  onClickToken,
}) => {
  return (
    <div className="dropdown-container">
      <div className="search-container">
        <Input
          placeholder="Search..."
          value={searchValue}
          icon="search"
          onChange={(e) => onChangeSearch(e.target.value)}
        />
      </div>
      <div className="list-container">
        {options.map((option) => (
          <div
            className="list-item"
            key={option.label}
            onClick={() => onClickToken(option)}
          >
            <TokenItem
              image={option.logo}
              mainText={option.longName}
              secondaryText={option.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
