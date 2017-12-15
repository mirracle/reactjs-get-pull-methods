import React, { Component } from 'react';
import './styles/OnePost.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

class OnePosts extends Component {
	constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
    }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.match.params.id}`)
      .then(res => {
        const messages = res.data;
        this.setState({ messages });
      });
     }

  render() {
  	const { messages } = this.state;  
    return (
      <div className="OnePost">
        <div className="content">
        	<h3 className="PostId">This Post Was Taken From The Site: <code>https://jsonplaceholder.typicode.com</code><br /> Post #{messages.id}</h3>
        	<h3 className="PostName"><span className="name">From: </span>{messages.name}</h3>
	        <h3 className="PostEmail"><span className="email">E-mail: </span>{messages.email}</h3>
	        <h3 className="PostBody"><span className="body">Post: </span>{messages.body}</h3>
        </div>
        	<Link to='/View' className="BackLink"><h3 className="PostBack">Back To Posts List</h3></Link>
      </div>
    );
  }
}

export default OnePosts;