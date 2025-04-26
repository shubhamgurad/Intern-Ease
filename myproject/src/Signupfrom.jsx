import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import img from './signup-image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [course, setCourse] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('photo', photo);
    formData.append('course', course);
    formData.append('password', password)

    try {
      const response = await axios.post('http://localhost:8000/student/registration', formData);
      console.log('Form submitted successfully:', response.data);
      navigate('/loginform');

      setName('');
      setEmail('');
      setPhoneNumber('');
      setPhoto(null);
      setCourse('');
      setPassword('')


    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Fill Valid Information");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={5} className="order-2 order-lg-1">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="signup-form-title">Sign up</h2>

              <form onSubmit={handleSubmit} className="register-form" id="register-form">
                <div className="signup-form-group">
                  <label htmlFor="name"><i className="login__icon fas fa-user signup_icons"></i></label>
                  <input type="text" className='signup-input' name="name" id="name" placeholder="Your Name" value={fullname} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="signup-form-group">
                  <label htmlFor="email"><i className="login__icon fa-solid fa-envelope signup_icons"></i></label>
                  <input type="email" className='signup-input' name="email" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="signup-form-group">
                  <label htmlFor="pass"><i className="login__icon fas fa-lock signup_icons"></i></label>
                  <input type="password" className='signup-input' name="pass" id="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                
                <div className="signup-form-group">
                  <label htmlFor="pass"><i class="login__icon fa-solid fa-phone signup_icons"></i></label>
                  <input className='signup-input'
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    placeholder='Mobile Number'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="signup-form-group">
                  <label htmlFor="pass"></label>
                  <select className="info-input"

                    id="course"
                    name="course"
                    value={course}
                    placeholder='Select Course'
                    // onChange={(e) => setCourse(e.target.value)}
                    required
                  ><i class="login__icon fa-solid fa-circle-chevron-down signup_icons"></i>
                    <option value="course">Select Course</option>
                    <option value="MBA">MBA</option>
                    <option value="MBA-IT">MBA-IT</option>
                    <option value="MBA-HRD">MBA-HRD</option>
                  </select>
                  <hr />
                </div>
                <i class="login__icon fa-solid fa-image-portrait"></i>
                <div className='img-upload'>
                  <label htmlFor="pass">Upload Photo</label>
                  <input className='signup-input'
                    type="file"
                    id="photo"
                    name="photo"
                    placeholder="Upload your photo with unifrom"
                    accept="image/*"
                    // onChange={(e) => setPhoto(e.target.files[0])}
                    required
                  />
                </div>
                <div className="signup-form-group form-button signup-form-submit">
                  <input type="submit" name="signup" id="signup" className="signup-form-submit" value="Register" />
                </div>
              </form>

            </div>
          </div>
        </Col>
        <Col md={6} lg={5} className="order-1 order-lg-2 d-flex justify-content-center">
          <div className="signup-image">
            <figure><img src={img} alt="sign up image" /></figure>
            <Link to='/loginform' className="signup-image-link" style={{ textDecoration: "none" }}>I am already a member</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;
