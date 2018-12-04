import React, { Component } from 'react';
import './Div2.scss';
class Div2 extends Component {
    render() {
        const card1 = require('../../images/card1.png');
        const card2 = require('../../images/card2.png');
        const card3 = require('../../images/card3.png');
        const card4 = require('../../images/card4.png');
        const divo1Line = require('../../images/divo1Line.png');
        const pot = require('../../images/pot.png');
        const widthL = { width: '380px' };
        return (
            <div className='div2Root'>
                <div className='div1oHeaderEn container'>
                    <h2>
                        <hr className='div1HeaderImg' />
                        <span>Potential Use Cases for Wanchain</span>
                        <hr className='div1HeaderImg' />
                    </h2>
                    <div className='div1oBody'>
                        <div style={widthL} className='div1oBodyCard' id='card1'>
                            <div className='div1oBodyCardModule'>
                                <p className='p'>
                                    <img src={card1} id='div1oimg1' />
                                </p>
                                <p><small>Decentralized</small><br /> Exchange</p>
                            </div>
                            <img className='div1oBodyCardLine' src={divo1Line} />
                            <ul>
                                <img src={pot} /><li>Exchange the world's digital assets on-chain</li>
                                <img src={pot} /><li>Transact using Wanchain's multi-asset wallet</li>
                                <img src={pot} /><li>Build decentralized exchange applications with protocol tokens</li>
                            </ul>
                        </div>
                        <div style={widthL} className='div1oBodyCard'>
                            <div className='div1oBodyCardModule'>
                                <p className='p'>
                                    <img src={card2} id='div1oimg2' />
                                </p>
                                <p><small>Asset</small><br />Management Tools</p>
                            </div>
                            <img className='div1oBodyCardLine' src={divo1Line} />
                            <ul>
                                <img src={pot} /><li>Minimize exchange counterparty risk</li>
                                <img src={pot} /><li>Master address provides simplified and trusted audit</li>
                                <img src={pot} /><li>Privacy protection for trades and positions</li>
                            </ul>

                        </div>
                        <div style={widthL} className='div1oBodyCard' id='card4'>
                            <div className='div1oBodyCardModule'>
                                <p className='p'>
                                    <img src={card3} id='div1oimg4' />
                                </p>
                                <p id='div1oP4'><small>Cross-chain</small><br />dApps</p>
                            </div>
                            <img className='div1oBodyCardLine' src={divo1Line} />
                            <ul>
                                <img src={pot} /><li>Leverage our interoperability for added liquidity</li>
                                <img src={pot} /><li>Build on Wanchain or add cross-chain to any existing dApp</li>
                                <img src={pot} /><li>Access to BTC for Ethereum-based dApps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Div2;
