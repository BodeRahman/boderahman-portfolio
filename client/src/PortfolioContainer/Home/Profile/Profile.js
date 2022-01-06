import React from "react";
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://www.github.com/BodeRahman">
                        <i className="fa fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/bleshpurpleez">
                        <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/__melaninpapi__/">
                        <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/__melaninpapi__/">
                        <i className="fa fa-twitter-square"></i>
                        </a>
                    </div>
                </div> 

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text">Rahman</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                        <span className='primary_text'>
                            {" "}
                                <h1>
                                    {" "}
                                    <Typical 
                                        loop={Infinity}
                                        steps={[
                                            "Ethusiastic Dev 😡",
                                            2000,
                                            "Frontend Heavy 👨🏿‍💻",
                                            2000,
                                            "Graphic/Brand designer 💻",
                                            2000,
                                            "ReactDev 🤓",
                                            2000,
                                        ]}
                                    />
                                </h1>
                                <span className='profile-role-tagline'>
                                I am interested in technology where skills are utilized,
                                developed with good prospect for problem solving. 
                                </span>
                        </span>
                </div>
                <div className='profile-option'>
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="rahman.pdf" download="Rahman rahman.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  );
}
