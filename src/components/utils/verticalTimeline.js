import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./verticalTimeline.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import expbg from "../utils/expBG.jpg";
import educbg from "../utils/educBG.jpg";

export default function VerticalTimelineComponent({
  title,
  subtitle,
  description,
  type,
  start,
  end,
}) {
  const calculateTimelineHeight = (start, end) => {
    const timeDifference = end.getTime() - start.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const minHeight = 20;
    const maxHeight = 25;
    const height = minHeight + (daysDifference / 365) * (maxHeight - minHeight);
    return height;
  };

  const formatTimelineDate = (start, end) => {
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    return `${startYear} - ${endYear}`;
  };

  return (
    <VerticalTimeline animate lineColor="black">
      {type === "experience" && (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: `url(${expbg})`,
            backgroundSize: "cover",
            color: "white",
            height: `${calculateTimelineHeight(
              new Date(start),
              new Date(end)
            )}ch`,
          }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          date={formatTimelineDate(new Date(start), new Date(end))}
          iconStyle={{
            background:
              "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
            color: "#000",
            height: `${calculateTimelineHeight(
              new Date(start),
              new Date(end)
            )*2}%`,
            borderRadius:'3rem'
          }}
          position="left"
          icon={<WorkRoundedIcon />}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>{description}</p>
        </VerticalTimelineElement>
      )}
      {type === "education" && (
        <VerticalTimelineElement
          contentStyle={{
            background: `url(${educbg})`,
            backgroundSize: "cover",
            color: "white",
            height: `${calculateTimelineHeight(
              new Date(start),
              new Date(end)
            )}ch`,
          }}
          contentArrowStyle={{ borderRight: "7px solid black" }}
          date={formatTimelineDate(new Date(start), new Date(end))}
          iconStyle={{
            background:
              "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
            color: "#fff",
            height: `${calculateTimelineHeight(
              new Date(start),
              new Date(end)
            )*2}%`,
            borderRadius:'3rem'
          }}
          position="right"
          dateClassName="vertical-time-element-date"
          icon={<SchoolRoundedIcon />}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>{description}</p>
        </VerticalTimelineElement>
      )}
    </VerticalTimeline>
  );
}
