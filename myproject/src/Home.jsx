import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import Mvphead from './IMRT_Nashik_submenu.png';
import Imrthead from './IMRT_Director.png';
import Carousel from 'react-bootstrap/Carousel';
import IMRT_slider1 from './IMRT_slider.png';
import IMRT_slider2 from './IMRT_Slider2.png';
import IMRT_slider3 from './IMRT_Slider3.png';
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import intern from "./home-intern.jpg"



const Home = () => {

    return (
        <>
            <Container fluid className="clgpics">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={IMRT_slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 style={{ color: "#2e3094", backgroundColor: "whitesmoke", padding: '5px' }}>Maratha Vidya Prasarak Samaj’s</h4>
                            <h3 style={{ color: "#f06b5c", backgroundColor: "whitesmoke", padding: '5px' }}>Institute of Management Research & Technology [I.M.R.T.]</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={IMRT_slider2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 style={{ color: "#2e3094", backgroundColor: "whitesmoke", padding: '5px' }}>Welcome To IMRT</h5>
                            <h5 style={{ color: "#f06b5c", backgroundColor: "whitesmoke", padding: '5px' }}>Best Destination for Management Courses</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={IMRT_slider3}
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h5 style={{ color: "#2e3094", backgroundColor: "whitesmoke", padding: '5px' }}>Third slide label</h5>
                        <p style={{ backgroundColor: "whitesmoke", padding: '5px' }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container className="dcards">
            <div >
                <h4 style={{
                    textAlign:"center",
                    fontSize : "35px",
                    fontWeight : 700
                    
                }}>Our Honorable's</h4>
                </div>
                
                <Row style={{ display: "flex" }}>
                    <Col>
                        <div className="wrap animate pop">
                            <div className="overlay">
                                <div className="overlay-content animate slide-left delay-2">
                                    <p className="animate slide-left pop delay-4 h2">Adv. Nitin Baburao Thakare</p>
                                    <p className="animate slide-left pop delay-5 p">Sarchitnis, M. V. P. Samaj, Nasik</p>
                                </div>
                                <div className="image-content1 animate slide delay-5"></div>
                                <div className="dots animate">
                                    <div className="dot animate slide-up delay-6"></div>
                                    <div className="dot animate slide-up delay-7"></div>
                                    <div className="dot animate slide-up delay-8"></div>
                                </div>
                            </div>
                            <div class="dtext">
                                <p><img class="inset" src={Mvphead} alt="" />It is a matter of great pride and immense satisfaction to welcome new students to M.V.P. samaj’s Institute of Management Research and Technology Nasik which is a pioneer institution of quality education in the private sector in the state of Maharashtra IMRT has proved its credentials in the society by fulfilling the dreams of those aspiring for innovative and quality management education...</p>
                                <Link className="readmore" to="/sarchitanis">Read more</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="wrap animate pop">
                            <div className="overlay">
                                <div className="overlay-content animate slide-left delay-2">
                                    <h2 className="animate slide-left pop delay-4 h2">Dr. P. B. Surayawanshi</h2>
                                    <p className="animate slide-left pop delay-5 p">Director, IMRT, Nasik</p>
                                </div>
                                <div className="image-content2 animate slide delay-5"></div>
                                <div className="dots animate">
                                    <div className="dot animate slide-up delay-6"></div>
                                    <div className="dot animate slide-up delay-7"></div>
                                    <div className="dot animate slide-up delay-8"></div>
                                </div>
                            </div>
                            <div class="dtext">
                                <p><img className="inset" src={Imrthead} alt="" /><b>Greetings from IMRT</b><br />
                                    Education is not about studying, Education is about learning. I am extremely happy to be the Director of Institute of Management ,Research and Technology,Nashik on, a prestigious institute in the city of pilgrimage, Nasik I am proud as it is NAAC accredited and recognized by U.G.C under section 2(f) of the UGC Act, 1956 institute.</p>
                                <Link className="readmore" to="/director">Read more</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
 {/* // our Courses */}
            </Container>

            <div >
                <h4 style={{
                    textAlign:"center",
                    fontSize : "35px",
                    fontWeight : 700
                    
                }}>Our Courses</h4>
                </div>

            <div className="circle-container">
                <div  className="circle1">

                </div>
                <div className="circle2">
                <h3 className="mba-it-hrd">MBA-IT</h3>
                </div>
                <div className="circle3">
                <h3 className="mba-it-hrd" style={{ textAlign: 'center' }}>MBA-HRD</h3>
                </div>
            </div>

{/* >>>>>>>>>>>> about tpo  <<<<<<<<<<<<<<<   */}   
    <div style={{marginTop:"50px"}}>
                <h4 style={{
                    
                    fontSize : "25px",
                    fontWeight : 700,
                    marginLeft : "110px",
                    // textDecoration : "underline"
                }}>What is Intern-Ease</h4>
                </div>

    <Container className="home-intern">
        <Row style={{display : "flex"}}>
            <Col>
            <p>
            Intern-Ease is a portal designed for students who have joined internships to create accounts and provide their information for academic use. The platform streamlines the process of managing and tracking student internships, offering a user-friendly interface where students can easily input their details. This data is then used by academic institutions to monitor student progress and performance during their internships. Intern-Ease aims to enhance the overall internship experience by facilitating efficient communication and providing valuable insights to students, mentors, and academic administrators.
            <Link to="/intern" style={{textDecoration:"none"}}> Know more...</Link>
            </p>
            </Col>
            
            <Col>
            <img className="intern-img" src={intern} alt=""  />
            </Col>
        </Row>
    </Container>
                
        </>
    )
}
export default Home;
