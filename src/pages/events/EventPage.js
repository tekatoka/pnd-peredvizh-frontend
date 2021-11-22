import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import NotFoundPage from "../404";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "moment";
import ReactMarkdown from "react-markdown";
import s from "./Events.module.scss";

const EventPage = (props) => {
  const slug = props.match.params.slug;
  const { isLoading, selectedEvent, getEventBySlug } = props;

  useEffect(() => {
    if (!selectedEvent || slug != selectedEvent.slug) {
      getEventBySlug(slug);
    }
  }, [selectedEvent]);
  
  return (
    <React.Fragment>
      {!isLoading && (
        <div>
          {selectedEvent && slug == selectedEvent.slug ? (
            <div>{selectedEvent.Name}</div>
          ) : (
            <NotFoundPage />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventPage));
