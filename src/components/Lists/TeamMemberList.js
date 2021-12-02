import React from "react";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";

export const TeamMemberList = ({ teamMembers }) => {
  return (
    teamMembers && (
      <>
        <PageSubtitle className="mt-10">Команда</PageSubtitle>
        {teamMembers.map((p, index) => {
          return (
            <>
              <div key={index}>
                <Link to={`/team/${p.slug}`}>{p.Name}</Link>
              </div>
            </>
          );
        })}
      </>
    )
  );
};
