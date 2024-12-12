// src/Carousel.js
import { useState, useEffect } from 'react';
import food2 from '../Food/food3.png';
import food6 from '../Food/jollof.png';
import food4 from '../Food/food6.png';

const slides = [
  { id: 2, content: food2 },
  { id: 3, content: food6 },
  { id: 4, content: food4 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <img src={slide.content} alt={`Food ${slide.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;