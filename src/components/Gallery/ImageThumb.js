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
  const { imagePublicId, imageUrl, description, type, toggleModal, link, sizeLg, sizeSm, sizeXs } =
    props;

  return (
    <React.Fragment>
      <Col xs={sizeXs} sm={sizeSm} lg={sizeLg} style={{ padding: "1px" }}>
        <ImageWrapper link={link} action={toggleModal}>
          <div className={s.imageItem}>
            <div className={s.imageContainer}>
              {imagePublicId ? (
                  <CloudinaryLazyImage type={"fluid"} imagePublicId={imagePublicId} description={description} maxWidth={500} maxHeight={500}/>
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
