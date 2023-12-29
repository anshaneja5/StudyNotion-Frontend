import React from 'react'
import { useSelector } from 'react-redux'

const RenderCartCourses = () => {
    const {cart} = useSelector((state)=>state.cart)
  return (
    <div>
        {
            cart.map((course,index)=>{
                <div>
                    <div>
                        <img src={course?.thumbnail} />
                        <div>
                            <p>{course?.courseName}</p>
                            <p>{course?.category?.name}</p>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default RenderCartCourses