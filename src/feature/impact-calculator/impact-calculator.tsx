import { useState } from "react";
import Input from "../../components/input";
import Text from "../../components/text";
import TokenSelector from "../../components/token-selector";
import { ArrowDownIcon } from "../../icons/arrow-down";
import "./impact-calculator.css";
import { useCurrentPrice } from "./use-currentPrice";

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

const binanceOption = {
  chainId: 56,
  contractAddress: "bnb",
  image:
    "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
  name: "Binance Coin",
  percentagePrice: 5.48633,
  price: 237.8,
  symbol: "bnb",
  volume: 1534065201,
};

export const ImpactCalculator = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [value, setValue] = useState("10000");
  const [tokenSelected, setTokenSelected] = useState<Option>(binanceOption);

  const {price} = useCurrentPrice({
    token: tokenSelected.symbol.trim().toUpperCase(),
    amount: value
  })

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
          value={value}
          icon="dollar"
          iconSize={12}
          onChange={(e) => setValue(e.target.value)}
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
        {isBuying ? (
          <Text className="percentage">+20%</Text>
        ) : (
          <Text className="percentage negative">-20%</Text>
        )}
        <Text className="market-cap">
          <span>New Market Cap:</span> 23.3m
        </Text>
      </div>
    </section>
  );
};
