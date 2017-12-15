import React from 'react';
import './styles/AllPosts.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewPost(props) {
  const content = props.posts.map((post) =>
    <div className="post" key={post.id}>
      <Link className="LinkPost" to={`/view/post/${post.id}`}><h3 className="PostId">Post #{post.id}</h3>
      <h3 className="PostName"><span className="name">From: </span>{post.name}</h3>
      <h3 className="PostEmail"><span className="email">E-mail: </span>{post.email}</h3>
      <h3 className="PostBody"><span className="body">Post: </span>{post.body}</h3>
      </Link>
    </div>
  );
  return (
    <div>{content}
    </div>
  );
}

class AllPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const messages = res.data;
        this.setState({ messages });
    });
  }



  render() {
  	const { messages } = this.state;
    return (
      <div className="allposts">
      	<ViewPost posts={messages} />
      </div>
    );
  }
}

export default AllPosts;