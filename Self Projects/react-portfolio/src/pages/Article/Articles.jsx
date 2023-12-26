import React from "react";
import projects from "./articlesData";
import CardList from "../../components/ProjectCards/CardList";

function Articles() {
  return (
    <div>
      <CardList projects={projects} />
    </div>
  );
}

export default Articles;
