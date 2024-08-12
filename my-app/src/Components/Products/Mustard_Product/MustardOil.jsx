import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../All_Products.css';
import Navbar from '../../Navbar/CustomNavbar';
import Footer from '../../Footer/CustomFooter';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const MustardOil = () => {
  const productDetailItem = {
    images: [
      {
        original: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original: "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail: "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        thumbnail: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        original: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "New Macbook Laptop",
    reviews: "150",
    availability: true,
    brand: "Apple",
    category: "Laptop",
    sku: "BE45VGTRK",
    price: 1599,
    previousPrice: 1999,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaue consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaue!",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["blue", "green", "red"],
  };

  return (

    <div>
      <Container fluid className='p-0'>
        <Navbar />
      </Container>

      <div className="container product-page">
        <div className="product-gallery">
          <ReactImageGallery items={productDetailItem.images} showPlayButton={false} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{productDetailItem.title}</h1>
          <p className="product-description">{productDetailItem.description}</p>
          <div className="product-price">
            ${productDetailItem.price} <span className="previous-price">${productDetailItem.previousPrice}</span>
          </div>
          <div className="product-colors">
            Colors:
            <span className="color-blue"></span>
            <span className="color-green"></span>
            <span className="color-red"></span>
          </div>
          <div className="discount-badge">20% Discount</div>
          <div className="products-sold">52 Products Sold</div>
          <div className="button-group">
            <button className="add-to-cart-btn">
              <BiShoppingBag className="icon" /> Add to Cart
            </button>
            <button className="buy-now-btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Container fluid>
        <div className="row home_abt_last_row mt-5">
          <div className=""></div>
        </div>
        <Container>
          <Footer />
        </Container>
      </Container>
    </div>
  );
}

export default MustardOil;