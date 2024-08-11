import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../All_Products.css';


const K_M_M = () => { 


document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {

        document.querySelectorAll('.thumbnail').forEach(th => th.classList.remove('active'));

        this.classList.add('active');

        document.getElementById('mainImage').src = this.src;
    });
});


    return (
        <div class="product-container">
    <div class="image-gallery">
        <div class="thumbnail-container">
            <Image src="thumbnail1.jpg" alt="Thumbnail 1" class="thumbnail" />
            <Image src="thumbnail2.jpg" alt="Thumbnail 2" class="thumbnail" />
            <Image src="thumbnail3.jpg" alt="Thumbnail 3" class="thumbnail" />
            <Image src="thumbnail4.jpg" alt="Thumbnail 4" class="thumbnail" />
        </div>
        <div class="main-image-container">
            <Image src="main_image.jpg" alt="Main Image" id="mainImage" />
        </div>
    </div>
    <div class="product-details">
        <h1 class="product-title">Heavy Silver Embroidery Work With Full Silver Stone Work Beautiful Saree</h1>
        <p class="price">₹699 <span class="rating">3.9 ★</span> <span class="rating-count">(6954 Ratings, 2030 Reviews)</span></p>
        <p class="free-delivery">Free Delivery</p>
        <div class="select-size">
            <h3>Select Size</h3>
            <button class="size-button">Free Size</button>
        </div>
        <div class="action-buttons">
            <button class="add-to-cart">Add to Cart</button>
            <button class="buy-now">Buy Now</button>
        </div>
        <div class="product-info">
            <h3>Product Details</h3>
            <p>Name: Heavy Silver Embroidery Work With Full Silver Stone Work Beautiful Saree</p>
            <p>Saree Fabric: Georgette</p>
            <p>Blouse: Saree with Multiple Blouse</p>
            <p>Blouse Fabric: Georgette</p>
            <p>Pattern: Embroidered</p>
            <p>Blouse Pattern: Same as Border</p>
            <p>Net Quantity (N): Single</p>
            <p>Heavy Silver Embroidery Work With Full Silver Stone Work Rich Pallu Beautiful Saree</p>
        </div>
    </div>
</div>
    )
};

export default K_M_M;
