import React, { useEffect, useState } from "react";
import Flags from "country-flag-icons/react/3x2";
import "../Header/header.css";

export const Header = ({ currencies }) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  useEffect(() => {
    if (!currencies) return;
    setAmount1(currencies["EUR"].toFixed(4));
    setAmount2(currencies["USD"].toFixed(4));
  }, [currencies]);

  return (
    <>
      <div className="heading">
        <h1>Currency Converter</h1>
        <div>
          <Flags.US title="United States" className="size" />
          <span className="res"> {amount2} &#8372;</span>
          <Flags.EU title="United States" className="size" />
          <span className="res"> {amount1} &#8372; </span>
        </div>
      </div>
    </>
  );
};
