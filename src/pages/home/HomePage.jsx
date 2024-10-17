import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import ImageSlider from "../../components/imageslider/ImageSlider";
import MobileImageSlider from "../../components/imageslider/MobileImageSlider";
import CountUpComponent from "../../components/homeutils/countUp";
import About from "../../components/homeutils/About";
import Categories from "../../components/homeutils/Categories";
import CertificationSlider from "../../components/homeutils/CertificationSlider";
import ExpoterSlider from "../../components/homeutils/ExpoterSlider";
import Carousel from "../../components/homeutils/Carousel";
import ScrollAnimation from 'react-animate-on-scroll';
import { motion } from "framer-motion";

const slides = [
    "../img/keshav_all_product.jpg",
    "../img/masal_pic.jpg",
    "../img/oil_pic.jpg",
    "../img/sarso_oil_pic.jpg",
]
const HomePage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeInDown = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Layout>
            <div className="bg-customNewBack">
                <ImageSlider>
                    {slides.map((s) => (
                        <img className="w-screen h-2/4" src={s} />
                    ))}
                </ImageSlider>
                <MobileImageSlider>
                    {slides.map((s) => (
                        <img className="w-screen h-2/4" src={s} />
                    ))}
                </MobileImageSlider>
                <ScrollAnimation animateIn="easeIn">
                    <CountUpComponent />
                </ScrollAnimation>
                {/* <CountUpComponent /> */}
                <About />
                <Categories />
                <CertificationSlider />
                {/* <ExpoterSlider /> */}
                <HomePageProductCard />
                {/* <Carousel /> */}
                <Testimonial />
            </div>
        </Layout>
    );
}

export default HomePage;