import React from 'react';
import '../../App.css';
import React, { useState, useEffect } from 'react'

const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'jazwang',
  read_key: 'Bpsj6iYWZw6MI9fjQCsgFtaXHvqBDP6bjuf12EMFh5CxaAZb2R'
})

export default function Blog() {

  // Use Hooks to get page data from Cosmic!
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await bucket.getObjects({
        type: 'blogs',
        props: 'slug,title,content' // Limit the API response data by props
      })
      setData(data)
    };
    fetchBlog()
  }, []);
  if (!data)
    return <div className="page">
    <h1>blog</h1>
    </div>
  const posts = data.objects

  return (
    <div className="page">
    <h1>blog</h1>
    { posts.map(post => 
      <div key={post.slug} style={{marginBottom: 20}}>
        <div>{post.title}</div>
      </div>)
    }
    </div>
  )
}
