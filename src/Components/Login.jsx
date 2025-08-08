import React, {useState} from 'react';
import DataContext from '../state/DataContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

let Login = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let handleLogin = (e) => {
        e.preventDefault(); //Login authentication logic
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="username"
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
