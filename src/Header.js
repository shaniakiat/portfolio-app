import React, {Component} from 'react';
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
                <h4>{this.props.intro}</h4>
                <h1>{this.props.title}</h1>
                <h3>
                    I'm an undergraduate student at La Salle University, PA <br />
                    majoring in mathematics and computer science.
                </h3>
                <a href='#resume'>{this.props.button}</a>
            </header>
        );
    }
};

export default Header;
