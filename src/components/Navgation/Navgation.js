import React, { Component } from 'react';
import { Grid, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class Navgation extends Component {
    render() {
        const style = require('./Navgation.scss');
        const title = require('./logo2.png');
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={4} md={2}>
                            <a href='/'><img src={title}></img></a>
                        </Col>
                        <Col xs={9} md={10}>
                            <Nav bsStyle="pills">
                                <NavItem eventKey={1} className={style.item} href="#">Product</NavItem>
                                <NavDropdown eventKey={2} title="Docs" id="basic-nav-dropdown">
                                    <MenuItem eventKey={2.1}></MenuItem>
                                    <MenuItem eventKey={2.2}>White paper</MenuItem>
                                    <MenuItem eventKey={2.3}>Yellow paper</MenuItem>
                                    <MenuItem eventKey={2.4}>Commercial paper</MenuItem>
                                    <MenuItem eventKey={2.5}>Wanchain docs</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey={3} href="/Team">Team</NavItem>
                                <NavItem eventKey={4} href="/Career">Career</NavItem>
                                <NavItem eventKey={5} href="#">Explorer</NavItem>
                                <NavItem eventKey={6} href="#">Medium</NavItem>
                                <NavItem eventKey={7} href="/Events">Events</NavItem>
                                <NavItem eventKey={8} href="/WanLabs">WanLabs</NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Navgation;