import React from 'react'
import Navbar from './Navbar'

import Cards from './Cards'
import {Link} from "react-router-dom"
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
const Course = () => {
 const[book,setBook]=useState([]);
 useEffect(()=>{
  const getBook=async()=>{
    try {
      const res= await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.log(error);
      console.log(error);
      
      
    }
  }
  getBook();
 },[])
  
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>We are delighter to have you <span className='text-pink-500'>here</span></h1>
      <p className='my-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio dolores maxime ea, temporibus eaque corporis quasi quia dicta natus illum, voluptas provident. Ducimus, accusantium nemo est quae ipsam ea!
      Temporibus porro accusamus facilis dolorum ut ad, corporis non odit doloribus inventore cum esse fugiat voluptates in incidunt natus nisi eius error, quaerat nesciunt quo itaque tenetur ab distinctio. Temporibus!</p>
      <Link to="/">
          <button className='text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-900 duration-200'>Back</button>
      </Link>
      <div className='my-10 text-green-400'>Scroll Down to See the books</div>
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
     {
      book.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
     }
     </div>
     
    </div>
  )
}

export default Course
