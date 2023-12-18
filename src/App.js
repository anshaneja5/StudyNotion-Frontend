import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter relative">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App