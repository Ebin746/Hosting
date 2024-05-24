import React, { useState, useEffect } from 'react';
import './PreOrder.css';

const PreOrder = () => {
  const itemsPerPage = 7;
  const items = Array.from({ length: 14 }, (_, index) => `item-${index + 1}`);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.pre-order-slide');
    slides.forEach((slide, index) => {
      slide.classList.remove('slide-in');
      // Trigger reflow to restart animation
      void slide.offsetWidth;
      slide.classList.add('slide-in');
      slide.style.animationDelay = `${index * 0.1}s`;
    });
  }, [currentPage]);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? Math.ceil(items.length / itemsPerPage) - 1 : prevPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(items.length / itemsPerPage) - 1 ? 0 : prevPage + 1));
  };

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="pre-order-container">
      <h1 className="pre-order-title text preOrderText mb-5x">Pre Order</h1>
      <div className="pre-order-slider">
        <div className="pre-order-slides">
          {currentItems.map((item, index) => (
            <div key={index} className="pre-order-slide">
              <a href={`/ebinpagelink/${item}`}>
                <img
                  src="https://via.placeholder.com/300"
                  alt={item}
                  className="pre-order-placeholder-image"
                />
              </a>
              <p className="pre-order-item-label">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pre-order-nav-buttons">
        <button className="pre-order-nav-button pre-order-prev-button" onClick={handlePrevClick}>&lt;</button>
        <button className="pre-order-nav-button pre-order-next-button" onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

export default PreOrder;
