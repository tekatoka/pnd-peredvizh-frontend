import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { Event } from "./Event";
import ModalDialog from "../../components/Modal/ModalDialog";
import Video from "../../components/VideoPlayer/Video";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent } from "../../elements/PageElements";
import s from "./Events.module.scss";

const EventsList = (props) => {
  const [videoUrl, setVideoUrl] = useState("");

  const { eventList, getEventsList, toggleModal } = props;

  useEffect(() => {
    if (!Array.isArray(eventList)) {
      getEventsList();
    }
  }, [props]);

  return (
    <React.Fragment>
      <ModalDialog large={true}>
        <Video video={videoUrl} />
      </ModalDialog>

      {eventList && (
        <PageContent>
          {eventList.map((e) => {
            return (
              <Event
                event={e}
                toggleModal={toggleModal}
                setVideoUrl={setVideoUrl}
              />
            );
          })}
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventsList)
);
