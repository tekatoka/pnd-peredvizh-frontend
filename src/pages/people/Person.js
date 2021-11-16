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
    const id = props.match.params.id;
    axios.get('/people/' + id)
      .then((response) => {
        setPerson(response.data);
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
