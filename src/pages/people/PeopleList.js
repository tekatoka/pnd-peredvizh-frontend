import React, { useEffect, useState } from 'react';
import axios from "./../../axios.config";

import s from './People.module.scss';
import { PersonThumb } from './PersonThumb';

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
                return <PersonThumb person={e} />
              })
            }
                        {
              people.map(e => {
                return <PersonThumb person={e} />
              })
            }
                        {
              people.map(e => {
                return <PersonThumb person={e} />
              })
            }
          </div>
        }
      </React.Fragment>
    );
  }
