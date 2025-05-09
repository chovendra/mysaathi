import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router';


const Blog = (id) => {

  return (
    <div className='lg:w-full lg:h-screen w-full h-[100vh] p-10 text-center'>
      <h1 className='text-3xl font-bold'>Blogs & <span className='text-red-600'>Stories</span>!</h1>
      <div className='w-40 h-1 bg-red-500 rounded-full m-auto my-[5vh] lg:mt-0'></div>
    
      <div className='w-full lg:h-[50%] h-screen lg:relative lg:top-20 lg:flex lg:items-center lg:justify-evenly grid grid-rows-3 gap-7'>


<div className='lg:w-[25%] w-full rounded-3xl  h-full lg:flex lg:flex-col relative grid grid-cols-2'

style={{backgroundImage:`url("https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D)`,backgroundSize:"cover", backgroundPosition:"center"}}>
    {/* <img src="https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" /> */}
        <Link to={`/blog/${id}`}>
   <div className='absolute bottom-0 text-white px-3 py-3'>
   <h6 className='text-xs text-start font-thin'>09 oct 2024</h6>
    <h2 className='text-3xl text-start '>Spreading Smiles: A Brighter Future for Every Child</h2>
   <div className='flex items-center'>
   <h3 className='text-md text-start font-thin relative '>Read More
    </h3>
    <BsArrowRightCircleFill className='text-red-500 bg-black overflow-hidden rounded-full ml-2'/>
   
   </div>
   </div>
</Link>
</div>
<div className='lg:w-[25%] w-full rounded-3xl  h-full lg:flex lg:flex-col relative grid grid-cols-2'
style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1733835983937-282507ea94ae?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,backgroundSize:"cover", backgroundPosition:"center"}}>
    {/* <img src="https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" /> */}
   
  <Link to={`/blog/${id}`}>
   <div className='absolute bottom-0 text-white px-3 py-3'>
   <h6 className='text-xs text-start font-thin'>09 oct 2024</h6>
    <h2 className='text-3xl text-start '>Spreading Smiles: A Brighter Future for Every Child</h2>
   <div className='flex items-center'>
   <h3 className='text-md text-start font-thin relative '>Read More
    </h3>
    <BsArrowRightCircleFill className='text-red-500 bg-black overflow-hidden rounded-full ml-2'/>
   
   </div>
   </div>
  </Link>
</div>
<div className='lg:w-[25%] w-full rounded-3xl  h-full lg:flex lg:flex-col relative grid grid-cols-2'
style={{backgroundImage:`url(https://images.unsplash.com/photo-1733667917418-f4b7ea5a80c4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,backgroundSize:"cover", backgroundPosition:"center"}}>
    {/* <img src="https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" /> */}
    <Link to={`/blog/${id}`}>
  
   <div className='absolute bottom-0 text-white px-3 py-3'>
   <h6 className='text-xs text-start font-thin'>09 oct 2024</h6>
    <h2 className='text-3xl text-start '>Spreading Smiles: A Brighter Future for Every Child</h2>
   <div className='flex items-center'>
   <h3 className='text-md text-start font-thin relative '>Read More
    </h3>
    <BsArrowRightCircleFill className='text-red-500 bg-black overflow-hidden rounded-full ml-2'/>
   
   </div>
   </div>
   </Link>
</div>


      </div>
         </div>
  )
}

export default Blog