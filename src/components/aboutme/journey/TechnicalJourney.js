import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiPhp,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
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
          <h1>Technical Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">HTML</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiCss3 />}
        >
          <h3 className="vertical-timeline-element-title">CSS</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiJavascript1 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiPython />}
        >
          <h3 className="vertical-timeline-element-title">Python</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiJava />}
        >
          <h3 className="vertical-timeline-element-title">Java</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiPhp />}
        >
          <h3 className="vertical-timeline-element-title">PHP</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiNodejs />}
        >
          <h3 className="vertical-timeline-element-title">Node.js</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiReact />}
        >
          <h3 className="vertical-timeline-element-title">React</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiMysql />}
        >
          <h3 className="vertical-timeline-element-title">MySQL</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiMongodb />}
        >
          <h3 className="vertical-timeline-element-title">MongoDB</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiGit />}
        >
          <h3 className="vertical-timeline-element-title">Git</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalJourney;
