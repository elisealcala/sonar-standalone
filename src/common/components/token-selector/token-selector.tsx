import { FC, useState } from "react";
import { ArrowDownIcon } from "../../icons/arrow-down";
import Dropdown from "./dropdown";
import TokenItem from "./token-item";
import "./token-selector.css";
import type { Option } from "../../../components/impact-calculator/impact-calculator";

interface ITokenSelectorProps {
  value: Option;
  options: Option[];
  onClickToken: (option: Option) => void;
}

export const TokenSelector: FC<ITokenSelectorProps> = ({
  value,
  options,
  onClickToken,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (value: string) => setSearchValue(value);

  return (
    <div className="token-selector-container">
      <div className="token-value-container" onClick={() => setIsOpen(true)}>
        <TokenItem image={value.logo} mainText={value.label} />
        <ArrowDownIcon />
      </div>

      <div className="token-dropdown">
        <Dropdown
          options={options}
          searchValue={searchValue}
          onChangeSearch={onChangeSearch}
          onClickToken={onClickToken}
        />
      </div>
    </div>
  );
};
