
import React from 'react';



const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className='footer-Layout'>
          <div className='footer-column'>
            <h3 className='footer-header'>Task Master</h3>
            <p className="footer-text">Helping you achieve more with less stress.</p>
          </div>

          <div className='footer-column'>
          <h3 className='footer-header'>Web Links</h3>
          <ul className='Web-Links'>
              <li><a href="/Your-Task">Your Task's</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
          </ul>
          </div>

          <div className='footer-column'>
          <h3 className='footer-header'>Need Help ?</h3>
          <ul className='Web-Links'>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQ</a></li>
          </ul>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Connect With Us</h3>
          
          <div className='socialmedia-container'>
            <div className='socialmedia-icons'>
              <a href="https://github.com/rachiittt" className='social-links'>
                <img src="/images/github.png" alt="Git Hub" className='social-img'/>
              </a>
              
              <a href="https://www.linkedin.com/in/rachit-singh-417221329/" className='social-links'>
                <img src="/images/linkedin-logo.png" alt="linkedin" className='social-img'/>
              </a>
              
              <a href="https://x.com/home?lang=en" className='social-links'>
                <img src="/images/twitter.png" alt="Twitter" className='social-img'/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Productivity Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;