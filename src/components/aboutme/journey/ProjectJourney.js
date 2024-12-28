import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import CodeIcon from "@mui/icons-material/Code";
import Flip from "react-reveal/Flip";

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Project Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            RocketBudget App
          </h3>
          <p>
            Developed a finance-tracking app using React, GraphQL, MongoDB, and
            Apollo. Features include income/expense tracking, visual charts,
            and secure data handling.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ChaseProject Application
          </h3>
          <p>
            Built a note-taking app tailored for client interactions at JPMorgan
            Chase. Implemented features like meeting notes, follow-up reminders,
            and client profile details using the MERN stack.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<HtmlIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The Book Heaven
          </h3>
          <p>
            Designed a web application for book enthusiasts using React,
            Node.js, PostgreSQL, and Google Books API. Features included
            user-authenticated chat, blog posts, and personalized book
            recommendations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Employee Tracker
          </h3>
          <p>
            Developed a command-line application for tracking employee data
            using Node.js, PostgreSQL, and Inquirer.js. Included features to
            manage departments, roles, and employee information.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tech-Blog Platform
          </h3>
          <p>
            Created a blogging platform using Handlebars.js, Express.js, and
            Sequelize with PostgreSQL. Features included user authentication,
            CRUD operations, and deployment on Render.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Weather Dashboard
          </h3>
          <p>
            Built a weather dashboard using OpenWeather API, HTML, CSS, and
            JavaScript. Implemented city search, dynamic UI updates, and local
            storage for search history.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            React Portfolio
          </h3>
          <p>
            Designed a responsive portfolio using React and Bootstrap, deployed
            on Netlify. Showcased personal projects and skills with a polished
            UI.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
