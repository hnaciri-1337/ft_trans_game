import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageCrousel(props: any) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
    setIndex(index + 1);
    props.onChange(index);
  };

  const items = [];

  for (let i: number = 0; i < 5; i++) {
    items.push(
    <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={`/background/${i.toString()}.jpg`}
          alt="slide"
        />
        <Carousel.Caption>
          <h3>Backgroud {(i + 1).toString()}</h3>
        </Carousel.Caption>
    </Carousel.Item>);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width: "30vw", height: "30vh"}} controls={false} fade={false}>
        {items}
    </Carousel>
  );
}