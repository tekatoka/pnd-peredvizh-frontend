import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import s from "./Gallery.module.scss";

export const ImageCarousel = (props) => {
  const { items, activeItem } = props;

  const [itemsList, setItemsList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let itemsArray = [];
    items.map((item) => {
      itemsArray.push({
        id: item.id,
        url: item.ImageUrl ? item.ImageUrl : item.Image.formats["medium"].url,
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
        <Carousel fade defaultActiveIndex={itemsList.findIndex(x => x.id == activeItem)} interval={null}>
          {itemsList.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                src={item.url}
                alt={item.description}
              />
              <Carousel.Caption>
                <h3>{item.description}</h3>
                {item.author && <p className="slide-author">Фото: {item.author}</p>}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    )
  );
};
