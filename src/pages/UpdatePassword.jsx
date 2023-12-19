import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
const UpdatePassword = () => {
    const Dispatch = useDispatch();
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:""
    })
    const location = useLocation();
    const {password,confirmPassword}=formData;
    const {loading} = useSelector((state)=>state.auth);
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const handleOnChange = (e)=>{
        setFormData((prev)=>(
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }
    const token = location.pathname.split('/').at(-1);
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        Dispatch(resetPassword(password,confirmPassword,token))
    }
  return (
    <div className='text-white'>
        {
            loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Choose new Password</h1>
                    <p>Almost done. Enter your new password and youre all set.</p>
                    <form onSubmit={handleOnSubmit}>
                        <label>
                            <p>New Password</p>
                            <input 
                            type={showPassword ? "text" : "password"}
                            required
                            name='password'
                            value={password}
                            onChange={handleOnChange} 
                            className='text-black'
                             />
                        </label>
                        <span 
                        onClick={()=>setShowPassword((prev)=>!prev)}>
                            {
                                showPassword ? <FaEyeSlash fontSize={24} /> : <IoEyeSharp fontSize={24} />
                            }
                        </span>
                        <label>
                            <p>Confirm New Password</p>
                            <input 
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                             />
                        </label>
                        <span 
                        onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                            {
                                showConfirmPassword ? <FaEyeSlash fontSize={24} /> : <IoEyeSharp fontSize={24} />
                            }
                        </span>
                        <button type='submit'>
                            Reset Password
                        </button>
                    </form>
                    <div>
                        <Link to="/login">
                            Back to Login
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}
export default UpdatePassword
