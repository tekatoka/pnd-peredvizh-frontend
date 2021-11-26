import React, { useEffect, useState } from "react";
import NotFoundPage from "../404";
import { PageContent, PageTitle } from "../../elements/PageElements";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "moment";
import ReactMarkdown from "react-markdown";
import s from "./People.module.scss";
import { CloudinaryLazyImage } from "../../components/Gallery/CloudinaryLazyImage";
import { SocialMediaMenu } from "../../components/SocialMediaLinks/SocialMediaMenu";
import { EventsList } from "../../components/Events/EventsList";

const PersonInfoTemplate = ({ person }) => {
  return (
    person && (
      <>
        <PageTitle>{person.Name}</PageTitle>
        {person.Image && person.Image.provider_metadata && (
          <div className={s.personPageImageContainer}>
            <CloudinaryLazyImage
              type={"fixed"}
              imagePublicId={person.Image.provider_metadata.public_id}
              description={person.Image.alternativeText}
              maxWidth={800}
              maxHeight={442}
            />
          </div>
        )}
        {person.SocialMediaLinks && (
          <SocialMediaMenu items={person.SocialMediaLinks} />
        )}

        {person.Info && <ReactMarkdown>{person.Info}</ReactMarkdown>}
        {person.Biography && <ReactMarkdown>{person.Biography}</ReactMarkdown>}

        {person.Poems &&
          person.Poems.length > 0 &&
          person.Poems.map((poem) => {
            return (
              <div className={s.poemBody}>
                {poem.Title && <h4>{poem.Title}</h4>}
                {poem.Text && <ReactMarkdown>{poem.Text}</ReactMarkdown>}
              </div>
            );
          })}

        {person.Events && person.Events.length > 0 && (
          <EventsList events={person.Events} />
        )}
      </>
    )
  );
};

export default PersonInfoTemplate;
