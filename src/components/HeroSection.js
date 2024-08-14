import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';
import Travel from './Travel';

function HeroSection() {
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    </head>
    <div className = 'hero-container'>
      <div className='grid-container-hero'>
        <div className='grid-item-hero'>
            <h1 className='body-title-intro'>Hello, I am Jason!</h1>
            <h1 className='body-title'>I am a software engineer!</h1>
        </div>
        <div className='grid-item-hero'>
            <h2 className = 'body-text'>
            I am a student and aspiring software engineer who has an interest in tech and finance.
            </h2>
            <h2 className='body-text'>
                I enjoy travelling, reading and going to the gym! I also code in my spare time!
            </h2>
        </div>
        <div className='grid-item-hero'>
            <hr className='border'></hr>
        </div>
      </div>
    </div>
    <Travel/>
    <div className='contact-hero-container'>
        <div className='social-media-links'>
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
        <div className='contact-hero-section'>
            <h3 className='contact-title'> Click here if you want to stay in touch with me! </h3>
            <Link to = '/contacts' className='contact-hero-button'>Contact Me</Link>
        </div>
    </div>
    </>
  );
}

export default HeroSection;
