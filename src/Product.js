import React from 'react'
import './Product.css';


function Product({title, category, title2, image}) {
    return (
        <div className="product">
            <div className="product__info">
                <strong>{title}</strong>
                
            
            </div>
            
            <img
                src={image}
                alt="product"
            />

            
            <div className="header__search"> 
                <input type="text" className="header__searchInput" />
                
            </div>
           
            <p className = "product__category">
                <strong>{category}</strong>
                </p>
                <p className="product__price">
                    <small></small>
                    <strong>{title2}</strong>
                </p>
            <button>Search</button>
        </div>
    )
}

export default Product
