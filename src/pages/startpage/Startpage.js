import { Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';

import Map from './map/Map';

const Startpage = (props) =>  {

    return (
          <Map toggleModal={props.toggleModal} modalVisible={props.modalVisible} />
    );
  }

export default Startpage;