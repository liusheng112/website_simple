import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Div6.scss';
class Div6 extends Component {
    render() {
        const down = require('../../images/down1.png');
        const up = require('../../images/up1.png');
        return (
            <div className='div5Header'>
                <div className='div5HeaderDiv container'>
                    <h2><hr className='div1HeaderImg' />ROADMAP<hr className='div1HeaderImg' /></h2>
                </div>
                <div className='container'>
                    <Row className='module8Div'>
                        <Col xs='3' className='module8DivUp'>
                            <img src={down} />
                            <h4>Research on privacy protection and cross-chain transactions</h4>
                            <p>2016<small>{' / '}06</small></p>
                        </Col>
                        <Col xs='3' className='module8DivUp'>
                            <img src={down} />
                            <h4>White Paper published. Wanchain.org online</h4>
                            <p>2017<small>{' / '}06</small></p>
                        </Col>
                        <Col xs='3' className='module8DivUp'>
                            <img src={down} />
                            <h4>Wanchain 1.0 goes live (Privacy Protection, WANCoin, Wallet, Block chain Explorer)</h4>
                            <p>2018<small>{' / '}01</small></p>
                        </Col>
                        <Col xs='3' className='module8DivUp'>
                            <img src={down} />
                            <h4>Wanchain 3.0 (Integration with Bitcoin, Multi-Coin Wallet)</h4>
                            <p>2018<small>{' / '}12</small></p>
                        </Col>
                    </Row>
                    <Row className='module8Div2'>
                        <Col xs='3' className='module8DivUp2'>
                            <img src={up} />
                            <p>2016<small>{' / '}12</small></p>
                            <h4>Development on Proof of Concept</h4>
                        </Col>
                        <Col xs='3' className='module8DivUp2'>
                            <img src={up} />
                            <p>2017<small>{' / '}09</small></p>
                            <h4>Fundraising</h4>
                        </Col>
                        <Col xs='3' className='module8DivUp2'>
                            <img src={up} />
                            <p>2018<small>{' / '}06</small></p>
                            <h4>Wanchain 2.0 (Integration with Ethereum, Multi-Coin Wallet)</h4>
                        </Col>
                        <Col xs='3' className='module8DivUp2'>
                            <img src={up} />
                            <p>2019<small>{' / '}12</small></p>
                            <h4>Wanchain 4.0 (Integration with Private Chains, Multi-Coin Wallet)</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Div6;