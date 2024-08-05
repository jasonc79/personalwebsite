import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <div className = 'footer'>
            <div className="item">
                <a className ="btn linkedin" href="https://www.linkedin.com/in/jason-cheung-33337a206/"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div className="item">
                <a className="btn github" href="https://github.com/jasonc79"><i class="fab fa-github"></i></a>
            </div>
            <div classname="item">
                <a className='btn facebook' href="https://www.facebook.com/profile.php?id=100049015320578"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div className="item">
                <a className='btn instagram' href="https://www.instagram.com/jasonc9722/"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Footer;