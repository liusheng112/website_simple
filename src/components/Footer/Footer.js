import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

class Footer extends Component {
    render() {
        const style = require('./Footer.scss');
        const robot1 = require('./images/reddit.png');
        const discord1 = require('./images/discord.png');
        const facebook = require('./images/facebook.png');
        const twitter1 = require('./images/twitter.png');
        const webo1 = require('./images/web.png');
        const wechat1 = require('./images/wechat.png');
        const qq1 = require('./images/qq.png');
        const gitHub = require('./images/gitHub.png');
        const tm = require('./images/tm.png');
        return (
            <div style={{ background: '#1e2736', height: '190px' }}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 4 }} style={{ marginTop: '60px' }}>
                        <div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a href="https://t.me/WanchainANN" target="_blank"><img src={tm} /></a><br />
                                <span>Telegram</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a href="https://discord.gg/3DpeV6W" target="_blank"><img src={discord1} /></a><br />
                                <span>Discord</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a href="https://twitter.com/wanchain_org" target="_blank"><img src={twitter1} /></a><br />
                                <span>Twitter</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a href="https://www.reddit.com/r/wanchain/" target="_blank"><img src={robot1} /></a><br />
                                <span>Reddit</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a href="https://www.facebook.com/wanchainfoundation/" target="_blank"><img src={facebook} /></a><br />
                                <span>Facebook</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a href="http://weibo.com/wanchain" target="_blank"><img src={webo1} /></a><br />
                                <span>weibo</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a><img src={wechat1} /></a><br />
                                <span>wechat</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '5px', marginRight: '5px' }}>
                                <a><img src={qq1} /></a><br />
                                <span>QQgroup</span>
                            </div>
                            <div>
                                <a href="https://github.com/wanchain" target="_blank"><img src={gitHub} style={{ width: '30px', height: '30px' }} /></a><br />
                                <span>GitHub</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Footer;