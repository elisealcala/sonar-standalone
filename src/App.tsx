import React from "react";
import "./common/styles/global.css";
import StandaloneCTA from "./components/standalone-cta";
import ImpactCalculator from "./feature/impact-calculator";

function App() {
  return (
    <div className="app">
      <ImpactCalculator />
      <StandaloneCTA />
    </div>
  );
}

export default App;
