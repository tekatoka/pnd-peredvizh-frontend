import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../store/mapToProps/mapToProps";
import NotFoundPage from "../../404";
import { PageContent, PageTitle } from "../../../elements/PageElements";

import PersonInfoTemplate from "../PersonInfoTemplate";
import s from "../People.module.scss";

const Poet = (props) => {
  const slug = props.match.params.slug;
  const { isLoading, person, selectedPerson, getPersonBySlug } = props;
  useEffect(() => {
    if (slug && (!selectedPerson || slug != selectedPerson.slug)) {
      getPersonBySlug(slug);
    }
  }, [selectedPerson]);
  return (
    <React.Fragment>
      {!isLoading && (
        <>
          {selectedPerson && slug && slug == selectedPerson.slug && (
            <PageContent>
              <PersonInfoTemplate person={selectedPerson} type={"poet"}/>
            </PageContent>
          )}
          {person && <PersonInfoTemplate person={person} url={`/poets/${person.slug}`} type={"poet"} />}
          {!person && (!selectedPerson || selectedPerson == "not found") && (
            <NotFoundPage />
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Poet));
