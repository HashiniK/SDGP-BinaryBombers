import React from 'react';
import './NBO.css';
import Header from './Header';
import Footer from "./Footer"; 

function NBO() {
    return (
        <div className="nbo">
            <Header/>
            <h1 className="package__title">NEXT BEST OFFER</h1>
            <div className="package__middle">
            <div className="package__presentPackages">
                
                <div className="packagesLi">
                <div className="p1">
                <h5>Recommended Customers</h5>
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                <div className="p1">
                <input type="text" className="package__packages"/>
                </div>
                </div>
            </div>
            <div class="package__cusInfo">
                <h5>Package ID</h5>
                <input type="text" className="package__customerId" name="custId"/>

                <h5>Package Name</h5>
                <input type="text" className="package__customerId" name="custId"/>

            </div>
            </div>
            <Footer/>
        </div>
    
    )
}

export default NBO
