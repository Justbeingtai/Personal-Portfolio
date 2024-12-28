import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
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
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="May 2024 cont."
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            SMU Full Stack Development Bootcamp
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Bootcamp Graduate
          </h6>
          <p>• Completed an intensive program focused on web development technologies like JavaScript, React, Node.js, and MongoDB.</p>
          <p>• Built full-stack web applications, gaining hands-on experience in front-end and back-end development.</p>
          <p>• Collaborated with peers to develop and deploy dynamic, user-friendly web solutions.</p>
          <p>• Enhanced understanding of APIs, database integration, and responsive design.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="January 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Java Masterclass Certificate
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Udemy
          </h6>
          <p>• Gained in-depth knowledge of Java programming, covering core concepts such as object-oriented programming, data structures, and algorithms.</p>
          <p>• Developed robust applications and refined problem-solving skills using Java.</p>
          <p>• Learned to implement advanced features like file handling, multithreading, and database connectivity.</p>
          <p>• Enhanced programming proficiency through hands-on projects and coding challenges.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
