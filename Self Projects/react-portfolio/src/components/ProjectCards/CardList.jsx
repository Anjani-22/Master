import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Import your styles

// const projects = [
//   {
//     id: 1,
//     title: "BookList",
//     image: "./ProjectImages/BookListSiteImg.jpg", // Replace with your image URL
//     description: "Add, remove and check year & author of your books ",
//     link: "https://addremovebook.netlify.app/",
//   },
//   {
//     id: 2,
//     title: "First Bio",
//     image: "./ProjectImages/OldBioSite.jpg", // Replace with your image URL
//     description: "Old Bio Site",
//     link: "https://smecanjani.github.io/My-first-Site/",
//   },
//   {
//     id: 3,
//     title: "Project 3",
//     image: "./ProjectImages/OldDoctorsSite.jpg",
//     description: "Old Doctors Site",
//     link: "https://smecanjani.github.io/doctor_font_end_only/",
//   },
//   {
//     id: 4,
//     title: "Project 3",
//     image: "./ProjectImages/OldDoctorsSite.jpg",
//     description: "Old Doctors Site",
//     link: "https://smecanjani.github.io/doctor_font_end_only/",
//   },
// ];

function Card({ project }) {
  return (
    <div className="card">
      <Link to={project.link}>
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
