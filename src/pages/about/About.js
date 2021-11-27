import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactMarkdown from "react-markdown";
import _ from "lodash";
import moment from "moment";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { EventLocationsList } from "../../components/EventLocations/EventLocationsList";
import { PoetTeamsList } from "../../components/PoetTeams/PoetTeamsList";
import { OrganizersList } from "../../components/Organizers/OrganizersList";
import { PageContent, PageTitle, PageTitleCentered } from "../../elements/PageElements";

import s from "./About.module.scss";

const About = (props) => {
  const slug = props.slug;
  const {
    isLoading,
    currentPage,
    getSubpageBySlug,
    currentProjectYear,
    getProjectYear,
  } = props;

  const [eventsList, setEventsList] = useState([]);
  const [poetTeamsList, setPoetTeamsList] = useState([]);
  const [organizersList, setOrganizersList] = useState([]);

  const year = 2021;

  useEffect(() => {
    if (!currentPage || slug != currentPage.slug) {
      getSubpageBySlug(slug);
    }

    if (!currentProjectYear || currentProjectYear.Year !== year) {
      getProjectYear(year);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentProjectYear && currentProjectYear.Events.events) {
      let events = currentProjectYear.Events.events;
      //order events by date
      events = _.orderBy(
        events,
        (o) => {
          return moment(o.StartDate);
        },
        ["asc"]
      );

      setEventsList(events);
    }

    if (currentProjectYear && currentProjectYear.PoetTeams)
      setPoetTeamsList(currentProjectYear.PoetTeams);

    if (currentProjectYear && currentProjectYear.Organizers)
      setOrganizersList(currentProjectYear.Organizers);
  }, [currentProjectYear]);

  return (
    <React.Fragment>
      {!isLoading && currentPage && (
        <PageContent>
          <PageTitleCentered>{currentPage.title}</PageTitleCentered>
          <ReactMarkdown>{currentPage.content}</ReactMarkdown>

          {eventsList && (
            <div style={{marginTop: "45px"}}>
              <PageTitleCentered centered={true}>ПЛОЩАДКИ PEREDVIЖ</PageTitleCentered>
              <EventLocationsList events={eventsList} />
            </div>
          )}

          {eventsList && poetTeamsList && (
            <div style={{marginTop: "45px"}}>
              <PageTitleCentered>СБОРНЫЕ ПОЭТОВ В ГОРОДАХ ПРОЕКТА</PageTitleCentered>
              <PoetTeamsList events={eventsList} poetTeams={poetTeamsList} />
            </div>
          )}

          {organizersList && (
            <div style={{marginTop: "45px"}}>
              <PageTitleCentered>В ПРОЕКТЕ УЧАСТВУЮТ:</PageTitleCentered>
              <OrganizersList organizers={organizersList} />
              </div>
          )}
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
