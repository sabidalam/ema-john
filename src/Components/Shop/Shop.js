import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id === id)
            if (addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                savedCart.push(addProduct);
            }
        }
        setCart(savedCart);
    }, [products])


    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);

    }
    return (
        <div className='shopping-container'>
            <div className='shopping-item'>
                {
                    products.map(product => <Product
                        key={product.id}
                        Product={product}
                        HandleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className='order-list'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
                <Link className='text-decoration-none' to='/order'>
                    <button className='btnn btnn-review'>
                        <p>Review Cart</p>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Shop;