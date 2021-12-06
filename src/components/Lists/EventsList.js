import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { PageSubtitle } from "../../elements/PageElements";
import s from "./List.module.scss";

export const EventsList = ({ events }) => {
  return (
    events && (
      <>
        <PageSubtitle>Мероприятия</PageSubtitle>
        <div className={s.block}>
          {events.map((e, index) => {
            return (
              <div key={index} className={s.event}>
                <Link to={`/events/${e.slug}`} className="inverted">
                  <div className={s.dateElement}>
                    <div className={s.date}>
                      {moment(e.StartDate).format("DD/MM/YYYY")}
                    </div>
                    <div className={s.time}>
                      {moment(e.StartDate).format("HH:mm")}
                    </div>
                  </div>
                  {e.event_location ? e.event_location.Name : e.Name}
                </Link>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};
