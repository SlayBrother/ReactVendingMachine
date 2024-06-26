import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
function NavBar() {
    return (
        <nav className='NavBar'>
            <Link className='nav-link' to='/'>
                Home
            </Link>
            <Link className='nav-link' to='/chips'>
                Chips
            </Link>
            <Link className='nav-link' to='/soda'>
                Soda
            </Link>
            <Link className='nav-link' to='/sardines'>
                Sardines
            </Link>
        </nav>
    );
}

export default NavBar;