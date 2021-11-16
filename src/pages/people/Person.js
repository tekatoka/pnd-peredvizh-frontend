import React, {useEffect, useState} from 'react';
import axios from "./../../axios.config";

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

export const Person = (props) => {

  const [person, setPerson] = useState();

  useEffect(() => {
    const slug = props.match.params.slug;
    axios.get('/people?slug=' + slug)
      .then((response) => {
        if(Array.isArray(response.data)) setPerson(response.data[0])
        else setPerson(response.data);
      })
      .catch((reason) => {
        if (!reason.response || !reason.response.status === 400) {
          // Handle 400
        } else {
          // Handle else
        }
      })
    
    }, []);

    return (
      <React.Fragment>
        {
          person && 
          <div>{person.Name}</div>
        }
      </React.Fragment>
    );
  }
