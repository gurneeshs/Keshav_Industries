import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import ImageSlider from "../../components/imageslider/ImageSlider";
import CountUpComponent from "../../components/homeutils/countUp";
import About from "../../components/homeutils/About";
import Categories from "../../components/homeutils/Categories";
import CertificationSlider from "../../components/homeutils/CertificationSlider";
import Carousel from "../../components/homeutils/Carousel";
import ScrollAnimation from 'react-animate-on-scroll';

const slides = [
    "../img/Soya_Homepage_scaled.jpg",
    "../img/oil_pic.jpg",
    "../img/masal_pic.jpg",
    "../img/Soya_Homepage_scaled.jpg",
]
const HomePage = () => {

    return (
        <Layout>
            <ImageSlider>
                {slides.map((s)=>(
                    <img className="w-screen" src={s} />
                ))}
            </ImageSlider>
            <CountUpComponent/>
            <About/>
            <Categories/>
            <HomePageProductCard/>
            <Carousel/>
            <CertificationSlider/>
            {/* <Track/> */}
       
            <Testimonial/>
        </Layout>
    );
}

export default HomePage;
