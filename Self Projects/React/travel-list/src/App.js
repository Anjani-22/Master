const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stat />
    </div>
  );
}

export default App;

function Logo() {
  return <h1 className="logo">🌴 Far Away 💼</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <h3>Add your item</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..."></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button> ❌</button>
    </li>
  );
}
function Stat() {
  return (
    <footer className="stats">
      <em>Your have x items packed and x in list</em>
    </footer>
  );
}
