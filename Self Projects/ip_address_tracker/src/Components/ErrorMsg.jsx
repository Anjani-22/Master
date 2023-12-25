import React from "react";

function ErrorMsg({ error }) {
  return (
    <div>
      Enter valid IP4 Address
      <p>{error}</p>
    </div>
  );
}

export default ErrorMsg;
