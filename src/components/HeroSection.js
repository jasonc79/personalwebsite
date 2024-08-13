import React from 'react';
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
    </>
  );
}

export default HeroSection;
