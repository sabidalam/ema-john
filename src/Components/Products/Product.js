import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.Product;
    return (
        <div className='Products'>
            <img src={img} alt="" />
            <div className='Product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <span>Manufacturer: {seller}</span> <br />
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => props.HandleAddToCart(props.Product)} className='add-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;