import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import keshav_all_product from "../../Images/keshav_all_product.jpg"
import masal_pic from "../../Images/masal_pic.jpg"
import oil_pic from "../../Images/oil_pic.jpg"
import Review_pic from "../../Images/Review_pic.jpg"
import sarso_oil_pic from "../../Images/sarso_oil_pic.jpg"

function Long_Slider() {
  return (
    <div>
      <Carousel>

        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src={keshav_all_product}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Image
            className="d-block w-100"
            src={masal_pic}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={oil_pic}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={sarso_oil_pic}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Review_pic}
            alt="Fifth slide"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Long_Slider;
