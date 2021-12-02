import React from "react";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";
import s from "./List.module.scss";

export const TeamMemberList = ({ teamMembers }) => {
  return (
    teamMembers && (
      <>
        <PageSubtitle className="mt-10">Команда</PageSubtitle>
        <div className={s.block}>
          {teamMembers.map((p, index) => {
            return (
              <>
                <div key={index}>
                  <Link to={`/team/${p.slug}`} className="inverted">
                    {p.FirstName} {p.Name}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </>
    )
  );
};
