import React from "react";
import './style/Plain.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Plain from '../images/shutterstock_1361520500 1.png';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Learn from '../images/Groupgreter.svg'
import 'animate.css';
function PlainMain() {
    return ( 
        <>
            <div className="plain-area">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>

                            <div className="plain-main-img "  >
                                <div className="circle wow animate__animated animate__fadeInBottomLeft">
                               
                                    <Image src={Plain} rounded />
                                    <div className="backgound">  
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={6} md={4}>
                            <div className="plain-main-text wow animate__animated animate__fadeInBottomRight"  >
                                <h2>Boost your agencies
                                    by choosing Ninja
                                    Developers</h2>

                                <p>Create custom landing pages with Shades that convert more visitors than any website, no coding required.</p>


                                <div className="check">
                                    <InputGroup className="mb-3 chackbox-text">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" checked />
                                        <h4>Unlimited design possibility</h4>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox className="inp" aria-label="Checkbox for following text input" checked />
                                        <h4>Completely responsive features</h4>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" checked />
                                        <h4>Easy to customize plugins</h4>
                                    </InputGroup>

                                    <div className="learn-more">
                                        <div className="learn-text">
                                       <a href="#"> <h6>Learn more</h6></a>
                                        </div>
                                        <div className="learn-more-logo">
                                            <img src={Learn} alt="logo" />                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
}

export default PlainMain;