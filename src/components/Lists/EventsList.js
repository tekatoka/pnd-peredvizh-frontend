import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";

export const EventsList = ({ events }) => {
  return (
    events && (
      <>
        <PageSubtitle>Мероприятия</PageSubtitle>
        {events.map((e, index) => {
          return (
            <div key={index}>
              <Link to={`/events/${e.slug}`}>
                {moment(e.StartDate).format("DD/MM/YYYY | HH:mm")} |{" "}
                {e.event_location ? e.event_location.Name : e.Name}
              </Link>
            </div>
          );
        })}
      </>
    )
  );
};
