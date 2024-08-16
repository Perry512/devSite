import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; // Correct import
import 'slick-carousel/slick/slick-theme.css'; // Correct import

import pictures from '../pictures/pictureArray.tsx';

import styles from '../styles/styles.module.css';

const Pictures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageNumbers = [3,2,1,0];
  const images = imageNumbers.map((number) => ({
      src: pictures[number].src,
      title: pictures[number].title,
      description: pictures[number].description

    }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentIndex(current),
  };

  console.log(images);
  return (
    <div className={styles.photoContainer}>
      <h2>{images[currentIndex]?.title}</h2>
      <Slider {...settings}>
        {images.map((image, index) =>
          <div key={index} style={{textAlign: "center" }}>
            <h3>{image.title}</h3>
            <img src={image.src} alt={image.title} style={{width:"100%", height:"100%"}}/>
            <p>{image.description}</p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Pictures;

