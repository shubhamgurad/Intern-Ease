import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import imrtabt from './ImrtAbt.png';

function Aboutus() {
    return (
        <>
          <Container>
          <div className="about1"><p>ABOUT US</p></div>
                <div className="about2"><p>ABOUT US</p></div>
            <Row>
                  <img className="abtimg" src={imrtabt} alt="about" />
            </Row>
            <Row>
                <Col className="inttext">
                <p className="abinfo">The Institute was established under the guardian wing of NDMVP Samaj in year 1986 with the motto of imparting Training & Education in field of Management & Computer. This Institute is affiliated to Savitribai Phule Pune University (SPPU) formerly Pune University and recognized by Government of Maharashtra, AICTE New Delhi and DTE Mumbai. IMRT is accredited by NAAC with B+ grade for the period of 2017-18 to 2021-22.</p>

                <h4>Milestone:</h4>

                <ul>
                  <li>In the year 1986 Institute started MPM (presently known as MBA-HRD), PGDBM and PGDCM Courses under the faculty of Management and affiliated to Pune University.</li>
                  <li>In year 1989 institute started MCM Course (presently known as MBA-IT) under the faculty of Management and affiliated to Pune University.</li>
                  <li> In the year 1992 institute started PGDHM Course.</li>
                  <li> In the year 1994 institute has got AICTE approval to run MBA Course under the jurisdiction of Pune University (Presently known as Savitribai Phule Pune University).</li>
                  <li>Under the strong visionary leadership of  Late Dr.Vasant Pawar( Sarchitnis MVP Samaj) institute has emerged with competent faculty, infrastructural facility and other resources to enhance management education in society.</li>
                  <li>Since inception Dr.B.B.Pagar, Dr.B.B.Rayate and many other Faculties boost the institute to become strong knowledge hub to enhance management education.</li>
                </ul>

                <h4>Key Features of IMRT:</h4>

                <ul>
                  <li>NAAC Accredited Institute</li>
                  <li>Renowned Research Centre</li>
                  <li>Effective Training & Placement Cell</li>
                  <li>Wi-Fi Campus with separate Internet Lab</li>
                  <li>Well-equipped library</li>
                  <li>Located in Heart of Nashik city</li>
                  <li>Industry Institute interaction & exposure</li>
                  <li>Experienced, Highly Qualified & Dedicated Faculty from both Academics & Industry</li>
                  <li>ICT Classroom, Spacious Seminar Hall & Auditorium</li>
                  <li>Medical & Hospital facility managed by Medical College of MVP Samaj</li>
                  <li>Free ship/Scholarship/EBC/Minority Facilities are available for all eligible candidates as per the State & Central Governments norms.</li>
                </ul>


                </Col>
            </Row>
          </Container>
        </>
        )
    }
export default Aboutus;