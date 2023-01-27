import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './Cart.css';


const Cart = ({ cart, clearCart, children }) => {
    // console.log(cart);
    let total = 0;
    let Shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        Shipping = Shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + Shipping + parseFloat(tax);
    return (
        <div>
            <div>
                <h2>Order List</h2>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Cost: ${Shipping}</p>
                <p>Tax: {tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
            <div >
                <button onClick={clearCart} className='btnn btnn-clear'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;