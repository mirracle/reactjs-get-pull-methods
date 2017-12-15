import React, { Component } from 'react';
import './styles/send.css';
import axios from 'axios';

const Send = React.createClass({
    getInitialState() {
    return {
      body: this.props.body,
      email: this.props.email,
      title: this.props.title
    }
  },

    handleSend() {
        console.log("handleSend");
        axios({
            method: 'post',
            url: 'http://jsonplaceholder.typicode.com/posts',
            data: {
                name: this.state.name,
                body: this.state.body,
                email: this.state.email,
                userId: 1
            }
        }).then((data) => {
            console.log(data);
        });
    },

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    },

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    },

    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        });

    },

    render() {
        return (
        	<div className='send'>
			    <div>
			        <label>Name</label>
			        <input type="text" onChange={this.handleNameChange} />
			    </div>
			    <div>
			        <label>E-mail</label>
			        <input type="text" onChange={this.handleEmailChange} />
			    </div>
			    <div>
			        <label>Body</label>
			        <input type="text" onChange={this.handleBodyChange} />
			    </div>
			    <div>
			        <button onClick={this.handleSend}>Send</button>
			    </div>
			</div>
        );
    }
});

export default Send;