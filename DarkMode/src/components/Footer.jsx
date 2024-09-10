import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer} >
      <ul>
        <h3>Pages</h3>
        <li>Home</li>
        <li>About</li>
      </ul>
      <ul>
        <h3>Get in touch:</h3>
        <li>Techcollege </li>
        <li>aalborg</li>
      </ul>
      
      <div className="newsletter">
        <input type="email" placeholder="Sign up for our newsletter" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
