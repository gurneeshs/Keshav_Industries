import Image from "react-bootstrap/Image";
import "./CustomNavbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomNavbar = () => {
  return (
    <div>
      <nav>
        <div class="container-fluid p-0 bg-warning">
            <div class="container-fluid container-lg p-0">
                <div class="textColor">
                    <div class="row justify-content-center align-items-center mx-auto">
                        <div class="col-12 col-lg-3 p-0">
                            <div class="fs-2 fw-bold py-2 text-center text-lg-start d-none d-lg-block">Keshav Industries</div>
                           
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
                                <div class="d-none d-lg-block"><span class="fw-medium"><i className="bi bi-phone"></i>Call Us</span><br /> +91-91098-84497</div>
                            </div>
                        </div>
                        <div class="col-4 col-lg-3">
                            <div class="d-flex justify-content-center align-items-center">
                                <a href="#">
                                    <div class="me-3 p-2 py-3">
                                      <Image class="iconHeight" src="/static_files/svgs5/envelope.svg" alt="" />
                                    </div>
                                </a>
                                <div class="d-none d-lg-block"><span class="fw-medium"><i className="bi bi-envelope-at"></i> Email Us</span><br /> care.customer@keshav.co.in</div>
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
                                    <a class="nav-link active pe-3" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-lg-3" href="#">The Company</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-lg-3" href="/Products">Products</a>
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
