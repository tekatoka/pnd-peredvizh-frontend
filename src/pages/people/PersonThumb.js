import React from 'react';
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

export const PersonThumb = (props) => {

    const person = props.person;
    const imageAvailable = (person.Image && person.Image.url) ? true : false;

    const profileUrl = "/people/" + person.slug;
    
    return (
      <React.Fragment>
        {
          person &&
          <Link to={profileUrl}>
            <div className={s.personItem}>
            <div className={s.imageContainer}>
              <img src={person.Image.formats["thumbnail"].url} className={s.image} />
              <div className={s.text}>{person.Name}</div>
            </div>

            {/* <h2 className="page-title">{person.Name}</h2> */}
            {/* <Row>
              {
                imageAvailable &&
                <Col className={s.imageContainer} xs={12} lg={6}><img src = {person.Image.formats["thumbnail"].url} /></Col>
              }
              
              <Col xs={12} lg={imageAvailable ? 6 : 12}>
                <ReactMarkdown>{person.Description}</ReactMarkdown>

                {person.events && person.events.length > 0 &&

                  person.events.map(e => {
                    return <div><a href="#">{e.name} | {Moment(e.date).format("DD/MM/YYYY")}</a></div>
                  })
                }
              </Col>
            </Row> */}
          </div>
          </Link>
        }
      </React.Fragment>
    );
  }
