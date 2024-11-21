import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import internimg from './intern.png';
import intimg2 from './internship2.jpg'
import sppu from './sppu.png';
import imrtpic from './imrt-pic.png';
import sip from './SIP Information of Project Work for MBA (IT) Sem-IV.pdf'

const Intern = () => {
    return (
        <>
            <div className="intern1"><p>Intern-Ease</p></div>
            <div className="intern2"><p>Intern-Ease</p></div>
            <br /><br />
            <Container>
                <Row>

                    <Col className="inttext">

                        <h3>About Internships</h3><hr />
                        <p>An internship is a professional learning experience that offers meaningful, practical work related to a student’s field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills. It offers the employer the opportunity to bring new ideas and energy into the workplace, develop talent and potentially build a pipeline for future full-time employees. </p>
                        <ul>
                            <li>Provides a clear job/project description for the work experience.</li>
                            <li>Orients the student to the organization, its culture and proposed work assignment(s).</li>
                            <li>Helps the student develop and achieve learning goals.</li>
                            <li>Offers regular feedback to the student intern.</li>
                        </ul>
                    </Col>
                    <Col>
                        <img className="intimg" src={internimg} alt="intern img" width={600} />
                    </Col>
                    <br />


                </Row>
                <br /><br /><br />
                <Row>
                    <Col>
                        <img className="intimg" src={intimg2} alt="intern img" width={600} />
                    </Col>
                    <Col className="inttext">
                        <h3>Student Interns Expect:</h3><hr />
                        <ul>
                            <li>To gain real work experience and provide meaningful assistance to the company. They don’t want to be gophers!</li>
                            <li>To have a mentor who provides guidance, feedback, receptiveness and models professionalism.</li>
                            <li>To gain experience and skills in a particular field.</li>
                            <li>To develop professional contacts.</li>
                            <li>To gain exposure to upper management.</li>
                            <li>To receive an orientation to the company for which they are interning. This introduces the student to the company’s mission and goals and provides them with information about company rules, regulations and procedures. It also introduces the intern to fellow employees who they can go to in the future with questions.</li>
                        </ul>

                    </Col>
                </Row><hr />

                <div>
                    <h4 style={{

                        fontSize: "25px",
                        fontWeight: 700,
                        marginLeft: "0px",
                        // textDecoration : "underline"
                    }}>SPPU Guidelines for MBA students Major Project</h4>
                </div>
                <Col>
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Savitribai Phule Pune University (SPPU) provides guidelines for MBA students' Major Project in the fourth semester, worth a total of 300 marks. The project can be completed individually or in groups, with each student handling a specific, independent module if in a group setting. Students must work under the guidance of an internal faculty mentor and submit a project report, including a synopsis detailing the project scope, data dictionary, ERDs, file designs, and output reports. Projects should be commercially or managerially relevant and are evaluated with 150 marks for internal assessment and 150 marks for external viva, which includes a university external examiner and an internal examiner. The university specifies the format for the project report, and students are expected to communicate progress to their internal guide. Projects may be carried out within the institute or at an external organization with prior approval from the institute.</p><br />
                    <img src={sppu} alt="" width={1300} /><br /><br />
                    <h6 style={{ fontSize: "18px", fontWeight: "600" }}>At the end of the fourth semester of study, a student will be examined in the course
                        "Project work".</h6><br />
                    <ol style={{ fontSize: "17px", fontWeight: "600" }}>
                        <li>The Major Project work will be in the Semester IV. It may be done individually
                            or in groups in case of bigger projects. However if project is done in groups,
                            each student must be given a responsibility for a distinct module and care should
                            be taken to see the progress of individual modules is independent of others.
                        </li>
                        <li>Students should take guidance from an internal guide and prepare a Project
                            Report on "Project Work” back to back print (one copy) which is to be submitted
                            to the Director of the Institute. Wherever possible, a separate file containing
                            source-code listings should also be submitted. Every student should also submit
                            soft copy of their project synopsis
                        </li>
                        <li>
                            The Project Synopsis should contain an Introduction to Project, which should
                            clearly explain the project scope in detail. Also, Data Dictionary, ERDs, File
                            designs and a list of output reports should be included if required as per the
                            project title and scope
                        </li>
                        <li>
                            The project Work should be of such a nature that it could prove useful or be
                            relevant from the commercial/management angle.
                        </li>
                        <li>
                            Selected project must have relevant scope for 300 marks.
                        </li>
                        <li>The progress of the project must be communicated to project guide.</li>
                        <li>
                            The project report will be duly accessed by the internal guide and marks will be
                            communicated by the Director to the University along with the marks of the
                            internal credit for theory and practical to be communicated for all other courses.
                        </li>
                        <li>
                            The project report should be prepared in a format prescribed by the University,
                            which also specifies the contents and methods of presentation.
                        </li>
                        <li>The major project work carry 150 marks for internal assessment and 150 marks
                            for external viva. The external viva shall be conducted by a minimum of one
                            university external examiner and one internal examiner.
                        </li><br />
                    </ol>
                    <h6 style={{ fontSize: "18px", fontWeight: "600" }}>Project work can be carried out in the Institute or outside with prior permission of the
                        Institute authority.
                    </h6>


                </Col><br /><br />
                <div>
                    <h4 style={{

                        fontSize: "25px",
                        fontWeight: 700,
                        marginLeft: "0px",
                        // textDecoration : "underline"
                    }}>Guidelines for Practical Training and Project Work during Summer Internship</h4>
                </div>
                <Row>
                    <Col>
                        <p style={{ fontSize: "17px", fontWeight: "600" }}>Each student shall have to undergo a practical training for a period of not less than 45 days during the vacation
                            at the end of third semester. Based on the actual training during the vacation, the student shall write a project
                            report on the topic selected under the guidance of a faculty and submit two hard-bound copies (Black Rexene
                            with Golden Embossing as per format given by University/Institute)
                            The project Report shall be assessed both internally (150 marks) and externally (150 marks)
                            .For external evaluation there will be a viva voce at the end of fourth semester. Such viva-voce shall be
                            conducted by a panel of two referees appointed by the University/Institute.</p><br />
                        <img src={imrtpic} alt="" width={1300} /><br /><br />
                        <embed className="pdf"
                            src={sip}
                            width="1300" height="500" />
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default Intern;                  