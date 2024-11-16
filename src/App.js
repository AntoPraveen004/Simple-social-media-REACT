import Home from './Home';
import Header from './Header'
import About from './About';
import  Newpost from './Newpost'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Mypost from './Mypost';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios'
import { useEffect, useState } from 'react';
function App() {
  const title="Antony social media"
  const [search ,setSearch]= useState('')
  const [postvalue , setPostvalue]=useState('')
  const [text,settext]=useState('')
  const [posts ,setPost]= useState([])

 useEffect(()=>{
    const apireq= async ()=>{
        try{
          const response= await axios.get("http://localhost:3500/posts ");
          setPost(response.data.reverse());
        }
        catch(err){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.header)
        }
    }
  apireq()
 },[])

  return (
    <div className="App">
    <Header title={title}/>
    <Navigation  posts={posts} setPost={setPost} search={search} setSearch={setSearch} />
    <Routes>
    <Route path='/' element={<Home posts={posts.reverse().filter((post)=>(post.tittle.toLowerCase().includes(search.toLowerCase())))} setPost={setPost} />}/> 
  <Route path='/mypost'> 
  <Route path=':id' element={<Mypost setPost={setPost} posts={posts}/>}/>

  </Route>
  <Route path='/about' element={<About/>}/> 
  <Route path='/newpost' element={<Newpost setPost={setPost} posts={posts} text={text} settext={settext} postvalue={postvalue} setPostvalue={setPostvalue}/>}/>
</Routes>

    {/* <Home/>
    <Newpost/>
    <Postpage/>
    <About/>
    <About/>
    <Missing/>*/}
   <Footer/> 
    </div>
  );
}

export default App;
