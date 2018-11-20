import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navgation from './components/Navgation/Navgation.js';
import RouterIndex from './components/Router/RouterIndex.js';
import Footer from './components/Footer/Footer.js';
class App extends Component {
    render() {
        return (
            <div >
                <Navgation />
                <RouterIndex />
                <Footer/>
            </div >
        );
    }
}
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));