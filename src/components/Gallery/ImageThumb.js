import React from "react";
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
import s from "./Gallery.module.scss";
import NoImage from "../../assets/avatar.png";

const ImageWrapper = ({ children, link, action }) => {
  if (link && link != "") {
    return <Link to={link}>{children}</Link>;
  } else {
    return <span onClick={action}>{children}</span>;
  }
};

export const ImageThumb = (props) => {
  const { imageUrl, description, type, toggleModal, link } = props;

  return (
    <React.Fragment>
      <Col xs={12} sm={6} lg={4} style={{padding: "1px"}}>
        <ImageWrapper link={link} action={toggleModal}>
          <div className={s.imageItem}>
            <div className={s.imageContainer}>
              <img src={imageUrl} className={s.image} />
              {description && <div className={s.imageTitle}>{description}</div>}
            </div>
          </div>
        </ImageWrapper>
      </Col>
    </React.Fragment>
  );
};
