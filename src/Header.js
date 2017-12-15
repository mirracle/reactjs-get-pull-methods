import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-name">
            <h2>My First React App</h2>
          </div>
          <div className="App-header-link">
            <Link  className="link" to='/send'><h2>Send Post</h2></Link>
          </div>
          <div className="App-header-link">
            <Link className="link" to='/view'><h2>View Posts</h2></Link>
          </div>
          <div className="App-header-link">
            <Link className="link" to='/about'><h2>About</h2></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
