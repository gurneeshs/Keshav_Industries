import {useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";

const Categories = () => {
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
    }, []); 
    useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); 
    useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);

    return (
        <div  className="p-16 pb-4 mx-auto">
            {/* Categories Section */}
            <div ref={revealRefTop} className="text-center mb-8">
                <h1 ref={revealRefRight} className="text-3xl font-bold">Categories</h1>
                <p ref={revealRefLeft} className="mt-2 text-lg text-gray-700">
                    We are leading manufacturer & Exporter of Soya Refined Oil, Mustard Oil, Non-GMO Lecithin <br />
                    (Soya, Sunflower & Rice) and a variety of Quality Spices with Natural Flavour.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div >
                    <div ref={revealRefLeft} className="mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img src="../img/Mustard_Seed.png" alt="Mustard" className="w-full h-48 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold ">
                                Mustard <a href="/allproduct" className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600">Check all</a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div >
                    <div ref={revealRefTop} className="mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img src="../img/Soyabeans.png" alt="Soyabeans" className="w-full h-48 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold">
                                Soyabeans <a href="/allproduct" className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600">Check all</a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div >
                    <div ref={revealRefRight} className="mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img src="../img/Spices.png" alt="Spices" className="w-full h-48 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold">
                                Spices <a href="/allproduct" className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600">Check all</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories
