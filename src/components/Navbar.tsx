import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <h5>Jay.</h5>
      </div>
      <div className="links">
        <ul>
          <a href="https://t.co/ceZW9BBRYJ" target="_blank" rel="noreferrer">
            <li>Resume</li>
          </a>
          <a
            href="https://devjourney.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <li>Blog</li>
          </a>
          <a
            href="mailto:ogbchinedu9@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
