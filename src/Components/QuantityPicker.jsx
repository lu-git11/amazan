
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './QuantityPicker.css';
import DataContext from "../state/DataContext";

function QuantityPicker(props){
    let [quantity, setQuantity] = useState(1);

    let { addToCart, isLoggedIn } = useContext(DataContext);
    let navigate = useNavigate();

    function increase(){
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    function decrease(){
        let val = quantity - 1;
        if(val >= 0){
            setQuantity(val);
            props.onChange(val);
        }
    }

    function add(){

        if (!isLoggedIn) {
            navigate("/login");
            return;
        }

        let prodForCart = {...props.data, quantity};
        addToCart(prodForCart);
    }

    return(
        <div className="picker">
            <button className="decrease" disabled={quantity == 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="increase" onClick={increase}>+</button>
            <button className="add" onClick={add}>Add to Cart</button>
        </div>
    )
}


export default QuantityPicker;