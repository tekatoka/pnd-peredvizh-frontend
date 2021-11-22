import React, {useState} from "react";

import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "moment";
import ReactMarkdown from "react-markdown";

import s from "./Events.module.scss";

export const Event = (props) => {
  const {event, toggleModal, setVideoUrl} = props;

  const handleVideoLinkClick = (videoUrl) => {
    setVideoUrl(videoUrl);
    toggleModal(true);
  };

  const eventUrl = "/events/" + event.slug;

  return (
    <React.Fragment>
      {event && (
        <div className={s.eventItem}>
          <Link to={eventUrl}>
          <h2 className={s.pageTitle}>{event.Name}</h2>
          </Link>
          <div className={s.date}>{`${Moment(event.Date).format(
            "DD/MM/YYYY"
          )} ${Moment(event.Date).format("hh:mm")}`}</div>
          <ReactMarkdown>{event.Description}</ReactMarkdown>

          {event.Links && (
            <>
              <br />
              <span
                className={`${s.icon} glyphicon glyphicon-facetime-video`}
                onClick={() => handleVideoLinkClick(event.Links)}
              />
            </>
          )}
        </div>
      )}
    </React.Fragment>
  );
};