export function Stat({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You have got start packing 🚀</em>
      </p>
    );

  const totalNum = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / totalNum) * 100);
  console.log("💼 " + packedItems);
  return (
    <footer className="stats">
      <em>
        {packedPercentage !== 100
          ? `Your have ${packedItems} items packed and ${totalNum} in list.
        ${packedPercentage}% of items are packed`
          : "All packed and ready to go."}
      </em>
    </footer>
  );
}
