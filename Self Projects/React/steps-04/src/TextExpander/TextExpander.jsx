import { useState } from "react";
import "./styles.css";

export default function TextExpander() {
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
      <h2 style={{ textAlign: "center", margin: "10px" }}>Text Expander</h2>
      <Starter>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </Starter>

      <Starter
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </Starter>

      <Starter expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </Starter>
    </div>
  );
}

function Starter({
  collapsedNumWords = 10,
  expandButtonText = "ShowMore",
  collapseButtonText = "ShowLess",
  buttonColor = "blue",
  expanded,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").splice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {expanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
