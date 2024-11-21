import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col,} from 'react-bootstrap';

const Studinfo = () => {
    // Define state variables using useState
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photo, setPhoto] = useState(null);
    const [course, setCourse] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastNmae',lastName)
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('photo', photo);
        formData.append('course',course)

        try {
            const response = await axios.post('/student/poststudentinfo', formData);
            console.log('Form submitted successfully:', response.data);


            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setPhoto(null);
            setCourse('');
           

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (

        <>
        
            <Container fluid className="user-profile-form-container">
                <Row className="justify-content-center contact100-form-title ">
                    <Col className='contact1001-form-title'>
                        <h1>Student Information From</h1>
                        <h6>Feel out all the details !</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <div className="info-form-group">
                                <label className="info-lebal" htmlFor="firstName">First Name</label>
                                <input className="info-input"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <label className="info-lebal" htmlFor="lastName">Last Name</label>
                                <input className="info-input"
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="info-form-group">
                                <label className="info-lebal" htmlFor="email">Email</label>
                                <input className="info-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label className="info-lebal" htmlFor="phoneNumber">Phone Number</label>
                                <input className="info-input"
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="info-form-group">
                                <label className="info-lebal" htmlFor="course">Course</label>
                                <select className="info-input"
                                    id="course"
                                    name="course"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    required
                                >
                                    <option value="">Select Course</option>
                                    <option value="male">MBA</option>
                                    <option value="female">MBA-IT</option>
                                    <option value="other">MBA-HRD</option>
                                </select>
                            </div>
                            <div className="info-form-group">
                                <label className="info-lebal" htmlFor="photo">Upload Photo</label>
                                <input className="info-input"
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                    required
                                />
                            </div>
                            
                            
                            <button className="info-button" type="submit">Save</button>
                        </form>

                    </Col>
                </Row>
            </Container>
            <Container>
            <Row>
                <Col></Col>
            </Row>
        </Container>        


        </>
    );
};

export default Studinfo;
