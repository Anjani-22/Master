import { useState } from "react";
import Bill from "./Bill";
import FriendTip from "./FriendTip";
import SelfTip from "./SelfTip";

function BillCalc() {
  const [baseBill, setBaseBill] = useState(0);
  const [friendTip, setfriendTip] = useState(0);
  const [selfTip, setselfTip] = useState(0);
  const total = baseBill + (selfTip + FriendTip) / 2;

  const handleReset = () => {
    setBaseBill(0);
    setfriendTip(0);
    setselfTip(0);
  };
  return (
    <div>
      <Bill baseBill={baseBill} setBaseBill={setBaseBill} />
      <FriendTip friendTip={friendTip} setfriendTip={setfriendTip} />
      <SelfTip selfTip={selfTip} setselfTip={setselfTip} />
      <h1>Total bill {total} $</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default BillCalc;
