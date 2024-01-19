export default function FriendTip({ friendTip, setfriendTip }) {
  return (
    <div>
      Friend Tip
      <select value={friendTip} onChange={(e) => setfriendTip(+e.target.value)}>
        {" "}
        <option value={5}>Average 5$</option>
        <option value={10}>Good 10$ </option>
        <option value={20}>Amazing 20 $</option>
      </select>
    </div>
  );
}
