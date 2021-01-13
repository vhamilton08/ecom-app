import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getCart} from '../redux/cartReducer';
import {deleteFromCart} from '../redux/cartReducer';
import './Cart.scss';
// import axios from 'axios';

const Cart = (props) => {
    // const {quantity, setQuantity} = useState()

    useEffect(() => {
        props.getCart()
    },[])
    console.log("CARTTT", props)
    return (
        <div className='cartBody'>
            {props.cartReducer.cart.reduce((acc, product, index) => {
                const namesArr = acc.map(e => e.name)
                if(!namesArr.includes(product.name)) {
                    acc.push(product)
                    acc[acc.length - 1].quantity = 1
                } else {
                    acc[namesArr.findIndex((e) => e === product.name)].quantity++
                }
                    return acc
            }, []).map((product, index) => {
                return (
                    <div className='cartItemsBox' key={index}>
                    <div  className='cartItems'>


                        <img alt="product" className='productImg' src={product.image}/>
                        <div className='cartDesc'>

                        <div className='deleteBtnDiv'><button className='deleteBtn' onClick={() => props.deleteFromCart(product.product_id)}>X</button></div>
                        <h2>{product.name}</h2>
                        <h3>quantity{product.quantity}</h3>
                        <small>${product.quantity * product.price}</small>
                        </div>
                        </div>
                    </div>
                )
            })}
            {/* <div className='summaryBox'> */}

            <div className='summary'>
                <h2>total</h2>
                <h2>${props.cartReducer.cart.reduce((acc, cur) => {
                    return (acc += +cur.price)},0)}</h2>
                    {/* </div> */}
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {cartReducer: reduxState.cartReducer}
}
export default connect(mapStateToProps, {getCart, deleteFromCart})(Cart);