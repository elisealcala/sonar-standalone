import { useState } from "react";
import Input from "../../components/input";
import Text from "../../components/text";
import TokenSelector from "../../components/token-selector";
import { ArrowDownIcon } from "../../icons/arrow-down";
import "./impact-calculator.css";

export type Option = {
  chainId: number;
  contractAddress: string;
  image: string;
  name: string;
  percentagePrice: number;
  price: number;
  symbol: string;
  volume: number;
};

export const ImpactCalculator = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [tokenSelected, setTokenSelected] = useState<Option | null>(null);

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
          onChange={() => {}}
        />
        <TokenSelector
          onClickToken={(option) => setTokenSelected(option)}
          value={tokenSelected}
        />
        <span className="arrow-down">
          <ArrowDownIcon size={18} />
        </span>
        <Text className="price-title">
          {`New ${tokenSelected?.symbol.toUpperCase()} price`}
        </Text>
        <Text type="title">0.0231</Text>
        <Text className="percentage">+20%</Text>
        <Text className="market-cap">
          <span>New Market Cap:</span> 23.3m
        </Text>
      </div>
    </section>
  );
};
