import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Contactus() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
      

        try {

            await axios.post('/student/postcontactdata', { email, name, message });
            console.log('Form submitted successfully:', { email, name, message });
            alert('From submitted successfully')

            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <>

            <div>
                {/* <h2 style={{ textAlign: "center", marginTop: "30px" }}>Contact Us</h2> */}
                <div>
                    <div className="contact1"><p>CONTACT US</p></div>
                    <div className="contact2"><p>CONTACT US</p></div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.050008863523!2d73.77404357397793!3d20.006415722108336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba3f03523e1%3A0x1c24b7b489eea49!2sMaratha%20Vidya%20Prasarak%20Samaj&#39;s%20Institute%20of%20Management%20Research%20%26%20Technology%20(IMRT)!5e0!3m2!1sen!2sin!4v1710929036753!5m2!1sen!2sin" width="1100" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="if1"></iframe>
                <div style={{ display: "flex" }}>

                    <div>
                        <div className="con1">
                            <div style={{ display: "flex" }}>
                                <div style={{ marginLeft: "20px" }} className="con4">
                                    <div><i class="fa-solid fa-location-crosshairs conicon"></i></div>
                                    <div className="con2"><h3>Location:</h3><p>2Q4G+HJ9, M.V.P. Campus, Gangapur Road, Nashik, Maharashtra 422002</p></div>
                                </div>
                                <div style={{ marginLeft: "25px" }} className="con4">
                                    <div><i class="fa-solid fa-phone conicon"></i></div>
                                    <div className="con2"><h3>Phone:</h3><p>09370372714 <br /> 0253-2571650</p></div>
                                </div>
                            </div><br />
                            <div style={{ display: "flex" }}>
                                <div style={{ marginLeft: "20px" }} className="con4">
                                    <div><i class="fa-solid fa-envelope conicon"></i></div>
                                    <div className="con2"><h3>Email:</h3><p>mvpimrt@gmail.com</p></div>
                                </div>
                                <div style={{ marginLeft: "25px" }} className="con4">
                                    <div><i class="fa-solid fa-clock conicon"></i></div>
                                    <div className="con2"><h3>Open Hours:</h3><p>Monday - Friday <br />9:00AM - 05:00PM</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">

                        <Form  onSubmit={handleSubmit} 
                         className="contact-form">
                            <Form.Group controlId="formName">
                                <Form.Label className="contact-form-label">Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label className="contact-form-label">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label className="contact-form-label">Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={message}
                                    onChange={(e) => setMessage(e.target.value)} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="contact-form-button">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contactus;