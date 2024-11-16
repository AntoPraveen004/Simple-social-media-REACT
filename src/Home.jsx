import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({posts,setPost}) => {

  return (
    <div  className='Home'>
        
        {posts.map((post)=>(
          <article key={post.id}>
            <Link to={`/mypost/${post.id}`}> 
                <h1>{post.tittle}</h1>
               <p className='postDate'>{post.date}</p>
          </Link>
          <p className='postBody'>{post.body.slice(0,30)}....</p>
      </article>
        ))}
        {(posts.length<=0)?<p>no posts</p>:null}
    </div>
  )
}

export default Home