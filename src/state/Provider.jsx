
import { useState } from "react";
import DataContext from "./DataContext";

function Provider(props) {

    let [cart, setCart] = useState([]);
    let [user, setStateUser] = useState({ userName: 'Jeff'});

    function setUser(user) {
        setStateUser(user);
    }

    function clearUser() {
        setStateUser({});
    }

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
            setUser: setUser,
            clearUser: clearUser,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default Provider;