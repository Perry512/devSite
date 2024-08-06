import React, { useState } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import pictures from '../pictures/pictureArray.tsx';

import styles from '../styles/styles.module.css';

const Pictures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageNumbers = [3,2,1,0];
  const images = imageNumbers.map((number) => ({

      // src: `https://placedog.net/${number}00/${number}00?id=${number}`
      src: pictures[number].src,
      title: pictures[number].title,
      description: pictures[number].description

    }));

  return (
    <div className={styles.photoContainer}>
      {/* <h2>{images[currentIndex].title}</h2> */}
      <Carousel 
        // className={styles.photoContainer} 
        hasSizeButton='false' 
        hasIndexBoard='false' 
        hasThumbnails='false' 
        thumbnailWidth='0%' 
        thumbnailHeight='0%' 
        hasThumbnailsAtMax='false' 
        isAutoPlaying='true'
        hasCaptions='true' 
        images={images} 
        style={{ height: "50%", width: "100%" }}/>
      {/* <p>{images[currentIndex].description}</p> */}
    </div>
  );
};

export default Pictures;

