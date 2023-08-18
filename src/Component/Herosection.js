import React from "react";
import './style/hero.css';
import imgs from '../images/paypal.png';
import google from '../images/google.png';
import Drop from '../images/Dropbox_logo_2017.png';
import Shutter from '../images/shutterstockpp.png';
function Herosection() {
    return (
        <>                                           {/* Hero section text area */}
            <div className="hero-area">
                <div className="container hero-section">
                    <div className="hero-text-area">
                        <div className="hero-header">
                            <h1>Great software is
                                built with amazing
                                developers</h1>
                        </div>
                        <div className="hero-pera">
                            <p>We help build and manage a team of world-class
                                developers to bring your vision to life</p>
                        </div>
                        <div className="input-all-area ">
                            <div className="input-area">
                                <input className="input-type" type="text" placeholder="Subscribe newsletter"></input>
                            </div>
                            <div className="input-btn">
                                <a href="#">   <button type="button">  Subscribe</button> </a>
                            </div>
                        </div>
                        <div className="logo-item">
                            <li className="item-f">Sponsored by:</li>
                            <li className="item-s"><img src={imgs} alt="img" /> </li>
                            <li className="item-t"><img src={google} alt="img" /></li>
                            <li className="item-for"><img src={Drop} alt="img" /></li>
                        </div>
                    </div>
                    <div className="hero-img-area">                      {/* Hero section image area */}
                        <img src={Shutter} alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Herosection;
