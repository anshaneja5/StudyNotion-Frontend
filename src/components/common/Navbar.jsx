import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { matchPath } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CTAButton from "../core/HomePage/Button"
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropDown from '../core/HomePage/auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { useState } from 'react'
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
          });
        AOS.refresh();
    },[])
    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {totalItems} = useSelector((state)=>state.cart);
    const [subLinks,setSubLinks]= useState([]);
    const [click,setClick]=useState(false)
    const fetchSublinks = async()=>{
        try {
            const result = await apiConnector("GET",categories.CATEGORIES_API)
            setSubLinks(result.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect( ()=>{
        fetchSublinks();
    },[])
    const location = useLocation(); 
    // function to match the route and current path used in navbar to make the list item yellow when you are on it
    const matchRoute = (route)=>{
        {/*will return null if not match */}
        return matchPath({path:route},location.pathname);   
    }
    
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-[96%] md:w-11/12 max-w-maxContent items-center justify-between'>
            {/* logo added */}
            <Link to="/">
                <img src={logo} width={160} height={42}/>
            </Link>
            {/* adding navlinks */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        // {/*use this bracket is you want to avoid return statement*/}
                        NavbarLinks.map((link,i)=>(   
                           <li key={i}>
                                {
                                    link.title ==="Catalog" ? (
                                    <div className='flex items-center gap-x-1 group relative'>
                                        <p>{link.title}</p>
                                        <FaArrowDown />
                                        <div className='invisible absolute left-[50%] top-[50%] z-10 flex flex-col rounded-md bg-richblack-5 p-4 transition-all duration-200 text-richblack-900 group-hover:visible lg:w-[300px] translate-x-[-50%] translate-y-[20%] ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-[1.65em]'>
                                            {
                                                subLinks.length ? (
                                                    subLinks.map((e,i)=>{
                                                        return (
                                                            <Link to={`/catalog/${e.name.split(" ").join("-").toLowerCase()}`} key={i} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">
                                                               <p> {e.name}</p>
                                                            </Link>
                                                        )
                                                })) : (<div>Hello, nothing here</div>)
                                            }
                                            <div className='absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5'></div>
                                        </div>
                                        
                                    </div>):(
                                        <div>
                                            <Link to={link?.path} className='hidden md:block'>
                                            <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-ritchblack-25"}`}>{link?.title}</p>
                                            </Link>
                                    
                                            {/* {
                                                click && <button className='text-black bg-yellow-50 md:hidden block'>Click Me</button>
                                            } */}
                                        </div>
                                    )

                                }
                           </li>
                        ))
                    }
                </ul>
            </nav>
            {/* might be login signup or dashboard */}
            <div className='flex gap-x-4 items-center'>
                {
                    user && user?.accountType !="Instructor" && (
                        <Link to={"/dashboard/cart"} className='relative'>
                            {/* styling left here */}
                            <FaShoppingCart />
                            {
                                totalItems > 0 && 
                                <span>{totalItems}</span>
                            }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/signup"}>
                            <button className='yellowButton'>Sign Up</button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/login"}>
                            <button className='yellowButton'>Log In</button>
                        </Link>
                    )
                }
                { 
                    token !==null && <ProfileDropDown></ProfileDropDown>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar