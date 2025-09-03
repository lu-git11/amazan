import React, { useState } from "react";
import DataService from '../services/DataService';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

let Admin = () => {
    let [title, setTitle] = useState("");
    let [category, setCategory] = useState("");
    let [price, setPrice] = useState("");
    let [img, setImg] = useState("");
    let [error, setError] = useState("");

    let newProduct = async (e) => {
        e.preventDefault();
        setError("");
        // check if the user name is free
        // if its free, call the save//
        try {             
            let productFree = await DataService.checkProduct(title);
            console.log(productFree);
            if (productFree){
                await DataService.saveProduct(title, category, price, img);
                alert("Product added!")
                console.log("product added");  
                setTitle("");  
                setCategory(""); 
                setPrice("");
                setImg("");       
            }
            else{
                setError("Product already exists");
                return;
            } 
        } catch (error){
            console.error("error checking product", error);
            setError("error checking product");
        }
    }       

    return (
        <div className="admin">
            <h2>Admin</h2>
            {error}
            <form onSubmit={newProduct}>
                <input 
                    type="title"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input 
                    type="category"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <input 
                    type="price"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input 
                    type="img"
                    placeholder="Enter Image"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    required
                />

                <button type="submit" onClick={newProduct}>Add Product</button>
            </form>
        </div>
    );
};

export default Admin;