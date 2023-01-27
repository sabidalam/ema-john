import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Register = () => {
    const [error, setError] = useState(null);
    const { signUp } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            setError('Password should be at-least 6 characters or more');
            return;
        }
        else if (password !== confirm) {
            setError('Password did not match');
            return;
        }
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='w-25 mx-auto container my-5'>
            <h3 className='my-4'>Please Register!!</h3>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Password" required />
                </Form.Group>
                <Button variant="warning" type="submit" className='w-100'>
                    Register
                </Button>
                <p className='my-2 text-center'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            </Form>
            <div className='d-flex justify-content-evenly'>
                <hr className='w-25' />
                <span>Or</span>
                <hr className='w-25' />
            </div>
            <Button variant="warning" type="submit" className='w-100'>
                Continue with Google
            </Button>
            {error}
        </div>
    );
};

export default Register;