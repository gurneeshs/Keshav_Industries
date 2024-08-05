import React, { useState, useEffect } from 'react';
import './Slider.css';
import img1 from '../Images/Indian_Spices.png';
import img2 from '../Images/Grains.png';
import img3 from '../Images/Oils.png';

const images = [
  { src: img1, caption: 'Indian Spices' },
  { src: img2, caption: 'Grains' },
  { src: img3, caption: 'Oils' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.src} alt={`Slide ${index}`} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
      <button className="nav-button left" onClick={goToPrevSlide}>&#8249;</button>
      <button className="nav-button right" onClick={goToNextSlide}>&#8250;</button>
      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
