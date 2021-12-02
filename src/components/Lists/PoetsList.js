import React from "react";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";
import s from "./List.module.scss";

export const PoetsList = ({ poets }) => {
  return (
    poets && (
      <>
        <PageSubtitle className="mt-10">Поэты</PageSubtitle>
        <div className={s.block}>
          {poets.map((p, index) => {
            return (
              <>
                <div key={index}>
                  <Link to={`/poets/${p.slug}`} className="inverted">
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
