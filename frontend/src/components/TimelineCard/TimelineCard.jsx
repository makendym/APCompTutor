import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const TimelineCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(18, 18, 18, 0.8)", // 80% opacity
        color: "#fff",
        width: "250px", // Adjust width as needed
        padding: "15px", // Adjust padding as needed
        fontSize: "14px",
        // Reducing margin and padding to bring the card closer to the line
        margin: "0px",
        transform: "translateX(30%)",
      }}
      contentArrowStyle={{
        borderRight: "10px solid  #ffffff",
        right: "255px", // Adjusting arrow position
      }}
      iconStyle={{
        background: education.iconBg,
        boxShadow: "none",
        width: "50px", // Icon size
        height: "50px", // Icon size
        left: "-5px",
      }}
      icon={
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={education.icon}
            alt={education.company_name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      }
      position="right" // Aligns the card to the right side
    >
      <div>
        <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
          {education.title}
        </h3>
        <p style={{ margin: "0", fontSize: "14px", fontWeight: "semibold" }}>
          {education.company_name}
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            fontWeight: "semibold",
            opacity: 0.75,
          }}
        >
          {education.date} {/* Date included inside the card */}
        </p>
      </div>
      <ul
        style={{ marginTop: "10px", listStyleType: "disc"}}
      >
        {education.points.map((point, index) => (
          <li
            key={`education-section-${index}`}
            style={{ marginBottom: "5px", fontSize: "12px" }}
          >
            <p style={{ paddingLeft: "5px", fontSize: "12px" }}>{point}</p>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
