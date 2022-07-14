import { useState } from "react";
import Input from "../../components/input";
import Text from "../../components/text";
import TokenSelector from "../../components/token-selector";
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
      </div>
    </section>
  );
};
