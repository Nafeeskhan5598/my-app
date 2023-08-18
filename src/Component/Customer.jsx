import React from "react";
import './style/customer.css'
import ChildCom from "./ChildCom";
import Firstimg from '../images/Ellipse 6 (1).svg';
import Secondimg from '../images/Ellipse 6 (2).svg';
import Thirdimg from '../images/Ellipse 6.svg';


function Customer() {

    return (
        <>
            <div className="container customer-text-area">
                <div className="customer-text">
                    <h6>Customer Comments</h6>
                    <h3>Why customers love us</h3>
                    <h2>They are doing amazing job
                         with hundred percent customer satisfaction, Love their work 
                         and would like to work with them again</h2>
                </div>
                <div className="person-all-area">
                <div className="person-all border-boxy wow animate__animated animate__fadeInUp">
                   <ChildCom imgsrc= { Thirdimg }  header="Pierre Hackett" pera="VP of Engineering" />
                  </div>
                  <div className="person-all wow animate__animated animate__fadeInUp">
                   <ChildCom imgsrc= {  Firstimg }  header="Natalia Sanz" pera="Head of Technology" />
                  </div>
                  <div className="person-all wow animate__animated animate__fadeInUp">
                   <ChildCom imgsrc= {  Secondimg }  header="Ece Akman" pera="Senior Marketer" />
                  </div>
                  </div>

            </div>

        </>
    )
}
export default Customer;