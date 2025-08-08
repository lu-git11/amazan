import React, { useState } from "react";
import './Signup.css';

let Signup = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    let handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup username:", username, "password:", password);
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input 
                    type="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;