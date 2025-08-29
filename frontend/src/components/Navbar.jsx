import React, { useEffect, useState } from 'react'
import Login from './Login'
import {Link} from "react-router-dom"
import { useAuth } from '../context/AuthProvider'
import Logout from './Logout'

const Navbar = () => {

const [authUser,setAuthUser]=useAuth() ;




  const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
  const element=document.documentElement;
  useEffect(() => {
  if (theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}, [theme]); // ✅ add theme here




  const[sticky,setsticky]=useState(false)
useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>0){
      setsticky(true)
    }
    else{
      setsticky(false);
    }
  }
  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[]);
  const navItems = (<>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/course">Course</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <a>About</a>
    </li>
  </>)
  return (
<div
  className={`navbar fixed top-0 left-0 w-full z-50 h-16 
    shadow-sm transition-colors duration-300 ease-in-out 
    ${sticky ? "bg-base-200 shadow-md" : "bg-base-100"}`}
>




      <div
  className={`navbar bg-base-100 shadow-sm 
    ${sticky ? "fixed top-0 left-0 w-full z-50 shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}
>

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100
         rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-x2 bold cursor-pointer">
  bookStore
</Link>

        </div>
        <div className="navbar-end space-x-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

              {navItems}
            </ul>
          </div>
          <div className="hidden md:block">
            <label className="input input-bordered-none flex items-center gap-2">
            <input type="text " className="grow outline-none" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
          </div>
  


          {
            authUser?(<Logout/>

            ):(

          <div >
            <a className="btn bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
           <Login className="hidden">

           </Login>
            
            
          </div>)
}
        </div>
      </div>
    </div>
  )
}

export default Navbar
