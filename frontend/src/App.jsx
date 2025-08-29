import React from "react"
import Home from "./home/Home"
import { Routes,Route } from 'react-router-dom'
import Course from "./components/Course"
import Courses from "./Courses/Courses"
import Signup from "./components/Signup"
import Contact from "./components/Conatct"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"
import { Navigate } from "react-router-dom"



function App() {
 const [authUser,setAuthUser]=useAuth()
console.log(authUser);

  return (
   
    <>
    
   {/* <Home/> */}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>   }/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/contact" element={<Contact/>}/>
      <Route path="/course/signup" element={<Signup/>}/>

   </Routes>
   <Toaster/>
    


   
   
    </>
  
   
  )
}

export default App
