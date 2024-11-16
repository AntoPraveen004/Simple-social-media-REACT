import { format } from 'date-fns'
import React, { useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Newpost = async ({posts,setPost,postvalue,setPostvalue,text,settext}) => {
  const buttonref=useRef()
  const navigate = useNavigate()
  const handlebuttonclick =async ()=>{
    setPostvalue('')
    settext('') 

    const postSubmit ={
      id:(posts.length+2).toString() ,
      tittle:postvalue,
      date:format(new Date(),'MMMM dd ,yyyy pp'),
      body:text
    }
    const response = await axios.post("http://localhost:3500/posts",postSubmit)

    const finalpost=[...posts,response.data]
    setPost(finalpost.reverse())
    navigate('/')

  }
 const handletittlechange = (e)=>{
  setPostvalue(e.target.value)

 }
  return (
    <main className='NewPost'>
      <h2>new post</h2>
      <form className='newPostForm' onSubmit={(e)=>{e.preventDefault();setPostvalue('')}}>
        <label htmlFor="postTitle">Tittle:</label>
        <input id='postTitle' onChange={(e)=>handletittlechange(e)} type="text" required value={postvalue} />
        <label htmlFor="Postarea">Post:</label>

        <textarea ref={buttonref} onChange={(e)=>settext(e.target.value)}  value={text} required id='postBody'/> 
        <button type='submit' onClick={(e)=>{handlebuttonclick(e)}}>  Post </button>
      </form>
    </main>
  )
}

export default Newpost