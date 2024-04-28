import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import UseAuth from "../hooks/UseAuth";


const Signup = () => {
  const { createUser,updateUserProfile } = UseAuth()
   //navigation
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state || "/";
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    console.log(data);
    // setRegisterError('');
    const { UserName, Email, password, photoURL, confirmPassword } = data;
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!regex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters");
      return;
    }
    createUser(Email, password)
      .then(() => {
        updateUserProfile(UserName, photoURL)
        .then(()=>{
          toast.success("Account created successfully");
        
          navigate(from);
        
        })
        
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  
  
  return (
    <div className="flex justify-center items-center mt-10">
     
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
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
              
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
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
            className="block w-full p-3 text-center rounded-lg text-white bg-gray-800 hover:bg-gray-900"
          >
            Sign Up
          </button>
          <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link to="/login" className="underline text-slate-700">
            Sign in
          </Link>
        </p>
        </form>
      </div>
     
    </div>
  );
};

export default Signup;
