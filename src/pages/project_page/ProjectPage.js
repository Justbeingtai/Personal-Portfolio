import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

// Project images
import portfolio from "../../images/portfolio.png";
import bookheaven from "../../images/bookheaven.png";
import rocketbudget from "../../images/rocketbudget.png";
import employeetracker from "../../images/employeetracker.png";
import techBlog from "../../images/tech-blog.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import employeePayroll from "../../images/employee-payroll.png";
import superSearch from "../../images/super-search.png";
import taskBoard from "../../images/task-board.png";
import personalBlog from "../../images/personal-blog.png";

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
    {
      id: 5,
      title: "Tech Blog",
      description:
        "A CMS-style blog site where developers can publish articles and comment on each other's posts.",
      technologies: "Node.js, Express.js, Handlebars.js",
      repoLink: "https://github.com/Justbeingtai/Tech-Blog",
      image: techBlog,
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "A weather dashboard application for tracking current and future weather forecasts.",
      technologies: "HTML, CSS, JavaScript, OpenWeather API",
      repoLink: "https://github.com/Justbeingtai/Weather-Dashboard",
      image: weatherDashboard,
    },
    {
      id: 7,
      title: "Employee Payroll Tracker",
      description:
        "A CLI application to manage employee payroll data efficiently.",
      technologies: "Node.js, Inquirer, PostgreSQL",
      repoLink: "https://github.com/Justbeingtai/Employee-Payroll-Tracker",
      image: employeePayroll,
    },
    {
      id: 8,
      title: "Super Search",
      description:
        "A search application that provides seamless and precise results.",
      technologies: "React, GraphQL, MongoDB",
      repoLink: "https://github.com/Justbeingtai/Super-Search",
      image: superSearch,
    },
    {
      id: 9,
      title: "Task Board",
      description:
        "An interactive application to track and manage tasks efficiently.",
      technologies: "HTML, CSS, JavaScript, jQuery",
      repoLink: "https://github.com/Justbeingtai/task-board",
      image: taskBoard,
    },
    {
      id: 10,
      title: "Personal Blog",
      description:
        "A blogging platform for users to share experiences and insights.",
      technologies: "React, Node.js, Express.js",
      repoLink: "https://github.com/Justbeingtai/Personal-Blog",
      image: personalBlog,
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <Container fluid className="certificate-section" id="about">
              <Container>
                <Row>
                  <Col md={12} className="mt-5">
                    <Row className="g-5">
                      {projects.map((project) => (
                        <Col md={4} key={project.id}> {/* Changed to md={4} for wider boxes */}
                          <Fade bottom>
                            <div
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 style={{ color: "#fbd9ad" }}>
                                  {project.title}
                                </h5>
                                <img
                                  src={project.image}
                                  alt={project.title}
                                />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="iconBtn"
                                    aria-labelledby={`code-${project.id}`}
                                  >
                                    <FaCode
                                      id={`code-${project.id}`}
                                      className="icon"
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
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
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
    </section>
  );
}
