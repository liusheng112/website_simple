import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Div3.scss';
class Div3 extends Component {
    render() {
        const videpIco = require('../../images/videoIco.png');
        const wanchain = require('../../images/wanchain.png');
        const one = require('../../images/1.png');
        const two = require('../../images/2.png');
        return (
            <div className='div3Root'>
                <div>
                    <h2>
                        <hr /><span>WANCHAIN ARCHITECTURE</span><hr />
                    </h2>
                    <small>A distributed financial infrastructure that seamlessly connects blockchain networks together</small>
                </div>
                <Row>
                    <Col xs='6'>
                        <img className='contentImg' src={wanchain} />
                    </Col>
                    <Col sm='6' md={{ size: 5, offset: 1 }} id='content'>
                        <div>
                            <div className='content1'>
                                <img src={one}/>
                                <p>Wanchain is not merely a universal cross-chain protocol, it is a distributed ledger that records cross-chain and intra-chain transactions</p>
                            </div>
                            <div className='content2'>
                                <img src={two} />
                                <p>The ledger not only supports smart contracts, but also supports privacy protection</p>
                            </div>
                            <div className='videoBtn'>
                                <span>WATCH VIDEO</span>
                                <img src={videpIco} className='videoIco' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Div3;