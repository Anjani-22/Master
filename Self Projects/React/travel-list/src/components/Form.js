import { useState } from "react";

export function Form({ onAddItem }) {
  const [desc, setDesc] = useState("");
  const [quan, setQuan] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;
    const newItem = { desc, quan, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);

    setDesc("");
    setQuan(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add your item</h3>
      <select value={quan} onChange={(e) => setQuan(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
