import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Import your styles

function Card({ project }) {
  return (
    <div className="card">
      <Link to={project.link} target="_blank">
        <img src={project.image} alt={project.title} />
        <div className="card-content">
          <h4>{project.title}</h4>
        </div>
      </Link>
    </div>
  );
}

function CardList({ projects }) {
  return (
    <div className="card-container">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}

export default CardList;
