import React from "react";
import { Link } from "react-router-dom";

export const PoetsList = ({ poets }) => {
  return (
    poets &&
    poets.map((p, index) => {
      return <div key={index}><Link to={`/poets/${p.slug}`}>{p.Name}</Link></div>
    })
  );
};
