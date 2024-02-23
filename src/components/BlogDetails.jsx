import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
        {/* <NavLink to={`/blog/${post.id}`} > */}
            <span className='font-bold'>{post.title}</span>
        {/* </NavLink> */}
        <p>
            By
            <span className='italic'>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                <span className='underline'>{post.category}</span>
            </NavLink>
        </p>
        <p>
            Posted on {post.date}
        </p>
        <p>
            {post.content}
        </p>
        <div className='flex flex-wrap gap-x-3 underline'>
            {post.tags.map( (tag, index)=>(
                <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                    <span>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails
