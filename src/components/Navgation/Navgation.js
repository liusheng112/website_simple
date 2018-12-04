import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarBrand,
    NavItem, Dropdown, Row, Nav,
    DropdownToggle, DropdownMenu,
    DropdownItem, NavLink, Col
} from 'reactstrap';
import './Navgation.scss';
class Navgation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        const title = require('./logo2.png');
        return (
            <div className='Root'>
                <Row>
                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                        <Navbar light expand='md'>
                            <NavbarBrand href='/' className='title'><img src={title}></img></NavbarBrand>
                            <Collapse navbar>
                                <Nav className='ml-auto' navbar>
                                    <NavItem className='NavItem'>
                                        <NavLink href='/product'>Product</NavLink>
                                    </NavItem>
                                    <Dropdown className='navDropdown' data-toggle='dropdown' toggle={this.toggle}>
                                        <DropdownToggle className='NavItem' onMouseOver={this.toggle}>
                                            Docs
                                        </DropdownToggle>
                                        <DropdownMenu right className='navDropdown-content'>
                                            <DropdownItem className='NavItem' target='_blank'>
                                                White&nbsp;paper
                                            </DropdownItem>
                                            <DropdownItem className='NavItem' target='_blank'>
                                                Yellow&nbsp;paper
                                            </DropdownItem>
                                            <DropdownItem className='NavItem' target='_blank'>
                                                Commercial<br />paper
                                            </DropdownItem>
                                            <DropdownItem className='NavItem' target='_blank' href='http://www.wanchaindocs.org/en/latest/'>
                                                Wanchain<br />docs
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <NavItem className='NavItem' >
                                        <NavLink href='/about'>Team</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href='/career'>Career</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href='https://www.wanscan.org' target='_blank'>Explorer</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href='https://medium.com/wanchain-foundation' target='_blank'>Medium</NavLink>
                                    </NavItem>
                                    <NavItem className='NavItem'>
                                        <NavLink href='/events'>Events</NavLink>
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