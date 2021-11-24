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

const ImageList = (props) => {
  const [videoUrl, setVideoUrl] = useState("");

  const { items, type, toggleModal } = props;

  return (
    <React.Fragment>
      <ModalDialog>{items && items.length}</ModalDialog>
      <Row>
        {items &&
          items.map((item) => {
            const imageUrl = item.Image
              ? item.ImageUrl
                ? item.ImageUrl
                : item.Image.formats["thumbnail"].url
              : NoImage;
            const description = type == "people" ? item.Name : "";
            const link = type == "people" ? "/people/" + item.slug : "";
            return (
              <ImageThumb
                imageUrl={imageUrl}
                description={description}
                link={link}
                toggleModal={toggleModal}
                type={type}
              />
            );
          })}
      </Row>
    </React.Fragment>
  );
};

export default ImageList;
