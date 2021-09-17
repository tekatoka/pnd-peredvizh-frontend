import { Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import './App.css';

import { query as getPersonsQuery } from '../../api/queries/getPersons';

import Map from './map/Map';

const Startpage = (props) =>  {

    return (
          <Map toggleModal={props.toggleModal} modalVisible={props.modalVisible} />
    );
  }

export default Startpage;