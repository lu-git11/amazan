import { createContext, useState, useEffect } from "react";

let DataContext = createContext({
    isLoggedIn: false,
    cart: [],
    user: {},

    setUser: () => {},
    clearUser: () => {},
    
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
});


export default DataContext;