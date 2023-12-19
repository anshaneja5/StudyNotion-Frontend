import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
const ForgotPassword = () => {
    const [emailSent,setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const loading = useSelector((state)=>state.value);
    const dispatch = useDispatch();
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }
  return (
    <div className='text-white flex flex-col justify-center items-center w-11/12 max-w-[500px] h-[100vh]'>
        {
            loading ? (<div>Loading ... </div>) : 
            (<div>
                <h1 className='text-3xl'>{
                        !emailSent ? "Reset Your Password" : "Check your Email"
                    } 
                </h1>
                <p className=''>
                    {
                        !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                        : `We have sent the reset email to ${email}`
                    }
                </p>
                <form onSubmit={handleOnSubmit} className='flex flex-col'>
                    {
                        !emailSent && (
                            <label>
                                <p>Email Address</p>
                                <input type="email" 
                                required
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder='Enter your email address'
                                className='bg-richblack-600 py-3 px-2 rounded-lg w-[100%]'
                                />
                            </label>
                        )
                    }
                    <button className='yellowButton' type='submit'>
                        {
                            !emailSent ? "Submit" : "Resend Email"
                        }
                    </button>
                </form>
                <div>
                    <Link to="/login">
                        <p>Back to login</p>
                    </Link>
                </div>
            </div>)
        }
    </div>
  )
}

export default ForgotPassword
