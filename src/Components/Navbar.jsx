import { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';

function Navbar(){

    let user = useContext(DataContext).user;
    let cart = useContext(DataContext).cart;

    function getProducts() {
        let total = 0;
        for (let i=0; i<cart.length; i++) {
            total += cart[i].quantity;
        }

        return total;
    }
    
    return(
        <nav className="menu">
            <Link to="/home"><h1>Amazan</h1></Link>
            <div className="search input-group w-25">
                <input className="form-control form-control-md" type="text" placeholder='search Amazan'/>
                <button>search</button>
            </div>
            <Link to="/about">About</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/cart"><img className='cart' src="/public/cart-shopping-solid.svg" alt=""/><span className='badge'>{getProducts()}</span></Link>
        </nav>     
    );
}

export default Navbar;