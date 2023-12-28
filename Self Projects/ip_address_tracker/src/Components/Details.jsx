import React from "react";

function Details({ Ipdata }) {
  const detailsStyle = { border: "1px solid black", color: "red" };
  return (
    <div>
      Details
      <h2 style={detailsStyle}>{Ipdata}</h2>
    </div>
  );
}

export default Details;
