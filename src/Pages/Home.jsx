import React from 'react'
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Paginaton from "../components/Paginaton";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-1 ">
      <Header/>
      <Blogs/>
      <Paginaton/>
  </div>
  );
}

export default Home
