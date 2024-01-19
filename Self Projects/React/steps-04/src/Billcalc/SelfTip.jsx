export default function SelfTip({ selfTip, setselfTip }) {
  return (
    <div>
      Self Tip
      <select value={selfTip} onChange={(e) => setselfTip(+e.target.value)}>
        {" "}
        <option value={5}>Average 5$</option>
        <option value={10}>Good 10$ </option>
        <option value={20}>Amazing 20 $</option>
      </select>
    </div>
  );
}
