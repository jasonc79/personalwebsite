import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    </head>
    <div className = 'hero-container'>
      <h1 className='body-title'>Hello, I am Jason!</h1>
      <h2 className = 'body-text'>
          I am an aspiring software engineer who has an interest in tech and finance.
      </h2>
    </div>
    </>
  );
}

export default HeroSection;
