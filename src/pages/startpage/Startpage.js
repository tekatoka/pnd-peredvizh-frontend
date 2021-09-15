import { Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import './App.css';

import { query as getPersonsQuery } from '../../api/queries/getPersons';

import Map from './map/Map';

export default function Startpage()  {

    return (
          <Map />
    );
  }