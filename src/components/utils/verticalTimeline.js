import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./verticalTimeline.css";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

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
    const minHeight = 7;
    const maxHeight = 13;
    const height = minHeight + (daysDifference / 365) * (maxHeight - minHeight);
    return height;
  };

  const formatTimelineDate = (start, end) => {
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    return `${startYear} - ${endYear}`;
  };

  return (
    <VerticalTimeline animate lineColor="blue">
      {type === "experience" && (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#61A0AF",
            color: "#ffff",
            height: `${calculateTimelineHeight(
              new Date(start),
              new Date(end)
            )}vw`,
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 24)" }}
          date={formatTimelineDate(new Date(start), new Date(end))}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          position="left"
          icon={<WorkRoundedIcon/>}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>{description}</p>
        </VerticalTimelineElement>
      )}
      {type === "education" && (
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(33, 150, 241)",
            color: "#ffff",
            height: `${calculateTimelineHeight(
              new Date(start),
              new Date(end)
            )}vw`,
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 24)" }}
          date={formatTimelineDate(new Date(start), new Date(end))}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          position="right"
          dateClassName="vertical-time-element-date"
          icon={<SchoolRoundedIcon/>}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>{description}</p>
        </VerticalTimelineElement>
      )}
    </VerticalTimeline>
  );
}
