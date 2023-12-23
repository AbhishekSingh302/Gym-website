import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
        <div className="container footer_container">
            <article>
              <Link to="/" className='logo'>
                <img src={Logo} alt="footer logo" />
              </Link>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro tempora in eius voluptas harum expedita blanditiis atque laborum, a ut?
              </p>
              <div className="footer_socials">
                <a href='https://linkedin.com' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'><FaTwitter/></a>
                <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'><FaInstagram/></a>
              </div>
            </article>
            <article>
              <h4>Permalinks</h4>
              <Link to="/about">About</Link>
              <Link to="/plans">Plans</Link>
              <Link to="/trainers">Trainers</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </article>
            <article>
              <h4>Insights</h4>
              <Link to="/s">Blog</Link>
              <Link to="/s">Case</Link>
              <Link to="/s">Events</Link>
              <Link to="/s">Communities</Link>
              <Link to="/s">FAQS</Link>
            </article>
            <article>
              <h4>Get In Touch</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/s">Support</Link>
            </article>
        </div> 
        <div className="footer_copyright">
          <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>        
        </div>    
    </section>
  )
}

export default Footer
