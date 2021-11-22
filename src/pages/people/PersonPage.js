import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import NotFoundPage from "../404";

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
import s from "./People.module.scss";

const Person = (props) => {
  const slug = props.match.params.slug;
  const { isLoading, selectedPerson, getPersonBySlug } = props;

  useEffect(() => {
    if (!selectedPerson || slug != selectedPerson.slug) {
      getPersonBySlug(slug);
    }
  }, [selectedPerson]);
  
  return (
    <React.Fragment>
      {!isLoading && (
        <div>
          {selectedPerson && slug == selectedPerson.slug ? (
            <div>{selectedPerson.Name}</div>
          ) : (
            <NotFoundPage />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Person));