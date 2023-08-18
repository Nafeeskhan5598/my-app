import React from "react";
import './style/footer.css'
import FooterImg from '../images/Group 48.svg'
import multiFirst from '../images/Group 46.svg'
import multisecond from '../images/Group 47.svg'
import Flogo from '../images/firstlogo.jpg';
function Footer() {
    return (
        (
            <>
                <div className="container footer-all-area">
                    <div className="footer-area wow animate__animated animate__fadeInUp">
                        <div className="footer-multi">
                            <h3 className="footer-text">
                                Hire the world’s best developers
                                and designers around!
                            </h3>
                        </div>
                        <div className="footer-multi">
                            <img src={FooterImg} alt="lineimg" />

                        </div>
                        <div className="footer-multi">
                            <div className="multi-img-first">
                                <img src={multiFirst} alt="multiFirstimg" />

                            </div>
                            <div className="multi-text">
                                <a href="#"><h5>HIRE DEVELOPERS</h5></a>


                            </div>
                            <div className="multi-img-second">
                                <img src={multisecond} alt="multiFirstimg" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottum-area">
                        <div className="bottum">
                            <div className='footer-bottum'>
                                <a href="#"> <img src={Flogo} alt='logo' /> </a>
                            </div>
                            <div className="footer-bottum-text">
                                <a href="#"> <h5> StartupLanding</h5></a>

                            </div>
                            <div className="footer-pera">
                                <p>Copyright by 2019 Redq, Inc</p>
                            </div>
                        </div>
                        <div className="list-all-item">

                            <li> <a href="#"> Home </a> </li>
                            <li> <a href="#">Adversite </a></li>
                            <li> <a href="#">Supports </a></li>
                            <li> <a href="#"> Marketing </a></li>
                            <li><a href="#"> FAQ </a></li>
                        </div>
                    </div>
                </div>

            </>
        )
    )
}
export default Footer; 

                                    // footer and component
