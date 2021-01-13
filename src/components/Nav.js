import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {logoutUser} from '../redux/userReducer';
import {getCart} from '../redux/cartReducer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Nav.scss';

const Nav = (props) => {
    // const {cart} = props.cartReducer.cart.length
    const [cartTotal, setCartTotal] = useState()
    const {isLoggedIn} = props.userReducer
useEffect(() => {
    setCartTotal(props.cartReducer.cart.length)
},[])
    return (
        <header className='header'>
            {isLoggedIn ?
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/products'>PRODUCTS</Link></li>
                    <small><Link to='/cart'><ShoppingCartIcon/>{cartTotal}</Link></small>
                    <li onClick={props.logoutUser}><Link to='/'>LOGOUT</Link></li>
                </ul>
            </nav>:
            <nav className='navbar'>
                <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/auth'>Login/Sign Up</Link></li>
                </ul>
            </nav>}
        </header>
    )
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser, getCart})(withRouter(Nav))
