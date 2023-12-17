import React from 'react'
import { useEffect } from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import { HighlightText } from '../components/core/HomePage/HighlightText'
import { CTAButton } from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import { CodeBlocks } from '../components/core/HomePage/CodeBlocks'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
        AOS.refresh();
      }, []);
  return (
    <div className='relative mx-auto w-[11/12] items-center flex flex-col text-white justify-between max-w-[1260px]'>
        {/* section 1 */}
        <div>
            <Link to="/signup">
                <div data-aos="fade-left" className='group mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit mt-16 p-1'>
                    <div className='flex items-center gap-2 rounded-full py-[5px] px-[15px] group-hover:bg-richblack-900'>
                        <p>Become An Instructor</p>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
            </Link>
            <div className='text-center font-semibold text-4xl mt-7'>
                Empower Your Future with 
                <HighlightText text={"Coding Skills"}></HighlightText>
            </div>
            <div className='text-center w-[90%] mx-auto text-richblack-200 mt-5 font-semibold text-lg'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
            <div className='flex gap-7 mt-8 justify-center'>
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
            </div>
            <div data-aos="flip-right" className='shadow-blue-200 my-10 max-w-[85%] mx-auto'>
                <video muted loop autoPlay>
                     <source src={Banner} type='video/mp4'></source>
                </video>
            </div>
            {/*  code section 1  */}
            <div className='mx-auto max-w-[85%]'>
                <CodeBlocks
                    position={"lg:flex-row flex-col"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your 
                            <HighlightText text={"coding potential "}></HighlightText>
                            with our Online Course
                        </div>
                    }
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={
                        {
                            btntext:"Try it Yourself",
                            linkto:"/signup",
                            active:true,
                        }
                    }
                    ctabtn2={
                        {
                            btntext:"Learn More",
                            linkto:"/login",
                            active:false,
                        }
                    }
                    codeColor={"text-yellow-25"}
                    codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                />
            </div>
            {/*  code section 2  */}
            <div className='mx-auto max-w-[85%]'>
                <CodeBlocks
                    position={"lg:flex-row-reverse flex-col"}
                    heading={
                        <div data-aos="fade-right" className='text-4xl font-semibold'>
                            Start
                            <HighlightText text={"coding in  "}></HighlightText>
                            <br></br>
                            <HighlightText text={"seconds"}></HighlightText>
                        </div>
                    }
                    subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    ctabtn1={
                        {
                            btntext:"Continue Lesson",
                            linkto:"/signup",
                            active:true,
                        }
                    }
                    ctabtn2={
                        {
                            btntext:"Learn More",
                            linkto:"/signup",
                            active:false,
                        }
                    }
                    codeColor={"text-yellow-25"}
                    codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                />
            </div>
        </div>
        {/* section 2 */}
        <div className='bg-pure-grey-5 text-richblack-700'>

        </div>
        {/* section 3 */}

        {/* section 4 */}
    </div>
  )
}
