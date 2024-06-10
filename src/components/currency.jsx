import React, { useEffect, useState } from "react";
import axios from "axios";
import { flagsData } from "./flags";

const currency = () => {
  const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  const API_KEY = import.meta.env.VITE_SECRET;

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  async function convert() {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);

    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  }

  // for set flags
  const [amountDefault, setAmountDefault] = useState(flagsData[2].image);
  const [convertedDefault, setConvertedDefault] = useState(flagsData[0].image);

  function defaultFlag(userSelect) {
    switch (userSelect) {
      case "TRY":
        setAmountDefault(flagsData[0].image);
        break;
      case "EUR":
        setAmountDefault(flagsData[1].image);
        break;
      case "USD":
        setAmountDefault(flagsData[2].image);
        break;
      case "GBP":
        setAmountDefault(flagsData[3].image);
        break;
      case "JPY":
        setAmountDefault(flagsData[4].image);
        break;
    }
  }

  function convertedFlag(userSelect) {
    switch (userSelect) {
      case "TRY":
        setConvertedDefault(flagsData[0].image);
        break;
      case "EUR":
        setConvertedDefault(flagsData[1].image);
        break;
      case "USD":
        setConvertedDefault(flagsData[2].image);
        break;
      case "GBP":
        setConvertedDefault(flagsData[3].image);
        break;
      case "JPY":
        setConvertedDefault(flagsData[4].image);
        break;
    }
  }

  return (
    <div className="flex justify-center items-center w-full mt-[2rem] text-white font-poppins">
      <div className="w-[35rem] h-[24rem] bg-white rounded-xl text-gray-600 max-md:mx-[1.5rem] shadow-xl">
        <div>
          <div className="ml-[1.5rem] mt-[1.5rem]">
            <p className="text-[1.1rem]">Amount</p>
          </div>
          <div className="flex items-center w-full mt-[1.5rem] ml-[1.5rem] gap-[1rem]">
            <div>
              <img src={amountDefault} width={50} height={50} />
            </div>
            <div>
              <select
                className="text-[1.1rem"
                onChange={(e) => {
                  setFromCurrency(e.target.value);
                  defaultFlag(e.target.value);
                }}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="JPY">JPY</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div>
              <input
                className="outline-none border-b border-gray-100 focus:border-blue-700 text-[1.1rem]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[2rem] w-full mt-[2rem]">
          <div className="bg-gray-300 w-full h-[0.1rem] ml-[1rem]"></div>
          <div className="bg-blue-700 rounded-md px-[2rem] hover:bg-blue-900">
            <button onClick={convert} className="text-white font-medium h-[2.5rem] text-[1.1rem]">
              Convert
            </button>
          </div>
          <div className="bg-gray-300 w-full h-[0.1rem] mr-[1rem]"></div>
        </div>
        <div className="mt-[2rem]">
          <div className="ml-[1.5rem] mt-[1.5rem]">
            <p className="text-[1.1rem]">Converted Amount</p>
          </div>
          <div className="flex items-center w-full mt-[1.5rem] ml-[1.5rem] gap-[1rem]">
            <div>
              <img src={convertedDefault} width={50} height={50} />
            </div>
            <div>
              <select
                className="text-[1.1rem"
                onChange={(e) => {
                  setToCurrency(e.target.value);
                  convertedFlag(e.target.value);
                }}
              >
                <option value="TRY">TRY</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div>
              <input
                className="outline-none border-b border-gray-100 focus:border-blue-700 text-[1.1rem]"
                value={result}
                onChange={(e) => setResult(e.target.value)}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currency;
