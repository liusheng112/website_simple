import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Product.scss';
class Product extends Component {
    render() {
        const circle2 = require('./images/circle2.png');
        const win = require('./images/win.png');
        const mac = require('./images/mac.png');
        const Glinux = require('./images/Glinux.png');
        const banRbg = require('./images/proimg4.png');
        const banRbg5 = require('./images/proimg5.png');
        const banDownL = require('./images/banDownL.png');
        const circle = require('./images/circle.png');
        const proimg1 = require('./images/proimg1.png');
        const proimg2 = require('./images/proimg2.png');
        const proimg3 = require('./images/proimg3.gif');
        const bannBg = require('./images/bannBg.png');
        return (
            <div>
                <div className='background'>
                    <Row>
                        <Col sm={{ size: 5, offset: 1 }}>
                            <div className='bannerLeft'>
                                <img className='bannBg' src={bannBg} />
                                <h1>WAN WALLET</h1>
                                <h3>TRANSFER YOUR ASSETS WITH PRIVACY PROTECTION</h3>
                                <ul className='leftUl'>
                                    <li>
                                        <em><img className='icoCircle' src={circle2} /></em>
                                        <span>WAN wallet helps you manage different digital assets including WAN and other cryptocurrencies on Wanchain</span>
                                    </li>
                                    <li>
                                        <em><img className='icoCircle' src={circle2} /></em>
                                        <span>You can transfer your assets either the traditional way (public transactions) or in private (stealth transactions)</span>
                                    </li>
                                    <li>
                                        <em><img className='icoCircle' src={circle2} /></em>
                                        <span>Wan Wallet now supports cross-chain transactions with Ethereum and will support more cryptocurrencies in future versions</span>
                                    </li>
                                    <li>
                                        <em><img className='icoCircle' src={circle2} /></em>
                                        <span>With support of hardware wallets (Trezor™, LedgerWallet™), Wanchain transactions are more secure than ever</span>
                                    </li>
                                </ul>
                                <div className='downloadBoxBan'>
                                    <h2>Download Wanwallet 2.1.2</h2>
                                    <ul>
                                        <li><img src={win} /></li>
                                        <li><img src={mac} /></li>
                                        <li><img src={Glinux} /></li>
                                    </ul>
                                    {/* <Content isShow={this.state.pop} isPopFunc={this.popContent} download={this.state.download} /> */}
                                </div>
                                <a href="https://github.com/wanchain/go-wanchain/wiki/Wanwallet-2.0-Cross-chain-transactions" className='downloadManual'>
                                    <img className='banDownL' src={banDownL} /> <span>Instruction manual for cross-chain</span>
                                </a>
                            </div>
                        </Col>
                        <Col sm={{ size: 6 }}>
                            <div className='bannerRight'>
                                <img className='banRbg' src={banRbg} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 5, offset: 1 }}>
                            <div className='bannerleft2'><img className='banRbg5' src={banRbg5} /></div>
                        </Col>
                        <Col xs='6'>
                            <div className='bannerRight2'>
                                <h1>CROSS-CHAIN ABILITIES</h1>
                                <h4>WHY CROSS-CHAIN?</h4>
                                <div className='downloadBoxBan2'>
                                    <h3>Scalability for disparate blockchains like ETH/BTC</h3>
                                    <h3>Dapps are able to take advantage of interoperability</h3>
                                    <h3>Real-world scenarios based on cross-chain technology:</h3>
                                    <ul>
                                        <li><em><img className='icoCircle' src={circle2} /></em>Multi-asset investment and financing</li>
                                        <li><em><img className='icoCircle' src={circle2} /></em>Decentralized loans</li>
                                        <li><em><img className='icoCircle' src={circle2} /></em>Multi-coin payments and settlements</li>
                                        <li><em><img className='icoCircle' src={circle2} /></em>Decentralized cryptocurrency exchanges</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col sm={{ size: 4, offset: 1 }}>
                            <div className='whiteLeft'>
                                <div><img className='proimg1' src={proimg1} /></div>
                            </div>
                        </Col>
                        <Col xs='6'>
                            <div className='whiteRight'>
                                <h1>WAN smart contracts</h1>
                                <h3>With privacy protection</h3>
                                <ul>
                                    <li>
                                        <em className='emHeight'><img className='icoCircle2' src={circle} /></em>
                                        <span>You can deploy smart contracts on Wanchain just as with Ethereum</span>
                                    </li>
                                    <li>
                                        <em><img className='icoCircle2' src={circle} /></em>
                                        <span>One of Wanchain's unique features is the ability to issue a new token with privacy protection in mind. Please click the button below to see how to deploy a smart contract with privacy protection</span>
                                    </li>
                                </ul>
                                <a target="_blank" href="https://github.com/wanchain/go-wanchain/wiki/How--to-deploy-smart-contracts-on-Wanchain" className='comBtn'>Issue your token</a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='backgroundpray'>
                    <Row>
                        <Col sm={{ size: 4, offset: 1 }}>
                            <div className='grayLeft'>
                                <h1>Need balance check</h1>
                                <h3>Monitor transaction history?</h3>
                                <ul>
                                    <li>
                                        <em><img className='icoCircle2' src={circle} /></em>
                                        <span>The Block Explorer can be used to check every transaction detail, and now supports cross-chain transactions!</span>
                                    </li>
                                    <li>
                                        <em><img className='icoCircle2' src={circle} /></em>
                                        <span>From dates to fees, block heights to amounts, you can track all of this information and more</span>
                                    </li>
                                </ul>
                                <a href="https://www.wanscan.org" target="_blank"><button className='comBtn'>wanchain explorer</button></a>
                            </div>
                        </Col>
                        <Col xs='6'>
                            <div><img className='proimg2' src={proimg2} /></div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col sm={{ size: 5, offset: 1 }}>
                            <div className='whiteLeft'>
                                <div><img className='proimg3' src={proimg3} /></div>
                            </div></Col>
                        <Col xs='6'>
                            <div className='whiteRight'>
                                <h1>Come and dig</h1>
                                <h3>our command line tools</h3>
                                <ul>
                                    <li>
                                        <em><img className='icoCircle2' src={circle} /></em>
                                        <span>We provide command line tools for those who feel at ease with the CLI.</span>
                                    </li>
                                    <li>
                                        <em><img className='icoCircle2' src={circle} /></em>
                                        <span>Check <a href="https://github.com/wanchain/go-wanchain/wiki/Using-the-Wanchain-Command-Line-Wallet" target="_blank">here</a> for more information in our Wanchain wallet CLI guide</span>
                                    </li>
                                </ul>
                                <div className='downloadBox'>
                                    <div className='cmdDload'>
                                        <p>CLI tools Download:</p>
                                        <a><button className='comBtn'>download</button></a>
                                    </div>
                                    <div className='GwanDload'>
                                        <p>Gwan Download:</p>
                                        <a href="/download/gwan-windows-amd64-1.0.5-9b532dfe.zip" className='icoWin'><em></em></a>
                                        <a href="/download/gwan-mac-amd64-1.0.5-9b532dfe.tar.gz" className='icoMac'><em></em></a>
                                        <a href="/download/gwan-linux-amd64-1.0.5-9b532dfe.tar.gz" className='icoGLINUX'><em></em></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Product;