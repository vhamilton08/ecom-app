import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import withRouter from 'react-router-dom';
const Home = (props) => {
    const {isLoggedIn} = props.userReducer
    return (
        <div className='homePage'>
            <div className='homeContent'>
                <h1 className='homeh1'>Wonderfully Dilicious Fruits</h1>
                <div className='homepar'>
                    <p>Order your favorite fresh fruit online<br/>and save time and money</p>
                    {isLoggedIn ? null :
                    <Link to='/auth'><button className='homeBtn'>Login/Sign Up</button></Link>}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Home);