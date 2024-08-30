import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ExpoterSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="relative h-96 w-screen overflow-hidden">
            <div className="absolute inset-0 bg-[#fdf4e2] flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f2f2f]">
                        Trusted Exporter of Products
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg md:text-xl">
                        We are leading manufacturer & Exporter of Soya Refined Oil, Mustard Oil, 
                        Non-GMO Lecithin (Soya, Sunflower & Rice).
                    </p>
                    <button className="bg-orange-500 text-white px-8 py-3 mt-6 rounded-full font-semibold text-lg">
                        Explore More
                    </button>
                </div>
                <div className="md:w-1/2 w-full mt-8 md:mt-0">
                    <Slider {...settings}>
                        <div className="relative">
                            <img 
                                src="https://example.com/image1.jpg" 
                                alt="Indian Spices" 
                                className="rounded-lg object-cover h-[60vh] md:h-[80vh] w-full" 
                            />
                            <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 rounded-lg">
                                <span className="font-semibold text-[#2f2f2f]">Indian Spices</span>
                                <span className="ml-2 text-[#f15a29]">&#8594;</span>
                            </div>
                        </div>
                        <div>
                            <img 
                                src="https://example.com/image2.jpg" 
                                alt="Soybean" 
                                className="rounded-lg object-cover h-[60vh] md:h-[80vh] w-full" 
                            />
                        </div>
                        <div>
                            <img 
                                src="https://example.com/image3.jpg" 
                                alt="Mustard" 
                                className="rounded-lg object-cover h-[60vh] md:h-[80vh] w-full" 
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ExpoterSlider;
