import './Cart.css';
import DataContext from '../state/DataContext';
import DataService from '../services/DataService';
import { useContext, useState } from 'react';

function Cart() {

    let cart = useContext(DataContext).cart;
    let clearCart = useContext(DataContext).clearCart;
    let removeFromCart = useContext(DataContext).removeFromCart;

    function totalProducts() {
        let total = 0;
        for (let i=0; i<cart.length; i++){
            total += cart[i].quantity;
        }
        return total;
    }

    function Total(){
        let total = 0;
        for (let i=0; i<cart.length; i++) {
            total += (cart[i].quantity * cart[i].price);
        }

        return total.toFixed(2);
    }

    function remove(productId) {
        removeFromCart(productId);
    }

    function clear() {
        clearCart();
    }

    return (
        <div className='cart-home'>
            <h2>Shopping Cart</h2>
            <h3>You have {totalProducts()} items in your cart.</h3>
            <div className='cartCont'>
                <div className='cartList'>
                    {cart.map( prod =>
                    <div className='prod-cart'>
                        <img src={prod.image}></img>
                        <div>
                            <h4>{prod.title}</h4>
                            <label>Price: ${prod.price}</label>
                        </div>
                        <div>
                            <label>Quantity: {prod.quantity}</label>
                            <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
                        </div>
                        <button onClick={() => remove(prod.id)} className='removeBtn'>Remove</button>
                    </div>
                    )}
                </div>
                <div className='sideCart'>
                    <p>Total:</p>
                    <p>${Total()}</p>
                    {cart.length > 0 ?
                    <button onClick={clear} >Empty</button>
                    : <p>Add more</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;