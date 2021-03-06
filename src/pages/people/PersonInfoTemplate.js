import React, { useRef } from "react";
import { PageSubtitle, PageSubtitleSmall, PageTitleCentered } from "../../elements/PageElements";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import s from "./People.module.scss";
import { CloudinaryLazyImage } from "../../components/Gallery/CloudinaryLazyImage";
import { SocialMediaMenu } from "../../components/SocialMediaLinks/SocialMediaMenu";
import { EventsList } from "../../components/Lists/EventsList";
import { SplittedHashtags } from "../hashtags/SplittedHashtags";
import { AnchorLinks } from "./AnchorLinks";

const TitleWrapper = ({ children, url }) => {
  if (url) {
    return <Link to={url}>{children}</Link>;
  } else {
    return <>{children}</>;
  }
};

const PersonInfoTemplate = ({ person, url, type, modalVisible }) => {
  const bioRef = useRef();
  const eventsRef = useRef();
  const poemsRef = useRef();
  return (
    person && (
      <div className={s.personPage}>
        {type == "poet" && (
          <AnchorLinks
            bioRef={bioRef}
            eventsRef={eventsRef}
            poemsRef={poemsRef}
          />
        )}
        <TitleWrapper url={url}>
          <PageTitleCentered>
            {person.FirstName} {person.Name}
          </PageTitleCentered>
          {person.City && <h5 className="page-title centered">{person.City.Name}</h5>}
        </TitleWrapper>

        {person.Image && person.Image.provider_metadata && (
          <div className={s.personPageImageContainer}>
            <CloudinaryLazyImage
              type={"fixed"}
              imagePublicId={person.Image.provider_metadata.public_id}
              description={person.Image.alternativeText}
              maxWidth={500}
              maxHeight={500}
            />
          </div>
        )}
        {person.SocialMediaLinks && (
          <SocialMediaMenu items={person.SocialMediaLinks} />
        )}
        {person.Info && <ReactMarkdown>{person.Info}</ReactMarkdown>}
        {person.Biography && (
          <section
            className={!modalVisible ? s.scrollableSection : ""}
            ref={bioRef}
          >
            <ReactMarkdown>{person.Biography}</ReactMarkdown>
          </section>
        )}
        {person.Events && person.Events.length > 0 && (
          <section
            className={!modalVisible ? s.scrollableSection : ""}
            ref={eventsRef}
          >
            <EventsList events={person.Events} showCity={true} />
          </section>
        )}
        {person.Poems && person.Poems.length > 0 && (
          <section
            className={!modalVisible ? s.scrollableSection : ""}
            ref={poemsRef}
          >
            <PageSubtitle>??????????</PageSubtitle>
            {person.Poems.map((poem) => {
              return (
                <div className={s.poemBody}>
                  {poem.Title && (
                    <h4>
                      <strong>{poem.Title}</strong>
                    </h4>
                  )}
                  {poem.Text && <ReactMarkdown>{poem.Text}</ReactMarkdown>}
                </div>
              );
            })}
          </section>
        )}
        {person.hashtags && person.hashtags != "" && (
          <SplittedHashtags tags={person.hashtags} />
        )}
      </div>
    )
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonInfoTemplate);
