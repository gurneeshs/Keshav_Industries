import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./CustomNavbar.css";
import logo from "../Images/Logo.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Products from "../Products/Products";

const CustomNavbar = () => {
  return (
    <div>
      <nav>
        <div class="container-fluid p-0 bg-warning">
            <div class="container-fluid container-lg p-0">
                <div class="textColor">
                    <div class="row justify-content-center align-items-center mx-auto">
                        <div class="col-12 col-lg-3 p-0">
                            <div class="fs-1 fw-bold py-2 text-center text-lg-start d-none d-lg-block">Keshav Industries</div>
                           
                        </div>
                        <div class="col-4 col-lg-3 sideLine">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="me-3 p-2 py-3">
                                  <Image class="iconHeight" src="/static_files/svgs5/building-check.svg" alt="" />
                                </div>
                                <div class="d-none d-lg-block"><span class="fw-medium">Opening Hour</span> <br />
                                    Mon-Fri : 8:00 - 9:00</div>
                            </div>
                        </div>
                        <div class="col-4 col-lg-3 sideLine">
                            <div class="d-flex justify-content-center align-items-center">
                                <a href="#">
                                    <div class="me-3 p-2 py-3">
                                      <Image class="iconHeight" src="/static_files/svgs5/telephone-inbound.svg" alt="" />
                                    </div>
                                </a>
                                <div class="d-none d-lg-block"><span class="fw-medium">Call Us</span><br /> +1-800-123-1234</div>
                            </div>
                        </div>
                        <div class="col-4 col-lg-3">
                            <div class="d-flex justify-content-center align-items-center">
                                <a href="#">
                                    <div class="me-3 p-2 py-3">
                                      <Image class="iconHeight" src="/static_files/svgs5/envelope.svg" alt="" />
                                    </div>
                                </a>
                                <div class="d-none d-lg-block"><span class="fw-medium">Email Us</span><br /> example@emmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center display-3 fw-bold mb-2 d-lg-none">LOGO</div>
                <div class="navbarBgDark" data-bs-theme="dark">
                    <nav class="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">

                        <button class="navbar-toggler m-3 w-100" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            Menu
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                            <ul class="navbar-nav text-uppercase ps-3">
                                <li class="nav-item">
                                    <a class="nav-link active pe-3" aria-current="page" href="">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-lg-3" href="#">The Company</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-lg-3" href="">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-lg-3" href="#">Export</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-lg-3" href="#">Contacts</a>
                                </li>
                            </ul>
                            <div class="text-white m-1 p-3">
                                <button type="button" class="btn getBtn border border-white rounded-0">Get A
                                    Quote</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </nav>
    </div>
  );
};

export default CustomNavbar;
