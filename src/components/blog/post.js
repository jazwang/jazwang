import '../../App.css';
import {Link} from 'react-router-dom';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: process.env.REACT_APP_SLUG,
  read_key: process.env.REACT_APP_READ_KEY
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
            <div style={{marginLeft: '20px', marginRight: '10px'}}>
              <p>
                {ReactHtmlParser(this.state.postContent)}
              </p>
            </div> 
          </div>
      </div>
    )
  }
  
}