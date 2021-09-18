import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Event } from "./Event";
import globalstyle from '../../components/Layout/Layout.module.scss';
import s from './Events.module.scss';
import ModalVideo from '../../components/Modals/ModalVideo';

export const EventsList = (props) => {

  const [events, setEvents] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    props && 

    axios.get('https://pnd-peredvizh-api.herokuapp.com/events/')
      .then((response) => {
        setEvents(response.data);
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
          props.modalVisible && 
          <div className={`${globalstyle.modalWrapper}`}>
            <div 
                ref={props.setWrapperRef}
                className={`py-0 animate__animated animate__faster animate__fadeInUp `}
            >
                <ModalVideo toggleModal={props.toggleModal} video={videoUrl} />
            </div>
          </div>
          }
        {
          events && 
          <div className={`${s.pageContent}`}>
            {
              events.map(e => {
                return <Event event={e} toggleModal={props.toggleModal} setVideoUrl={setVideoUrl} />
              })
            }
          </div>
        }
      </React.Fragment>
    );
  }
