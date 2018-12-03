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
            <div className='root'>
                <div>
                    <h2>
                        <hr />
                        <span>WANCHAIN ARCHITECTURE</span>
                        <hr />
                    </h2>
                    <small>A distributed financial infrastructure that seamlessly connects blockchain networks together</small>
                </div>
                <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Col xs='6'>
                        <img className='contentImg' src={wanchain} />
                    </Col>
                    <Col sm="6" md={{ size: 5, offset: 1 }} style={{ marginTop: '80px' }}>
                        <div>
                            <div style={{ width: '400px', height: '84px', border: '1px solid #eff4fb' }}>
                                <img src={one} style={{ float: 'left', marginTop: '8px', marginRight: '5px', marginLeft: '5px' }} />
                                <p style={{ marginTop: '10px' }}>Wanchain is not merely a universal cross-chain protocol, it is a distributed ledger that records cross-chain and intra-chain transactions</p>
                            </div>
                            <div style={{ width: '400px', height: '84px', border: '1px solid #eff4fb', marginTop: '30px' }}>
                                <img src={two} style={{ float: 'left', marginTop: '8px', marginRight: '5px', marginLeft: '5px' }} />
                                <p style={{ marginTop: '10px' }}>The ledger not only supports smart contracts, but also supports privacy protection</p>
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