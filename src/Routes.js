import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Team from './components/Team/Team.js';
import Home from './components/Home/Home.js';
import NotFound from './components/NotFound/NotFound.js';
import Product from './components/Product/Product.js';
class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Team" component={Team}></Route>
                <Route path="/Product" component={Product}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        );
    }
}
export default RouterIndex;