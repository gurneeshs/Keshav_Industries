import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";

const ImageSlider = () => {
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);

    useEffect(() => {


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
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);

    return (
        <div ref={revealRefLeft} className="w-full">
            <img className=" h-40 w-full lg:h-full" src="../img/masal_pic.jpg" alt="no-image" />
        </div>
    )
}

export default ImageSlider
