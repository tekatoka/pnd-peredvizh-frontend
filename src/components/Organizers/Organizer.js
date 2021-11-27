import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import s from "./OrganizersList.module.scss";

export const Organizer = ({ organizer }) => {
  return (
    <p>
      {organizer.Link ? (
        <a href={`${organizer.Link}`}>{organizer.Name}</a>
      ) : (
        organizer.Name
      )}{" "}
      {organizer.Description && <span> — {organizer.Description}</span>}
    </p>
  );
};
