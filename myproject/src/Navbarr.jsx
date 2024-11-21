import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import mylogo from './mylogo.jpg';
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={mylogo} className="mylogo1" alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Link to="/Home" style={{color:"white"}} className="nav1">Home</Link>
              <Link to="/Intern" style={{color:"white"}} className="nav1">Intern-Ease</Link>
              <Link to="/Aboutus" style={{color:"white"}} className="nav1">About Us</Link>
              <Link to="/contactus" style={{color:"white"}} className="nav1">Contact Us</Link>
              <Link to="/loginform" style={{color:"white"}} className="home-acc"><i class="fa-solid fa-user"></i> Account</Link>
              {/* <Link to="/signupfrom" style={{color:"white"}} className="nav1">Register</Link> */}
              {/* <Link to="/account" style={{color:"white"}} className="nav1">Studinfo</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
