import React, { Component } from 'react';
import Item from './Item.js';
import data from './opportunites.js';
import './Career.scss';
class Career extends Component {
    render() {
        const banLeftimg = require('./images/pic.png');
        return (
            <div>
                <div className='bandiv'>
                    <div className='w'>
                        <div className='banLeft'>
                            <img src={banLeftimg} className='carimg1'></img>
                        </div>
                        <div className='banRight'>
                            <div className='brDiv1'><span>Competitive compensation</span></div>
                            <div className='brDiv2'><span>Great support from team members</span></div>
                            <div className='brDiv3'><span>Invitations to networking events</span></div>
                            <div className='brDiv4'><span>Self-development</span></div>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <h2 className='cH2'>
                        <span className='chsColor'>C</span>
                        <span>URRENT OPPORTUNITIES</span>
                    </h2>
                    <div className='container'>
                        <ul>
                            <li style={{ width: '50%'}}><h6>POSITION</h6></li>
                            <li style={{ width: '20%'}}><h6>LOCATION</h6></li>
                            <li style={{ width: '20%'}}><h6>NUMBER</h6></li>
                            <li style={{ width: '10%'}}></li>
                        </ul>
                        {data.map((item, index) => <Item key={index} data={item} />)}
                    </div>
                </div>
                <div className='footer'>
                    <div className='fDiv'>
                        <h2>About Us</h2>
                        <p>
                            Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Our mission is to re-build the financial services industry and
                            recently raised $35 million in an ICO. For more information please visit
                        </p>
                        <h3>www.wanchain.org</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Career;