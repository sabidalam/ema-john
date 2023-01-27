import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItems from '../OrderItems/OrderItems';
import { Link } from 'react-router-dom';

const Order = () => {
    const { product, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const clickHandler = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shopping-container'>
            <div className='orders-item'>
                {
                    cart.map(product => <OrderItems
                        key={product.id}
                        product={product}
                        clickHandler={clickHandler}>
                    </OrderItems>)
                }
            </div>

            <div className='order-list'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link className='text-decoration-none' to='/shipping'>
                        <button className='btnn btnn-review'>
                            <p>Proceed Shipment</p>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;