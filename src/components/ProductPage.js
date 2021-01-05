import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './Products';
import './ProductPage.scss';

const ProductPage = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts()
        },[])
    
    return (
        <div className='productPage'>
            <div className='productsBox'>

        {products.map((el, index) => {
            return (
                <Products
                key={index}
                element={el}/>
                )
            })}
            </div>
        </div>
    )
}

export default ProductPage;