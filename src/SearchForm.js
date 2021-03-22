import React from 'react'
import './SearchForm.css';
import Footer from "./Footer";
import { Route } from "react-router-dom";
import Customer from './Customer';
import Package from './Package';


export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: 'customerId',
            packageId: 'packageId'
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        window.fetch("http://localhost:9900/binary-bomber-service/customer?customerId=" + this.state.customerId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        }).then (function (response) {return response.json()})
            .then(function (json) {
                if (json.status === -1) {
                    alert(json.message);
                } else {
                    let customer = json.data;
                    console.log(customer);
                    <Route path="/customer">
                        <Customer/>
                    </Route>
                        
                    
                }
            })
            .catch(function (error) {/*Handle error*/});
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    mySubmitHandler2 = (event2) =>{
        event2.preventDefault();
        window.fetch("http://localhost:9901/binary-bomber-service/customer2?packages="+this.state.packageId, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        }).then (function (response) {return response.json()})
        .then(function (json) {
            if (json.status === -1) {
                alert(json.message);
            } else {
                let customer = json.data;
                console.log(customer);
                <Route path="/package">
                    <Package/>
                </Route>
                    
                
            }
        })
        .catch(function (error) {/*Handle error*/});
    }

    render() {
        return (
            
            // <form onSubmit={this.mySubmitHandler}>
            //     <p>Enter the Customer ID:</p>
            //     <input
            //         type='text'
            //         name='customerId'
            //         onChange={this.myChangeHandler}
            //     />
            //     <br/>
            //     <br/>
            //     <input type='submit' />
            // </form>

            // this section contains the rendered page
            <div  className="searchPage">
            
            <div className="searchPage__box">
            
            <div className="searchPage__box1">
                {/* Search By Customer Box */}
                <form onSubmit={this.mySubmitHandler}>

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

                    <input 
                    type="text" 
                    className="searchPage__searchInput" 
                    name="customerId" 
                    onChange={this.myChangeHandler}
                    />
                    <br></br>

                    <light className="lightFont">Enter Customer ID</light>
                    <br/>
                    <button className="search__Button">Search</button>
                    
                </form>
                </div>
                

                <div className="searchPage__box2">               
                {/* Search By Package Box  */}
                <form onSubmit={this.mySubmitHandler2}>
                    
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
                    <input 
                        type="text" 
                        className="searchPage__searchInput" 
                        name="packageId"
                        onChange={this.myChangeHandler}
                    />
                    <br></br>
                    <light className="lightFont">Enter Package ID</light>
                    <br></br>
                    <button className="search__Button" >Search</button>
                    
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

                    <input 
                        type="text"    
                        className="searchPage__searchInput" 
                        name="nboPackageId"/>
                    <br></br>
                    <light className="lightFont">Enter Package ID</light>
                    <br></br>
                    <button className="search__Button">Search</button>
                    
                </form>
                </div>               
                

                {/*  */}

            </div>
        <Footer />
        </div>
            );
        }
    }
    
    

//ReactDOM.render(<SearchForm />, document.getElementById('root'));

        