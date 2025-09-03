import React, { useState } from "react";
import DataService from '../services/DataService';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

let Signup = () => {
    let [username, setUsername] = useState("");
    let [error, setError] = useState("");
    let [usernameError, setUsernameError] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [passwordError, setPasswordError] = useState([]);
    let [confirmPasswordError, setConfirmPasswordError] = useState("");
    let navigate = useNavigate();

    let validUsername = (e) => {
        let value = e.target.value;
        setUsername(value);
        let lettersOnly = /^[a-z]*$/i;

        if (value && !lettersOnly.test(value)){
            setUsernameError("Username must be letters");
        }else{
            setUsernameError("");
        }
    };

    let validPassword = (e) => {
        let value = e.target.value;
        let numbers = (value.match(/[0-9]/g) || []).length;
        let letters = (value.match(/[a-zA-Z]/g) || []).length;
        
        setPassword(value);

        let errors = [];
        if (value.length < 4 || value.length > 6) errors.push("Password must be 4-6 characters.");          
        if (numbers < 2) errors.push("Password must contain 2 numbers.");
        if (letters < 2) errors.push("Password must contain 2 letters.");
        
        setPasswordError(errors);
    };

    let confirmValidPassword = (e) => {
        let value = e.target.value;
        setConfirmPassword(value);
        if (value !== password){
            setConfirmPasswordError("password does not match")
        } else {
            setConfirmPasswordError("");
        }
    };

    let handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        if (usernameError || !username || passwordError || confirmPasswordError) {
            setError("please fix");
            return;
        }
        // check if the user name is free
        // if its free, call the save//
        try {
            let normalizedUsername = username.toLowerCase();             
            let userNameFree = await DataService.checkUser(normalizedUsername);
            console.log(userNameFree);
            if (userNameFree){
                await DataService.saveUser(normalizedUsername, password);
                navigate("/login");
                console.log("sign up complete");            
            } else {
                setError("Username is taken");
            } 
        } catch (error){
            console.error("error checking username", error);
            setError("error checking username");
        }
    }       

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSignup}>
                <input 
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={validUsername}
                    required
                />
                {usernameError && <p className="error">{usernameError}</p>}
                <input 
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={validPassword}
                    required
                />
                {passwordError.length > 0 && (
                    <ul className="error-list">
                        {passwordError.map((err, idx) => (
                            <li key={idx} className="error">{err}</li>
                        ))}
                    </ul>
                )}
                <input 
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={confirmValidPassword}
                    required
                />
                {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                <button type="submit" onClick={handleSignup} disabled={!!usernameError || !!passwordError || !!confirmPasswordError}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;