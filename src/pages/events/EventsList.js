import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "./../../axios.config";

import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { Event } from "./Event";
import ModalDialog from "../../components/Modal/ModalDialog";
import Video from "../../components/Video";
import { mapStateToProps, mapDispatchToProps } from "../../store/_functions/mapToProps";
import s from "./Events.module.scss";

const EventsList = (props) => {
  const [events, setEvents] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    props &&
      axios
        .get("/events")
        .then((response) => {
          setEvents(response.data);
          props.setIsLoaded();
        })
        .catch((reason) => {
          if (!reason.response || !reason.response.status === 400) {
            // Handle 400
          } else {
            // Handle else
          }
          props.setIsLoaded();
        });
  }, []);

  return (
    <React.Fragment>

      <ModalDialog>
        <Video video={videoUrl} />
      </ModalDialog>

      {events && (
        <div className={`${s.pageContent}`}>
          {events.map((e) => {
            return (
              <Event
                event={e}
                toggleModal={props.toggleModal}
                setVideoUrl={setVideoUrl}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventsList)
);
