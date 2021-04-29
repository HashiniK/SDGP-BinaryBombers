import React from 'react'
import {Component} from 'react'
import SearchForm from './SearchForm'

class SearchPage extends Component{
    state={
        fields:{}
    };
    
    onChange = updatedValue => {
        this.setState({
            fields: {
               ...this.state.fields,
               ...updatedValue 
            }
        });
    };

    render(){
        return(
            <div className="searchPage">
                <SearchForm/>
            </div>
        );
    }
}

export default SearchPage;

