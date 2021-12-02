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
import { PageContent, PageTitleCentered } from "../../elements/PageElements";
import { EventLocation } from "../../components/EventLocations/EventLocation";
import ImageList from "../../components/Gallery/ImageList";
import { SplittedHashtags } from "../hashtags/SplittedHashtags";
import s from "./Events.module.scss";

const EventPage = (props) => {
  const slug = props.match.params.slug;

  const {
    isLoading,
    selectedEvent,
    getEventBySlug,
    toggleModal,
    modalVisible,
  } = props;

  useEffect(() => {
    if (!selectedEvent || slug != selectedEvent.slug) {
      getEventBySlug(slug);
    }
  }, [selectedEvent]);
  return (
    <React.Fragment>
      {!isLoading && (
        <PageContent>
          {selectedEvent && slug == selectedEvent.slug && (
            <>
              <PageTitleCentered>{selectedEvent.Name}</PageTitleCentered>
              <div className={s.eventLocation}>
                {selectedEvent.event_location && (
                  <EventLocation
                    location={selectedEvent.event_location}
                    startDate={selectedEvent.StartDate}
                    endDate={selectedEvent.EndDate}
                  />
                )}
              </div>

              {selectedEvent.PhotoGallery &&
                selectedEvent.PhotoGallery.Photo &&
                selectedEvent.PhotoGallery.Photo.length > 0 && (
                  <ImageList
                    items={selectedEvent.PhotoGallery.Photo}
                    type={"imageGallery"}
                    toggleModal={toggleModal}
                  />
                )}
              {selectedEvent.hashtags && selectedEvent.hashtags != "" && (
                <SplittedHashtags tags={selectedEvent.hashtags} />
              )}
            </>
          )}
          {selectedEvent == "not found" && <NotFoundPage />}
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventPage)
);
