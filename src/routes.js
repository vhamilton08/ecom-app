import React from 'react'
import { Switch, Route} from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Home from './components/Home';

export default (
    <Switch >
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/products' component={ProductPage}/>
        <Route path='/cart' component={Cart}/>
    </Switch>
)
    