import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {
  mapStateToProps
} from "../../store/mapToProps/mapToProps";

const EventBreadcrumb = (props) => {
    const {selectedEvent} = props;
    return (
      selectedEvent && <span>{selectedEvent.Name}</span>
    )
}

export default connect(mapStateToProps)(EventBreadcrumb);