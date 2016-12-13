import React from 'react';
import { Link } from 'react-router';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts(parseInt(this.props.userId));
  }

  render() {

    return(
      <div>
        test
      </div>
    );
  }
}

export default PostIndex;
