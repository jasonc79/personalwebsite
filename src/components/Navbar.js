import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const[click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => { // Removes the sign on button appearing after refresh
    showButton();
  }, []);
  

  window.addEventListener('resize', showButton);
  
  return (
    <>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        </head>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                
                <Link to ="/" className='navbar-logo-container'>
                    <div className="navbar-logo">Jason Cheung</div>
                    <div className='navbar-logo-small'>Personal Website</div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                       <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link> 
                    </li>
                    <li className = 'nav-item'>
                       <Link to = '/contacts' className = 'nav-links' onClick={closeMobileMenu}>
                        Contacts
                        </Link> 
                    </li>
                    <li className = 'nav-item'>
                       <Link to = '/travel' className = 'nav-links' onClick={closeMobileMenu}>
                        My Travels
                        </Link> 
                    </li>
                    <li className = 'nav-item'>
                       <Link to = '/todolist' className = 'nav-links' onClick={closeMobileMenu}>
                        To Do List
                        </Link> 
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;

