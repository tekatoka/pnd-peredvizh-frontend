import React from "react";
import { Switch, Route } from "react-router";

import Startpage from "./pages/startpage/Startpage";
import Subpage from "./pages/subpages/Subpage";
import About from "./pages/about/About";
import EventsList from "./pages/events/EventsList";
import PoetsList from "./pages/people/Poets/PoetsList";
import PoetPage from "./pages/people/Poets/PoetPage";
import TeamMembersList from "./pages/people/Team/TeamMembersList";
import TeamMemberPage from "./pages/people/Team/TeamMemberPage";
import EventPage from "./pages/events/EventPage";
import BlogPage from "./pages/blog/BlogPage";
import HashtagsList from "./pages/hashtags/HashtagsList";
import HashtagPage from "./pages/hashtags/HashtagPage";
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
        path="/poets/:slug"
        render={(props) => <PoetPage {...props} slug={`poets`} />}
      />

      <Route path="/poets" render={(props) => <PoetsList {...props} />} />

      <Route
        path="/team/:slug"
        render={(props) => <TeamMemberPage {...props} slug={`poets`} />}
      />

      {/* <Route path="/team" render={(props) => <TeamMembersList {...props} />} /> */}

      <Route
        path="/team"
        render={(props) => <Subpage {...props} slug={`team-2021`} />}
      />

      <Route
        path="/context/:slug"
        render={(props) => <BlogPage {...props} />}
      />
      <Route path="/context" render={(props) => <BlogPage {...props} />} />

      <Route path="/blog/:slug" render={(props) => <BlogPage {...props} />} />
      <Route path="/blog" render={(props) => <BlogPage {...props} />} />

      <Route
        path="/hashtags/:hashtag"
        render={(props) => <HashtagPage {...props} />}
      />
      <Route path="/hashtags" render={(props) => <HashtagsList {...props} />} />

      <Route
        path="/impressum"
        render={(props) => <Subpage {...props} slug={`impressum`} />}
      />

      <Route
        path="/privacy"
        render={(props) => <Subpage {...props} slug={`privacy`} />}
      />

      <Route
        path="*"
        render={(props) => <NotFoundPage {...props} slug={`404`} />}
      />
    </Switch>
  );
};

export default Routes;
