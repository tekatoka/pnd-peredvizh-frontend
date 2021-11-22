import React, { Component } from "react";

const CityInfo = ({city}) => {
    return(
        <>
            <h2><p>Here comes info about {city.name}</p></h2>
            <>{city.id}</>
        </>
    )
}

export default CityInfo;