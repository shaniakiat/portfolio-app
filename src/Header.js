import React, {Component} from 'react';
import Background from './img/dark-bg-01.jpg';
import './Header.css';

const myStyles = {
    // backgroundImage: `url(${Background})`,
    backgroundColor: '#1b1e27',
    height: "85vh",
    backgroundSize: 'cover'
}

class Header extends Component {
    render() {
        
        return(
            <header style={myStyles}>
                <p1>{this.props.intro}</p1>
                <h1>{this.props.title}</h1>
                <p>
                    I'm a undergraduate student at La Salle University, PA <br />
                    majoring in mathematics and computer science.
                </p>
                {/* <a href='#button'>{this.props.button}</a> */}
            </header>
        );
    }
};

export default Header;
