import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from "./Spinner";
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {posts,loading} = useContext(AppContext); 
  console.log(posts);


  return (
    <div className='w-11/12 max-w-[750px] mx-auto py-3 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
      {
          loading ?
          (<Spinner/>):

          (
              (posts.length === 0) ?
              (
                <p>No Post Found</p>
              ):
              (
                posts.map((post)=>
                  (
                    <BlogDetails key={post.id} post={post}/>

                    // <div key={post.id}>
                    //     <p className='font-bold text-lg'>{post.title}</p>
                    //     <p className='text-md'>
                    //       By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                    //     </p>
                    //     <p className='text-[10px]'>Posted on <span>{post.date}</span></p>
                    //     <p className='text-[11px] mt-[3px]'>{post.content}</p>
                    //     <div className='flex gap-x-1 flex-wrap'>
                    //       {
                    //         post.tags.map( (tag, index)=> (<span key={index} className='text-blue-500 underline font-bold text-xs'>{`#${tag}`}</span>) )
                    //       } 
                    //     </div>
                    // </div>
                  )
                )
              )
          )
      }
    </div>
  );
}

export default Blogs; 
