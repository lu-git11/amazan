import React from "react";
import { useNavigate } from 'react-router-dom';

function Logout() {
    
    let navigate = useNavigate();

    let handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    return (
        <button onClick={handleLogout} className="logout-btn">
            Log Out
        </button>
    );
}

export default Logout;
