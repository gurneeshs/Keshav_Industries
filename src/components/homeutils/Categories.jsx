import {useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { Link } from 'react-router-dom';

const Categories = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {


        ScrollReveal().reveal(revealRefBottom.current, {

            duration: 1000,
            delay: 200,
            distance: '10px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {


        ScrollReveal().reveal(revealRefRight.current, {

            duration: 1000,
            delay: 200,
            distance: '10px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); 
    useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 200,
            distance: '10px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); 
    useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 200,
            distance: '10px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);

    return (
        <div  className="p-16 pb-4 mx-auto">
            {/* Categories Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Categories</h1>
                <p className="mt-2 text-lg text-gray-700">
                    We are leading manufacturer & Exporter of Soya Refined Oil, Mustard Oil, Non-GMO Lecithin <br />
                    (Soya, Sunflower & Rice) and a variety of Quality Spices with Natural Flavour.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div >
                    <div className="mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img src="../img/Mustard_Seed.png" alt="Mustard" className="w-full h-48 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold ">
                                Mustard <Link to={"/allproduct"} className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600">Check all</Link>
                            </h4>
                        </div>
                    </div>
                </div>

                <div >
                    <div className="mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img src="../img/Soyabeans.png" alt="Soyabeans" className="w-full h-48 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold">
                                Soyabeans <Link to={"/allproduct"} className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600">Check all</Link>
                            </h4>
                        </div>
                    </div>
                </div>

                <div >
                    <div className="mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img src="../img/Spices.png" alt="Spices" className="w-full h-48 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold">
                                Spices <Link to={"/allproduct"} className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600">Check all</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories
