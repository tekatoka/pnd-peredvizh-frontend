import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const People = ({ people }) => {
  return (
    people &&
    people.map((p, index) => {
      return <div key={index}><Link to={`/people/${p.slug}`}>{p.Name}</Link></div>
    })
  );
};

export const Events = ({ events }) => {
  return (
    events &&
    events.map((e, index) => {
      return <div key={index}><Link to={`/events/${e.slug}`}>{moment(e.StartDate).format("DD/MM/YYYY | HH:mm")} | {e.event_location.Name}</Link></div>
    })
  );
};
