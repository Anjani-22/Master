import React from "react";
import CardList from "../../components/ProjectCards/CardList";
import projects from "./projectsData";

function Home() {
  return (
    <div>
      <CardList projects={projects} />
    </div>
  );
}

export default Home;
