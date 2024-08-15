import { useContext } from "react";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import myContext from "../../context/myContext";

const HomePage = () => {
    const context = useContext(myContext);
    const name = context
    return (
        <Layout>
            <ImageSlider/>
            <Testimonial/>
            {name}
        </Layout>
    );
}

export default HomePage;