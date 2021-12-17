import React, { useState } from "react";

import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { PageTitle } from "../../elements/PageElements";
import { DateElement } from "../../elements/PageElements";
import { EventLocation } from "../../components/EventLocations/EventLocation";
import rehypeRaw from "rehype-raw";

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
            <PageTitle>{event.Name}</PageTitle>
          </Link>
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={event.Description} />
          <Link to={eventUrl} className="inverted">
            <Row className={s.eventLocationWrapper}>
              <Col xs={12} md={11}>
                <div className={s.eventLocation}>
                  {event.event_location && (
                    <EventLocation
                      location={event.event_location}
                      startDate={event.StartDate}
                      endDate={event.EndDate}
                      hideCity={true}
                    />
                  )}
                </div>
              </Col>
              <Col
                xs={12}
                md={1}
                className={`flex-vertical ${s.moreIconWrapper}`}
                className="flex-vertical"
              >
                <div className={`${s.icon} fa fa-angle-double-right`} />
              </Col>
            </Row>
          </Link>
          {/* <DateElement>{`${moment(event.StartDate).format(
            "DD/MM/YYYY"
          )} ${moment(event.StartDate).format("HH:mm")}`}</DateElement> */}

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
