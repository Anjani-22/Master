import { useEffect } from "react";
import { useState } from "react";

function CurrencyCoverter() {
  const [input, setinput] = useState(0);
  const [fromCurr, setfromCurr] = useState("USD");
  const [toCurr, settoCurr] = useState("USD");

  useEffect(
    function () {
      async function fetchCurrApi() {
        const url = `https://api.frankfurter.app/latest?amount=${input}&from=${fromCurr}&to=${toCurr}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data, data.rates);

        // const output = data.rates[toCurr];
        // console.log("output ", output);
      }

      fetchCurrApi();
    },
    [input, fromCurr, toCurr]
  );

  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid #346222",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        margin: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "10px" }}>
        Currency Converter
      </h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(Number(e.target.value))}
        />
        <select value={fromCurr} onChange={(e) => setfromCurr(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select value={toCurr} onChange={(e) => settoCurr(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>OUTPUT</p>
      </div>
    </div>
  );
}

export default CurrencyCoverter;
