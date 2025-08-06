
import { useState } from "react";
import DataContext from "./DataContext";

function Provider(props) {

    let [cart, setCart] = useState([]);
    let [user, setUser] = useState({ userName: 'Jeff'});

    function addToCart(prod) {
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeFromCart(productId) {
        setCart(prev => prev.filter(item => item.id !== productId))
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default Provider;