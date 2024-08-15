import React, { useEffect } from 'react';
import "./certifi.css"

const images = [
    '../img/Fssai_pic.png',
    '../img/APEDA_pic.png',
    '../img/ISO_pic.png',
    '../img/Kosher_pic.png',
    '../img/USDA_pic.png',
    '../img/India_Organic_pic.png',
    '../img/Spices_Board_pic.png',
    '../img/Fssai_pic.png',
];

const CertificationSlider = () => {
    useEffect(() => {
        const slider = document.querySelector('.slider');
        const slideWidth = slider.scrollWidth / images.length;
        slider.style.setProperty('--slide-width', `${slideWidth}px`);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="text-center my-8">
                <h1 className="text-3xl font-bold mb-4">Certifications</h1>
                <p className="text-lg text-gray-600">
                    More than 8+ Trusted Certificates
                </p>
            </div>
            <div className="slider-wrapper flex">
                <div className="slider">
                    {images.concat(images).map((src, index) => (
                        <div key={index} className="slide">
                            <img src={src} alt={`Certification ${index}`} className="w-24 h-24" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationSlider;
