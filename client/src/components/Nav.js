import React from 'react'
import Menu from './Menu'

const Nav = () => {
  return (
    <nav className="w-full flex items-center h-[100px] border-red-500 border " >
      <img src="/logo.jpg" alt="" className='w-[100px] mt-[2px] ml-[40px]'/>
      <div className='hidden sm:inline-block '>
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
      </div>
    </nav>
  )
}

export default Nav