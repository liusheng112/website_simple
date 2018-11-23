import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navgation from './components/Navgation/Navgation.js';
import Footer from './components/Footer/Footer.js';
import Router from './Routes.js';
class App extends Component {
    render() {
        return (
            <div>
                <Navgation/>
                <Router/>
                <Footer/>
            </div>
        );
    }
}
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));