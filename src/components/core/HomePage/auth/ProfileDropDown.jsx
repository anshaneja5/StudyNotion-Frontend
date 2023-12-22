import React, { useState } from 'react'
import CTAButton from '../Button'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logout} from "../../../../services/operations/authAPI"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click,setClick]=useState(false);
  return (
    <div className='relative transition-all duration-200'>
      <div className='flex items-center transition-all duration-200' onClick={() => setClick(!click)}>
        <img src={JSON.parse(localStorage.user).image} height={40} width={40} className='rounded-full'/>
        <IoIosArrowDropdownCircle fill='white'/>
      </div>
      <div  className={`absolute bg-richblack-400 top-[120%] p-3 -left-[80%] rounded-lg  ${click ? 'block' : 'hidden'} `} >
          <div className=" text-xl cursor-pointer hover:bg-richblack-50 transition-all duration-200 "><h1>Dashboard</h1></div>
          <div className=" text-xl cursor-pointer hover:bg-richblack-50 transition-all duration-200 "><Link to={"/"} onClick={()=>dispatch(logout(navigate))}><h1>Logout</h1></Link></div>
      </div>
    </div>
  )
}
export default ProfileDropDown






{/*  <div className='flex gap-5'>
      <div onClick={()=>dispatch(logout(navigate))}>
      <button className='yellowButton'>LogOut</button>
      </div>
      <div className='relative'>
        <div className='flex items-center space-x-2 group'>
          <img src={JSON.parse(localStorage.user).image} height={40} width={40} className='rounded-full'/>
          <IoIosArrowDropdownCircle fill='white'/>
        </div>
        <div className='flex flex-col bg-richblack-500 absolute top-[120%] opacity-0 group-hover:opacity-100'>
          <div className='hover:bg-richblack-200'>
            <h1>Dashboard</h1>
            <h1>Logout</h1>
          </div>
        </div>
      </div>
</div>  */}