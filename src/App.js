import "./App.css";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { HiSwitchHorizontal } from "react-icons/hi";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState(null);

  const format = useCallback((number) => {
    return number.toFixed(4);
  }, []);

  const amount2 = useMemo(() => {
    return rates
      ? format((amount1 * rates[currency2]) / rates[currency1])
      : "--";
  }, [rates, amount1, format, currency2, currency1]);

  const currenciesList = useMemo(() => {
    return rates ? Object.keys(rates) : [];
  }, [rates]);

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=38d4b0353985af9f32997dc33ef45710"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  function swithCurrency() {
    setCurrency1(currency2);
    setCurrency2(currency1);
  }

  function handleAmount1Change(amount1) {
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <>
      <Header currencies={rates} />

      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={currenciesList}
        amount={amount1}
        currency={currency1}
      />
      <div className="switch">
        <HiSwitchHorizontal
          size="30px"
          onClick={() => {
            swithCurrency();
          }}
        />
      </div>
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={currenciesList}
        amount={amount2}
        currency={currency2}
      />
    </>
  );
}

export default App;
