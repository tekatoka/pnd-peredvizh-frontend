import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4geodata_continentsHigh from "@amcharts/amcharts4-geodata/continentsHigh";

import cities from "./cities";
import s from "./Map.module.scss";
import "../../../styles/app.scss";

import { toggleModal } from "../../../actions/modal";
import ModalDialog from "../../../components/Modal/ModalDialog";
import CityInfo from "../../../components/CityInfo";

//import Loader from '../../../components/Loader/Loader'; // eslint-disable-line css-modules/no-unused-class

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: "",
      loaded: false,
    };
  }

  setSelectedCity = (selectedCity) => {
    this.setState({
      selectedCity: selectedCity,
    });
  };

  componentDidMount() {
    this.map = this.createMap();
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  getColors = () => {
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

  createMap = () => {
    let colors = this.getColors();

    let map = am4core.create("map", am4maps.MapChart);
    map.geodata = am4geodata_continentsHigh;
    map.percentHeight = 100;
    map.dy = 10;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    map.homeZoomLevel = 4.5;
    map.homeGeoPoint = {
      latitude: 55,
      longitude: 55,
    };

    let polygonTemplate = polygonSeries.mapPolygons.template;
    //polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color(colors.lightgray);
    polygonTemplate.stroke = am4core.color(colors.darkgray);
    polygonTemplate.strokeWidth = 1;

    polygonTemplate.events.on("hit", (ev) => {
      this.props.toggleModal(false);
    });

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(colors.gray);
    let citySeries = map.series.push(new am4maps.MapImageSeries());
    citySeries.data = cities;
    citySeries.dataFields.value = "size";
    let cityTemplate = citySeries.mapImages.template;
    cityTemplate.nonScaling = true;
    cityTemplate.propertyFields.latitude = "latitude";
    cityTemplate.propertyFields.longitude = "longitude";
    let circle = cityTemplate.createChild(am4core.Circle);
    circle.fill = am4core.color(colors.red);
    circle.strokeWidth = 0;
    let circleHoverState = circle.states.create("hover");
    circleHoverState.properties.strokeWidth = 1;
    circle.tooltipText = "{name}";
    circle.showTooltip = true;
    circle.propertyFields.radius = "size";

    // Add line series
    var lineSeries = map.series.push(new am4maps.MapSplineSeries());
    lineSeries.mapLines.template.stroke = am4core.color(colors.red);
    lineSeries.mapLines.template.line.strokeWidth = 4;
    lineSeries.mapLines.template.line.nonScalingStroke = true;
    lineSeries.mapLines.template.line.strokeDasharray = "5 3";
    lineSeries.mapLines.template.line.adapter.add(
      "strokeWidth",
      function (strokeWidth, target) {
        target.strokeDasharray = 5 / map.zoomLevel + " " + 3 / map.zoomLevel;
        return strokeWidth;
      }
    );

    lineSeries.data = [
      {
        multiGeoLine: [
          [
            { latitude: 52.520008, longitude: 13.404954 },
            { latitude: 59.9375, longitude: 30.308611 },
            { latitude: 55.751244, longitude: 37.618423 },
            { latitude: 55.78874, longitude: 49.12214 },
            { latitude: 56.833332, longitude: 60.583332 },
            { latitude: 56.01839, longitude: 92.86717 },
            { latitude: 52.29778, longitude: 104.29639 },
          ],
        ],
      },
    ];

    // Creating a pin bullet
    var pin = cityTemplate.createChild(am4plugins_bullets.PinBullet);
    // Configuring pin appearance
    pin.background.fill = am4core.color(colors.darkgray);
    pin.background.pointerBaseWidth = 5;
    pin.background.pointerLength = 30;
    pin.background.radius = 35;
    pin.background.propertyFields.pointerLength = "length";
    pin.background.pointerAngle = 90; //bottom: 270
    pin.circle.fill = am4core.color(colors.white);
    pin.circle.radius = 30;

    let pinHoverState = pin.circle.states.create("hover");
    pinHoverState.properties.fill = am4core.color(colors.lightgray);

    pin.label = new am4core.Label();
    pin.label.text = "{date}";
    pin.label.fontSize = "12px";
    pin.label.fontWeight = "bold";
    pin.label.fill = am4core.color(colors.paleblack);

    let pinLabelHoverState = pin.label.states.create("hover");
    pinLabelHoverState.properties.fill = am4core.color(colors.red);

    cityTemplate.events.on("hit", (ev) => {
      // zoom to an object
      ev.target.series.chart.zoomToMapObject(ev.target);
      this.setSelectedCity(ev.target.dataItem.dataContext.name);
      this.props.toggleModal(true);
    });

    var label = pin.createChild(am4core.Label);
    label.text = "{name}";
    label.fontSize = "16px";
    label.fontWeight = "bold";
    label.position = "bottom";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = am4core.color(colors.paleblack);
    label.adapter.add("dy", function (dy) {
      return (110 + dy) * -1;
    });

    map.preloader.preventShow = false;
    map.preloader.progress = 1;

    map.events.on("ready", () => {
      this.setState({
        loaded: true,
      });
    });

    return map;
  };

  render() {
    return (
      <React.Fragment>

      <ModalDialog>
        <CityInfo city={this.state.selectedCity} />
      </ModalDialog>

        <div className={s.map} id="map"></div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    modalVisible: store.modal.modalVisible,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (showModal) => {
      dispatch(toggleModal(showModal));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));