import './Catalog.css';
import DataService from '../services/DataService';
import { useEffect, useState } from 'react';
import Product from '../Components/Product';

function Catalog(){

    let [filter, setFilter] = useState('');
    let [allProd, setAllProduct] = useState([]);
    let [allCat, setAllCategories] = useState([]);

    async function loadProduct() {
        let allProd = await DataService.getProducts();
        setAllProduct(allProd);
    }

    useEffect(function(){
        loadProduct();
    }, []);

    async function loadCategories() {
        let allCat = await DataService.getCategories();
        setAllCategories(allCat);
    }

    useEffect(function() {
        loadCategories();
    }, []);

    return(
        <div className='catalog'>
            <h2>Catalog</h2>
            <div className='filter'>
                <button className='all' onClick={() => setFilter('')}>All</button>
                {allCat.map(cat => <button key={cat} onClick={() => setFilter(cat)} className='catBtn'>{cat}</button>)}
            </div>
            <div className='list'>
                {allProd.filter(prod => prod.category == filter || !filter).map(prod => <Product item={prod} key={prod._id} />)}
            </div>
        </div>
    )
}

export default Catalog;
