import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import s from "./People.module.scss";
import { PersonThumb } from "./PersonThumb";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";

const PeopleList = (props) => {
  const { peopleList, getPeopleList } = props;

  useEffect(() => {
    if (!Array.isArray(peopleList) || !peopleList.length) {
      getPeopleList();
    }
  }, [props]);

  return (
    <React.Fragment>
      {peopleList && (
        <div className={`${s.pageContent}`}>
          {peopleList.map((e, index) => {
            return <PersonThumb person={e} />;
          })}
          {peopleList.map((e, index) => {
            return <PersonThumb person={e} />;
          })}
          {peopleList.map((e, index) => {
            return <PersonThumb person={e} />;
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleList)
);
