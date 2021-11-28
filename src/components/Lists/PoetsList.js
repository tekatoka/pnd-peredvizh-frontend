import React from "react";
import { Link } from "react-router-dom";

export const PoetsList = ({ poets }) => {
  return (
    poets && (
      <>
        <h3 className="mt-10">Поэты</h3>
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
