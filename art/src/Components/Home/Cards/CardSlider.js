// CardSlider.js
import React, { useState, useEffect } from 'react';
import './CardSlider.css'; // Import your CSS file

const CardSlider = ({ imageUrls }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    // Automatically change the active card every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div className="card-slider">
      <div className="cards-container">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`card ${index === currentCardIndex ? 'active' : ''}`}
          >
            <img src={imageUrl} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
