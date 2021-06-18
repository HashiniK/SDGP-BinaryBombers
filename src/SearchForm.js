import React from 'react'
import './SearchForm.css';
import Footer from "./Footer";

function SearchForm () {
        return (
 
            <div  className="searchPage">
            
            <div className="searchPage__box">
            
            <div className="searchPage__box1">
                {/* Search By Customer Box */}
                <form>

                    <div className="searchPage__imageBox">
                    <strong>Search By Customer</strong>
                        <img 
                            className="searchPage__images"
                            src="2.gif"
                            alt="Search By Customer"
                        />
                    </div>
                    
                    <br></br>
                    {/* Search By Customer Box - Search Bar Input */}
                    <br></br>

                
                    <button type="Submit" className="search__Button"><a href="http://localhost:3000/customer">Select</a></button>
                    
                </form>
                </div>
                

                <div className="searchPage__box2">               
                {/* Search By Package Box  */}
                 <form>   
                <strong>Search By Package</strong>
                
                    <div className="searchPage__imageBox">
                        <img 
                            className="searchPage__images"
                            src="1.gif"
                            alt="Search By Package"
                        />
                    </div>
                    
                    {/* Search By Package Box - Search Bar Input */}
                    <br></br>
                    <br></br>
              
                    <button type="Submit" className="search__Button"><a href="http://localhost:3000/package">Select</a></button>
                    
                </form>
                </div>

                <div className="searchPage__box3">
                <form>
                <strong>Search By N.B.O</strong>
                    {/* Search By N.B.O Box */}

                
                    <div className="searchPage__imageBox">
                        <img 
                            className="searchPage__images"
                            src="3.gif"
                            alt="Search By NBO"
                        />
                    </div>
                    
                    <br></br>
                    {/* Search By N.B.O Box - Search Bar Input */}
                    <br></br>
                    <button type="Submit" className="search__Button"><a href="http://localhost:3000/nbo">Select</a></button>
                    
                </form>
                </div>               
                

                {/*  */}

            </div>
        <Footer />
        </div>
            );
        }
        
    
    
 
export default SearchForm

        

        
