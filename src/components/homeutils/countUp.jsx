import CountUp from 'react-countup';
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";

const CountUpComponent = () => {
    const revealRefTop = useRef(null);

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
        <div className="container mx-auto my-10 z-20 bg-customNewBack">
            <div className="flex flex-wrap justify-center">
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={5.75} end={2200} /></h1>
                    <p>Wallets Connected</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={5.75} end={2500} /></h1>
                    <p>Wallets Connected</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={5.75} end={1900} /></h1>
                    <p>Creative artists</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={5.75} end={2700} /></h1>
                    <p>Estimated value</p>
                </div>
            </div>
        </div>
    )
}

export default CountUpComponent
