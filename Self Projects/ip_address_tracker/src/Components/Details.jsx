import React from "react";

function Details({ Ipdata }) {
  const details = { border: "1px solid black", color: "red" };
  return (
    <div>
      Details
      <h2 className={details}>{Ipdata}</h2>
    </div>
  );
}

export default Details;
