import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4geodata_continentsHigh from "@amcharts/amcharts4-geodata/continentsHigh";

import s from "./Map.module.scss";
import "../../../styles/app.scss";

import ModalDialog from "../../../components/Modal/ModalDialog";
import CityInfo from "../../../components/CityInfo/CityInfo";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../store/mapToProps/mapToProps";

// import cities2 from "./cities";

const Map = (props) => {
  const [citiesList, setCitiesList] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const { cities, getCities, setMapLoading, toggleModal, modalVisible } = props;

  const handleToggleModal = (item) => {
    setSelectedCity({
      name: item.Name,
      id: item.id,
    });
    toggleModal(true);
  };

  useEffect(() => {
    if (!cities) getCities();
  }, []);

  useEffect(() => {
    if (cities && cities.length > 0) {

      //cities.map(city => city.ColorCode = am4core.color(city.ColorCode));
      setCitiesList(
        _.orderBy(
          cities,
          (c) => {
            return c.Longitude;
          },
          ["asc"]
        )
      );
        }
  }, [cities]);

  useEffect(() => {
    if (citiesList) createMap();
  }, [citiesList]);

  const getColors = () => {
    let colors = {
      lightgray: "#d3d3d3",
      middlegray: "#c5c5c5",
      gray: "#a9a9a9",
      darkgray: "#808080",
      red: "#ff3b3f",
      paleblack: "#12142B",
      black: "#000",
      white: "#fff",
    };

    return colors;
  };

  const createMap = () => {
    setMapLoading(true);
    let colors = getColors();

    let map = am4core.create("map", am4maps.MapChart);
    map.geodata = am4geodata_continentsHigh;
    map.percentHeight = 100;
    map.dy = 10;
    map.projection = new am4maps.projections.Miller();
    map.responsive.enabled = true;

    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    map.homeZoomLevel = 6;
    map.homeGeoPoint = {
      latitude: 55,
      longitude: 35,
    };

    // Add line series
    var lineSeries = map.series.push(new am4maps.MapSplineSeries());
    lineSeries.mapLines.template.stroke = am4core.color(colors.darkgray);
    lineSeries.mapLines.template.line.strokeWidth = 2;
    lineSeries.mapLines.template.line.nonScalingStroke = true;
    lineSeries.mapLines.template.line.strokeDasharray = "30";
    lineSeries.mapLines.template.line.adapter.add(
      "strokeWidth",
      function (strokeWidth, target) {
        target.strokeDasharray = 10 / map.zoomLevel + " " + 3 / map.zoomLevel;
        return strokeWidth;
      }
    );

    let geoLineData = [];
    citiesList.map((c) =>
      geoLineData.push({ latitude: c.Latitude, longitude: c.Longitude })
    );

    lineSeries.data = [
      {
        multiGeoLine: [geoLineData],
      },
    ];

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{Name}";
    polygonTemplate.fill = am4core.color(colors.lightgray);
    polygonTemplate.stroke = am4core.color(colors.darkgray);
    polygonTemplate.strokeWidth = 1;

    // polygonTemplate.events.on("hit", (ev) => {
    //   toggleModal(false);
    // });

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(colors.gray);
    let citySeries = map.series.push(new am4maps.MapImageSeries());

    citySeries.data = citiesList;

    citySeries.dataFields.value = 4;
    let cityTemplate = citySeries.mapImages.template;
    cityTemplate.nonScaling = true;
    cityTemplate.propertyFields.latitude = "Latitude";
    cityTemplate.propertyFields.longitude = "Longitude";

    // let circle = cityTemplate.createChild(am4core.Circle);
    // circle.fill = am4core.color(colors.red);
    // circle.strokeWidth = 0;
    // let circleHoverState = circle.states.create("hover");
    // circleHoverState.properties.strokeWidth = 1;
    // circle.tooltipText = "{Name}";
    // circle.showTooltip = true;
    // circle.propertyFields.radius = 4;

    //------------------------------
    var pin = cityTemplate.createChild(am4core.Rectangle);
    pin.horizontalCenter = "middle";
    pin.verticalCenter = "middle";
    pin.width = 30;
    pin.height = 30;
    pin.stroke = am4core.color(colors.lightgray);
    pin.strokeWidth = 0;
    pin.propertyFields.fill = "ColorCode";

    let hoveredPin = pin.states.create("hover");
    hoveredPin.properties.stroke = am4core.color(colors.darkgray);
    hoveredPin.properties.strokeWidth = 2;

    var pinImage = cityTemplate.createChild(am4core.Sprite);
    pinImage.path = "M2.07 17.64L7.72 11.98L2.07 6.32L4.39 4L12.37 11.98L4.39 19.96L2.07 17.64ZM21.93 11.98L13.91 4L11.59 6.28L17.29 11.98L11.59 17.68L13.91 20L21.93 11.98Z";
    pinImage.horizontalCenter = "middle";
    pinImage.verticalCenter = "middle";
    pinImage.fill = am4core.color(colors.lightgray);
    pinImage.strokeWidth = 2;

    let hoveredPinImage = pinImage.states.create("hover");
    hoveredPinImage.properties.fill = am4core.color(colors.white);

    //---------------------------------

    var label = cityTemplate.createChild(am4core.Label);
    label.text = "{Name}";
    label.fontSize = "16px";
    label.fontWeight = "bold";
    label.position = "bottom";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.horizontalCenter = "middle";
    label.fill = am4core.color(colors.paleblack);
    label.adapter.add("dy", function (dy) {
      return (30 + dy) * -1;
    });
  
    
    // // Creating a pin bullet
    // var pin = cityTemplate.createChild(am4plugins_bullets.PinBullet);
    // // Configuring pin appearance
    // pin.background.fill = am4core.color(colors.darkgray);
    // pin.background.pointerBaseWidth = 5;
    // pin.background.pointerLength = 30;
    // pin.background.radius = 35;
    // pin.background.propertyFields.pointerLength = "length";
    // pin.background.pointerAngle = 90; //bottom: 270
    // pin.circle.fill = am4core.color(colors.white);
    // pin.circle.radius = 30;

    // let pinHoverState = pin.circle.states.create("hover");
    // pinHoverState.properties.fill = am4core.color(colors.lightgray);

    // pin.label = new am4core.Label();
    // // pin.label.text = "{date}";
    // // pin.label.fontSize = "12px";
    // // pin.label.fontWeight = "bold";
    // pin.label.fill = am4core.color(colors.paleblack);

    // let pinLabelHoverState = pin.label.states.create("hover");
    // pinLabelHoverState.properties.fill = am4core.color(colors.red);

    cityTemplate.events.on("hit", (ev) => {
      // zoom to an object
      ev.target.series.chart.zoomToMapObject(ev.target);
      // setSelectedCity({
      //   name: ev.target.dataItem.dataContext.Name,
      //   id: ev.target.dataItem.dataContext.id,
      // });
      handleToggleModal(ev.target.dataItem.dataContext);
    });

    map.preloader.preventShow = false;
    map.preloader.progress = 1;

    map.events.on("ready", () => {
      //map is loaded
      setMapLoading(false);
    });

    return map;
  };

  return (
    <React.Fragment>
      {modalVisible && selectedCity && (
        <ModalDialog>
          <CityInfo city={selectedCity} />
        </ModalDialog>
      )}
      <div className={s.map} id="map"></div>
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
