import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './Item.scss';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapse:false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({collapse:!this.state.collapse});
    }
    render() {
        const sanjiao = require('./images/sanj.png');
        const datas=this.props.data;
        return (
            <div>
                <a href='#' onClick={this.toggle} className='item'>
                    <ul>
                        <li style={{ width: '50%' }}><p>{datas.posi}</p></li>
                        <li style={{ width: '20%'}}><p>{datas.loca}</p></li>
                        <li style={{ width: '20%' }}><p>{datas.num}</p></li>
                        <li style={{ width: '10%' }}><p><img src={sanjiao} /></p></li>
                    </ul>
                </a>
                <Collapse isOpen={this.state.collapse} className='Collapse'>
                    <Card>
                        <CardBody>
                            <h6>Job Description:</h6>
                            <p>{datas.detail.JobDescription}</p>
                            <h6>Requirement:</h6>
                            {datas.detail.Requirement.map((message, k) =>
                                <p key={k} className='requirement'>{message}</p>
                            )}
                            <h6>Compensation:</h6>
                            <p>{datas.detail.Compensation}</p>
                            <h6>Preferred Location:</h6>
                            <p>{datas.detail.PreferredLocation}</p>
                            <h6>About Us:</h6>
                            <p>{datas.detail.AboutUs}</p>
                            <h6>Benefits of Working at Wanchain</h6>
                            {datas.detail.BenefitsofWorkatWanchain.map((message, k) =>
                                <p key={k} className='benefits'>{message}</p>
                            )}
                            <h6>To apply please send your resume, Github repository, and/or LinkedIn profile to:</h6>
                            <p>{datas.detail.ToApplyPleaseSendYourResume}</p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}
export default Item;