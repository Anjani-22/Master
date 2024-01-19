import { useState } from "react";

import FriendTip from "./SelectorPercentage";

import SelectorPercentage from "./SelectorPercentage";

function BillCalc() {
  const [baseBill, setBaseBill] = useState("");
  const [friendTip, setfriendTip] = useState(0);
  const [selfTip, setselfTip] = useState(0);
  const tip = (baseBill * ((selfTip + friendTip) / 2)) / 100;

  const handleReset = () => {
    setBaseBill("");
    setfriendTip(0);
    setselfTip(0);
  };
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
      <h2 style={{ textAlign: "center", margin: "10px" }}>Tip calculator</h2>
      <Bill baseBill={baseBill} setBaseBill={setBaseBill} />
      <SelectorPercentage tip={selfTip} setTip={setselfTip}>
        Your Tip
      </SelectorPercentage>
      <SelectorPercentage tip={friendTip} setTip={setfriendTip}>
        Friends' Tip
      </SelectorPercentage>
      {baseBill > 0 && (
        <>
          {" "}
          <Output bill={baseBill} tip={tip} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

function Bill({ baseBill, setBaseBill }) {
  return (
    <div>
      <label>
        Base Bill
        <input
          type="number"
          value={baseBill}
          placeholder="Enter amout $..."
          onChange={(e) => setBaseBill(+e.target.value)}
        />
      </label>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      Total bill {tip + bill}$ ({bill}$ + {tip}$)
    </h1>
  );
}

export default BillCalc;
