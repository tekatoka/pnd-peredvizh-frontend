import React from "react";
import s from "./People.module.scss";

export const AnchorLinks = ({ bioRef, eventsRef, poemsRef }) => {
  const scrollToBio = () => {
    bioRef.current.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  const scrollToEvents = () => {
    eventsRef.current.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  const scrollToPoems = () => {
    poemsRef.current.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  return (
    <div className={s.anchorsBlock}>
      <span onClick={scrollToBio} className={s.anchor}>Био</span>
      <span onClick={scrollToEvents} className={s.anchor}>Мероприятия</span>
      <span onClick={scrollToPoems} className={s.anchor}>Стихи</span>
    </div>
  );
};
