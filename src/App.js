import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import config from "./config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.scss";
import LayoutComponent from "./components/Layout/Layout";

const App = () => {
  const TRACKING_ID = config.config.ga_trackingId;
  ReactGA.initialize(TRACKING_ID);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LayoutComponent} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
