import React, {createContext, useState } from 'react'
import {baseUrl} from "../baseUrl";
import { useNavigate } from 'react-router-dom';

// STep-1
export const AppContext = createContext(); 

export default function AppContextProvider({children})
{
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const navigation = useNavigate(); 

  // Load the values from fetch API
  const fetchBlogPosts = async (page=1, tag=null, category) => {
      setLoading(true); 

      let url = `${baseUrl}?page=${page}`; 
      if(tag){
        url += `&tag=${tag}`; 
      }
      if(category){
        url += `&tag=${category}`; 
      }

      try {
        const result = await fetch(url); 
        const data = await result.json(); 
        // console.log(data); 
        setPage(data.page); 
        setPosts(data.posts)
        setTotalPages(data.totalPages);
      } 
      catch (error) {
        console.log("Error in fetching data");
        setPage(1); 
        setPosts([]);
        setTotalPages(null); 
      }

      setLoading(false); 

  }

  const handlePageChange = (page) => {
    navigation({search: `?page=${page}`}); 
    setPage(page);
    // fetchBlogPosts(page); 
  };

  const value = {
      loading, setLoading,
      posts, setPosts,
      page, setPage,
      totalPages, setTotalPages,
      fetchBlogPosts, 
      handlePageChange
  };

  // Step-3
  return (
    <AppContext.Provider value={value}>  
      {children}
    </AppContext.Provider>
  )
}
