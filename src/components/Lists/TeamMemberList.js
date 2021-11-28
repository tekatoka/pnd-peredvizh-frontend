import React from "react";
import { Link } from "react-router-dom";

export const TeamMemberList = ({ teamMembers }) => {
  return (
    teamMembers && (
      <>
        <h3 className="mt-10">Команда</h3>
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
