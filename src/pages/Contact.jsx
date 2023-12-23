import React from 'react';
import './Contact.css';
import Header from '../components/Header';
import HeaderImage from '../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam beatae soluta quos similique possimus, sunt obcaecati earum praesentium hic!
      </Header>
      <section className='contact'>
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="samturner302@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://www.facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookMessenger/></a>
            <a href="https://wa.me/+919067017402" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
