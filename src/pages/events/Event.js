import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import ReactMarkdown from 'react-markdown';
import ModalCityInfo from "../../components/Modals/ModalVideo"
import s from './Events.module.scss';

export const Event = (props) => {

    const event = props.event;

    const handleVideoLinkClick = (videoUrl) => {
      props.setVideoUrl(videoUrl);
      props.toggleModal(true);
    }

    return (
      <React.Fragment>
        {
          event &&
          <div className={s.eventItem}>
            <h2 className={s.pageTitle}>{event.name}</h2>
            <div className={s.date}>{`${Moment(event.date).format('DD/MM/YYYY')} ${Moment(event.date).format('hh:mm')}`}</div>
            <ReactMarkdown>{event.description}</ReactMarkdown>
            
            {
              event.Links &&
              <>
              <br />
              <span className={`${s.icon} glyphicon glyphicon-facetime-video`} onClick={() => handleVideoLinkClick(event.Links)} />
              </>
            }
          </div>
        }
      </React.Fragment>
    );
  }
