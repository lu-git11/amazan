import { useState } from "react";
import './Product.css';
import QuantityPicker from "./QuantityPicker";


function Product(props){
    let [quantity, setQuantity] = useState(1);

    function handleQuantity(qty){
        setQuantity(qty);
    }   

    function getTotal() {
        let total = quantity * props.item.price;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <div>
                <img src={props.item.image}></img>
            </div>
            <h3>{props.item.title}</h3>
            <div className="price">
                <label>Price: ${props.item.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            </div>
            <div className="quantity">
                <QuantityPicker data={props.item} onChange={handleQuantity}></QuantityPicker>
            </div>
        </div>
    )
}

export default Product;