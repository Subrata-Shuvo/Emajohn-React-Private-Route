import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || 
    '/shop' 
    console.log('came from', location.state?.from);
    
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder='Your email' /> <br />
                    <input type="password" name="" id="" placeholder='Password'/> <br />
                    <input type="submit" value="Submit"/>
                </form>
                <p>New to emajohn website? <Link to="/register">Create Account</Link></p>

                <div>------------or-----------</div>
                <button 
                className="btn-regular"
                onClick={handleGoogleLogin}
                >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;