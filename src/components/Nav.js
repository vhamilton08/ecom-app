import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {logoutUser} from '../redux/userReducer';


const Nav = (props) => {
    const {isLoggedIn} = props.userReducer

    return (
        <header>
            {isLoggedIn ?
            <nav>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/products'>PRODUCTS</Link></li>
                    <li><Link to='/cart'>CART</Link></li>
                    <li onClick={props.logoutUser}><Link to='/'>LOGOUT</Link></li>
                </ul>
            </nav>:
            <nav>
                <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/auth'>Login/Sign Up</Link></li>
                </ul>
            </nav>}
        </header>
    )
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser})(withRouter(Nav))