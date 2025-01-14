import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
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
      <h2 style={{ textAlign: "center", margin: "10px" }}>Accordian</h2>

      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(false);
  return (
    <div>
      {faqs.map((item, id) => (
        <AccordianItem
          num={id}
          title={item.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={id}
        >
          {item.text}
        </AccordianItem>
      ))}
    </div>
  );
}
function AccordianItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  return (
    <div
      className={`${isOpen && "open"} item`}
      onClick={() => onOpen(isOpen ? null : num)}
    >
      <p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
