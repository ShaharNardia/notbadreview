import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Default from './Default';

import './App.css';
import Feed from './Feed';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import AddEditPost from './AddEditPost';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
          <Header />
          <div className='spacer'></div>
            <Switch>
              <Route  path='/feed' component={Feed} />
              <Route  path='/login' component={Login} />
              <Route  path='/post/:id' component={Post} />
              <Route  path='/addeditpost/:id' component={AddEditPost} />
              <Route  path='/addeditpost/' component={AddEditPost} />
              <Route exact path='/' component={Default} />
            </Switch>
            <div className='spacer'></div>
            <Footer />
          </div>
        </BrowserRouter>     
    );
  }
}

export default App;
