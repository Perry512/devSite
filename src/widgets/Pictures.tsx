import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import pictures from '../pictures/pictureArray.tsx';

const Pictures = () => {

    const images = [4,3,2,1].map((number) => ({

        // src: `https://placedog.net/${number}00/${number}00?id=${number}`
        src: pictures[number]

      }));

    return (
    <Carousel hasSizeButton="false" hasIndexBoard="false" hasThumbnails='false' thumbnailWidth='0%' thumbnailHeight='0%' hasThumbnailsAtMax='false' isAutoPlaying="true" images={images} style={{ height: 500, width: 800 } } />
    );
};

export default Pictures;

