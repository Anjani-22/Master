// GiftList.js
import React from "react";

const GiftList = ({ recommendations }) => {
  return (
    <div>
      <h2>Gift Recommendations : {recommendations}</h2>
      {/* <ul>
        {recommendations.map((gift, index) => (
          <li key={index}>{gift}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default GiftList;
