import React, { Component } from 'react';
import { Row, Col, Tooltip } from 'reactstrap';
import './Footer.scss';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.state = {
            tooltipOpen1: false,
            tooltipOpen2: false,
        };
    }
    toggle1() {
        this.setState({
            tooltipOpen1: !this.tooltip1Open1,
            tooltipOpen2: this.state.tooltipOpen2
        });
    }
    toggle2() {
        this.setState({
            tooltipOpen2: !this.state.tooltipOpen2,
            tooltipOpen1: this.tooltip1Open1
        });
    }
    render() {
        const robot1 = require('./images/reddit.png');
        const discord1 = require('./images/discord.png');
        const facebook = require('./images/facebook.png');
        const twitter1 = require('./images/twitter.png');
        const webo1 = require('./images/web.png');
        const wechat1 = require('./images/wechat.png');
        const qq1 = require('./images/qq.png');
        const gitHub = require('./images/gitHub.png');
        const tm = require('./images/tm.png');
        const qqer = require('./images/qqer.png');
        const wechater = require('./images/wecatEn.png');
        const newsletter=require('./images/Newsletter.png');
        const er = { width: '120px', height: '140px' };
        const ercontainer = { background: 'none' };
        return (
            <div>
                <div className='back'>
                    <Row>
                        <Col className='page' sm='12' md={{ size: 6, offset: 4 }}>
                            <div>
                                <div className='item'>
                                    <a href='https://t.me/WanchainANN' target='_blank'>
                                        <img src={tm} />
                                    </a>
                                    <span>Telegram</span>
                                </div>
                                <div className='item'>
                                    <a href='https://discord.gg/3DpeV6W' target='_blank'>
                                        <img src={discord1} />
                                    </a>
                                    <span>Discord</span>
                                </div>
                                <div className='item'>
                                    <a href='https://twitter.com/wanchain_org' target='_blank'>
                                        <img src={twitter1} />
                                    </a>
                                    <span>Twitter</span>
                                </div>
                                <div className='item'>
                                    <a href='https://www.reddit.com/r/wanchain/' target='_blank'>
                                        <img src={robot1} />
                                    </a>
                                    <span>Reddit</span>
                                </div>
                                <div className='item'>
                                    <a href='https://www.facebook.com/wanchainfoundation/' target='_blank'>
                                        <img src={facebook} />
                                    </a>
                                    <span>Facebook</span>
                                </div>
                                <div className='item'>
                                    <a href='http://weibo.com/wanchain' target='_blank'>
                                        <img src={webo1} />
                                    </a>
                                    <span>weibo</span>
                                </div>
                                <div className='item'>
                                    <a id='Tooltip1'><img src={wechat1} /></a>
                                    <Tooltip style={ercontainer} placement='top' isOpen={this.state.tooltipOpen1} target='Tooltip1' toggle={this.toggle1}>
                                        <img style={er} src={wechater}></img>
                                    </Tooltip>
                                    <span>wechat</span>
                                </div>
                                <div className='item'>
                                    <a id='Tooltip2'><img src={qq1} /></a>
                                    <Tooltip style={ercontainer} placement='top' isOpen={this.state.tooltipOpen2} target='Tooltip2' toggle={this.toggle2}>
                                        <img style={er} src={qqer}></img>
                                    </Tooltip>
                                    <span>QQgroup</span>
                                </div>
                                <div className='item'>
                                    <a href='https://github.com/wanchain' target='_blank'>
                                        <img className='github' src={gitHub} />
                                    </a>
                                    <span>GitHub</span>
                                </div>
                                <div className='item'>
                                    <a href='https://wanchain.us17.list-manage.com/subscribe?u=474affe3661620cb14a108d52&id=f76852edbb' target='_blank'>
                                        <img className='newsletter' src={newsletter} />
                                    </a>
                                    <span>Newsletter</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div >
                <div className='end'>
                    <h6>©WANCHAIN FOUNDATION LTD 2018 all rights reserved</h6>
                </div>
            </div>
        );
    }
}
export default Footer;