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
import { Events, People } from "./Items";

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
      <h2 className="page-title">{city.name}</h2>
      <div className={s.infoContainer}>
        {isLoading && <Loader />}
        {!isLoading && selectedCity && eventsList && eventsList.length > 0 && (
          <>
            <h3>Мероприятия</h3>
            <Events events={eventsList} />
          </>
        )}
        {!isLoading && selectedCity && peopleList && peopleList.length > 0 && (
          <>
            <h3 style={{marginTop:"10px"}}>Поэты</h3>
            <People people={peopleList} />
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CityInfo)
);
