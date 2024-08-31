import React, { useState } from "react";
import InputBox from "./InputBox"; // Adjust the import path as necessary

function ParentComponent() {
  const [amount, setAmount] = useState(0);
  const [selectCurrency, setSelectCurrency] = useState("usd");

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const handleCurrencyChange = (newCurrency) => {
    setSelectCurrency(newCurrency);
  };

  return (
    <div>
      <InputBox
        label="Amount"
        amount={amount}
        onAmountChange={handleAmountChange}
        onCurrencyChange={handleCurrencyChange}
        currencyOptions={["usd", "eur", "inr"]}
        selectCurrency={selectCurrency}
      />
      <p>Selected Currency: {selectCurrency}</p>
    </div>
  );
}

export default ParentComponent;
