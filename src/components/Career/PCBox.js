import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import data from './opportunites.js';
class PCBox extends Component {
    render() {
        const sanjiao = require('./images/sanj.png');
        const tb = data.map((item, index) => (
            <tr key={index}>
                <td >{item.posi}</td>
                <td>{item.loca}</td>
                <td>{item.num}</td>
                <td><img src={sanjiao} /></td>
            </tr>
        ));
        return (
            <div className='container'>
                <Table borderless>
                    <thead>
                        <tr>
                            <th>POSITION</th>
                            <th>LOCATION</th>
                            <th>NUMBER</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{tb}</tbody>
                </Table>
            </div>
        );
    }
}
export default PCBox;