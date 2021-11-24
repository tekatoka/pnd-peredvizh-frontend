import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import s from "./Gallery.module.scss";
import { CloudinaryLazyImage } from "./CloudinaryLazyImage";

export const ImageCarousel = (props) => {
  const { items, activeItem } = props;

  const [itemsList, setItemsList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let itemsArray = [];
    items.map((item) => {
      itemsArray.push({
        id: item.id,
        publicId:
          item.Image && item.Image.provider_metadata
            ? item.Image.provider_metadata.public_id
            : null,
        url: item.ImageUrl ? item.ImageUrl : null,
        description: item.Description,
        author: item.Author,
      });
    });
    setItemsList(itemsArray);
  }, [items]);

  return (
    itemsList &&
    itemsList.length > 0 && (
      <>
        <Carousel
          fade
          defaultActiveIndex={itemsList.findIndex((x) => x.id == activeItem)}
          interval={null}
        >
          {itemsList.map((item) => (
            <Carousel.Item key={item.id}>
              {item.publicId ? (
                <CloudinaryLazyImage
                  type={"fixed"}
                  imagePublicId={item.publicId}
                  description={item.description}
                  maxWidth={800}
                  maxHeight={800}
                />
              ) : (
                <img src={item.url} alt={item.description} />
              )}
              <Carousel.Caption>
                <p className={s.slideCaptionPrimary}>{item.description}</p>
                {item.author && (
                  <p className={s.slideCaptionSecondary}>Фото: {item.author}</p>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    )
  );
};
