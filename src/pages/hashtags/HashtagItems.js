import React, { useEffect, useState } from "react";
import { EventsList } from "../../components/Lists/EventsList";
import { ArticleList } from "../../components/Lists/ArticleList";
import { PoetsList } from "../../components/Lists/PoetsList";
import { TeamMemberList } from "../../components/Lists/TeamMemberList";

export const HashtagItems = (props) => {
  const { selectedHashtag } = props;
  return (
    selectedHashtag && (
      <div>
        {selectedHashtag.blog_articles &&
          selectedHashtag.blog_articles.length > 0 && (
            <>
              <ArticleList articles={selectedHashtag.blog_articles} />
              <br />
            </>
          )}
        {selectedHashtag.events && selectedHashtag.events.length > 0 && (
          <>
            <EventsList events={selectedHashtag.events} />
            <br />
          </>
        )}
        {selectedHashtag.team_members &&
          selectedHashtag.team_members.length > 0 && (
            <>
              <TeamMemberList teamMembers={selectedHashtag.team_members} />
              <br />
            </>
          )}
        {selectedHashtag.people && selectedHashtag.people.length > 0 && (
          <>
            <PoetsList poets={selectedHashtag.people} />
            <br />
          </>
        )}
      </div>
    )
  );
};

