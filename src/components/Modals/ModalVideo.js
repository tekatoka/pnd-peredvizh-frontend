import React from "react";
import { Row, Col, Button } from "reactstrap";

import ReactPlayer from 'react-player'
import Widget from "../Widget/Widget";
import s from "./Modal.module.scss";

class ModalVideo extends React.Component {

    constructor(props) {
        super(props);
      }

  state = {
    options: {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    },
  };

  render() {
    return (
      <div className={s.root}>
        <Widget title={<h6></h6>} close handleToggleModal={this.props.toggleModal}> 
          <ReactPlayer url={this.props.video} width={"100%"} style={{marginTop: "10px"}} controls={true} />
        </Widget>
      </div>
    );
  }
}

export default ModalVideo;
