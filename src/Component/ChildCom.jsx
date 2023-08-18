import React from "react";
import './style/childprp.css'
function ChildCom(props) {
   return (
        <>
            <div className="child-area">
                <div className="child-first">
                    <img src={props.imgsrc} alt="profile" className="child-img" />
                    <div className="child-text">
                        <span className="child-header" >{props.header} </span>
                        <span className="child-pera" >{props.pera} </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChildCom;