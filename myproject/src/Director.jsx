import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import imrthead2 from './IMRT_Director.png';


const Sarchitanis = () => {
    return (
        <>
            <Container>
                <Row className='sarchi_mian'>
                    <Row style={{ marginTop: "30px" }}>
                        <h3><i className="button__icon fas fa-chevron-right" style={{ color: "#f06b5c" }}>  </i>From the Hon. Director Desk</h3> <hr /><br /><br />
                    </Row>
                    <Row>
                        <Col>
                            <img src={imrthead2} alt="S" width={350} height={400} style={{ marginTop: "55px", marginLeft: "-15px" }} />
                        </Col>
                        <Col>
                            <br /><br />
                            <p>Greetings from IMRT </p>
                                <p>Education is not about studying, Education is about learning. I am extremely happy to be the Director of Institute of Management ,Research and Technology,Nashik on, a prestigious institute in the city of pilgrimage, Nasik. I am proud as it is NAAC accredited and recognized by U.G.C under section 2(f) of the UGC Act, 1956 institute. It is amongst one of the best institute within the North Maharashtra region. A good teacher enables a student to understand, whereas a great teacher enables a student to realize. It is only when students go through the circle of studying, understanding and realizing, they become good professionals and great human beings. In IMRT, we take immense pride in the  </p>


                        </Col>

                    </Row>
                    <Row>
                    fact that our students receive the highest quality of education. This is facilitated by paying utmost importance to teaching quality and practical learning. Our excellence is not just confined to the classroom; we are also notably active in conducting conferences, workshops, seminars, guest lectures, industrial visits and other co-curricular activities. These activities expose students to aspects beyond the curriculum, thus adding value to their professional success. Students should be imparted an all round education so that they become multi-dimensional rather than uni-dimensional. Empowerment of students for all round development through education is our cherished motto. Today education means much more than merely acquiring knowledge. It is acquisition of knowledge and skills, building character and improving employability of our young talent, the future leadership. Our Academic Record has been outstanding since the inception of the institution. Moreover the institute has a commendable record of very high pass percentage every year with maximum number of 1st Divisions in both theory as well as in practical examination. I am proud of being the Director of such a wonderful institute dedicated to the causes of better India through education and their real empowerment. Come on let's give our best and make this institute a modern temple of learning through our diligence, devotion and dedication.
                        <p>I strongly believe in the concept that:- "Moral and values based Education leads to all round development". My whole hearted wishes and thanks to all the user of our college website.</p>
                        <br /> <br />
                        <h4>Dr. P. B. Surayawanshi</h4>
                        <h5>Director, IMRT</h5>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Sarchitanis
