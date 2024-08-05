import React from 'react';
import './Certification_Slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import APEDA_pic from '../Images/APEDA_pic.png';
import Fssai_pic from '../Images/Fssai_pic.png';
import Healthy_Food_pic from '../Images/Healthy_Food_pic.png';
import India_Organic_pic from '../Images/India_Organic_pic.png';
import Spices_Board_pic from '../Images/Spices_Board_pic.png';
import ISO_pic from '../Images/ISO_pic.png';
import Kosher_pic from '../Images/Kosher_pic.png';
import USDA_pic from '../Images/USDA_pic.png';

const CertificationSlider = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3
            }
          }
        ]
    };

    return (
        <div className="custom-logos">
            <Slider {...settings}>
                <div><img src={ISO_pic} alt="" /></div>
                <div><img src={Fssai_pic} alt="" /></div>
                <div><img src={APEDA_pic} alt="" /></div>
                <div><img src={Kosher_pic} alt="" /></div>
                <div><img src={USDA_pic} alt="" /></div>
                <div><img src={Spices_Board_pic} alt="" /></div>
                <div><img src={India_Organic_pic} alt="" /></div>
                <div><img src={Healthy_Food_pic} alt="" /></div>
                
            </Slider>
        </div>
    );
};

export default CertificationSlider;
