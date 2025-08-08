import { createContext, useState } from "react";

let DataContext = createContext({
    cart: [],
    user: {},


    setUser: () => {},
    clearUser: () => {},
    
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
})

export default DataContext;