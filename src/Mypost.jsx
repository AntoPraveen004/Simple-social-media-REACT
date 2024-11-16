import { FaTrash } from "react-icons/fa";
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Mypost = ({ posts,setPost }) => {
  const { id } = useParams();
  console.log(typeof(id))
  const postss = posts.find((post) => post.id.toString() === id);
  const navigate=useNavigate() 
  const Delete =async (key)=>{
    await axios.delete(`http://localhost:3500/posts/${id}`);
   const updated= posts.filter((post)=>(post.id)!==key)
    setPost(updated)
    navigate('/');
  }
  
  return (
    postss ? (
      <article className='Mypost'>
        <h1>{postss.tittle}</h1>
        <p>{postss.body}</p>
        <p>{postss.date}</p>
        <p>delete<FaTrash onClick={()=>Delete(postss.id)} /> </p>
      </article>
    ):(
    <article className='Mypost'>
      <h1>oops something went wrong</h1><br />
      <p>try reloading the page or move to home </p>
    </article>
  )
  );
};

export default Mypost