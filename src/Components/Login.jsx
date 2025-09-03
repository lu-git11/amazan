import React, {useContext, useState} from 'react';
import DataContext from '../state/DataContext';
import { useNavigate } from 'react-router-dom';
import DataService from '../services/DataService';
import './Login.css';


function Login() {

    let setUser = useContext(DataContext).setUser;
    let navigate = useNavigate();

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
   
    async function checkCreds(e){
        e.preventDefault();

        let normalizedUsername = username.toLowerCase();

        try {
            let userData = await DataService.login(normalizedUsername, password);
            if (userData){
                console.log(userData);
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                navigate("/home");
            }else{
                setError("Invalid username or password");
            }
        } catch(err){
            console.error("login error:", err);
            setError("something went wrong. please try again.");
        }        
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={checkCreds}> 
                <input type="text"
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
                {error && <p className='error'>{error}</p>}
                <button className="submit" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;