import React from 'react';
import { Component } from 'react';
import './Customer.css';
import Footer from "./Footer"; 



class Customer extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.mySubmitHandler.bind(this);
        this.state = {
            // array to save the customers,
            customers:[],
            //array to save the packages
            packages: []
        };
    
    }

    
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.customerId);
        window.fetch("http://localhost:9900/binary-bomber-service/customer?customerId=" + this.state.customerId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        }).then (function (response) {return response.json()})
            .then(function (json) {
                console.log(json.data.package);

                //this sets the state
                this.setState({packages:[json.data.package]});
                
                //checking the status output taken from the API
                if (json.status === -1) {
                    alert(json.message);

                    //if customer found setting and printing to console
                } else {
                    this.setState({courses:json.data});
                    
                    console.log('Main Test '+JSON.stringify(json,null, 2))
                    let customer = json.data;
                    
                    this.setState({customers : json.data})
                    var dataArray1 = customer;
                    console.log(customer);
                          
                    
                    //retrieving the values of the object
                    const objectArray1 = Object.entries(dataArray1);
                    objectArray1.forEach(([key, value])=> {
                        
                        console.log(value);
                    });
                }
                
        }
        
        
            )
            .catch(function (error) {/*Handle error*/});
    }
   
    
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        
    }

    render(){ 


        return (
            <div class="customer">
                
                
                <h1 className="customer__title">CUSTOMER</h1>
    
    
                <div className="customer__middle">
                <div class="customer__cusInfo">
                    <h5>Customer ID</h5>
                    <form onSubmit={this.mySubmitHandler}>
                        <input 
                        type="text" 
                        className="customer__customerId" 
                        name="customerId" 
                        placeholder="Enter the customer Id"
                        onChange={this.myChangeHandler}
                        />
                    
                    </form>
                    

                    <h4>Next Best Offer</h4>
                    <input type="text" className="customer__customerId" name="nbo"/>

                    
    
                </div>

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
                
         
                <img
                className="customer__image"
                src="23.gif"
                alt=""
                />
                
                </div>
    
                 
                <Footer/>
                
            </div>
        );
    }
}

export default Customer;
