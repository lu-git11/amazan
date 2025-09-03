
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Logout from './Components/Logout'
import Admin from './Components/Admin'
import Home from './Pages/home'
import About from './Pages/About'
import Catalog from './Pages/Catalog'
import Cart from './Pages/Cart'
import Provider from './state/Provider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

function App() {

  return (
    <Provider>
    <BrowserRouter>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/catalog' element={ <Catalog /> } />
        <Route path='/admin' element={ <Admin /> } />
        <Route path='/login' element={ <Login />} />
        <Route path='/logout' element={ <Logout/>} />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      

      <Footer></Footer>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
