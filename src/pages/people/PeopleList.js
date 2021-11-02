import React, { useEffect, useState } from 'react';
import axios from "./../../axios.config";

import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import s from './People.module.scss';
import ModalVideo from '../../components/Modals/ModalVideo';
import { Person } from './Person';

export const PeopleList = (props) => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    props && 

    axios.get('/people')
      .then((response) => {
        setPeople(response.data);
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
          people && 
          <div className={`${s.pageContent}`}>
            {
              people.map(e => {
                return <Person person={e} toggleModal={props.toggleModal} />
              })
            }
                        {
              people.map(e => {
                return <Person person={e} toggleModal={props.toggleModal} />
              })
            }
                        {
              people.map(e => {
                return <Person person={e} toggleModal={props.toggleModal} />
              })
            }
          </div>
        }
      </React.Fragment>
    );
  }
