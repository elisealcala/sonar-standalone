import { FC, useState, useEffect } from "react";
import { io } from "socket.io-client";
import Dropdown from "./dropdown";
import TokenItem from "./token-item";
import "./token-selector.css";
import type { Option } from "../../feature/impact-calculator/impact-calculator";
import { CaretDownIcon } from "../../icons/caret-down";

interface ITokenSelectorProps {
  value: Option | null;
  onClickToken: (option: Option) => void;
}

const socket = io(process.env.REACT_APP_SOCKET_URL as string);

export const TokenSelector: FC<ITokenSelectorProps> = ({
  value,
  onClickToken,
}) => {
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let value = e.target.value.trim();
    setSearchTerm(value);
  };

  useEffect(() => {
    if (!!socket && !searchTerm) {
      socket.emit("top-currencies");
      socket.on("top-currencies-result", (response: any) => {
        if (response && response["result"]) {
          setSearchData(response.result);
        }
      });
    }
  }, [searchTerm]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (socket && !!searchTerm && searchTerm.length >= 2) {
        socket.emit("search-coin", { name: searchTerm });
        socket.on("search-coin-result", (response: any) => {
          if (response && response["result"]) {
            setSearchData(response.result);
            console.log(response.result);
          }
        });
      }
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const onSelectToken = (option: Option) => {
    setIsOpen(false);
    onClickToken(option);
  };

  return (
    <div className="token-selector-container">
      <div className="token-value-container" onClick={() => setIsOpen(true)}>
        {value && (
          <TokenItem
            image={value.image}
            mainText={value.symbol.toUpperCase()}
          />
        )}
        <CaretDownIcon />
      </div>
      {isOpen && (
        <div className="token-dropdown">
          <Dropdown
            options={searchData}
            searchValue={searchTerm}
            onChangeSearch={handleInputChange}
            onClickToken={onSelectToken}
            clearValue={() => setSearchTerm("")}
          />
        </div>
      )}
    </div>
  );
};
