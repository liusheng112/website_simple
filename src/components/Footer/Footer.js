import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
class Footer extends Component {
    render() {
        const style = require('./Footer.scss');
        const robot1 = require('./images/reddit.png');
        const discord1 = require('./images/discord.png');
        const facebook = require('./images/facebook.png');
        const twitter1 = require('./images/twitter.png');
        // const webo1 = require('./images/web.png');
        const wechat1 = require('./images/wechat.png');
        const qq1 = require('./images/qq.png');
        // const gitHub = require('./images/gitHub.png');
        const tm = require('./images/tm.png');
        return (
            <div style={{ textAlign: 'center'}}>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={1}>
                            <div>
                                <a href="https://t.me/WanchainANN" target="_blank"><img src={tm} /></a>
                                <span>Telegram</span>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <div>
                                <a href="https://discord.gg/3DpeV6W" target="_blank"><img src={discord1} /></a>
                                <span>Discord</span>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <div>
                                <a href="https://twitter.com/wanchain_org" target="_blank"><img src={twitter1} /></a>
                                <span>Twitter</span>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <div>
                                <a href="https://www.reddit.com/r/wanchain/" target="_blank"><img src={robot1} /></a>
                                <span>Reddit</span>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <div>
                                <a href="https://www.facebook.com/wanchainfoundation/" target="_blank"><img src={facebook} /></a>
                                <span>Facebook</span>
                            </div>
                        </Col>
                        {/* <Col xs={1}>
                            <div>
                                <a href="http://weibo.com/wanchain" target="_blank"><img src={webo1} /></a>
                                <span>weibo</span>
                            </div>
                        </Col> */}
                        <Col xs={1}>
                            <div>
                                <a><img src={wechat1} /></a>
                                <span>wechat</span>
                            </div>
                        </Col>
                        <Col xs={1} >
                            <div>
                                <a><img src={qq1} /></a>
                                <span>QQgroup</span>
                            </div>
                        </Col>
                        {/* <Col xs={1} >
                            <div>
                                <a href="https://github.com/wanchain" target="_blank"><img src={gitHub} /></a>
                                <span>GitHub</span>
                            </div>
                        </Col> */}
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Footer;