import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="foot">
            <Container className="foot1">
                <Row>
                    {/* Institute Information Column */}
                    <Col lg={5} md={12} sm={12} className="foot2">
                        <h4 style={{ color: "white" }}>Institute of Management Research & Technology [I.M.R.T.]</h4>
                        <p style={{ color: "white" }}>The N.D.M.V.P. Samaj, Nashik has established IMRT in the year 1986, to impart training in the Management, Computer Management & Social Work faculties. The Institute is affiliated to the Pune University and recognized by Govt. of Maharashtra, AICTE, New Delhi and B.T.E., Mumbai to run different post graduate diploma and degree courses.</p>
                    </Col>

                    {/* Contact Information Column */}
                    <Col lg={3} md={6} sm={12} className="foot2">
                        <h4 style={{ color: "white" }}>Contact Us</h4>
                        <p style={{ color: "white" }}>
                            <b>Address</b>: MVP Campus, Shivaji Nagar, Gangapur Road, Nashik-422002, Maharashtra, India<br />
                            <b>Contact</b>: 0253-2571650, 2970894<br />
                            <b>Email Id</b>: mvpimrt@gmail.com
                        </p>
                    </Col>

                    <Col lg={2} md={6} sm={12} className="foot2">
                        <h4 style={{ color: "white" }}>Connect with Us</h4>
                        <p>
                            <i className="fa-solid fa-globe icon1"></i> <b style={{ color: "white" }}>
                                <a href="https://www.imrt.ac.in/" style={{ color: "white", textDecoration: "none" }}>Official Website</a></b><br />
                            <i className="fa-brands fa-facebook-f icon1"></i> <b style={{ color: "white" }}>
                                <a href="https://www.facebook.com/imrtnasik/" style={{ color: "white", textDecoration: "none" }}>Facebook</a></b><br />
                            <i className="fa-brands fa-instagram icon1"></i> <b style={{ color: "white" }}>
                                <a href="https://www.instagram.com/explore/locations/1013545466/imrt/" style={{ color: "white", textDecoration: "none" }}>Instagram</a></b><br />
                            <i className="fa-brands fa-linkedin-in icon1"></i> <b style={{ color: "white" }}>
                                <a href="https://in.linkedin.com/school/n.d.m.v.p.samajs-institute-of-management-research-/" style={{ color: "white", textDecoration: "none" }}>LinkedIn</a></b>
                        </p>
                    </Col>
                    <Col lg={2} md={12} sm={12} className="foot2">
                        <h4 style={{ color: "white" }}>Useful Links</h4>
                        <p>
                            <i className="button__icon fas fa-chevron-right" style={{ color: "white" }}></i> <a herf="#" style={{ color: "white", textDecoration: "none" }}>Home</a><br />
                            <i className="button__icon fas fa-chevron-right" style={{ color: "white" }}></i> <a href="#" style={{ color: "white", textDecoration: "none" }}>Intern-Ease</a><br />
                            <i className="button__icon fas fa-chevron-right" style={{ color: "white" }}></i> <a href="#" style={{ color: "white", textDecoration: "none" }}>About Us</a><br />
                            <i className="button__icon fas fa-chevron-right" style={{ color: "white" }}></i> <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact Us</a><br />
                            <i className="button__icon fas fa-chevron-right" style={{ color: "white" }}></i> <a href="#" style={{ color: "white", textDecoration: "none" }}>Registration</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;


