import React from "react";
import ilogo from './imrt_logo.png';
import mlogo from './mvp_logo.png';
// import { Container, Row, Col } from "react-bootstrap"


const Homepage = () => {

    return (
        <>
            <header className="head">
                <div><img src={mlogo} className="clglogo" alt="" /></div>
                <div className="headings">
                    <p className="head1"><b>Maratha Vidya Prasarak Samaj’s</b></p>
                    <p className="head2"><b>Institute of Management Research & Technology [I.M.R.T.]</b></p>
                    <p className="head3"><b>MVP Campus, Shivaji Nagar, Gangapur Road, Nashik-422002, Maharashtra, India <br /> 0253-2571650, 2970894, mvpimrt@gmail.com</b></p>
                    <p className="head4"><b>Affiliated to Savitribai Phule Pune University, Pune & Recognized by AICTE, New Delhi, MSDTE Mumbai & Govt. of Maharashtra</b></p>
                </div>
                <div><img src={ilogo} className="clglogo" alt="" /></div>
            </header>
            
        </>

    )
}
export default Homepage;