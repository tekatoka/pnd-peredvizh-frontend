import React from "react";
import _ from "lodash";
import moment from "moment";

import { EventLocation } from "./EventLocation";
import s from "./EventLocations.module.scss";

export const EventLocationsList = ({ events }) => {

  return (
    events &&
    events.map((event, index) => {
      return (
        <EventLocation
          startDate={event.StartDate}
          endDate={event.EndDate}
          location={event.event_location}
          counterNumber={index+1}
          key={index}
        />
      );
    })
  );
};
