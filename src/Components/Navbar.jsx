import { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import DataService from '../services/DataService';
import DataContext from '../state/DataContext';
import Logout from './Logout';

function Navbar() {

    let { user, isLoggedIn, cart, clearUser } = useContext(DataContext);
    let navigate = useNavigate();
    let [isOpen, setIsOpen] = useState(false);

    function getProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }

        return total;
    }

    function Logout() {
        clearUser();
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <nav className="navbar">
            <div className='menu-inner'> 
                <Link to="/home" className='nav-logo'><h1>Amazan</h1></Link>
                <div className="search input-group w-50">
                    <input className="form-control form-control-md" type="text" placeholder='search Amazan' />
                    <button>search</button>
                </div>
                <button
                    className={`hamburger ${isOpen ? "open" : ""}`} 
                    aria-label='Toggle menu'
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div> 
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>

                    {isLoggedIn ? (
                        <li><label>Welcome, {user?.user_name}</label></li>)
                    : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </>
                    )}

                    {user?.isAdmin ? (
                        <li><Link to="/admin">Admin</Link></li>
                    ) : null}

                    {isLoggedIn ? (
                        <>
                            <li><Link onClick={Logout}>Log Out</Link></li>
                            <li>
                                <Link to="/cart"><img className='cart' src="/public/cart-shopping-solid.svg" alt="" />
                                <span className='badge'>{getProducts()}</span></Link>
                            </li>
                        </>                 
                    ) : null}
                </ul>          
        </nav>
    );
}

export default Navbar;