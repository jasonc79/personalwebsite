import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <div className = 'footer'>
        <div className="grid-container">
                <div className="grid-item">
                    <a className ="btn linkedin" href="https://www.linkedin.com/in/jason-cheung-33337a206/"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className="grid-item">
                    <a className="btn github" href="https://github.com/jasonc79"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;