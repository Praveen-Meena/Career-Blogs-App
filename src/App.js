import React, { useEffect } from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Paginaton from "./components/Paginaton";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import "./App.css"


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext); 

 
  useEffect(() => {
    // Fetch the inital Blogposts data
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div className="w-full h-full flex flex-col gap-y-1 ">
      <Header/>
      <Blogs/>
      <Paginaton/>
  </div>
  );
}
