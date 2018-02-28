import React from 'react';
import './Footer.css';
import Radium from 'radium';
const footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Education
          <span> Everywhere</span>
        </h3>
        <p className="footer-links">
          <a href="/">Home</a>
          |
          <a href="/ListChapter">Chapters</a>
          |
          <a href="/Video">Videos</a>
        </p>
        <p className="footer-company-name">Elearning &copy; 2018</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>255 Hung Vuong st</span> Da Nang, Viet Nam
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+84 01689123456</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="https://mail.google.com">Elearning@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="https://fecebook.com">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://twitter.com">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://linkedin.com">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com">
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Radium(footer);
