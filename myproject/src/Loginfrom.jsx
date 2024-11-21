import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/student/login", { email, password });
            navigate(`/account/${email}`);
            console.log(res)
        } catch (error) {
            console.error(error);
            alert("Login invalid");
        }
    };

    return (
        <Container fluid className="logcontainer">
        <Row fluid className="bgblur">
            <Col className="screen">
                <Col className="screen__content">
                    <form className="login" onSubmit={handleSubmit}>
                        <div style={{ paddingLeft: "15px" }}>
                            <h5 className="loghead">LOGIN</h5>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                type="email"
                                className="login__input"
                                placeholder="User name / Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* <a className="forgetpass" href="">
                                Forget Password?
                            </a> */}
                        </div>
                        <button type="submit" className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        {error && <div className="error">{error}</div>}
                        <hr />
                        <p>
                            Don't have an account? <Link to='/signupfrom'>Signup Now</Link>
                        </p>
                    </form>
                </Col>
                <Col className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </Col>
            </Col>
        </Row>
    </Container>
    );
};

export default LoginForm;
