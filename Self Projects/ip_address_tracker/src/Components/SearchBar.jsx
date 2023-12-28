import React, { useEffect, useState } from "react";
import ErrorMsg from "./ErrorMsg";
import Details from "./Details";

function SearchBar() {
  const ipv4Regex =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const baseAPILink = "http://ip-api.com/json/";
  const [input, setInput] = useState("");
  const [error, setError] = useState({ status: false, value: "error" });
  const [APIData, setAPIDate] = useState("");
  const [apiLink, setAPILink] = useState(baseAPILink);

  async function handleSubmit() {
    if (ipv4Regex.test(input)) {
      setAPILink(`${baseAPILink}${input}`);

      let response = await fetch(apiLink);

      if (!response.ok) {
        setError({ status: true, value: await response.json() });
        console.log("API response ", await response.json());
      } else {
        response = await response.json();
        setAPIDate(JSON.stringify(response));
      }
      console.log("API response out ", await response.json());
      setInput("");
    }
  }

  return (
    <div>
      <label htmlFor="searchInput">Enter IP address</label>
      <input
        type="text"
        value={input}
        id="searchInput"
        onChange={(e) => {
          setInput(e.target.value);
          setAPILink("");
        }}
      />
      <button onClick={handleSubmit}> Enter </button>
      {error.status ? (
        <ErrorMsg error={error.value} />
      ) : (
        <Details Ipdata={APIData} />
      )}
    </div>
  );
}

export default SearchBar;
