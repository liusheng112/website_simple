import React, { Component } from 'react';
class Footer extends Component {
    render() {
        const style=require('./Footer.scss');
        return (
            <div className={style.footerRoot}>
                <p>Footer</p>
            </div>
        );
    }
}
export default Footer;