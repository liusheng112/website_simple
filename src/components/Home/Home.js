import React, { Component } from 'react';
class Home extends Component {
    render() {
        // const styles = require('./Home.scss');
        // const logo = require('./images/logo.png');
        // const logo2 = require('./images/icoLoho2.png');
        // const nav = require('./images/nav1.png');
        // const github = require('./images/github.png');
        // const github2 = require('./images/icoLog4.png');
        const videpIco = require('./images/videoIco.png');
        const Telegram = require('./images/Telegram.png');
        const Reddit = require('./images/Reddit.png');
        const Twitter = require('./images/Twitter.png');
        const Discord = require('./images/Discord.png');
        const Facebook = require('./images/Facebook.png');
        return (
            <div>
                <div className="container" style={{ height: '800px', width: '100%', backgroundSize: 'cover',marginTop:'20px'}}>
                    <div>
                        <p>WANCHAIN 2.0 IS LIVE</p>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                        <p>THE WORLD'S <span>FIRST AND ONLY</span> INTEROPERABLE BLOCKCHAIN </p>
                        <p>WITH SECURE MULTI-PARTY COMPUTING</p>
                    </div>
                    <div id="link" style={{float:'left'}}>
                        <span>WATCH VIDEO</span>
                        <img src={videpIco} />
                    </div>
                    {/* <div id="bg">
                        <div></div>
                        <div>
                            <video ref="video" width="750px" controls preload></video>
                        </div>
                    </div> */}
                    <div>
                        <a href="https://t.me/WanchainANN" target="_blank"><img src={Telegram} /></a>
                        <a href="https://www.reddit.com/r/wanchain/" target="_blank"><img src={Reddit} /></a>
                        <a href="https://twitter.com/wanchain_org" target="_blank"><img src={Twitter} /></a>
                        <a href="https://discord.gg/3DpeV6W" target="_blank"><img src={Discord} /></a>
                        <a href="https://www.facebook.com/wanchainfoundation/" target="_blank"><img src={Facebook} /></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;