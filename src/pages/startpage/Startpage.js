import { Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import './App.css';

import { query as getPersonsQuery } from '../../api/queries/getPersons';

import Am4chartMap from '../components/maps/am4chart/am4chartMap';

export default function Startpage()  {

  const [persons, setPersons] = useState([]);
  const [searchField, setSearchField] = useState('');

    return (
      <div className='main'>
        <Button style={{margin: "10px"}}><Link to="/about">About</Link></Button>
        {
          <Am4chartMap />
        }
      </div>
    );
  }