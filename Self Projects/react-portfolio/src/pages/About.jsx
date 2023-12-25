import React from "react";
import "../styles/content.css";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img
        class="profile"
        src="./ProjectImages/AboutPageBioImg.jpg"
        alt="cat profile"
      />
      <div className="addedGap">
        <h2>
          Hi, I m QA turned MERN Dev , I like to create creative website that
          makes peoples live easy and fun, with added colors of CSS.
        </h2>
      </div>
    </div>
  );
}

export default About;
