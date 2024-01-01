import React, { useState, useEffect } from 'react';
import '../Home/ImageSlider.css'

const ImageSlider = () => {
  const imageLinks = [
    '/Images/cat.jpeg',
    '/Images/lion.jpeg',
    '/Images/zebra.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change 3000 to set the interval duration (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='image-slider'>
      <div className='image-container'>
      
      <img
        src={imageLinks[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: '100%', height: '550px' }}
        
      />
      <div className='hi'>
      <h1 >
     Digital Art  <br />
     Web & Digital Canvas
     </h1>
     <p className="primary-text">
     Welcome to our digital art designs!<br/>
     Explore a diverse collection of 
     stunning digital artworks created <br/>by talented artists. Start your 
     artistic journey  with us today!
     </p>
      </div>
      
      </div>
      
      
    </div>
  );
};

export default ImageSlider;
