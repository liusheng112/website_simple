import React, { Component } from 'react';
import {
    Collapse, Navbar, Nav,
    NavbarBrand, NavItem,
    NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu,
    DropdownItem, Row, Col
} from 'reactstrap';
import './Navgation.scss';
class Navgation extends Component {
    render() {
        const title = require('./logo2.png');
        return (
            <div className='Root'>
                <Row>
                    <Col sm={{ size: 8, order: 2, offset: 1 }}>
                        <Navbar color="#ffffff" light expand="md">
                            <NavbarBrand href="/"><img src={title}></img></NavbarBrand>
                            <Collapse navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem className='NavItem'>
                                        <NavLink href="/Product">Product</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle className='NavItem' nav caret>
                                            Docs
                                        </DropdownToggle>
                                        <DropdownMenu right style={{ background: 'none', border: 'none',left:'-44px' }}>
                                            <DropdownItem className='NavItem'>White paper</DropdownItem>
                                            <DropdownItem className='NavItem'>Yellow paper</DropdownItem>
                                            <DropdownItem className='NavItem'>Commercial<br />paper</DropdownItem>
                                            <DropdownItem className='NavItem'>Wanchain<br />docs</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem className='NavItem' >
                                        <NavLink href="/Team">Team</NavLink>
                                    </NavItem>
                                    <NavItem  className='NavItem'>
                                        <NavLink href="/Career">Career</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href="#">Explorer</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href="#">Medium</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href="/Events">Events</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Navgation;