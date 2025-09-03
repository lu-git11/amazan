import "./Home.css";
import { Link } from 'react-router-dom';
import DataService from '../services/DataService';
import reactLogo from '/public/react.svg'

function Home(){
    return (
        <div className="Home">
            <h2>FREE Shipping to you!!!</h2>
            <a>
                <img src={reactLogo} className="logo" alt="React logo" />
            </a>
            <div className="flex">
                <div className="sidebar">
                    <h3>Departments</h3>
                    <p>Fruit</p>
                    <p>Hat</p>
                    <p>Animals</p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <h3>Shop for your pet essentials</h3>
                        <img src="/public/pexels-caio-56733.jpg" alt="" />
                        <Link className="link" to="/catalog">Discover more in Pets</Link>
                    </div>
                    <div className="card">
                        <h3>Free Shipping Anywhere</h3>
                        <img src="/public/pexels-ketut-subiyanto-4246238.jpg" alt="" />
                        <Link className="link" to="/catalog">Start shopping</Link>
                    </div>
                    <div className="card">
                        <h3>Step out in style</h3>
                        <img src="/public/pexels-solliefoto-298863.jpg" alt="" />
                        <Link className="link" to="/catalog">Shop clothes</Link>
                    </div>               
                </div>
            </div>
        </div>
    );
}

export default Home;