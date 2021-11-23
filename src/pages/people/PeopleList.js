import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import s from "./People.module.scss";
import { PersonThumb } from "./PersonThumb";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent } from "../../elements/PageElements";

const PeopleList = (props) => {
  const { peopleList, getPeopleList } = props;

  useEffect(() => {
    if (!Array.isArray(peopleList)) {
      getPeopleList();
    }
  }, [props]);

  return (
    <React.Fragment>
      {peopleList && (
        <PageContent>
          {peopleList.map((e, index) => {
            return <PersonThumb person={e} />;
          })}
          {peopleList.map((e, index) => {
            return <PersonThumb person={e} />;
          })}
          {peopleList.map((e, index) => {
            return <PersonThumb person={e} />;
          })}
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleList)
);
