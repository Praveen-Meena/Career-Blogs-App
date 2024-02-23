import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from "../components/Blogs"
import Header from "../components/Header"
import Pagination from "../components/Paginaton"

const CategoryPage = () => {
    const navigation = useNavigate(); 
    const location = useLocation(); 
    const category = location.pathname.split("/").at(-1); 
    return (
        <div>
            <Header/>
            <div>
                <button
                onClick={()=> navigation(-1)}>
                    back
                </button>
                <h2>
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    );
}

export default CategoryPage
