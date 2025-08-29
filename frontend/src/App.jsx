import React from "react"
import Home from "./home/Home"
import { Routes,Route } from 'react-router-dom'
import Course from "./components/Course"
import Courses from "./Courses/Courses"
import Signup from "./components/Signup"
import Contact from "./components/Conatct"


function App() {
 

  return (
   
    <>
    
   {/* <Home/> */}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/contact" element={<Contact/>}/>
   </Routes>
    


   
   
    </>
  
   
  )
}

export default App
