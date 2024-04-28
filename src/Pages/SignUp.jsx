import { useForm } from "react-hook-form";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/FirebaseProvider";
import toast from "react-hot-toast";


const Signup = () => {
 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const { createUser } = useContext(AuthContext);
 
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



const onSubmit = (data) => {console.log(data)
    const { UserName, Email, password, confirmPassword, photoURL } = data;
    if (password !== confirmPassword) {
        alert("Password does not match");
        return;
    }
    createUser(Email, password)
        .then((result) => {
        console.log(result);
        toast.success("User created successfully");
        })
        .catch((err) => {
        console.log(err);
        toast.error(err.message);
        });
}
  
  return (
    <div className="flex justify-center items-center mt-10 ">
      
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-4 border-slate-500 my-2">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input 
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              {...register("UserName", { required: true }) } 
              
              className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-indigo-600"
            />
              {errors.UserName && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              {...register("Email", { required: true }) } 
              
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
              {errors.Email && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block text-gray-600">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="Photo URL"
             { ...register("photoURL")}

              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
           
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type={showPassword?"text":"password"}
              name="password"
              id="password"
              placeholder="Password"
                {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
            <span className="absolute top-1/2 left-[90%]" onClick={()=>setShowPassword(!showPassword)}>
              {showPassword?<FaEyeSlash/>:<FaEye/>}
            </span>
            {errors.password && <span className="text-red-600">Password is required</span>}
          </div>


          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword?"text":"password"}
              name="confirm-password"
              id="confirm-password"
              placeholder="repeat your Password"
                {...register("confirmPassword", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
            <span className="absolute top-1/2 left-[90%]" 
            onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
               {showConfirmPassword?<FaEyeSlash/>:<FaEye/>}
            </span>
            {errors.confirmPassword && <span className="text-red-600">Password confirmation is required</span>}
          </div>


          <button
            type="submit"
            className="block w-full p-3 text-center rounded-lg text-white bg-gray-800 "
          >
            Sign Up
          </button>
          <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link to="/login" className="underline text-gray-600">
            Sign in
          </Link>
        </p>
        </form>
      </div>
     
    </div>
  );
};

export default Signup;
