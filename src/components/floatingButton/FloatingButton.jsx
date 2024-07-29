import React, { useState } from "react";
import "./FloatingButton.css";
import Calculator from "../calculator/Calculator";

const FloatingButton = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  return (
    <div className="floating-button">
      <button onClick={() => setShowCalculator(!showCalculator)}>+</button>
      {showCalculator && <Calculator />}
    </div>
  );
};

export default FloatingButton;
