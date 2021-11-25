import React from "react";
import {
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import s from "./Gallery.module.scss";
import { CloudinaryLazyImage } from "./CloudinaryLazyImage";

const ImageWrapper = ({ children, link, action }) => {
  if (link && link != "") {
    return <Link to={link}>{children}</Link>;
  } else {
    return <span onClick={action}>{children}</span>;
  }
};

export const ImageThumb = (props) => {
  const { imagePublicId, imageUrl, description, type, toggleModal, link } =
    props;

  return (
    <React.Fragment>
      <Col xs={12} sm={6} lg={4} style={{ padding: "1px" }}>
        <ImageWrapper link={link} action={toggleModal}>
          <div className={s.imageItem}>
            <div className={s.imageContainer}>
              {imagePublicId ? (
                  <CloudinaryLazyImage type={"fluid"} imagePublicId={imagePublicId} description={description} maxWidth={300} maxHeight={300}/>
              ) : (
                <img src={imageUrl} />
              )}
              {description && <div className={s.imageTitle}>{description}</div>}
            </div>
          </div>
        </ImageWrapper>
      </Col>
    </React.Fragment>
  );
};
