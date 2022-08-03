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
  chainId: 1,
  contractAddress: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
  image:
    "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
  name: "Binance USD",
  percentagePrice: -0.01404,
  price: 1,
  symbol: "busd",
  volume: 5838365643,
};

export const ImpactCalculator = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [value, setValue] = useState("10000");
  const [tokenSelected, setTokenSelected] = useState<Option>(binanceOption);

  const { price } = useCurrentPrice({
    token: tokenSelected.symbol.trim().toUpperCase(),
    amount: value,
  });

  console.log(price);

  return (
    <section className="container">
      <div className="title-container">
        <Text type="titleSm">Calculate Impact</Text>
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
        <Text type="title" className="price-variation">
          0.0231
        </Text>
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
