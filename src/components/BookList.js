import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext
  
  render() { 
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
        return ( 
            <div className="book-list" style={{color:theme.syntax, background:theme.bg}} >
                <ul>
                    <li style={{background: theme.ui}}>The way of kinds</li>
                    <li style={{background: theme.ui}}>The name of the wind </li>
                    <li style={{background: theme.ui}}>Final Empire </li>
                </ul>
            </div>
         );
    }
}
 
export default BookList ;