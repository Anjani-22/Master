import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDelete, onToggle, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items;
  if (sortBy === "desc") {
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
      </div>
      <button onClick={clearList}>Clear List</button>
    </div>
  );
}
