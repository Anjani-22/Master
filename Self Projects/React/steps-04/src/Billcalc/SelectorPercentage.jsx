export default function SelectorPercentage({ friendTip, setTip, children }) {
  return (
    <div>
      {" "}
      {children}
      <select
        value={friendTip}
        onChange={(e) => setTip(Number(e.target.value))}
      >
        {" "}
        <option value={0}>Dissatified 0%</option>
        <option value={5}>Average 5%</option>
        <option value={10}>Good 10% </option>
        <option value={20}>Amazing 20 %</option>
      </select>
    </div>
  );
}
