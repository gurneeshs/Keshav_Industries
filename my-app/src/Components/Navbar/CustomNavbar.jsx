import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./CustomNavbar.css";
import logo from "../Images/Logo.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body border-bottom border-black">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="Logo" className="Navlogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto custom-nav">
              <Nav.Link className="fs-4 fw-2 text-dark" href="/Home">
                Home
              </Nav.Link>
              <Nav.Link className="fs-4 fw-2 text-dark" href="/Products">
                Products
              </Nav.Link>
              <Nav.Link className="fs-4 fw-2 text-dark" href="/Company">
                Company
              </Nav.Link>
              <Nav.Link className="fs-4 fw-2 text-dark" href="/Export">
                Export
              </Nav.Link>
              <Nav.Link className="fs-4 fw-2 text-dark" href="/Contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><i class="bi bi-cart-check fs-4"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
