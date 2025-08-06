import { createContext, useState } from "react";

let DataContext = createContext({
    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
})

export default DataContext;