import React from "react";
import ReactMarkdown from "react-markdown";

import { Organizer } from "./Organizer";
import s from "./OrganizersList.module.scss";

export const OrganizersList = ({ organizers }) => {
  return (
    <div className={s.teamContainer}>
      {organizers &&
        organizers.map((organizer, index) => {
          return <Organizer organizer={organizer} key={index} />;
        })}

        <p className={s.disclaimer}>
          Следующими в этом списке легко можете оказаться вы: <br/> как локальный
          продюсер, поэт, музыкант или волонтер проекта.
        </p>
    </div>
  );
};
