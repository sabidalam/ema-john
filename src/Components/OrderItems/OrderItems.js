import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OrderItems.css';

const OrderItems = ({ product, clickHandler }) => {
    const { id, name, price, quantity, img } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>

                </div>
                <div className="delete-item">
                    <button onClick={() => clickHandler(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon></button>

                </div>

            </div>
        </div>

    );
};

export default OrderItems;