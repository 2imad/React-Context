import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() { 
       console.log(this.context)
       const {isLightTheme, light, dark } = this.context;
       const theme = isLightTheme ? light :dark
        return ( 
            <nav style={{background:theme.ui, color:theme.syntax}}>
                <h1>Context</h1>
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Home</li>
                </ul>
            </nav>
         );
    }
}

export default Navbar
 