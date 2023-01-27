import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={logOut} className='ms-4'>SignOut</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                }
            </div>

        </nav>
    );
};

export default Header;