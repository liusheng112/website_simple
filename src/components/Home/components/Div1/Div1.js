import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Div1.scss';
class Div1 extends Component {
    render() {
        const div1Img = require('../../images/div1.png');
        const div1En = require('../../images/div1EnPc.png');
        const div1EnPc = require('../../images/div1EnPc.png');
        const vision1 = require('../../images/vision1.png');
        const vision2 = require('../../images/vision2.png');
        const vision3 = require('../../images/vision3.png');
        const vision4 = require('../../images/vision4.png');
        return (
            <div>
                <div className='div1Header'>
                    <h2>
                        <hr className='div1HeaderImg' />
                        <span>WANCHAIN&#180;S VISION</span>
                        <hr className='div1HeaderImg' />
                    </h2>
                </div>
                <Row>
                    <Col xs='6' className='wLeft'>
                        <img src={div1EnPc} className='wLeftImg'></img>
                    </Col>
                    <Col xs='6'>
                        <Row>
                            <Col xs='5' className='vision'>
                                <img src={vision1} />
                                <p>Digital Economy</p>
                                <span>Bitcoin was the first natively digital asset, tens of thousands have followed. The digital economy is expanding exponentially and will soon become 'the economy'</span>
                            </Col>
                            <Col xs='5' className='vision'>
                                <img src={vision2} />
                                <p>Digitization of Assets</p>
                                <span>These digital assets now operate in the domain of 0s, 1s, Moore's law, and exponential scale. The impacts on the financial services industry will be profound. Historical example: digitization of photographs</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5' className='vision'>
                                <img src={vision3} />
                                <p>New Opportunities</p>
                                <span>We believe our blockchain finance platform will not only unlock opportunities for blockchain companies, but also for traditional financial institutions building bridges to the new digital economy.</span>
                            </Col>
                            <Col xs='5' className='vision'>
                                <img src={vision4} />
                                <p>Financial Infrastructure</p>
                                <span>The problem is that today's digital assets are isolated on their respective chains. Wanchain connects these assets and enables banking applications to be developed that guide their flows on-chain, removing centralized counterparty risk</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Div1;