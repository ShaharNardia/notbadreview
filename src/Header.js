import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to='/'>
        Home Page
        </Link>
        <span className='seperator'>|</span>
        <Link to='/newpost'>
        New Post
        </Link>
        <span className='seperator'>|</span>
        <Link to='/login'>
        Login
        </Link>
      </div>
    );
  }
}

export default Header;
