import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <nav className="header">
          
            <Link to="/">
                <img
                    className="header__logo"
                    src = "21.png"
                    alt = "logo"
                />
            </Link>
        </nav>
    );
    
}

export default Header
