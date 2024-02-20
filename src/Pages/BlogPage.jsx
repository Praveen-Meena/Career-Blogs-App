import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    const [blog, setBlog] = useState(null); 
    const [relatedblogs, setRelatedBlogs] = useState([]);  //Array of related Blogs
    const location = useLocation(); 
    const navigation = useNavigate(); 
    const {setLoading, loading} = useContext(AppContext); 

    const blogId = location.pathname.split("/").at(-1); 

    async function fetchRelatedBlogs(){
        setLoading(true); 
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url); 
            const data = await res.json(); 
            setBlog(data.blog); 
            setRelatedBlogs(data.relatedblogs); 
        }
        catch(error){
            console.log("Error Found"); 
            setBlog(null); 
            setRelatedBlogs([]); 
        }
        setLoading(false); 
    }

    useEffect(
        ()=>{
            if(blogId){
                fetchRelatedBlogs()
            }
        },
        [location.pathname]
    )

    return (
        <div>

            <Header/>

            <div>
                <buttom
                onCLick={()=>navigation(-1)}>
                    back
                </buttom>
            </div>

            {
               loading ? <p>Loading</p>  : 
               blog ? 
               (
                <div>
                    {/* Displaying Single Blog first */}
                    <BlogDetails post={blog} />  

                    {/* Displaying all Blogs related to first Blogs from relatedBlogs Array */}
                    <h2>Related Blogs</h2>
                    {
                        relatedblogs.map( (post, index)=>(
                            <div key={index}>
                                <BlogDetails post={post}/>
                            </div>
                        ))
                    }
                </div>
               ) : 
               (<p>No Blog Found</p>)
            }

        </div>
    )
}

export default BlogPage

