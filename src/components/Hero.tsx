import React from "react";

const Hero = () => {
  return (
    <div className="hero__component">
      <span>Hello 👋</span>
      <h1>
        I'm <span>Joshua Ogbonna</span>, a frontend developer from NG.
      </h1>
      <p>
        I am a creative frontend engineer with strong passion for solving
        problems with code. I have over two years of professional experience
        building web application with amazing teams from different companies. I
        am an avid thinker with a taste for good music.
      </p>
      <div className="social__icons">
        <a href="https://github.com/Joshua-Ogbonna" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>|
        <a href="https://www.linkedin.com/in/devjayke" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin-square"></i></a> |
        <a href="https://twitter.com/nedujs" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
      </div>
    </div>
  );
};

export default Hero;
