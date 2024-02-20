import React, { useEffect } from "react"
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage"
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "./App.css"


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext); 
  
  const [searchParams, setSearchParams] = useSearchParams(); 
  const location = useLocation(); 
 
  useEffect(() => {
      const page =  searchParams.get("page") ?? 1;

      if(location.pathname.includes("tags")){
        const tag = location.pathname.split("/").at(-1).replaceAll("-", " "); 
        fetchBlogPosts(Number(page), tag); 
      }
      else if(location.pathname.includes("categories")){
        const category = location.pathname.split("/").at(-1).replaceAll("-", " "); 
        fetchBlogPosts(Number(page), null, category); 
      }
      else{
        fetchBlogPosts(Number(page)); 
      }
    }, 
    [location.pathname, location.search]
  );


  return (

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/blogs/:blogId" element={<BlogPage/>}></Route>
    <Route path="/tags/:tag" element={<TagPage/>}></Route>
    <Route path="/categories/:category" element={<CategoryPage/>}></Route>
  </Routes>

  );
}
