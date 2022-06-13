import React from "react";
import Twitter from '../images/Twitter-Icon.png'
import Facebook from '../images/Facebook-Icon.png'
import Instagram from '../images/Instagram-Icon.png'
import LinkedIn from '../images/Linkedin-Icon.png'
import Github from '../images/GitHub-Icon.png'

function Footer() {
    return (
            <footer>
                <a href="#"><img src={Twitter} alt="twitter icon"/></a>
                <a href="#"><img src={Facebook} alt="twitter icon"/></a>
                <a href="#"><img src={Instagram} alt="twitter icon"/></a>
                <a href="#"><img src={LinkedIn} alt="twitter icon"/></a>
                <a href="#"><img src={Github} alt="twitter icon"/></a>
            </footer>
    );
}

export default Footer;