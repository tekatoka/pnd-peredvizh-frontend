import React from "react";
import Img from "react-cloudinary-lazy-image";
import config from "../../config";
import s from "./Gallery.module.scss";

export const CloudinaryLazyImage = (props) => {
  const { type, imagePublicId, description, maxWidth, maxHeight } = props;

  return type == "fixed" ? (
    <Img
      cloudName={config.cloudinary.cloudName}
      imageName={imagePublicId}
      fixed={{
        width: maxWidth,
        height: maxHeight,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      alt={description}
    />
  ) : (
    <Img
      cloudName={config.cloudinary.cloudName}
      imageName={imagePublicId}
      fluid={{
        maxWidth: maxWidth,
        maxHeight: maxHeight,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      alt={description}
    />
  );
};
