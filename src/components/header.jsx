import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaEdit, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const handleClick = () => { 
    setToggle(!toggle)
    // console.log(toggle)
  }

  const handleProfile = () => { 
    // console.log("Profile clicked");
    setToggle(false)
  }

  return (
    <header className="flex w-full items-end justify-end pr-4 sticky top-0 bg-white border-gray-900 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col h-full items-center justify-between grow lg:flex-row lg:px-6">
        
        <div className={"flex items-center w-full gap-4 px-5 py-4 lg:flex shadow-theme-md justify-end lg:px-0 lg:shadow-none"}>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ram Sthapit
          </h1>
          <button className='flex items-center' onClick={() => handleClick()}>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 border-gray-200 rounded-3xl dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border">
              <FaUser />
            </div>
            {toggle ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
      {toggle &&
        <div className='fixed top-20 right-5 z-50 w-40 bg-white p-3 border-gray-500 rounded-md shadow-md'>
          <ul className='flex flex-col text-xl'>
            <li onClick={handleProfile} className='flex gap-3 items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
              <FaUser /> Profile
            </li> 
            <li onClick={handleProfile} className='flex gap-3 items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
              <FaEdit /> Edit
            </li> 
            <li onClick={handleProfile} className='flex gap-3 items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white border-t-2'>
              <FaSignOutAlt /> Sign out
            </li> 
          </ul>
        </div>
      }
    </header>
  )
}

export default Header