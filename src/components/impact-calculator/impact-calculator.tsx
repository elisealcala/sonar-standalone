import React, { useState } from "react";
import Text from "../../common/components/text";
import "./impact-calculator.css";

export const ImpactCalculator = () => {
  const [isBuying, setIsBuying] = useState(true);

  return (
    <div className="container">
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
      </div>
    </div>
  );
};
