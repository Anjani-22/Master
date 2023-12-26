import React from "react";

function About() {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    listStyleType: "🔔",
    alignItems: "flex-start", // Align items to the start (left in a left-to-right context)
  };

  return (
    <div>
      <h1>About Me</h1>
      <img
        class="profile"
        src="./ProjectImages/AboutPageBioImg.jpg"
        alt="cat profile"
      />
      <div className="addedGap">
        <p>
          Hi, I m QA turned MERN Dev , I like to create creative website that
          makes peoples live easy and fun, with added colors of CSS. I have
          previously worked at
          <a href="https://www.optum.com/"> Optum</a> as a dev and as a QA at
          <a href="https://www.thoughtworks.com/en-in"> ThoughtWorks</a>
        </p>
        <p>
          Sometimes I tend to do quote musings while coding, so have compiled
          all my thoughts in the form of an nmp pkg, which you can download from{" "}
          <a href="https://www.npmjs.com/package/quotes-of-paradoxical-world">
            {" "}
            here{" "}
          </a>
          and use it in your project when required or when you want to get
          motivated with little bit of joke😜. A little about my technical
          background, I have passed with "First Class with distinction" along
          with "clearing GATE-2020", which has formed the basis for my CSE
          fundamentals.
        </p>
      </div>
    </div>
  );
}

export default About;
