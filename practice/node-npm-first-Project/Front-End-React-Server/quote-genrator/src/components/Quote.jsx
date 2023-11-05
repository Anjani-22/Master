import React from "react";

function Quote(props) {
  console.log(props.quote);
  return <p className="quote">{props.quote.quote}</p>;
}

export default Quote;
