import React, { useRef } from 'react';
import './Slider.css';
import Container from "react-bootstrap/Container";

const Slider = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll('.item');
    slider.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll('.item');
    slider.insertBefore(items[items.length - 1], items[0]);
  };

  return (
    <div className="slider">
      <Container fluid className="custom_export p-0">
        <main>
          <ul className="slider" ref={sliderRef}>
            <li className="item slider_bg_img_1">
              <div className="content">
                <h2 className="title">Lossless Youths</h2>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className="item slider_bg_img_2">
              <div className="content">
                <h2 className="title">Estrange Bond</h2>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className="item slider_bg_img_3">
              <div className="content">
                <h2 className="title">The Gate Keeper</h2>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className="item slider_bg_img_4">
              <div className="content">
                <h2 className="title">Last Trace Of Us</h2>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className="item slider_bg_img_3">
              <div className="content">
                <h2 className="title">Last Trace Of Us</h2>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className="item slider_bg_img_2">
              <div className="content">
                <h2 className="title">Last Trace Of Us</h2>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
          </ul>
          <nav className="nav">
            <i className="bi bi-caret-left-fill btn prev" name="arrow-back-outline" onClick={handlePrev}></i>
            <i className="bi bi-caret-right-fill btn next" name="arrow-forward-outline" onClick={handleNext}></i>
          </nav>
        </main>
      </Container>
    </div>
  );
};

export default Slider;
