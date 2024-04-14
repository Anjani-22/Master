import React from "react";

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
        <p>
          Hi, I m QA turned MERN Dev , I like to create creative website that
          makes peoples live easy and fun, with added colors of CSS. I have
          previously worked at
          <a
            href="https://www.optum.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Optum
          </a>{" "}
          as a dev and as a QA at
          <a
            href="https://www.thoughtworks.com/en-in"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            ThoughtWorks
          </a>
        </p>
        <p>
          Sometimes I tend to do quote musings while coding, so have compiled
          all my thoughts in the form of an npm pkg, which you can download from{" "}
          <a
            href="https://www.npmjs.com/package/quotes-of-paradoxical-world"
            target="_blank"
            title="Click here to download npm pkg"
            rel="noreferrer noopener"
          >
            {" "}
            here{" "}
          </a>
          and use it in your project when required or when you want to get
          motivated with little bit of joke😜. A little about my technical
          background, I have passed with "First Class with distinction" along
          with "clearing GATE-2020", which has formed the basis for my CSE
          fundamentals, and here is my{" "}
          <a
            href="https://docs.google.com/document/d/1uCYPIO9Euj3gSLAdAstqRMtlskOlYUpp/edit?usp=sharing&ouid=113663976285024799121&rtpof=true&sd=true"
            target="_blank"
            title="Click here to see resume"
            rel="noreferrer noopener"
          >
            <strong>Resume</strong>
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
