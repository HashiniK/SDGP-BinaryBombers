import React from 'react'
import './Home.css';
import Product from './Product';
import Footer from "./Footer";


function Home() {
    return (
        <div className="home">
         {/*    <img
            className="home__image"
            src="back3.png"
            alt=""
            />
        */}

        <div className="home__row">
            <Product
                id="003"
                title="Search By Customer"           
                image="2.gif"
                title2="Enter Customer ID"
            />

            <Product
                id="004"
                title="Search By Package"            
                image="1.gif"
                title2="Enter Package ID"
            />
            
            <Product
                id="005"
                title="Search By N.B.O"                
                image="3.gif"
                title2="Enter Package ID"
     
            />

        </div>

        {/* Footer----> */}
        <Footer />
        
        {/*  */}
        {/*  */}

        </div>

    );

}

export default Home
