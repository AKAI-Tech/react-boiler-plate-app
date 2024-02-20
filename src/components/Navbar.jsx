import React from 'react'

const Navbar = () => {
  return (
    <div className= 'flex item-center justify-between p-4 absolute w-full z-[100 ]'>
        <h1 className= 'text-4xl cursor-pointer'>My App</h1>
        <div>
            <button className= 'cursor-pointer px-5'>Sign in</button>
            <button className= 'cursor-pointer px-5'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar