import React, { useState, useEffect } from 'react';
import './Slider.css';
import Container from "react-bootstrap/Container";
import img1 from '../../Images/Indian_Spices.png';
import img2 from '../../Images/Grains.png';
import img3 from '../../Images/Oils.png';


const Slider = () => {
  const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

  return (
    <div className="slider">
      <Container fluid class=" custom_export">
        <main>
            <ul class='slider'>
              <li class='item slider_bg_img_1' >
                <div class='content'>
                  <h2 class='title'>"Lossless Youths"</h2>
                  <p class='description'> Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                  praesentium nisi. Id laboriosam ipsam enim.  </p>
                  <button>Read More</button>
                </div>
              </li>
              <li class='item slider_bg_img_2' >
                <div class='content'>
                  <h2 class='title'>"Estrange Bond"</h2>
                  <p class='description'> Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                  praesentium nisi. Id laboriosam ipsam enim.  </p>
                  <button>Read More</button>
                </div>
              </li>
              <li class='item slider_bg_img_3' >
                <div class='content'>
                  <h2 class='title'>"The Gate Keeper"</h2>
                  <p class='description'> Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                  praesentium nisi. Id laboriosam ipsam enim.  </p>
                  <button>Read More</button>
                </div>
              </li>
              <li class='item slider_bg_img_4' >
                <div class='content'>
                  <h2 class='title'>"Last Trace Of Us"</h2>
                  <p class='description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                  </p>
                  <button>Read More</button>
                </div>
              </li>
            </ul>
            <nav class='nav'>
              <i class="bi bi-arrow-bar-left btn prev" name="arrow-back-outline"></i>
              <i class="bi bi-arrow-bar-right btn next"  name="arrow-forward-outline"></i>
            </nav>
          </main>
    </Container>
    </div>
  );
};

export default Slider;
