import React, { useEffect,useRef } from 'react';
import ScrollReveal from "scrollreveal";

import "./certifi.css"

const images = [
    '../img/Fssai_pic.png',
    '../img/APEDA_pic.png',
    '../img/ISO_pic.png',
    '../img/Kosher_pic.png',
    '../img/USDA_pic.png',
    '../img/India_Organic_pic.png',
    '../img/Spices_Board_pic.png',
];

const CertificationSlider = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {


        ScrollReveal().reveal(revealRefBottom.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {


        ScrollReveal().reveal(revealRefRight.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 500,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {
        const slider = document.querySelector('.slider');
        const slideWidth = slider.scrollWidth / images.length;
        slider.style.setProperty('--slide-width', `${slideWidth}px`);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="text-center my-8">
                <h1  className="text-5xl font-bold mb-4">Certifications</h1>
                <p className="text-lg text-gray-600">
                    More than 8+ Trusted Certificates
                </p>
            </div>
            <div className="slider-wrapper flex">
                <div className="slider">
                    {images.concat(images).map((src, index) => (
                        <div key={index} className="slide">
                            <img src={src} alt={`Certification ${index}`} className="w-24 h-24 mx-16" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationSlider;
