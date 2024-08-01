import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Mono+One&display=swap" rel="stylesheet"></link>
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
