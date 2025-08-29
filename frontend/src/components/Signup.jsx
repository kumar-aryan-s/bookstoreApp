import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
function Signup() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname||"/";
    
        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
    

    const onSubmit = async (data) => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
          toast.success('Successfully Signed Up!');
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
        
        
      })
      .catch((err)=>{
        if(err.response){
         toast.error("Error "+err.response.data.message);
        }
      })
    }



  return (
    
    <div className='flex h-screen items-center justify-center border shadow-md bg-gray'>
          <div id="my_modal_3" className="border-2 shadow-2xl
          p-5 rounded-lg bg-blend-soft-light ">
      <div className="w-[100px]md:w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
          {/* Close button */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"></button>
        
        <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">SignUp</h3>
        <Link to="/" className="text-xl font-bold text-white-600 hover:text-black">✕</Link>
        </div>

                <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input type="text" placeholder='Enter your name'className='w-80 px-3 border rounded-md outline-none py-1'{...register("fullname", { required: true })}/>
                        <br />
            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email" placeholder='Enter your email'className='w-80 px-3 border rounded-md outline-none py-1'{...register("email", { required: true })}/>
                        <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
         <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input type="password" placeholder='Enter your password'className='w-80 px-3 border rounded-md outline-none py-1'{...register("password", { required: true })}/>
                        <br />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='flex justify-around mt-4 '>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
           <p>SignUp </p> 
        
        </button>
        
        <p>Have an Account? <Link to="/"  className="underline text-blue-500 cursor-pointer">Home</Link></p>
      </div>
        
        </form>
      </div>
      
      
    </div>
    </div>
  )
}

export default Signup
