import React from "react";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";

export const PoetsList = ({ poets }) => {
  return (
    poets && (
      <>
        <PageSubtitle className="mt-10">Поэты</PageSubtitle>
        {poets.map((p, index) => {
          return (
            <>
              <div key={index}>
                <Link to={`/poets/${p.slug}`}>{p.Name}</Link>
              </div>
            </>
          );
        })}
      </>
    )
  );
};
