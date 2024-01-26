import { useEffect } from "react";
import { useState } from "react";

function CurrencyCoverter() {
  const [input, setinput] = useState(1);
  const [fromCurr, setfromCurr] = useState("EUR");
  const [toCurr, settoCurr] = useState("USD");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrApi() {
        setLoading(true);
        const url = `https://api.frankfurter.app/latest?amount=${input}&from=${fromCurr}&to=${toCurr}`;
        const res = await fetch(url);
        const data = await res.json();
        //console.log("data", data);

        // const output = data.rates[toCurr];
        // console.log("output ", output);
        // console.log(data.rates[toCurr]);
        setOutput(data.rates[toCurr]);
        setLoading(false);
      }

      if (fromCurr === toCurr) return setOutput(input);

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
          disabled={loading}
        />
        <select
          value={fromCurr}
          onChange={(e) => setfromCurr(e.target.value)}
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={toCurr}
          onChange={(e) => settoCurr(e.target.value)}
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>{`${input} ${fromCurr} = ${output} ${toCurr}`} </p>
      </div>
    </div>
  );
}

export default CurrencyCoverter;
