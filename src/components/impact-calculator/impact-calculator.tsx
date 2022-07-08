import { useState } from "react";
import Input from "../../common/components/input";
import Text from "../../common/components/text";
import TokenSelector from "../../common/components/token-selector";
import "./impact-calculator.css";
import SearchExample from "./logic";

export type Option = {
  value: string;
  label: string;
  logo: string;
  longName: string;
};

const options = [
  {
    value: "btc",
    label: "BTC",
    longName: "Bitcoin",
    logo: "https://png.monster/wp-content/uploads/2022/02/png.monster-623.png",
  },
  {
    value: "eth",
    label: "ETH",
    longName: "Ethereum",
    logo: "https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png",
  },
];

export const ImpactCalculator = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [tokenSelected, setTokenSelected] = useState<Option>(options[0]);

  return (
    <section className="container">
      <div className="title-container">
        <Text>Calculate Impact</Text>
      </div>
      <div className="calculator-container">
        <div className="buy-sell-selection">
          <Text>
            If someone
            <span
              className={isBuying ? "selected" : ""}
              onClick={() => setIsBuying(true)}
            >
              {" "}
              BUYS{" "}
            </span>
            <span>/</span>
            <span
              className={!isBuying ? "selected" : ""}
              onClick={() => setIsBuying(false)}
            >
              {" "}
              SELLS
            </span>
          </Text>
        </div>
        <Input
          className="input-amount"
          type="number"
          value="10000"
          icon="dollar"
          iconSize={12}
        />
        <TokenSelector
          onClickToken={(option) => setTokenSelected(option)}
          options={options}
          value={tokenSelected}
        />
      </div>
      <SearchExample />
    </section>
  );
};
