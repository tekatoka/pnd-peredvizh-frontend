import React from "react";

import { Organizer } from "./Organizer";
import s from "./OrganizersList.module.scss";

export const OrganizersList = ({ organizers }) => {
  return (
    organizers &&
    organizers.map((organizer, index) => {
 
      return (
        <Organizer organizer={organizer} key={index} />
      );
    })
  );
};
