import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

// Importing project images
import portfolio from "../../images/portfolio.png";
import bookheaven from "../../images/bookheaven.png";
import rocketbudget from "../../images/rocketbudget.png";
import employeetracker from "../../images/employeetracker.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "RocketBudget",
      description:
        "A finance and budget tracking app built with React, GraphQL, and MongoDB. Features income and expense tracking, budget limits, reminders, and interactive charts.",
      technologies: "React, GraphQL, MongoDB, Apollo, Chart.js",
      repoLink: "https://github.com/Justbeingtai/RocketBudget",
      image: rocketbudget,
    },
    {
      id: 2,
      title: "The Book Heaven",
      description:
        "A platform connecting book lovers with features like reviews, live chats, and personalized recommendations. Built using a full-stack approach.",
      technologies: "React, Node.js, Express, PostgreSQL, Socket.io",
      repoLink: "https://github.com/Justbeingtai/BookHeaven",
      image: bookheaven,
    },
    {
      id: 3,
      title: "Employee Tracker",
      description:
        "A command-line application for managing employees, roles, and departments using PostgreSQL. Features seamless interactions for adding, updating, and viewing employee data.",
      technologies: "Node.js, Inquirer, PostgreSQL",
      repoLink: "https://github.com/Justbeingtai/Employee-Tracker",
      image: employeetracker,
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "My personal portfolio showcasing projects, skills, and achievements in a visually appealing format.",
      technologies: "React, HTML, CSS, JavaScript",
      repoLink: "https://github.com/Justbeingtai/Personal-Portfolio",
      image: portfolio,
    },
  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            {projects.map((project) => (
              <Col md={3} key={project.id}> {/* Changed to md={3} to fit 4 in a row */}
                <Fade bottom>
                  <div
                    className="singleProject"
                    style={{
                      backgroundColor: "rgb(142 70 186 / 31%)",
                      border: "1px solid",
                    }}
                  >
                    <div className="projectContent">
                      <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                      <img src={project.image} alt={project.title} />
                      <div className="project--showcaseBtn">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className={"iconBtn"}
                          aria-labelledby={`code-${project.id}`}
                        >
                          <FaCode
                            id={`code-${project.id}`}
                            className={"icon"}
                            aria-label="Code"
                          />
                        </a>
                      </div>
                    </div>
                    <h6>
                      <p
                        className="project--desc"
                        style={{
                          background: "#fbd9ad",
                          color: "#b061df",
                          fontWeight: 600,
                        }}
                      >
                        {project.description}
                      </p>
                    </h6>
                    <div
                      className="project--lang"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      {project.technologies}
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
