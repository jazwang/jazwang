import '../../App.css';
import {Link} from 'react-router-dom';
import React from 'react';

const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'jazwang',
  read_key: 'Bpsj6iYWZw6MI9fjQCsgFtaXHvqBDP6bjuf12EMFh5CxaAZb2R'
})

export default class Post extends React.Component {
  constructor () {
    super();
    this.state = {
      postTitle: "",
      postContent: ""
    };
  }

  getPost() {
    bucket.getObject({
      slug: this.props.match.params.id,
      props: 'title,content' // Limit the API response data by props
      })
      .then(function(response) {
        return response.object;
      })
      .then((post) => {
        this.setState({postTitle: post.title, postContent: post.content});
      });
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    return (
      <div className="page">
          <div>
            <Link to="/blog"><h1> > Back</h1></Link>  
          </div>
          <div>
            <h2>{this.state.postTitle}</h2>
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}} dangerouslySetInnerHTML={{__html: this.state.postContent}} />
          </div>
      </div>
    )
  }
  
}