import React from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import HelloVideo from '../images/MAACXIMUM Learning at MAAC (1).mp4';
import './style/video.css';
import Learn from '../images/Groupgreter.svg'
function IntroVideo() {
    return (
        <>
            <div className="container video-area">
                <div className="video-text">
                    <h2 className="video-header">Leading companies trust us to develop software</h2>
                    <p className="video-pera">We believe its important for everyone to have
                        access to software especially when it comes to digital learning be navigate.</p>
                    <div className="learn-btn">
                        <div className="learn-btn-txt">
                            <h6>Explore Details </h6>
                        </div>
                        <div className="learn-btn">
                            <img src={Learn} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="video-hello">
                    <Video className="video-back" src={HelloVideo} autoPlay loop >
                    </Video>
                </div>
            </div>



        </>
    )
}
export default IntroVideo;