import React from 'react'

const Navbar = () => {
  return (
   <div className='flex bg-slate-800 h-16 px-6 items-center'>
        <h1 className='text-3xl font-bold text-green-500'>🧑‍💻 EMPLOYEE MANAGEMENT SYSTEM</h1>
        <div className='space-x-4 ml-auto '>
          <a className='hover:text-blue-400' href="/">Home</a>
          <a className='hover:text-blue-400' href="/">Profile</a>
          <a className='hover:text-blue-400' href="/">Contact</a>
        </div>
      </div>
  )
}

export default Navbar