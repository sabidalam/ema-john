import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { signIn, loader } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/shop')
            })
            .catch(error => console.error(error))
    }
    if (loader) {
        return <div>loading</div>
    }
    return (
        <div className='w-25 mx-auto container my-5'>
            <h3 className='my-4'>Login!!</h3>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    <label className="label mb-3">
                        <small><a href="/" className="label-text-alt link link-hover">Forgot password?</a></small>
                    </label>
                </Form.Group>
                <Button variant="warning" type="submit" className='w-100'>
                    Login
                </Button>
                <p className='text-center fw-semibold my-2'><small>New to this website? <Link className='text-warning' to='/register'>Create New Account</Link></small></p>
            </Form>
            <div className='d-flex justify-content-evenly'>
                <hr className='w-25' />
                <span>Or</span>
                <hr className='w-25' />
            </div>
            <Button variant="warning" type="submit" className='w-100'>
                Continue with Google
            </Button>
        </div>
    );
};

export default Login;