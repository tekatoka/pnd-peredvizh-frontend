import React from "react";

import { PoetTeam } from "./PoetTeam";
import s from "./PoetTeamsList.module.scss";

export const PoetTeamsList = ({ events, poetTeams }) => {
  return (
    events &&
    events.map((event, index) => {
      
      let team;
      
      if(event.event_location && event.event_location.City) team = poetTeams.find(p => p.city.id == event.event_location.City.id);
      
      return (
        team && event.event_location && 
        <>
        <strong>{event.event_location.City.Name}</strong>
        <PoetTeam
          people={team.people}
          key={index}
        />
        <br />
        </>
      );
    })
  );
};
