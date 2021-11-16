import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "./../../axios.config";
import s from './People.module.scss';
import { PersonThumb } from './PersonThumb';
import { mapStateToProps, mapDispatchToProps } from '../../store/_functions/mapToProps';

const PeopleList = (props) => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    props && 

    axios.get('/people')
      .then((response) => {
        setPeople(response.data);
        props.setIsLoaded();
      })
      .catch((reason) => {
        if (!reason.response || !reason.response.status === 400) {
          // Handle 400
        } else {
          // Handle else
        }
        props.setIsLoaded();
      })
    }, []);

    return (
      <React.Fragment>
        {
          people && 
          <div className={`${s.pageContent}`}>
            {
              people.map((e, index) => {
                return <PersonThumb person={e}  />
              })
            }
                        {
              people.map((e, index) => {
                return <PersonThumb person={e} />
              })
            }
                        {
              people.map((e, index) => {
                return <PersonThumb person={e} />
              })
            }
          </div>
        }
      </React.Fragment>
    );
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleList));