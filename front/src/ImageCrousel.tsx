import React from 'react'
import { Carousel } from '@mantine/carousel';

export default function ImageCrousel(props: any) {

	const handleSelect = (selectedIndex: number) => {
		props.onChange(selectedIndex);
	};
    const items = [];

    for (let i: number = 0; i < 6; i++) {
      items.push(
        <Carousel.Slide key={i}>
          <img
            className="d-block w-100"
            src={`/background/${i.toString()}.jpg`}
            alt="slide"
          />
        </Carousel.Slide>);
    }
    return (
      
      <Carousel height={426} maw={640} mx="auto" onSlideChange={handleSelect} loop>
      {items}
    </Carousel>
  );
}
