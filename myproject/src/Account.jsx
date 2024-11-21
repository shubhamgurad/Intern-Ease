import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Account = () => {
    
    const [data, setData] = useState(null);
    const [activeKey, setActiveKey] = useState('home');
    const { email } = useParams();

    const [formData, setFormData] = useState({
        companyName: '',
        contactNumber: '',
        companyEmail: '',
        guideName: '',
        joiningDate: '',
        companyAddress: '',
        projectTitle: '',
        technology: '',
        offerLetter: null,
        projectObjectives: '',
        firstReviewSubmitted: false,
        firstReviewDate: '',
        firstReviewDocument: null,
        secondReviewSubmitted: false,
        secondReviewDate: '',
        secondReviewDocument: null
    });

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/student/findbyemail/${email}`);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [email]);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            formDataObj.append(key, formData[key]);
        });

        try {
            await axios.post('http://localhost:8000/student/postinterninfo', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Data submitted successfully');
        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Container className='acc-container'>
            <Row className="acc-row">
                <Col xl={3} className="acc-left-col">
                    <Card className='acc-card' style={{ width: '18rem' }}>
                        <Card.Img className="student-img" variant='both' src={`http://localhost:8000/${data.photo}`} alt="Profile Picture" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>
                                <h5>{data.fullname}</h5>
                            </Card.Title>
                            <Card.Text>
                                <p><h6>Course : </h6> {data.course}</p>
                                <p><h6>Email : </h6> {data.email}</p>
                                <p><h6>Phone : </h6> {data.phoneNumber}</p>
                            </Card.Text>
                            <Button className='btn-card-edit'><i className="fa-solid fa-user-pen"></i> Edit Profile</Button>
                            <Link to={'/loginform'}><Button className='btn-card'><i className="fa-solid fa-right-from-bracket"></i> Logout</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="acc-right-col">
                    <Tabs
                        activeKey={activeKey}
                        onSelect={(key) => setActiveKey(key)}
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Company Details">
                            <h5>Details About Company</h5>
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                className='acc-input-text'
                                type="text"
                                name="companyName"
                                placeholder='Enter organization name'
                                value={formData.companyName}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="contactNumber">Contact Number</label>
                            <input
                                className='acc-input-tel'
                                type="tel"
                                name="contactNumber"
                                placeholder='+91-XXXXXX067X'
                                value={formData.contactNumber}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="companyEmail">Email</label>
                            <input
                                className='acc-input-email'
                                type="email"
                                name="companyEmail"
                                placeholder='abc@mail.com'
                                value={formData.companyEmail}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="guideName">Guide Name</label>
                            <input
                                className='acc-input-text'
                                type="text"
                                name="guideName"
                                placeholder='Enter project guide name'
                                value={formData.guideName}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="joiningDate">Joining Date</label>
                            <input
                                className='acc-input-date'
                                type="date"
                                name="joiningDate"
                                value={formData.joiningDate}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="companyAddress">Company Address</label>
                            <textarea
                                className='textarea'
                                name="companyAddress"
                                cols={110}
                                rows={0}
                                value={formData.companyAddress}
                                onChange={handleChange}
                            >Company Address</textarea>

                            <Button className='next-btn' onClick={() => setActiveKey('profile')}>
                                Next <i className="fa-solid fa-forward"></i>
                            </Button>
                        </Tab>
                        <Tab eventKey="profile" title="Project Details">
                            <h5>Details About Project</h5>
                            <label htmlFor="projectTitle">Project Title</label>
                            <input
                                className='acc-input-text'
                                type="text"
                                name="projectTitle"
                                placeholder='Project Title'
                                value={formData.projectTitle}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="technology">Technology</label>
                            <input
                                className='acc-input-text'
                                type="text"
                                name="technology"
                                placeholder='Enter technology'
                                value={formData.technology}
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="offerLetter">Upload Offer Letter</label><br />
                            <input
                                className='acc-input-file'
                                type="file"
                                name="offerLetter"
                                onChange={handleChange}
                            /><br /><br />

                            <label htmlFor="projectObjectives">Objectives of project</label>
                            <textarea
                                className='textarea'
                                name="projectObjectives"
                                cols={110}
                                rows={2}
                                value={formData.projectObjectives}
                                onChange={handleChange}
                            >Define Objectives of Project</textarea><br /><br />

                            <Button className='next-btn' onClick={() => setActiveKey('contact')}>
                                Next <i className="fa-solid fa-forward"></i>
                            </Button>
                        </Tab>
                        <Tab eventKey="contact" title="Project Review">
                            <h4>Project Review</h4>
                            <ol type='1'>
                                <li>
                                    <h5 style={{ textDecoration: "underline" }}>First Project Review</h5>
                                </li>
                                <input
                                    type="checkbox"
                                    id="firstReviewSubmitted"
                                    name="firstReviewSubmitted"
                                    checked={formData.firstReviewSubmitted}
                                    onChange={handleChange}
                                />
                                <label htmlFor="firstReviewSubmitted">Check if Review Submitted</label><br />
                                <label htmlFor="firstReviewDate">Submission Date:</label>
                                <input
                                    className='acc-input-date'
                                    type="date"
                                    name="firstReviewDate"
                                    value={formData.firstReviewDate}
                                    onChange={handleChange}
                                /><br />
                                <label htmlFor="firstReviewDocument">Upload Review Document:</label><br />
                                <input
                                    className='acc-input-file'
                                    type="file"
                                    name="firstReviewDocument"
                                    onChange={handleChange}
                                /><br /><br />

                                <li>
                                    <h5 style={{ textDecoration: "underline" }}>Second Project Review</h5>
                                </li>
                                <input
                                    type="checkbox"
                                    id="secondReviewSubmitted"
                                    name="secondReviewSubmitted"
                                    checked={formData.secondReviewSubmitted}
                                    onChange={handleChange}
                                />
                                <label htmlFor="secondReviewSubmitted">Check if Review Submitted</label><br />
                                <label htmlFor="secondReviewDate">Submission Date:</label>
                                <input
                                    className='acc-input-date'
                                    type="date"
                                    name="secondReviewDate"
                                    value={formData.secondReviewDate}
                                    onChange={handleChange}
                                /><br />
                                <label htmlFor="secondReviewDocument">Upload Review Document:</label><br />
                                <input
                                    className='acc-input-file'
                                    type="file"
                                    name="secondReviewDocument"
                                    onChange={handleChange}
                                /><br />
                            </ol>
                            <hr />
                            <Button className='btn-card-submit' onClick={handleSubmit}>Submit</Button>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default Account;



