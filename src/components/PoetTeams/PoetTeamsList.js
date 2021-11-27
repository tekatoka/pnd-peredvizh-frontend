import React from "react";
import { Row, Col } from "reactstrap";
import { PoetTeam } from "./PoetTeam";
import s from "./PoetTeamsList.module.scss";

export const PoetTeamsList = ({ events, poetTeams }) => {
  return (
    <Row className={`${s.teamsRow} full-width`}>
      {events &&
        events.map((event, index) => {
          let team;

          if (event.event_location && event.event_location.City)
            team = poetTeams.find(
              (p) => p.city.id == event.event_location.City.id
            );
          
            const lastItem = index == events.length - 1;

          return (
            team &&
            event.event_location && (
              <Col
                xs={12}
                sm={lastItem ? 12 : 6}
                lg={lastItem ? 12 : 4}
                className={s.teamContainer}
              >
                <div className={s.itemWrapper}>
                  <div className={s.title}>
                    <strong>{event.event_location.City.Name}</strong>
                  </div>
                  <p>
                    <PoetTeam people={team.people} key={index} />
                  </p>
                </div>
              </Col>
            )
          );
        })}
    </Row>
  );
};
