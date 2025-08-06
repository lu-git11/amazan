
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/home'
import About from './Pages/About'
import Catalog from './Pages/Catalog'
import Cart from './Pages/Cart'
import Provider from './state/Provider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
/*import "@fortawesome/fontawesome-free/css/all.min.css";  */

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
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      

      <Footer></Footer>
    </BrowserRouter>
    </Provider>
  )
}

export default App
