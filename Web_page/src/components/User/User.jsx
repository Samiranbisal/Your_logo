import React from 'react'
import {useParams} from "react-router-dom"

function User() {
    const {userId} = useParams();
  return (
    <div>
      <div className='text-7xl text-center my-20 font-bold'>User : {userId} </div>
    </div>
  )
}

export default User
