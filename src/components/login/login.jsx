import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './login.css'

import { useNavigate } from 'react-router-dom';

const Login = ({ setIsSignedIn }) => {
    const navigate = useNavigate();
    return (
        <GoogleOAuthProvider clientId="389661090557-k70ilm04aaaqmvuug2f1oq28o06oc1kt.apps.googleusercontent.com">
            <div className='container' style={{maxWidth: '350px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff'}}>
                <h2 style={{textAlign: 'center'}}>Login</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div style={{marginBottom: '15px'}}>
                        <label htmlFor="username" style={{display: 'block', marginBottom: '5px'}}>Username</label>
                        <input type="text" id="username" name="username" style={{width: '100%', padding: '8px', boxSizing: 'border-box'}} />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <label htmlFor="password" style={{display: 'block', marginBottom: '5px'}}>Password</label>
                        <input type="password" id="password" name="password" style={{width: '100%', padding: '8px', boxSizing: 'border-box'}} />
                    </div>
                    <button type="submit" style={{width: '100%', padding: '10px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Login</button>
                </form>
                <div style={{margin: '20px 0', textAlign: 'center'}}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            setIsSignedIn(true);
                            navigate('/dashboard');
                        }}
                        onError={() => {
                            alert('Google login failed');
                        }}
                    />
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}
export default Login;