
import { useState } from "react";
import DataContext from "./DataContext";

function Provider(props) {

    let [cart, setCart] = useState([]);
    let [user, setStateUser] = useState(null);
    let [ isLoggedIn, setLoggedIn ] = useState(false);

    function login(userData){
        setUser(userData);
        setLoggedIn(true);
    }

    function setUser(user) {
        setStateUser(user);
        setLoggedIn(!!user);
    }

    function clearUser() {
        setStateUser(null);
        setLoggedIn(false);
    }

    function addToCart(prod) {
        /* let copy = [...cart];
        copy.push(prod);
        setCart(copy); */
        setCart([...cart,prod]);
    }

    function removeFromCart(productId) {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
        }

    function clearCart() {
        setCart([]);
    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            isLoggedIn,
            login,
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