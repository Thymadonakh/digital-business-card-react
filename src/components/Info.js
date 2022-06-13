import React from "react";
import Profile from "../images/profile.png"
import Button from "../images/Mail.png"

function Info() {
    return (
        <div className="info">
            <img src= { Profile} alt="" className= "info--profile" />
            <h1 className="info--name">Laura Smith</h1>
            <h3 className="info--title">Frontend Developer</h3>
            <p className="info--email">laurasmith.website</p>
            <button type="button" className="info--btn">
                <span><img src= { Button } alt="button" className="info--btn--icon" /></span>
                <span className="info--btn--text">Email</span>
            </button>
        </div>
    )
}

export default Info;