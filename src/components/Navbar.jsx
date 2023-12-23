import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { links } from '../data';
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='navLogo' />
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={()=> setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)} >
          { isNavShowing ? <MdOutlineClose /> : <FaBars/>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
