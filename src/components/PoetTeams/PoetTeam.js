import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import s from "./PoetTeamsList.module.scss";

export const PoetTeam = ({ people }) => {
  return (
    people &&
    people.map((person, index) => {
      return <div key={index}><Link to={`/poets/${person.slug}`} className="inverted">{person.FirstName} {person.Name}</Link></div>
    })
  );
};
