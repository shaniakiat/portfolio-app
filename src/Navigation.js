import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Contact'];
        const navLinks = sections.map(section => {
            return(
                <li key={section}><a href={'#' + section}>{section}</a></li>
            )
        });
        return (
            <nav>    
                <h2 className="logo"><a href={'#Home'}>{this.props.logoTitle}</a></h2>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
