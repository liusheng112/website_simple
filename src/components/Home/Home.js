import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Div1 from './components/Div1/Div1';
import Div2 from './components/Div2/Div2';
import Div3 from './components/Div3/Div3';
import Div4 from './components/Div4/Div4';
import Div5 from './components/Div5/Div5';
import Div6 from './components/Div6/Div6';
import './Home.scss';
class Home extends Component {
    render() {
        // const logo = require('./images/logo.png');
        // const logo2 = require('./images/icoLoho2.png');
        // const nav = require('./images/nav1.png');
        // const github = require('./images/github.png');
        // const github2 = require('./images/icoLog4.png');
        // const videpIco = require('./images/videoIco.png');
        const Telegram = require('./images/Telegram.png');
        const Reddit = require('./images/Reddit.png');
        const Twitter = require('./images/Twitter.png');
        const Discord = require('./images/Discord.png');
        const Facebook = require('./images/Facebook.png');
        const Banner = require('./images/banner.jpg');
        return (
            <div>
                <div className='homeDiv'>
                    <Row className='homeHeaderBodyDiv1'>
                        <Col sm={{ size: 7, offset: 3 }}>
                            <div>
                                <p className='bannerTitle'>WANCHAIN 2.0 IS LIVE</p>
                                <div className='bannerLine'>
                                    <span className='greenLine'></span>
                                    <span className='blueLine'></span>
                                </div>
                                <p className='bannertextP'>THE WORLD&#180;S <span className='bannertextSpan'>FIRST AND ONLY</span> INTEROPERABLE BLOCKCHAIN </p>
                                <p className='bannertextP'>WITH SECURE MULTI-PARTY COMPUTATION</p>
                            </div>
                            <div id="link" className='videoBtn'>
                                <span>WATCH VIDEO</span>
                            </div>
                            <div className='bannerShare'>
                                <a href="https://t.me/WanchainANN" target="_blank"><img src={Telegram} /></a>
                                <a href="https://www.reddit.com/r/wanchain/" target="_blank"><img src={Reddit} /></a>
                                <a href="https://twitter.com/wanchain_org" target="_blank"><img src={Twitter} /></a>
                                <a href="https://discord.gg/3DpeV6W" target="_blank"><img src={Discord} /></a>
                                <a href="https://www.facebook.com/wanchainfoundation/" target="_blank"><img src={Facebook} /></a>
                            </div>
                        </Col>
                    </Row>         
                </div>
                <Div1/>
                <Div2/>
                <Div3/>
                <Div4/>
                <Div5/>
                <Div6/>
            </div>
        );
    }
}
export default Home;