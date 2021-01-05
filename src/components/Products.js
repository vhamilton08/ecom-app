import React from 'react';
import './Products.scss';
import {connect} from 'react-redux';
import {addToCart} from '../redux/cartReducer';

const Products = (props) => {
    return (
        <div className='productBox'>
            <div key={props.index}></div>
           <img className='productImg' src={props.element.image} alt='product'/>
           <div className='desc'>

           <h1>{props.element.name}</h1>
           <h2>${props.element.price}</h2>
           </div>
           <button className='cartBtn' onClick={() => props.addToCart(props.element.product_id)}>Add to Cart</button>
        </div>
    )
}
export default connect(null, {addToCart})(Products);