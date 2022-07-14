import { FC } from "react";
import Input from "../../input";
import TokenItem from "../token-item";
import type { Option } from "../../../feature/impact-calculator/impact-calculator";
import "./dropdown.scss";

interface IDropdownProps {
  options: Option[];
  searchValue: string;
  onChangeSearch: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
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
          onChange={onChangeSearch}
        />
      </div>
      <div className="list-container">
        {options.map((option) => (
          <div
            className="list-item"
            key={`${option.chainId}-${option.symbol}`}
            onClick={() => onClickToken(option)}
          >
            <TokenItem
              image={option.image}
              mainText={option.name}
              secondaryText={option.symbol.toUpperCase()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
