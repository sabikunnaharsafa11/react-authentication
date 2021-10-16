import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sing In</button>
            <br />
            <button onClick={signInUsingGithub}>GitHub Sing In</button>
          <br />

          <Link to="/register">NEW User</Link>
        </div>
    );
};

export default Login;