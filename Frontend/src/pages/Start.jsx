import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex justify-between flex-col bg-red-400'>
      <img className='w-16  ml-4 mt-8 font-light' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Ride_logo.png" alt="" />
          <div className='bg-white px-2 py-4'>
            <h2 className='text-2xl font-bold'>Get Started with Rides</h2>
            <Link className='flex items-center justify-center bg-black text-white py-3 rounded mt-5' to='/login'>Continue</Link>
          </div>
      </div>
    </div>
  )
}

export default Start