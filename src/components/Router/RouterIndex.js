import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Team from '../Team/Team.js';
import Home from '../Home/Home.js';
import NotFound from '../NotFound/NotFound.js';
import Product from '../Product/Product.js';
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