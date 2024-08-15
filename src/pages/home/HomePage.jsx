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
const HomePage = () => {
    return (
        <Layout>
            <ImageSlider/>
            <CountUpComponent/>
            <About/>
            <Categories/>
            <HomePageProductCard/>
       
            <CertificationSlider/>
            <Track/>
       
            <Testimonial/>
        </Layout>
    );
}

export default HomePage;
