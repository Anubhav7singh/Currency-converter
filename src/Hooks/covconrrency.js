import { useState, useEffect } from "react";
function Usecurrencyconverter(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/fbd3718b04c5c0b3f357c3a2/latest/${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => setdata(res["conversion_rates"]));
  }, [currency]);
  return data;
}
export default Usecurrencyconverter;
