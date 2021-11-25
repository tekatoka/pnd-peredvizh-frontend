import React from "react";
import { Switch, Route } from "react-router";

import Startpage from "./pages/startpage/Startpage";
import Subpage from "./pages/subpages/Subpage";
import About from "./pages/about/About";
import EventsList from "./pages/events/EventsList";
import PeopleList from "./pages/people/PeopleList";
import PersonPage from "./pages/people/PersonPage";
import EventPage from "./pages/events/EventPage";
import BlogPage from "./pages/blog/BlogPage";
import NotFoundPage from "./pages/404";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <Startpage {...props} />} />
      <Route
        path="/about"
        render={(props) => <About {...props} slug={`about`} />}
      />

      <Route
        path="/events/:slug"
        render={(props) => <EventPage {...props} />}
      />

      <Route
        path="/events"
        render={(props) => <EventsList {...props} slug={`events`} />}
      />

      <Route
        path="/people/:slug"
        render={(props) => <PersonPage {...props} slug={`people`} />}
      />

      <Route path="/people" render={(props) => <PeopleList {...props} />} />

      <Route
        path="/context/:slug"
        render={(props) => <BlogPage {...props} />}
      />
      <Route path="/context" render={(props) => <BlogPage {...props} />} />

      <Route path="/blog/:slug" render={(props) => <BlogPage {...props} />} />
      <Route path="/blog" render={(props) => <BlogPage {...props} />} />

      <Route
        path="/impressum"
        render={(props) => <Subpage {...props} slug={`impressum`} />}
      />
      <Route
        path="*"
        render={(props) => <NotFoundPage {...props} slug={`404`} />}
      />
    </Switch>
  );
};

export default Routes;
