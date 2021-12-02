import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../store/mapToProps/mapToProps";
import NotFoundPage from "../../404";
import { PageContent, PageTitle } from "../../../elements/PageElements";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "moment";
import ReactMarkdown from "react-markdown";
import PersonInfoTemplate from "../PersonInfoTemplate";
import s from "../People.module.scss";

const TeamMember = (props) => {
  const slug = props.match.params.slug;
  const { isLoading, person, selectedTeamMember, getTeamMemberBySlug } = props;
  useEffect(() => {
    if (slug && (!selectedTeamMember || slug != selectedTeamMember.slug)) {
      getTeamMemberBySlug(slug);
    }
  }, [selectedTeamMember]);
  return (
    <React.Fragment>
      {!isLoading && (
        <>
          {selectedTeamMember && slug && slug == selectedTeamMember.slug && (
            <PageContent>
              <PersonInfoTemplate person={selectedTeamMember} />
            </PageContent>
          )}
          {person && <PersonInfoTemplate person={person} url={`/team/${person.slug}`} />}
          {!person && (!selectedTeamMember || selectedTeamMember == "not found") && (
            <NotFoundPage />
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamMember));
