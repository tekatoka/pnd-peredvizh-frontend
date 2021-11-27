import React, { useState } from "react";

import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { PageTitleCentered } from "../../elements/PageElements";
import { DateElement } from "../../elements/PageElements";

import s from "./Events.module.scss";

export const Event = (props) => {
  const { event, toggleModal, setVideoUrl } = props;

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
            <PageTitleCentered>{event.Name}</PageTitleCentered>
          </Link>
          <DateElement>{`${moment(event.StartDate).format(
            "DD/MM/YYYY"
          )} ${moment(event.StartDate).format("HH:mm")}`}</DateElement>
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
