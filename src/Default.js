import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom'



class Default extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] }
  }

  componentWillMount() {
    console.log('componentWillMount');
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      this.setState({ posts: res.data });
    })
  }


  render() {

    var postList = this.state.posts.map((item, index) => {
      return <Link to={`/post/${item.id}`} key={index}><div className='postCard' >
        <h2 className='postTitle'>Title - {item.title.substr(0, 20)}</h2>
        <div className='flex'>
          <div className='postbody'>
            {item.body.substr(0, 1000)}
          </div>
          <div>
            ddd
          </div>
        </div>
      </div></Link>
    });

    return (
      <div className="App">
        <h1>Not Bad Reviews...</h1>
        {postList}

      </div>
    );
  }
}

export default Default;
