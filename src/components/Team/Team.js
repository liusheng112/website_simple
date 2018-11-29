import React, { Component } from 'react';
import dataTeamEn from './data/dataTeamEn';
import dataAdvisoryEn from './data/dataAdvisoryEn';
import { Col, Row } from 'reactstrap';
import './Team.scss';
class Team extends Component {
    render() {
        const isLinkedIn = 'https://www.linkedin.com/';
        const leader = dataTeamEn.map((item, index) => (
            <Col sm='3' key={index} className='aboutTitleDiv'>
                <img src={item.img} className='title'></img>
                <h4 className='aboutH4'>{item.title}</h4>
                <h4 className='aboutH4'><small>{item.position}</small></h4>
                {item.url ? <a className='icoA' href={item.url} target="_blank">{item.url.startsWith(isLinkedIn) ? <em className='linkIn'></em> : <em className='linkOther'></em>}</a> : ''}
            </Col>
        ));
        const advisory = dataAdvisoryEn.map((item, index) => (
            <Col sm='3' key={index} className='aboutTitleDiv'>
                <img src={item.img} className='title'></img>
                <h4 className='aboutH4'>{item.title}</h4>
                <h4 className='aboutH4'><small>{item.position}</small></h4>
                {item.url ? <a className='icoA' href={item.url} target="_blank">{item.url.startsWith(isLinkedIn) ? <em className='linkIn'></em> : <em className='linkOther'></em>}</a> : ''}
            </Col>
        ));
        return (
            <div style={{ textAlign: 'center' }}>
                <div className='aboutTeam'>
                    <h1>Leadership Team</h1>
                    <Row>{leader}</Row>
                </div>
                <div className='aboutTeam'>
                    <h1>Advisory Group</h1>
                    <Row>{advisory}</Row>
                </div>
            </div>
        );
    }
}
export default Team;