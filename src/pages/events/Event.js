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

  return (
    <React.Fragment>
      {event && (
        <div className={s.eventItem}>
          <h2 className={s.pageTitle}>{event.name}</h2>
          <div className={s.date}>{`${Moment(event.date).format(
            "DD/MM/YYYY"
          )} ${Moment(event.date).format("hh:mm")}`}</div>
          <ReactMarkdown>{event.description}</ReactMarkdown>

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