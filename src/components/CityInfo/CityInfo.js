import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import Loader from "../Loader/Loader";
import s from "./CityInfo.module.scss";
import { PageTitleCentered } from "../../elements/PageElements";
import { EventsList } from "../Events/EventsList";
import { PoetsList } from "../People/PoetsList";

const CityInfo = (props) => {
  const { city, selectedCity, getEventsByCity, getPeopleByCity, isLoading } =
    props;

  const [eventsList, setEventsList] = useState();
  const [peopleList, setPeopleList] = useState();

  useEffect(() => {
    if (city || !selectedCity || (selectedCity && city.id != selectedCity.id)) {
    getEventsByCity(city.id);
    getPeopleByCity(city.id);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && selectedCity && selectedCity.id == city.id) {
      if (selectedCity.eventsInCity) setEventsList(selectedCity.eventsInCity);
      if (selectedCity.peopleInCity) setPeopleList(selectedCity.peopleInCity);
    }
  }, [selectedCity]);

  return (
    <>
      <PageTitleCentered>{city.name}</PageTitleCentered>
      <div className={s.infoContainer}>
        {isLoading && <Loader />}
        {!isLoading && selectedCity && eventsList && eventsList.length > 0 && (
            <EventsList events={eventsList} />
        )}
        {!isLoading && selectedCity && peopleList && peopleList.length > 0 && (
          <>
            <h3 style={{marginTop:"10px"}}>Поэты</h3>
            <PoetsList poets={peopleList} />
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CityInfo)
);
