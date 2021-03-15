import React from 'react'
import './SearchPage.css';
import Header from './Header';
import Footer from "./Footer";

function SearchPage() {
    return (
       
        <div  className="searchPage">
             <Header/>
            <div className="searchPage__box">

                {/* Search By Customer Box */}

                <div className="searchPage__box1">

                
                <div className="searchPage__imageBox">
                    <img 
                        className="searchPage__images"
                        src="2.gif"
                        alt="Search By Customer Image"
                    />
                </div>
                <strong>Search By Customer</strong>
                <br></br>
                {/* Search By Customer Box - Search Bar Input */}

                <input type="text" className="searchPage__searchInput" />
                
                <light className="lightFont">Enter Customer ID</light>
                <button className="search__Button">Search</button>
                </div>

                                
                {/* Search By Package Box  */}

                <div className="searchPage__box2">

                
                <div className="searchPage__imageBox">
                    <img 
                        className="searchPage__images"
                        src="1.gif"
                        alt="Search By Customer Image"
                    />
                </div>
                <strong>Search By Package</strong>
                {/* Search By Package Box - Search Bar Input */}
                <br></br>
                <input type="text" className="searchPage__searchInput" />
            
                <light className="lightFont">Enter Package ID</light>
                <button className="search__Button" >Search</button>
                </div>

                {/* Search By N.B.O Box */}

                <div className="searchPage__box3">
                
                <div className="searchPage__imageBox">
                    <img 
                        className="searchPage__images"
                        src="3.gif"
                        alt="Search By Customer Image"
                    />
                </div>
                <strong>Search By N.B.O</strong>
                <br></br>
                {/* Search By N.B.O Box - Search Bar Input */}

                <input type="text" className="searchPage__searchInput" />
                <light className="lightFont">Enter Package ID</light>
                <button className="search__Button">Search</button>
                </div>

                {/*  */}

            </div>
            <Footer />
        </div>
        
    )
}
export default SearchPage
