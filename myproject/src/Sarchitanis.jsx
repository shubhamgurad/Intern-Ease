import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Mvphead2 from './IMRT_Nashik_submenu.png';


const Sarchitanis = () => {
    return (
        <>
            <Container>
                <Row className='sarchi_mian'>
                    <Row style={{ marginTop: "30px" }}>
                        <h3>From the Hon. Sarchitnis Desk</h3> <hr /><br /><br />
                    </Row>
                    <Row>
                        <Col>
                            <img src={Mvphead2} alt="S" width={350} height={400} style={{marginTop:"55px",marginLeft:"-15px"}} />
                        </Col>
                        <Col>
                            <br /><br />
                            <p>It is a matter of great pride and immense satisfaction to welcome new students to M.V.P. samaj’s Institute of Management Research and Technology Nasik which is a pioneer institution of quality education in the private sector in the state of Maharashtra. IMRT has proved its credentials in the society by fulfilling the dreams of those aspiring for innovative and quality management education.</p>
                            <p>Institute of Management Research and Technology, Nasik was established in 1986 and the Institute has completed more than thirty-five years of its dedicated service to Education. It has nourished its own educational culture. We are striving to meet national and global challenges. </p>


                        </Col>

                    </Row>
                    <Row>
                    Quality as a hallmark of this institution, I want toencourage the budding students of Management to join us to experience a taste of our culture and spread our message of unswerving commitment to society. I hope IMRT, being a temple of quality education shall be harnessing all its efforts to achieve further excellence in skill learning and its application and achieve greater glories with your cooperation in times to come.
                        <p>I convey my good wishes to everyone associated with IMRT so that our students become a force to reckon with not only in MAHARASHTRA or our nation but in the entire world.</p>
                        <br /> <br />
                        <h4>Adv. Nitin Baburao Thakare</h4>
                        <h5>Sarchitnis, M. V. P. Samaj, Nasik</h5>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Sarchitanis
