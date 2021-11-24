import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
  Carousel
} from "reactstrap";
import { Link } from "react-router-dom";
import ModalDialog from "../../components/Modal/ModalDialog";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent } from "../../elements/PageElements";
import { ImageThumb } from "./ImageThumb";
import NoImage from "../../assets/avatar.png";
import s from "./Gallery.module.scss";
import { ImageCarousel } from "./ImageCarousel";

const ImageList = (props) => {
  const [videoUrl, setVideoUrl] = useState("");

  const { items, type, toggleModal } = props;
  const [currentItemId, setCurrentItemId] = useState();

  const handleToggleModal = (id) => {
    setCurrentItemId(id);
    toggleModal(true);
  };

  return (
    <React.Fragment>
      <ModalDialog>
          <ImageCarousel items={items} activeItem={currentItemId} />
      </ModalDialog>
      <Row>
        {items &&
          items.map((item) => {
            const imagePublicId = item.Image && item.Image.provider_metadata ? item.Image.provider_metadata.public_id : null;
            const imageUrl = item.Image && item.ImageUrl ? item.ImageUrl : NoImage;
            const description = type == "people" ? item.Name : "";
            const link = type == "people" ? "/people/" + item.slug : "";
            return (
              <ImageThumb
                imagePublicId={imagePublicId}
                imageUrl={imageUrl}
                description={description}
                link={link}
                toggleModal={() => handleToggleModal(item.id)}
                type={type}
              />
            );
          })}
      </Row>
    </React.Fragment>
  );
};

export default ImageList;
