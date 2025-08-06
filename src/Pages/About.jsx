import { useState } from "react";
import "./About.css";
import { Link } from 'react-router-dom';

function About(){

    let [showEmail, setEmail] = useState(false);

    function show(){
        setEmail(true);
    }

    return (
        <div className="about">
            <h1>About Us</h1>
            <img src='/public/react.svg' className="logo" alt="React logo" />
            <button onClick={show} className="btn btn-primary">Email Us</button>
            { showEmail ? <h4>Jeff@Amazan.com</h4> : null}
        </div>
    );
}

export default About;