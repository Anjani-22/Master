import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skilList = [
  { name: "JS", emoji: "😊", bgcolor: "#123456" },
  { name: "React", emoji: "😎", bgcolor: "orangered" },
  { name: "Node", emoji: "😁", bgcolor: "yellow" },
  { name: "HTML + CSS", emoji: "🤩", bgcolor: "orange" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skilList={skilList} />
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Anjani</h1>
      <p>
        Fullstack dev - front end heavy. Current coding language JS. Good
        understanding of colors and UI design
      </p>
    </div>
  );
}
function Avatar() {
  return <img src="./profile.jpg" alt="profile-img" className="avatar" />;
}

function SkillList({ skilList }) {
  return (
    <div className="skill-list">
      {skilList.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}
function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.bgcolor }}>
      <span>{skill.name}</span>
      <span>{skill.emoji} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
