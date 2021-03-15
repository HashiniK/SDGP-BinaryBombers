import React from 'react'
import './SearchPage.css';
import Header from './Header';

function SearchPage() {
    return (
       
        <div  className="searchPage">
             <Header/>
            <div className="searchPage__box">
                <div className="searchPage__box1">

                <strong>Search By Customer</strong>
                <div className="searchPage__imageBox">
                    <img 
                        className="searchPage__images"
                        src="1.gif"
                        alt="Search By Customer"
                    />
                </div>
                <input type="text" className="searchPage__searchInput" />
                <strong>Enter Customer ID</strong>
                </div>
            
                <div className="searchPage__box2">

                <strong>Search By Customer</strong>
                <div className="searchPage__imageBox">
                    <img 
                        className="searchPage__images"
                        src="2.gif"
                        alt="Search By Package"
                    />
                </div>
                <input type="text" className="searchPage__searchInput" />
                <strong>Enter Customer ID</strong>
                </div>

                <div className="searchPage__box3">
                <strong>Search By Customer</strong>
                <div className="searchPage__imageBox">
                    <img 
                        className="searchPage__images"
                        src="3.gif"
                        alt="Search By NBO"
                    />
                </div>
                <input type="text" className="searchPage__searchInput" />
                <strong>Enter Customer ID</strong>
                </div>
            </div>
        </div>
    )
}

export default SearchPage