import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getCart} from '../redux/cartReducer';
import {deleteFromCart} from '../redux/cartReducer';
// import axios from 'axios';

const Cart = (props) => {
    // const {quantity, setQuantity} = useState()

    useEffect(() => {
        props.getCart()
    },[])
    console.log("CARTTT", props)
    return (
        <div>
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
                    <div key={index}>


                        <h2>{product.name}</h2>
                        <h3>quantity{product.quantity}</h3>
                        <img alt="product pic" src={product.image}/>
                        <small>{product.quantity * product.price}</small>
                    </div>
                )
            })}
            <div>
                <h2>total</h2>
                <h2>${props.cartReducer.cart.reduce((acc, cur) => {
                    return (acc += +cur.price)},0)}</h2>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {cartReducer: reduxState.cartReducer}
}
export default connect(mapStateToProps, {getCart, deleteFromCart})(Cart);