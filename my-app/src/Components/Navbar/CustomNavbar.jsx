import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./CustomNavbar.css";
import logo from "../Images/Logo.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CustomNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body border-bottom border-black ms-2">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="Logo" className="Navlogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto custom-nav">
              <Nav.Link className="fs-4 fw-2 text-dark" href="/">
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
            <Form inline>
                <InputGroup>
                  <Form.Control
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
                </InputGroup>
              </Form>
            <Nav>
              <Nav.Link href="#deets"><i class="bi bi-cart-check fs-3 text-dark"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
