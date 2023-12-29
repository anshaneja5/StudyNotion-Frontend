import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './components/core/Dashboard/MyProfile'
import PrivateRoute from './components/core/HomePage/auth/PrivateRoute'
import Error from "./pages/Error"
import Dashboard from './pages/Dashboard'
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses'
import { ACCOUNT_TYPE } from './utils/constants'
import AddCourse from './components/core/Dashboard/AddCourse/index'
import { useSelector } from 'react-redux'
function App() {
  const {user} = useSelector((state)=>state.profile)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter relative">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/update-password/:id' element={<UpdatePassword/>}></Route>
        <Route path='/verify-email' element={<VerifyEmail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          <Route path='/dashboard/my-profile' element={<MyProfile/>}></Route>
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
               <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses/>}></Route>
              </>
            )
          }
          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
               <Route path='/dashboard/add-course' element={<AddCourse/>}></Route>
              </>
            )
          }
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App