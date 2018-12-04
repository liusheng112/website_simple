import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Div5.scss';
class Div5 extends Component {
    render() {
        const part1 = require('../../images/pt1.png');
        const part2 = require('../../images/pt2.png');
        const part3 = require('../../images/pt3.png');
        return (
            <div className='div5Root'>
                <div className='comBgWhite'>
                    <div className='officalModule3'>
                        <div className='container'>
                            <Row>
                                <Col xs='4'>
                                    <img src={part1} id='div3img1' /></Col>
                                <Col xs='8'>
                                    <div className='officalModule3Div'>
                                        <h2>PRIVATE</h2>
                                        <p>
                                            Ring signature provides complete anonymity to the signer of a transaction, and yet provides the ability for the receiver to correctly verify that the sender did in fact sign the transaction. The optional One Time Addresses (OTA) provides complete anonymity for the receiver of every transaction. Private Send function breaks down every transaction input to a standard denomination, thereby providing further obfuscation to the transaction amount
                                        </p>
                                        <ul>
                                            <li>-> Ring Signature</li>
                                            <li>-> One-Time Addresses</li>
                                            <li>-> Private Send</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className='officalModule4'>
                    <div className='container'>
                        <Row>
                            <Col xs='8'>
                                <div className='officalModule4Div'>
                                    <h2>CROSS-CHAIN</h2>
                                    <p>Based on complex algebra, locked accounts with SMPC enables low threshold to convert any digital asset from any blockchain into a corresponding proxy asset on Wanchain's blockchain. This unleashes the power to build compelling distributed cross-chain Dapps and removes centralized counterparty risk. Wanchain will support ERC20 and protocol tokens</p>
                                    <ul>
                                        <li>-> Locked accounts with Secure Multi-Party Computation (SMPC)</li>
                                        <li>-> Support for all ERC20 and protocol tokens</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs='4'>
                                <img src={part2} id='div3img2' />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='comBgWhite'>
                    <div className='officalModule3'>
                        <div className='container'>
                            <Row>
                                <Col xs='4'><img src={part3} id='div3img3' /></Col>
                                <Col xs='8'>
                                    <div className='officalModule3Div' id='officalModule3Div2'>
                                        <h2>SMART CONTRACTS</h2>
                                        <p>Wanchain's blockchain builds upon the strengths and robustness of Ethereum. Any Ethereum Dapp will run on Wanchain with zero code changes, yet, applications can be enhanced with Wanchain's APIs to leverage privacy protection and cross-chain capabilities</p>
                                        <ul>
                                            <li>-> Implementation based on Ethereum's Codebase </li>
                                            <li>-> Leverage all existing Development Tools</li>
                                            <li>-> Build compelling distributed cross-chain Dapps</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Div5;