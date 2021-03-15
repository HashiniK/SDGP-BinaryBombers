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
          
            <div className="header__nav">
             {/*   
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> NEXT BEST OFFER </span>
                        <span className="header__optionLineTwo"> BY BINARY BOMBERS </span>
                    </div>
                </Link>
             */}
                
            </div>
            
            
            
            <div className="header__nav">
                
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Hello ! </span>
                        <span className="header__optionLineTwo"> Sign In </span>
                    </div>
                </Link>
    
                
            </div>

           


        </nav>
    );
    
}

export default Header
