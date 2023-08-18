import React from "react";
import './style/mobile.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MobilePhone from '../images/shutterstock_1350640358 1.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import learnButton from '../images/Groupgreter.svg'
function Mobile() {
    return (                                                            
        <>
            <div className="container mobile-area">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="mobile-text-area">
                                <h2>Free Customer Support to ensure what you like to expect</h2>

                                <h5>We offer a risk-free trial period of up to two weeks.
                                    You will only have to pay if you are happy with the developer
                                    and wish to continue. If you are unsatisfied, we’ll refund payment
                                    or fix issues on our dime period customers.</h5>

                                <p>If you are happy with the developer and wish to continue.
                                    If you are unsatisfied, we’ll refund payment or fix issues.</p>

                                <div className="learn-more" id="learn-id">
                                    <div className="learn-text">
                                     <a href="#">   <h6>Learn more</h6> </a>
                                    </div>
                                    <div className="learn-more-logo">
                                        <a href="#"> <img src={learnButton} alt="logo" /> </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={6} md={4}>
                            <div className="plain-main-text" id="mobile-massage">

                                <Image src={MobilePhone} rounded />
                                <div className="backgound-massage">
                                </div>
                            </div>


                        </Col>
                    </Row>

                </Container>
            </div >
        </>
    )
}
export default Mobile;