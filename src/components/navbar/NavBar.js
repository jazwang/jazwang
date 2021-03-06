import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    // const onMouseEnter = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(true);
    //   }
    // };
  
    // const onMouseLeave = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(false);
    //   }
    // };
  
    return (
      <>
        <nav className='navbar'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/video'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                video
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                about
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  