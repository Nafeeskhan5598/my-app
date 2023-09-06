import React from "react";
import './style/laptop.css';
import ChildLaptop from "./ChildLaptop";
import Laptop1 from '../images/stefan-stefancik-5p_7M5MP2Iw-unsplash.png';
import Laptop2 from '../images/avel-chuklanov-DUmFLtMeAbQ-unsplash.png';
import Laptop3 from '../images/corinne-kutz-tMI2_-r5Nfo-unsplash.png';
import Group from '../images/Group.svg';
function Laptop() {
    return (
        <>
            <div className="laptop-all-area">
                <div className="container laptop-area">
                    <div className="laptop-text">
                        <h6>Quality features</h6>
                        <h5>Tutorials that people love most</h5>
                    </div>
                    <div className="all-laptop">
                        <div className="laptop-pro wow animate__animated animate__fadeInUp">
                            <ChildLaptop src={Laptop1} Title="How to
                     work with prototype design with adobe xd
                      featuring tools" cimg={Group} comment="22 Comments" />
                        </div>
                        <div className="laptop-pro wow animate__animated animate__fadeInUp">
                            <ChildLaptop src={Laptop2} Title="How to
                     work with prototype design with adobe xd
                      featuring tools" cimg={Group} comment="15 Comments" />
                        </div>
                        <div className="laptop-pro wow animate__animated animate__fadeInUp">
                            <ChildLaptop src={Laptop3} Title="How to
                     work with prototype design with adobe xd
                      featuring tools" cimg={Group} comment="18 Comments" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Laptop;