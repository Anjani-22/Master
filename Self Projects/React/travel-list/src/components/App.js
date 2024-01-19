import { useState } from "react";
import { Stat } from "./Stat";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";

// const initialItems = [
//   { id: 1, desc: "Passports", quan: 2, packed: false },
//   { id: 2, desc: "Socks", quan: 12, packed: true },
// ];
function App() {
  const [items, setItems] = useState([]);

  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDelete(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you confirm to delete all?");
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        clearList={handleClearList}
      />
      <Stat items={items} />
    </div>
  );
}

export default App;
