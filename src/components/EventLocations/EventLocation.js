import React from "react";
import moment from "moment";
import s from "./EventLocations.module.scss";

export const EventLocation = ({ location, startDate, endDate, counterNumber }) => {
  return (
    <div>
              {moment(startDate).format("DD.MM.yyyy")}
              <br />
              {counterNumber}
      {location && (
        <>
          <div>{location.City && location.City.Name}</div>
          <div>{location.Name}</div>
          <div>{location.Address}</div>
        </>
      )}
      <br />
    </div>
  );
};
