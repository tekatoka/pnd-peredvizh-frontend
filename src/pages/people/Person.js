import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "./../../axios.config";
import { mapStateToProps, mapDispatchToProps } from "../../store/_functions/mapToProps";
import NotFoundPage from "../404";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import ReactMarkdown from 'react-markdown';
import s from './People.module.scss';
import Loader from '../../components/Loader/Loader';

const Person = (props) => {
  const [person, setPerson] = useState();

  useEffect(() => {
    const slug = props.match.params.slug;
    axios.get('/people?slug=' + slug)
      .then((response) => {
        let personData;
        if(Array.isArray(response.data)) personData = response.data[0]
        else personData = response.data;
        setPerson(personData);
        props.setIsLoaded(true);
      })
      .catch((reason) => {
        if (!reason.response || !reason.response.status === 400) {
          // Handle 400
        } else {
          // Handle else
        }
        props.setIsLoaded(true);
      })
    
    }, []);

    return (
      <React.Fragment>
        {props.isLoaded && 
        <div>
        {person ? 
          <div>{person.Name}</div>
          :
          <NotFoundPage />}
          </div>
        }
      </React.Fragment>
    );
  }

  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Person)
  );
  