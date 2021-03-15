import React from 'react';
import './Customer.css';
import Header from './Header';
import Footer from "./Footer"; 



function Customer() {
    return (
        <div class="customer">
            <Header/>
            
            <h1 className="customer__title">CUSTOMER</h1>


            <div className="customer__middle">
            <div className="customer__presentPackages">
                
                <div className="packagesLi">
                <div className="p1">
                <h5>Present Packages</h5>
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="customer__packages"/>
                </div>
                </div>
            </div>
            <div class="customer__cusInfo">
                <h5>Customer ID</h5>
                <input type="text" className="customer__customerId" name="custId"/>

                <h5>Gender</h5>
                <input type="text" className="customer__customerId" name="gender"/>
            
                <h5>Age</h5>
                <input type="text" className="customer__customerId" name="age"/>
            
                <h4>Next Best Offer</h4>
                <input type="text" className="customer__customerId" name="nbo"/>

            </div>
     
            <img
            className="customer__image"
            src="23.gif"
            alt=""
            />
            

            </div>

             
            <Footer/>
            
        </div>
    )
}

export default Customer
