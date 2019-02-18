import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Link to='/'>
        Home Page
        </Link>
      </div>
    );
  }
}

export default Footer;
