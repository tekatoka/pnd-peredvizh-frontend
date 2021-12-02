import React from "react";
import moment from "moment";
import { Col } from "reactstrap";
import s from "./EventLocations.module.scss";

export const EventLocation = ({
  location,
  startDate,
  endDate,
  counterNumber,
  lastItem,
  hideCity
}) => {
  return (
    <Col
      xs={12}
      sm={lastItem ? 12 : 6}
      lg={lastItem ? 12 : 4}
      className={s.locationContainer}
    >
      {location && (
        <div className={s.itemWrapper}>
          <div>
            {!hideCity && location.City && location.City.Name && (
              <div className={s.title}>
                <p>
                  <strong>{location.City && location.City.Name}</strong>
                </p>
              </div>
            )}
            <div className={s.descr}>
              <p className={s.date}>
                <strong>{moment(startDate).format("DD.MM.yyyy")}</strong>
              </p>
              <p>
                <strong>{location.Name}</strong>
              </p>
              <p>
                <span>{location.Address}</span>
              </p>
            </div>
            <div
              className={s.counterSymbol}
              style={{
                color: location.City.ColorCode
                  ? location.City.ColorCode
                  : "rgba(230, 230, 230, 0.7)",
              }}
            >
              {counterNumber && counterNumber}
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};
