import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPosts from './AllPosts.js';
import OnePost from './OnePost.js';

class View extends Component {
  render() {
    return (
      <Switch>
	    <Route exact path='/view' component={AllPosts}/>
	    <Route path='/view/post/:id' component={OnePost}/>
	  </Switch>
    );
  }
}

export default View;