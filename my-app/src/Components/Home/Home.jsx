import Navbar from "../Navbar/CustomNavbar";
import Footer from "../Footer/CustomFooter";
import Slider from "../Files/Slider/Slider";
import Certification_Slider from "../Files/Certification_Slider/Certification_Slider"
import "./Home.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Soya_Homepage_scaled from "../Images/Soya_Homepage_scaled.jpg";
import logo_removebg from "../Images/Logo_removebg.png";
import Mustard_Seed from "../Images/Mustard_Seed.png";
import Soyabeans from "../Images/Soyabeans.png";
import Spices from "../Images/Spices.png";
import Home_Categories_img from "../Images/Home_Categories_img.png";


const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <Container fluid>
        <Navbar />
      </Container>
      {/* <h1 className="hero-h1 text-center">
        COOK THE BEST WITH <br></br>
        KASH & PRIDE
      </h1> */}

      <Container fluid>
        <div className="row" data-aos="fade-up"
     data-aos-duration="2000"> {/* dekh teko is div me dalna hai na to isme vo website se attribute uthana and yaha div tag me daal dena ok */}
          <Image src={Soya_Homepage_scaled} alt="Logo" className="hero-img p-0" />
        </div>
      </Container>


      <Container>
        <div class="row mx-auto my-5">
          <div class="text-center col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 border-end info-section">
            <h1>400K+</h1>
            <p>Wallets Connected</p>
          </div>
          <div class="text-center col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 border-end info-section">
            <h1>20K+</h1>
            <p>Wallets Connected</p>
          </div>
          <div class="text-center col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 border-end info-section">
            <h1>230+</h1>
            <p>Creative artists</p>
          </div>
          <div class="text-center col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 info-section">
            <h1>2.5X</h1>
            <p>Estimated value</p>
          </div>
        </div>
      </Container>

      <Container fluid className="home_abt">
        <div class="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="row home-abt-row">
              <Image src={logo_removebg} alt="Logo" className="home-abt-logo" />
              <h1 className="mt-5">Welcome to Keshav <br /> Industry</h1>
              <p>
                We, Keshav Industries Private Limited started <br />
                our journey in 2009 by manufacturing world's <br />
                best Soya Refined Oil and Non-GMO Soya<br />
                Lecithin.<br /><br />
                After the legacy of more than a decade in Soya<br />
                Industry, we have started to manufacture<br />
                Mustard Oil and providing our best Mustard Oil<br />
                in Indian Domestic Market.
              </p>
            </div>
          </div>
        </div>


      </Container>

      <Container fluid>
        <div className="row home_abt_last_row">
          <div className=""></div>
        </div>
      </Container>

      <Container >
        <div className="row text-center categories-row-first">
          <h1 className="">Categories</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row" >
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col ">

              <div class="card mx-auto">
                <Image src={Mustard_Seed} alt="Mustard" rounded />
                <div class="card-content text-center">
                  <h4 class="card-title">Mustard <a href="#" class="card-button">Check all</a> </h4>
                </div>
              </div>

            </div>

            <div class="col ">

              <div class="card mx-auto">
                <Image src={Soyabeans} alt="Mustard" rounded />
                <div class="card-content text-center">
                  <h4 class="card-title">Soyabeans <a href="#" class="card-button">Check all</a> </h4>

                </div>
              </div>

            </div>

            <div class="col ">

              <div class="card mx-auto">
                <Image src={Spices} alt="Mustard" rounded />
                <div class="card-content text-center">
                  <h4 class="card-title">Spices <a href="#" class="card-button">Check all</a> </h4>

                </div>
              </div>

            </div>
          </div>

          <div className="row Home_Categories_img">
            <Image src={Home_Categories_img} />
          </div>
        </div>
      </Container>


      <Container fluid className="expoter">
        
        <Container>
        <div className="row">
          <div className="col-6 expoter_right">
          <Image src={logo_removebg} alt="Logo" className="home-expoter-logo" />
            <h1 className="">Trusted Exorter of <br />
              Products</h1>
            <p>We are leading manufacturer & Exporter of Soya Refined Oil, Mustard Oil, Non-GMO Lecithin (Soya, Sunflower & Rice)</p>
          </div>

          
          <div className="col-6">
          {/* <Slider /> */}
          </div>
        </div>
        </Container>

      </Container>

      <Container >
        <div className="row text-center categories-row-first">
          <h1 className="">Certifications</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      </Container>

      <Container fluid>
        <Certification_Slider />
      </Container>

      <Container >
        <div className="row text-center categories-row-first">
          <h1 className="">Trusted Exporter of Quality Spices <br />
          & Non-GMO Lecithin</h1>
          <p>
          We are the leading exporter of Non-GMO Soya Lecithin, Lyso Lecithin, Sunflower Lecithin, Rice  <br />
Lecithin as well as variety of Quality Spices to more than 35 countries since more than a decade.
          </p>
        </div>
      </Container>

      
      {/* Map Video */}
      <Container>

      </Container>


      <Container>
        <main>
        <div className="">
        <div class="container-xxl py-5">
    <div class="container py-5">
        <div class="testimonial-text g-5">
            <div class="wow fadeIn" data-wow-delay="0.1s">
                <button class="btn btn-sm border rounded-pill text-primary px-3 mb-3 fs-5">Our Product Review</button>
                <h1 class="mb-4">LambdaTest Reviews</h1>
                    <p class="mb-4">Our Unified Testing Cloud enables you to deliver world class digital experience with quality releases and help accelerate your release velocity.</p>
                    <a class="btn btn-primary rounded-pill px-4" href="">Contact Sales</a>
            </div>
        

      <section class="carousel-landmark wow fadeIn" data-wow-delay="0.5s">
        <div id="carouselExampleCaptions" class="carousel slide testimonial-carousel border-start border-primary">
          
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item carousel-item-1 active">
                        <div class="testimonial-item ps-5">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="fs-4 textimal-text">Super top notch customer support from <em>@lambdatesting</em> - just throwing it out there if you're looking for a decent browser testing platform, they get my full double thumbs up. Thumbs upThumbs up</p>
                            <div class="d-flex align-items-center">
                                {/* <Image class="img-fluid flex-shrink-0 rounded-circle review_img" src="https://user-images.githubusercontent.com/78242022/266013790-4d674d96-a311-47c3-9b7c-03feaa36c948.png"/> */}
                                <div class="ps-3">
                                    <h5 class="mb-1">Ben Pritchard</h5>
                                    <span class="at">@yesiamben</span>
                                </div>
                            </div>
                        </div>
                    </div>

            
            <div class="carousel-item carousel-item-2">
                        <div class="testimonial-item ps-5">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="fs-4 textimal-text"><em>@lambdatesting</em> is fantastic. Cross browser and device testingtesting frustration is minimized. You can't get rid of clients that need ie11 nor can you own every device but lambda test bridge that gap.</p>
                            <div class="d-flex align-items-center">
                                {/* <Image class="img-fluid flex-shrink-0 rounded-circle review_img" src="https://user-images.githubusercontent.com/78242022/266013776-40ac50f1-31f8-4250-acb2-05f16d683baa.png"/> */}
                                <div class="ps-3">
                                    <h5 class="mb-1">Mat Gargano</h5>
                                    <span class="at">@matgargano</span>
                                </div>
                            </div>
                        </div>
                    </div>

            
            <div class="carousel-item carousel-item-2">
                    <div class="testimonial-item ps-5">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p class="fs-4 textimal-text">second-day using <em>@lambdatesting</em> and it's already proven itself a lot faster than Cross Browser Testing and BrowserStack, at half the price! bargain</p>
                        <div class="d-flex align-items-center">
                            {/* <Image class="img-fluid flex-shrink-0 rounded-circle review_img" src="https://user-images.githubusercontent.com/78242022/266013762-54201d6a-0923-4969-948c-790dec804253.png"/> */}
                            <div class="ps-3">
                                <h5 class="mb-1">Matthew Bryson</h5>
                                <span class="at">@mbrysonuk</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="control-btn">
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <i class="fa-solid fa-arrow-left"></i>
                      <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <i class="fa-solid fa-arrow-right"></i>
                
                      <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    </section>
</div>
</div>
</div>
        </div>
        </main>
      </Container>




      <Footer />
    </div>
  );
};




export default Home;
